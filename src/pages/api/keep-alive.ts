import type { APIRoute } from 'astro';
import { supabase } from '../../lib/db';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
    // Basic security check: Only allow if triggered by Vercel Cron or manual local test
    const authHeader = request.headers.get('Authorization');
    const isVercelCron = request.headers.get('x-vercel-cron') === '1';
    const isLocal = process.env.NODE_ENV === 'development';

    if (!isVercelCron && !isLocal) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    try {
        // Perform a simple query to keep the Supabase project active
        const { data, error } = await supabase
            .from('products')
            .select('id')
            .limit(1);

        if (error) throw error;

        return new Response(
            JSON.stringify({
                success: true,
                message: 'Supabase heartbeat sent successfully',
                timestamp: new Date().toISOString()
            }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    } catch (error) {
        console.error('Keep-alive error:', error);
        return new Response(
            JSON.stringify({
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error'
            }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }
};
