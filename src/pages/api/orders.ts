import type { APIRoute } from 'astro';
import { executeQuery, initializeDatabase } from '../../lib/db';
import { sendAdminNotification, sendCustomerConfirmation } from '../../lib/email';

export const prerender = false;

// Initialize database on first load
let dbInitialized = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        // Initialize database if not already done
        if (!dbInitialized) {
            try {
                await initializeDatabase();
                dbInitialized = true;
                console.log('Database initialized successfully');
            } catch (initError) {
                console.error('Database initialization error:', initError);
                return new Response(
                    JSON.stringify({
                        error: 'Database initialization failed',
                        details: initError instanceof Error ? initError.message : 'Unknown error'
                    }),
                    {
                        status: 500,
                        headers: { 'Content-Type': 'application/json' }
                    }
                );
            }
        }

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
                    fullShippingAddress,
                    shippingCity || '',
                    shippingPostalCode || '',
                    JSON.stringify(items),
                    total,
                    'pending',
                ]
            );
        } catch (dbError) {
            console.error('Database insert error:', dbError);
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
            {
                status: 201,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    } catch (error) {
        console.error('Order creation error:', error);
        return new Response(
            JSON.stringify({
                error: 'Failed to create order',
                details: error instanceof Error ? error.message : 'Unknown error'
            }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }
};
