import type { APIRoute } from 'astro';
import { executeQuery, getOne } from '../../../lib/db';
import { sendOrderStatusEmail } from '../../../lib/email';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const { orderNumber, status } = body;

        if (!orderNumber || !status) {
            return new Response(
                JSON.stringify({ error: 'Order number and status are required' }),
                { status: 400 }
            );
        }

        const validStatuses = ['pending', 'processing', 'dispatched', 'completed', 'cancelled'];
        if (!validStatuses.includes(status.toLowerCase())) {
            return new Response(
                JSON.stringify({ error: 'Invalid status. Valid statuses are: ' + validStatuses.join(', ') }),
                { status: 400 }
            );
        }

        // Get the order first to get customer details
        const order = await getOne(
            `SELECT * FROM orders WHERE order_number = ?`,
            [orderNumber]
        );

        if (!order) {
            return new Response(
                JSON.stringify({ error: 'Order not found' }),
                { status: 404 }
            );
        }

        // Update the order status
        await executeQuery(
            `UPDATE orders SET status = ? WHERE order_number = ?`,
            [status.toLowerCase(), orderNumber]
        );

        // Send email notification to customer
        try {
            const items = typeof order.items === 'string' ? JSON.parse(order.items as string) : order.items;
            
            await sendOrderStatusEmail({
                orderNumber: order.order_number as string,
                customerName: order.customer_name as string,
                customerEmail: order.customer_email as string,
                status: status.toLowerCase(),
                items: items,
                total: order.total as number,
                shippingAddress: `${order.shipping_address}, ${order.shipping_city} ${order.shipping_postal_code}`,
            });
        } catch (emailError) {
            console.error('Failed to send status update email:', emailError);
            // Don't fail the request if email fails
        }

        return new Response(
            JSON.stringify({ 
                success: true, 
                message: `Order status updated to ${status}`,
                orderNumber,
                newStatus: status.toLowerCase()
            }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Error updating order status:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to update order status' }),
            { status: 500 }
        );
    }
};
