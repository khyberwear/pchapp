import type { APIRoute } from 'astro';
import { supabaseAdmin } from '../../lib/db';
import { sendAdminNotification, sendCustomerConfirmation } from '../../lib/email';

export const prerender = false;

// Force deployment update

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();

        // Generate order number
        const orderNumber = `PCH-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

        // Extract customer and order data
        const {
            customerName,
            customerEmail,
            customerPhone,
            shippingAddress,
            shippingCity,
            shippingPostalCode,
            shippingCountry,
            deliveryMethod,
            paymentMethod,
            orderNotes,
            items,
            total,
            subtotal,
            deliveryCost,
        } = data;

        // Validate required fields
        if (!customerName || !customerEmail || !shippingAddress || !items || !total) {
            return new Response(
                JSON.stringify({ error: 'Missing required fields' }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        // Save order to database
        // Storing extra details in shipping_address for now to avoid schema migration
        const fullShippingAddress = `${shippingAddress}\n${shippingCity}, ${shippingPostalCode}\n${shippingCountry}\nPhone: ${customerPhone}\nDelivery: ${deliveryMethod}\nPayment: ${paymentMethod}\nNotes: ${orderNotes}`;

        try {
            const { error: dbError } = await supabaseAdmin
                .from('orders')
                .insert([
                    {
                        order_number: orderNumber,
                        customer_name: customerName,
                        customer_email: customerEmail,
                        customer_phone: customerPhone || '',
                        shipping_address: fullShippingAddress,
                        shipping_city: shippingCity || '',
                        shipping_postal_code: shippingPostalCode || '',
                        items: items, // Pass directly as object for jsonb
                        total: total,
                        status: 'pending'
                    }
                ]);

            if (dbError) {
                console.error('Supabase Error:', dbError);
                throw new Error(dbError.message);
            }

        } catch (dbError) {
            console.error('Database insert exception:', dbError);
            return new Response(
                JSON.stringify({
                    error: 'Failed to save order to database',
                    details: dbError instanceof Error ? dbError.message : 'Unknown error'
                }),
                {
                    status: 500,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        // Prepare email data
        const emailData = {
            orderNumber,
            customerName,
            customerEmail,
            customerPhone,
            items: items.map((item: any) => ({
                title: item.title,
                quantity: item.quantity,
                price: item.price,
                color: item.color,
                size: item.size,
            })),
            total,
            subtotal,
            deliveryCost,
            deliveryMethod,
            paymentMethod,
            orderNotes,
            shippingAddress: `${shippingAddress}, ${shippingCity} ${shippingPostalCode}, ${shippingCountry}`,
        };

        // Send emails
        // We await them but catch errors so the response still goes through
        try {
            await sendAdminNotification(emailData);
            await sendCustomerConfirmation(emailData);
        } catch (emailError) {
            console.error('Email sending error:', emailError);
        }

        return new Response(
            JSON.stringify({
                success: true,
                orderNumber,
                message: 'Order placed successfully!',
            }),
            {
                status: 201,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    } catch (error) {
        console.error('Order creation error:', error);
        return new Response(
            JSON.stringify({
                error: 'Internal Server Error',
                details: error instanceof Error ? error.message : 'Unknown error',
                stack: error instanceof Error ? error.stack : undefined
            }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }
};
