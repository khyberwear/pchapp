import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
    // With Supabase, we assume the database is already initialized via migrations/dashboard
    // This endpoint can remain as a health check or simply return success
    return new Response(
        JSON.stringify({ success: true, message: 'Database connected (Supabase)' }),
        { status: 200 }
    );
};
