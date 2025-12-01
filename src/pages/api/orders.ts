import type { APIRoute } from 'astro';
import { executeQuery } from '../../lib/db';
import { sendAdminNotification, sendCustomerConfirmation } from '../../lib/email';

export const prerender = false;

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
            items,
            total,
        } = data;

        // Validate required fields
        if (!customerName || !customerEmail || !shippingAddress || !items || !total) {
            return new Response(
                JSON.stringify({ error: 'Missing required fields' }),
                { status: 400 }
            );
        }

        // Save order to database
        await executeQuery(
            `INSERT INTO orders (
        order_number,
        customer_name,
        customer_email,
        customer_phone,
        shipping_address,
        shipping_city,
        shipping_postal_code,
        items,
        total,
        status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                orderNumber,
                customerName,
                customerEmail,
                customerPhone || '',
                shippingAddress,
                shippingCity || '',
                shippingPostalCode || '',
                JSON.stringify(items),
                total,
                'pending',
            ]
        );

        // Prepare email data
        const emailData = {
            orderNumber,
            customerName,
            customerEmail,
            items: items.map((item: any) => ({
                title: item.title,
                quantity: item.quantity,
                price: item.price,
            })),
            total,
            shippingAddress: `${shippingAddress}, ${shippingCity} ${shippingPostalCode}`,
        };

        // Send emails (don't await to avoid blocking the response)
        try {
            await Promise.all([
                sendAdminNotification(emailData),
                sendCustomerConfirmation(emailData),
            ]);
        } catch (emailError) {
            console.error('Email sending error:', emailError);
            // Don't fail the order if email fails
        }

        return new Response(
            JSON.stringify({
                success: true,
                orderNumber,
                message: 'Order placed successfully!',
            }),
            { status: 201 }
        );
    } catch (error) {
        console.error('Order creation error:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to create order' }),
            { status: 500 }
        );
    }
};
