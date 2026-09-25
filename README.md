# Muhammad Umar Asim — Full-Stack Portfolio Website

A modern, production-ready, full-stack personal portfolio website for **Muhammad Umar Asim**, Frontend Web Developer & Graphic Designer.

Built with **Next.js 14 App Router**, **React**, **TypeScript**, **Tailwind CSS**, **Zod**, **Supabase PostgreSQL**, and deployable to **Vercel**.

---

## 🚀 Key Features

* **Frontend Web Developer Focus**: Showcases core skills (*HTML5, CSS3, Tailwind CSS, JavaScript, Bootstrap, React, Next.js, Figma*).
* **Graphic Design Gallery**: Dedicated visual showcase with category filtering (*Logos, YouTube Thumbnails, Banners, Flyers, Business Cards, CV Designs, Presentations*) and interactive Lightbox modal.
* **Full-Stack Contact Form**: Secure submission validated with Zod on both client and server sides, anti-spam honeypot protection, and direct insertion into Supabase PostgreSQL.
* **Optional Resend Email Integration**: Automatically emails notifications upon form submission if `RESEND_API_KEY` is provided.
* **Theme System**: Dark and Light mode toggling with system preference recognition.
* **Responsive & Accessible**: 100% responsive across 320px mobile to 4K desktop screens.

---

## 🗄️ Database Setup (Supabase PostgreSQL)

1. Create a free account on [Supabase](https://supabase.com/).
2. Create a new project.
3. In your Supabase Dashboard, go to **SQL Editor** and run the following script:

```sql
-- Create the contact_messages table
create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- Enable Row Level Security (RLS)
alter table public.contact_messages enable row level security;

-- Allow anonymous & server insertions
create policy "Allow server insert into contact_messages"
  on public.contact_messages
  for insert
  with check (true);
```

4. Retrieve your API keys from **Project Settings > API**:
   - `Project URL` -> `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public key` -> `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role secret key` -> `SUPABASE_SERVICE_ROLE_KEY`

---

## 🔑 Environment Variables Setup

Create a `.env.local` file in the root directory (copied from `.env.example`):

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key-here

# Optional Email Notification
RESEND_API_KEY=re_123456789_your_resend_api_key
CONTACT_EMAIL=contact@muhammadumarasim.dev

# Production URL
NEXT_PUBLIC_SITE_URL=https://your-portfolio.vercel.app
```

---

## 💻 Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:3000` in your browser.

---

## 🌐 Deploying to Vercel

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Muhammad Umar Asim Portfolio"
   git remote add origin https://github.com/YourUsername/portfolio.git
   git push -u origin main
   ```

2. **Import into Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/) and click **Add New Project**.
   - Import your GitHub repository.

3. **Configure Environment Variables in Vercel**:
   - Under **Environment Variables**, add:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `SUPABASE_SERVICE_ROLE_KEY`
     - `RESEND_API_KEY` (Optional)
     - `CONTACT_EMAIL` (Optional)

4. **Deploy**:
   - Click **Deploy**. Vercel will build and deploy the Next.js application automatically.

---

## 🧪 Testing Contact Form Flow

1. Fill out the Contact Form at the bottom of the page.
2. Click **Send Message**.
3. You will see a success message: `Message sent successfully! I'll get back to you as soon as possible.`
4. Log into your Supabase Dashboard > **Table Editor** > `contact_messages` to view the saved record.
