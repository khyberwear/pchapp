import type { APIRoute } from 'astro';
import { initializeDatabase } from '../../lib/db';

export const prerender = false;

export const GET: APIRoute = async () => {
    try {
        await initializeDatabase();
        return new Response(
            JSON.stringify({ success: true, message: 'Database initialized' }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Database initialization error:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to initialize database' }),
            { status: 500 }
        );
    }
};
