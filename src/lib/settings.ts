import { supabase, supabaseAdmin } from './db';

export interface SiteSettings {
    favicon_url: string;
    phone_number: string;
    email_address: string;
    physical_address: string;
    facebook_url: string;
    instagram_url: string;
    whatsapp_number: string;
}

export const DEFAULT_SETTINGS: SiteSettings = {
    favicon_url: '/favicon.png',
    phone_number: '+92 300 1234567',
    email_address: 'info@peshawarichappal.store',
    physical_address: 'Qissa Khwani Bazaar, Peshawar, Pakistan',
    facebook_url: 'https://www.facebook.com/',
    instagram_url: 'https://www.instagram.com/',
    whatsapp_number: '923001234567',
};

export async function getSiteSettings(): Promise<SiteSettings> {
    try {
        if (!supabase) return DEFAULT_SETTINGS;

        const { data, error } = await supabase
            .from('site_settings')
            .select('key, value');

        if (error || !data || data.length === 0) {
            return DEFAULT_SETTINGS;
        }

        const settings = { ...DEFAULT_SETTINGS };
        data.forEach((item: { key: string; value: string }) => {
            if (item.key in settings) {
                (settings as any)[item.key] = item.value;
            }
        });

        return settings;
    } catch (e) {
        console.error('Error fetching site settings:', e);
        return DEFAULT_SETTINGS;
    }
}

export async function updateSiteSetting(key: string, value: string) {
    const { error } = await supabaseAdmin
        .from('site_settings')
        .upsert({ key, value, updated_at: new Date().toISOString() });

    if (error) throw error;
}
