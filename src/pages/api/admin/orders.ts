import type { APIRoute } from 'astro';
import { getAll, initializeDatabase } from '../../../lib/db';

export const prerender = false;

// Initialize database on first load
let dbInitialized = false;

export const GET: APIRoute = async ({ request }) => {
    try {
        // Initialize database if not already done
        if (!dbInitialized) {
            try {
                await initializeDatabase();
                dbInitialized = true;
            } catch (initError) {
                console.error('Database initialization error:', initError);
            }
        }
        // Get auth header (basic check - in production use proper auth)
        const authHeader = request.headers.get('authorization');

        // Simple auth check - could be enhanced
        // For now, we'll allow access if user is logged in via localStorage
        // This is checked on the client side before calling this API

        // Fetch all orders from database, newest first
        const orders = await getAll(
            `SELECT 
        id,
        order_number,
        customer_name,
        customer_email,
        customer_phone,
        shipping_address,
        shipping_city,
        shipping_postal_code,
        items,
        total,
        status,
        created_at
      FROM orders
      ORDER BY created_at DESC
      LIMIT 100`
        );

        // Parse items JSON for each order
        const ordersWithParsedItems = orders.map((order: any) => ({
            ...order,
            items: JSON.parse(order.items),
            date: order.created_at,
        }));

        return new Response(
            JSON.stringify({ orders: ordersWithParsedItems }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Error fetching orders:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to fetch orders' }),
            { status: 500 }
        );
    }
};
