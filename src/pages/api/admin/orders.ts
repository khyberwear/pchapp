import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/db';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
    try {
        // Get auth header (basic check - in production use proper auth)
        // const authHeader = request.headers.get('authorization');

        // Simple auth check - could be enhanced
        // For now, we'll allow access if user is logged in via localStorage
        // This is checked on the client side before calling this API

        // Fetch all orders from database, newest first
        const { data: orders, error } = await supabase
            .from('orders')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(100);

        if (error) {
            throw error;
        }

        if (!orders) {
            return new Response(
                JSON.stringify({ orders: [] }),
                { status: 200 }
            );
        }

        // Parse items JSON for each order
        // Supabase might return items as string (if stored as text) or JSON object (if stored as JSONB)
        // detailed in db schema it is TEXT, so we likely need to parse if it comes back as string.
        // However, if the user put JSON in, Supabase client might auto-parse JSON columns but 'items' is defined as TEXT in original SQL.
        // We will safely handle both.

        const ordersWithParsedItems = orders.map((order: any) => {
            let parsedItems = order.items;
            if (typeof order.items === 'string') {
                try {
                    parsedItems = JSON.parse(order.items);
                } catch (e) {
                    console.error('Failed to parse items for order', order.order_number, e);
                    parsedItems = []; // value fallback
                }
            }

            return {
                ...order,
                items: parsedItems,
                date: order.created_at,
            };
        });

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
