import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';
import { getSupabaseServerClient } from '@/lib/supabase';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Server-side validation using Zod
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors: Record<string, string[]> = {};
      validationResult.error.issues.forEach((err) => {
        const fieldName = err.path[0] as string;
        if (!fieldErrors[fieldName]) fieldErrors[fieldName] = [];
        fieldErrors[fieldName].push(err.message);
      });

      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed. Please check your inputs.',
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message, website_hp } = validationResult.data;

    // 2. Anti-Spam Honeypot Check (bots usually fill hidden fields)
    if (website_hp && website_hp.trim().length > 0) {
      console.warn(`[Anti-Spam] Honeypot triggered by submission from: ${email}`);
      // Return fake success to confuse spam bots without saving to DB
      return NextResponse.json({
        success: true,
        message: "Message sent successfully! I'll get back to you as soon as possible.",
      });
    }

    // 3. Email delivery is required; do not report success without it.
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || 'umarasim841@gmail.com';
    const senderEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

    if (!resendApiKey) {
      return NextResponse.json(
        {
          success: false,
          message: 'Email delivery is not configured. Please contact me directly at umarasim841@gmail.com.',
        },
        { status: 503 }
      );
    }

    try {
      const resend = new Resend(resendApiKey);
      const { error: resendError } = await resend.emails.send({
        from: `Portfolio Contact Form <${senderEmail}>`,
        to: [recipientEmail],
        replyTo: email,
        subject: `Portfolio Contact: ${subject}`,
        text: `New contact message from ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      });

      if (resendError) {
        console.error('[Resend Email Error]:', resendError);
        return NextResponse.json(
          {
            success: false,
            message: 'Email delivery failed. Please try again or contact me directly at umarasim841@gmail.com.',
          },
          { status: 502 }
        );
      }
    } catch (resendError) {
      console.error('[Resend Email Error]:', resendError);
      return NextResponse.json(
        {
          success: false,
          message: 'Email delivery failed. Please try again or contact me directly at umarasim841@gmail.com.',
        },
        { status: 502 }
      );
    }

    // 4. Save a copy in Supabase when database configuration is available.
    try {
      const supabase = getSupabaseServerClient();
      if (supabase) {
        const { error: dbError } = await supabase.from('contact_messages').insert([
          {
            name,
            email,
            subject,
            message,
          },
        ]);

        if (dbError) {
          console.error('[Supabase DB Error]:', dbError);
        }
      }
    } catch (dbError) {
      console.error('[Supabase DB Error]:', dbError);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully! I'll get back to you as soon as possible.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error('[Contact API Unexpected Error]:', err);
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong on the server. Please try again later.',
      },
      { status: 500 }
    );
  }
}
