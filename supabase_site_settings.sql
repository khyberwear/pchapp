-- Create Site Settings Table
CREATE TABLE IF NOT EXISTS public.site_settings (
    key text PRIMARY KEY,
    value text,
    updated_at timestamp with time zone DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Policies

-- Allow public read access (anyone can view site settings)
CREATE POLICY "Enable public read access" ON public.site_settings FOR SELECT USING (true);

-- Allow insert/update for service role only (or authenticated admins if you prefer)
-- Using service role key bypasses RLS, but it's good practice to have policies.
-- If you want to allow authenticated users to update settings via client-side code:
CREATE POLICY "Enable insert for authenticated users only" ON public.site_settings FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Enable update for authenticated users only" ON public.site_settings FOR UPDATE USING (auth.role() = 'authenticated');

-- Optional: Pre-populate with default settings if empty
INSERT INTO public.site_settings (key, value)
VALUES
    ('favicon_url', '/favicon.png'),
    ('phone_number', '+92 300 1234567'),
    ('email_address', 'info@peshawarichappal.store'),
    ('physical_address', 'Qissa Khwani Bazaar, Peshawar, Pakistan'),
    ('facebook_url', 'https://www.facebook.com/'),
    ('instagram_url', 'https://www.instagram.com/'),
    ('whatsapp_number', '923001234567')
ON CONFLICT (key) DO NOTHING;
