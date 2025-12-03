import * as ElasticEmail from '@elasticemail/elasticemail-client';

const defaultClient = ElasticEmail.ApiClient.instance;
const apikey = defaultClient.authentications['apikey'];
apikey.apiKey = import.meta.env.ELASTIC_EMAIL_API_KEY || '';

const emailsApi = new ElasticEmail.EmailsApi();

interface OrderEmailData {
    orderNumber: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    items: Array<{
        title: string;
        quantity: number;
        price: number;
        color?: string;
        size?: string;
    }>;
    total: number;
    subtotal: number;
    deliveryCost: number;
    deliveryMethod: string;
    paymentMethod: string;
    orderNotes: string;
    shippingAddress: string;
}

interface OrderStatusEmailData {
    orderNumber: string;
    customerName: string;
    customerEmail: string;
    status: string;
    items: Array<{
        title: string;
        quantity: number;
        price: number;
    }>;
    total: number;
    shippingAddress: string;
}

// Get status-specific email content
function getStatusEmailContent(status: string, data: OrderStatusEmailData) {
    const itemsList = data.items
        .map(item => `<tr>
            <td style="padding: 12px; border-bottom: 1px solid #eee;">${item.title}</td>
            <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
            <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right;">Rs ${(item.price * item.quantity).toLocaleString()}</td>
        </tr>`)
        .join('');

    const statusConfig: Record<string, { subject: string; icon: string; color: string; title: string; message: string }> = {
        processing: {
            subject: `Your Order #${data.orderNumber} is Being Processed`,
            icon: '📦',
            color: '#3b82f6',
            title: 'Order Processing',
            message: 'Great news! Your order is now being processed. Our team is carefully preparing your items for shipment.',
        },
        dispatched: {
            subject: `Your Order #${data.orderNumber} Has Been Dispatched!`,
            icon: '🚚',
            color: '#8b5cf6',
            title: 'Order Dispatched',
            message: 'Exciting news! Your order has been dispatched and is on its way to you. You should receive it soon!',
        },
        completed: {
            subject: `Your Order #${data.orderNumber} Has Been Delivered`,
            icon: '✅',
            color: '#22c55e',
            title: 'Order Completed',
            message: 'Your order has been successfully delivered! We hope you love your new items. Thank you for shopping with us!',
        },
        cancelled: {
            subject: `Your Order #${data.orderNumber} Has Been Cancelled`,
            icon: '❌',
            color: '#ef4444',
            title: 'Order Cancelled',
            message: 'Your order has been cancelled. If you did not request this cancellation or have any questions, please contact our support team.',
        },
    };

    const config = statusConfig[status] || statusConfig.processing;

    return {
        subject: config.subject,
        html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">Peshawari Chappal</h1>
        </div>
        
        <!-- Status Banner -->
        <div style="background-color: ${config.color}; padding: 30px; text-align: center;">
            <div style="font-size: 48px; margin-bottom: 10px;">${config.icon}</div>
            <h2 style="color: #ffffff; margin: 0; font-size: 24px;">${config.title}</h2>
        </div>
        
        <!-- Content -->
        <div style="padding: 40px 30px;">
            <p style="font-size: 16px; color: #333; margin: 0 0 20px;">Dear ${data.customerName},</p>
            <p style="font-size: 16px; color: #666; margin: 0 0 30px; line-height: 1.6;">${config.message}</p>
            
            <!-- Order Details Box -->
            <div style="background-color: #f9fafb; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                    <span style="color: #6b7280; font-size: 14px;">Order Number</span>
                    <span style="color: #111827; font-weight: 600; font-size: 14px;">#${data.orderNumber}</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                    <span style="color: #6b7280; font-size: 14px;">Status</span>
                    <span style="background-color: ${config.color}; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600;">${status.charAt(0).toUpperCase() + status.slice(1)}</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span style="color: #6b7280; font-size: 14px;">Shipping Address</span>
                    <span style="color: #111827; font-size: 14px; text-align: right; max-width: 200px;">${data.shippingAddress}</span>
                </div>
            </div>
            
            <!-- Order Items -->
            <h3 style="color: #111827; font-size: 18px; margin: 0 0 15px; font-weight: 600;">Order Items</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <thead>
                    <tr style="background-color: #f3f4f6;">
                        <th style="padding: 12px; text-align: left; font-size: 14px; color: #6b7280;">Item</th>
                        <th style="padding: 12px; text-align: center; font-size: 14px; color: #6b7280;">Qty</th>
                        <th style="padding: 12px; text-align: right; font-size: 14px; color: #6b7280;">Price</th>
                    </tr>
                </thead>
                <tbody>
                    ${itemsList}
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="2" style="padding: 15px 12px; font-weight: 600; font-size: 16px;">Total</td>
                        <td style="padding: 15px 12px; text-align: right; font-weight: 700; font-size: 18px; color: #f97316;">Rs ${data.total.toLocaleString()}</td>
                    </tr>
                </tfoot>
            </table>
            
            ${status === 'cancelled' ? `
            <div style="background-color: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 15px; margin-bottom: 20px;">
                <p style="color: #991b1b; margin: 0; font-size: 14px;">If you have any questions about this cancellation, please contact our support team.</p>
            </div>
            ` : ''}
            
            ${status === 'completed' ? `
            <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 15px; margin-bottom: 20px; text-align: center;">
                <p style="color: #166534; margin: 0 0 10px; font-size: 14px;">We'd love to hear your feedback!</p>
                <p style="color: #166534; margin: 0; font-size: 14px;">Thank you for choosing Peshawari Chappal.</p>
            </div>
            ` : ''}
        </div>
        
        <!-- Footer -->
        <div style="background-color: #1f2937; padding: 30px; text-align: center;">
            <p style="color: #9ca3af; margin: 0 0 10px; font-size: 14px;">Questions? Contact us at support@peshawari-chappal.com</p>
            <p style="color: #6b7280; margin: 0; font-size: 12px;">© ${new Date().getFullYear()} Peshawari Chappal. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
        `,
    };
}

// Send order status update email
export async function sendOrderStatusEmail(data: OrderStatusEmailData) {
    const emailContent = getStatusEmailContent(data.status, data);

    const email = {
        Recipients: [
            {
                Email: data.customerEmail,
                Fields: {
                    name: data.customerName,
                },
            },
        ],
        Content: {
            Body: [
                {
                    ContentType: 'HTML',
                    Charset: 'utf-8',
                    Content: emailContent.html,
                },
            ],
            From: 'noreply@khyberwear.com',
            Subject: emailContent.subject,
        },
    };

    try {
        const callback = function (error: any, data: any, response: any) {
            if (error) {
                console.error('Error sending status update email:', error);
            } else {
                console.log('Order status email sent successfully');
            }
        };
        emailsApi.emailsPost(email, callback);
    } catch (error) {
        console.error('Failed to send order status email:', error);
        throw error;
    }
}

// Send admin notification
export async function sendAdminNotification(orderData: OrderEmailData) {
    const adminEmail = import.meta.env.ADMIN_EMAIL || 'mail@webspires.co.uk';

    const ownerEmail = import.meta.env.OWNER_EMAIL;

    const recipients = [
        {
            Email: adminEmail,
            Fields: {
                name: 'Admin',
            },
        }
    ];

    if (ownerEmail) {
        recipients.push({
            Email: ownerEmail,
            Fields: {
                name: 'Owner',
            },
        });
    }

    const itemsList = orderData.items
        .map(item => {
            const variantInfo = [item.color ? `Color: ${item.color}` : '', item.size ? `Size: ${item.size}` : ''].filter(Boolean).join(', ');
            return `- ${item.title} ${variantInfo ? `(${variantInfo})` : ''} x ${item.quantity} = Rs ${item.price * item.quantity}`;
        })
        .join('\n');

    const deliveryLabel = orderData.deliveryMethod === 'express' ? 'Express Delivery' : 'Normal Delivery';
    const paymentLabel = orderData.paymentMethod === 'bank' ? 'Bank Transfer' : 'Cash on Delivery';

    const emailContent = {
        Recipients: recipients,
        Content: {
            Body: [
                {
                    ContentType: 'HTML',
                    Charset: 'utf-8',
                    Content: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333;">New Order Received! 🎉</h2>
              <p><strong>Order Number:</strong> ${orderData.orderNumber}</p>
              <hr style="border: 1px solid #eee;">
              <h3>Customer Details:</h3>
              <p><strong>Name:</strong> ${orderData.customerName}</p>
              <p><strong>Email:</strong> ${orderData.customerEmail}</p>
              <p><strong>Phone:</strong> ${orderData.customerPhone}</p>
              <p><strong>Shipping Address:</strong> ${orderData.shippingAddress}</p>
              <hr style="border: 1px solid #eee;">
              <h3>Order Details:</h3>
              <p><strong>Delivery Method:</strong> ${deliveryLabel}</p>
              <p><strong>Payment Method:</strong> ${paymentLabel}</p>
              <p><strong>Notes:</strong> ${orderData.orderNotes || 'None'}</p>
              <hr style="border: 1px solid #eee;">
              <h3>Order Items:</h3>
              <pre style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${itemsList}</pre>
              <p><strong>Subtotal:</strong> Rs ${orderData.subtotal}</p>
              <p><strong>Delivery Cost:</strong> Rs ${orderData.deliveryCost}</p>
              <h3 style="color: #ff6b35;">Total: Rs ${orderData.total}</h3>
              <hr style="border: 1px solid #eee;">
              <p style="color: #666; font-size: 12px;">Received at ${new Date().toLocaleString()}</p>
            </div>
          `,
                },
            ],
            From: 'noreply@khyberwear.com',
            Subject: `New Order #${orderData.orderNumber} - Peshawari Chappal`,
        },
    };

    try {
        const callback = function (error: any, data: any, response: any) {
            if (error) {
                console.error('Error sending admin email:', error);
            } else {
                console.log('Admin notification sent successfully');
            }
        };
        emailsApi.emailsPost(emailContent, callback);
    } catch (error) {
        console.error('Failed to send admin notification:', error);
        throw error;
    }
}

// Send customer confirmation
export async function sendCustomerConfirmation(orderData: OrderEmailData) {
    const itemsList = orderData.items
        .map(item => {
            const variantInfo = [item.color ? `Color: ${item.color}` : '', item.size ? `Size: ${item.size}` : ''].filter(Boolean).join(', ');
            return `- ${item.title} ${variantInfo ? `(${variantInfo})` : ''} x ${item.quantity} = Rs ${item.price * item.quantity}`;
        })
        .join('\n');

    const deliveryLabel = orderData.deliveryMethod === 'express' ? 'Express Delivery' : 'Normal Delivery';
    const paymentLabel = orderData.paymentMethod === 'bank' ? 'Bank Transfer' : 'Cash on Delivery';

    const emailContent = {
        Recipients: [
            {
                Email: orderData.customerEmail,
                Fields: {
                    name: orderData.customerName,
                },
            },
        ],
        Content: {
            Body: [
                {
                    ContentType: 'HTML',
                    Charset: 'utf-8',
                    Content: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333;">Thank You for Your Order! ✅</h2>
              <p>Dear ${orderData.customerName},</p>
              <p>Your order has been received and is being processed.</p>
              <hr style="border: 1px solid #eee;">
              <p><strong>Order Number:</strong> ${orderData.orderNumber}</p>
              <h3>Order Summary:</h3>
              <pre style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${itemsList}</pre>
              <p><strong>Subtotal:</strong> Rs ${orderData.subtotal}</p>
              <p><strong>Delivery Cost:</strong> Rs ${orderData.deliveryCost} (${deliveryLabel})</p>
              <h3 style="color: #ff6b35;">Total: Rs ${orderData.total}</h3>
              <hr style="border: 1px solid #eee;">
              <h3>Delivery Details:</h3>
              <p><strong>Address:</strong> ${orderData.shippingAddress}</p>
              <p><strong>Phone:</strong> ${orderData.customerPhone}</p>
              <p><strong>Payment Method:</strong> ${paymentLabel}</p>
              <hr style="border: 1px solid #eee;">
              <p style="color: #666;">We'll notify you once your order ships. Thank you for shopping with Peshawari Chappal!</p>
              <p style="color: #666; font-size: 12px;">Order placed on ${new Date().toLocaleString()}</p>
            </div>
          `,
                },
            ],
            From: 'noreply@khyberwear.com',
            Subject: `Order Confirmation #${orderData.orderNumber} - Peshawari Chappal`,
        },
    };

    try {
        const callback = function (error: any, data: any, response: any) {
            if (error) {
                console.error('Error sending customer email:', error);
            } else {
                console.log('Customer confirmation sent successfully');
            }
        };
        emailsApi.emailsPost(emailContent, callback);
    } catch (error) {
        console.error('Failed to send customer confirmation:', error);
        throw error;
    }
}
