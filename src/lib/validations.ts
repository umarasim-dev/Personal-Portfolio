import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(100, { message: 'Name cannot exceed 100 characters.' })
    .trim(),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address.' })
    .max(254, { message: 'Email cannot exceed 254 characters.' })
    .trim()
    .toLowerCase(),
  subject: z
    .string()
    .min(2, { message: 'Subject must be at least 2 characters.' })
    .max(200, { message: 'Subject cannot exceed 200 characters.' })
    .trim(),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters long.' })
    .max(5000, { message: 'Message cannot exceed 5000 characters.' })
    .trim(),
  // Honeypot field for anti-spam (must be empty)
  website_hp: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
