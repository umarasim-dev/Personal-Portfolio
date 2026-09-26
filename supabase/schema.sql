create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz not null default now()
);

do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'contact_messages_name_length_check'
      and conrelid = 'public.contact_messages'::regclass
  ) then
    alter table public.contact_messages
      add constraint contact_messages_name_length_check
      check (char_length(trim(name)) between 2 and 100) not valid;
  end if;

  if not exists (
    select 1 from pg_constraint
    where conname = 'contact_messages_email_length_check'
      and conrelid = 'public.contact_messages'::regclass
  ) then
    alter table public.contact_messages
      add constraint contact_messages_email_length_check
      check (char_length(email) between 1 and 254) not valid;
  end if;

  if not exists (
    select 1 from pg_constraint
    where conname = 'contact_messages_subject_length_check'
      and conrelid = 'public.contact_messages'::regclass
  ) then
    alter table public.contact_messages
      add constraint contact_messages_subject_length_check
      check (char_length(trim(subject)) between 2 and 200) not valid;
  end if;

  if not exists (
    select 1 from pg_constraint
    where conname = 'contact_messages_message_length_check'
      and conrelid = 'public.contact_messages'::regclass
  ) then
    alter table public.contact_messages
      add constraint contact_messages_message_length_check
      check (char_length(trim(message)) between 10 and 5000) not valid;
  end if;
end;
$$;

alter table public.contact_messages enable row level security;

revoke all on table public.contact_messages from anon, authenticated;
grant insert on table public.contact_messages to anon, authenticated;

drop policy if exists "Allow public contact submissions" on public.contact_messages;
create policy "Allow public contact submissions"
  on public.contact_messages
  for insert
  to anon, authenticated
  with check (true);