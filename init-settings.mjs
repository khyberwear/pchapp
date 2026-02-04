import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Error: PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in .env');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function initSettings() {
    console.log('Initializing site settings table...');

    // 1. Create the table using an SQL string (via standard query if possible, 
    // but Supabase JS doesn't have a 'query' method. We usually do this via SQL editor).
    // However, we can try to check if it exists by trying to select from it.

    const { error: checkError } = await supabase.from('site_settings').select('key').limit(1);

    if (checkError && checkError.code === '42P01') {
        console.log('Table "site_settings" does not exist. Please run the SQL in your Supabase SQL Editor:');
        console.log(`
CREATE TABLE IF NOT EXISTS public.site_settings (
    key text PRIMARY KEY,
    value text NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Public read
CREATE POLICY "Allow public read" ON public.site_settings FOR SELECT USING (true);

-- Service role update
CREATE POLICY "Allow service role update" ON public.site_settings FOR ALL USING (true);
        `);
        return;
    }

    // 2. Insert default values
    const defaultSettings = [
        { key: 'favicon_url', value: '/favicon.png' },
        { key: 'phone_number', value: '+92 300 123 4567' },
        { key: 'email_address', value: 'khyberwearstore@gmail.com' },
        { key: 'physical_address', value: 'Qissa Khwani Bazaar, Peshawar, Pakistan' },
        { key: 'facebook_url', value: 'https://www.facebook.com/' },
        { key: 'instagram_url', value: 'https://www.instagram.com/' },
        { key: 'whatsapp_number', value: '923001234567' }
    ];

    console.log('Inserting default values...');
    for (const setting of defaultSettings) {
        const { error } = await supabase.from('site_settings').upsert(setting);
        if (error) {
            console.error(\`Error inserting \${setting.key}:\`, error.message);
        } else {
            console.log(\`✓ \${setting.key} initialized\`);
        }
    }

    console.log('Initialization complete!');
}

initSettings();
