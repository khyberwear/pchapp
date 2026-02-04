import type { APIRoute } from 'astro';
import { getSiteSettings, updateSiteSetting } from '../../../lib/settings';

export const prerender = false;

export const GET: APIRoute = async () => {
    try {
        const settings = await getSiteSettings();
        return new Response(JSON.stringify({ success: true, settings }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch settings' }), { status: 500 });
    }
};

export const POST: APIRoute = async ({ request }) => {
    try {
        const { settings } = await request.json();

        if (!settings) {
            return new Response(JSON.stringify({ error: 'No settings provided' }), { status: 400 });
        }

        // Update each setting provided
        const promises = Object.entries(settings).map(([key, value]) =>
            updateSiteSetting(key, value as string)
        );

        await Promise.all(promises);

        return new Response(JSON.stringify({ success: true, message: 'Settings updated' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('Error updating settings:', error);
        return new Response(JSON.stringify({ error: 'Failed to update settings' }), { status: 500 });
    }
};
