import type { APIRoute } from 'astro';
import { supabase } from '../../lib/db';

export const prerender = false;

export const GET: APIRoute = async () => {
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
