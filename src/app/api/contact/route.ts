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

    // 3. Insert into Supabase PostgreSQL Table 'contact_messages'
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
        // If DB insertion fails, throw error to be handled gracefully
        return NextResponse.json(
          {
            success: false,
            message: 'Unable to save your message to the database right now. Please try again.',
          },
          { status: 500 }
        );
      }
    } else {
      console.warn('[Contact API] Supabase environment variables not set. Form received locally.');
    }

    // 4. Optional Email Notification via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || 'contact@muhammadumarasim.dev';

    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: 'Portfolio Contact Form <onboarding@resend.dev>',
          to: [recipientEmail],
          subject: `Portfolio Contact: ${subject}`,
          html: `
            <h2>New Contact Message from Portfolio</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="background: #f4f4f4; padding: 12px; border-left: 4px solid #00f0ff;">
              ${message.replace(/\n/g, '<br/>')}
            </blockquote>
          `,
        });
      } catch (resendError) {
        // Log Resend error but do NOT fail the contact submission if DB saved it
        console.error('[Resend Email Warning]:', resendError);
      }
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
