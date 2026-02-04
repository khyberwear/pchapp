import * as ElasticEmail from '@elasticemail/elasticemail-client';

const defaultClient = ElasticEmail.ApiClient.instance;
const apikey = defaultClient.authentications['apikey'];
apikey.apiKey = import.meta.env.ELASTIC_EMAIL_API_KEY || (typeof process !== 'undefined' ? process.env.ELASTIC_EMAIL_API_KEY : '') || '';

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
            <td style="padding: 16px 0; border-bottom: 1px solid #f3f4f6;">
                <div style="font-weight: 600; color: #111827; font-size: 15px;">${item.title}</div>
                <div style="font-size: 13px; color: #6b7280; margin-top: 2px;">Qty: ${item.quantity}</div>
            </td>
            <td style="padding: 16px 0; border-bottom: 1px solid #f3f4f6; text-align: right; vertical-align: top;">
                <div style="font-weight: 600; color: #111827; font-size: 15px;">Rs ${(item.price * item.quantity).toLocaleString()}</div>
            </td>
        </tr>`)
        .join('');

    const statusConfig: Record<string, { subject: string; icon: string; color: string; title: string; message: string }> = {
        processing: {
            subject: `Update: Order #${data.orderNumber} is being processed`,
            icon: '📦',
            color: '#f97316',
            title: 'Processing Your Order',
            message: 'Your order is now being prepared by our artisans. We\'ll let you know as soon as it\'s ready for shipment.',
        },
        dispatched: {
            subject: `Great news: Order #${data.orderNumber} is on its way`,
            icon: '🚚',
            color: '#8b5cf6',
            title: 'Order Dispatched',
            message: 'Your handcrafted chappals have been dispatched and are currently in transit. They should reach you shortly.',
        },
        completed: {
            subject: `Delivered: Order #${data.orderNumber}`,
            icon: '✨',
            color: '#10b981',
            title: 'Order Delivered',
            message: 'Your order has been successfully delivered. We hope you enjoy the craftsmanship and comfort of your new footwear.',
        },
        cancelled: {
            subject: `Notice: Order #${data.orderNumber} has been cancelled`,
            icon: '✕',
            color: '#6b7280',
            title: 'Order Cancelled',
            message: 'Your order has been cancelled as requested or due to availability. If you have any questions, our support team is here to help.',
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
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    </style>
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; background-color: #fafafa; -webkit-font-smoothing: antialiased;">
    <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
        <!-- Logo -->
        <div style="padding: 40px 40px 20px; text-align: center;">
            <div style="font-size: 24px; font-weight: 700; letter-spacing: -0.025em; color: #111827; text-transform: uppercase;">Peshawari Chappal</div>
        </div>
        
        <!-- Status Indicator -->
        <div style="padding: 0 40px 40px; text-align: center;">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 64px; background-color: ${config.color}15; color: ${config.color}; border-radius: 50%; font-size: 32px; margin-bottom: 24px;">
                ${config.icon}
            </div>
            <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #111827; letter-spacing: -0.5px;">${config.title}</h1>
            <p style="margin: 12px 0 0; font-size: 15px; color: #6b7280; line-height: 1.6;">Hello ${data.customerName}, ${config.message.toLowerCase().charAt(0) + config.message.slice(1)}</p>
        </div>
        
        <!-- Order Summary -->
        <div style="padding: 0 40px 40px;">
            <div style="background-color: #f9fafb; border-radius: 12px; padding: 24px;">
                <div style="font-size: 12px; font-weight: 600; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px;">Order Details</div>
                <table style="width: 100%; border-collapse: collapse;">
                    ${itemsList}
                    <tr>
                        <td style="padding-top: 20px; font-weight: 700; color: #111827; font-size: 16px;">Total</td>
                        <td style="padding-top: 20px; text-align: right; font-weight: 700; color: #f97316; font-size: 18px;">Rs ${data.total.toLocaleString()}</td>
                    </tr>
                </table>
            </div>
            
            <div style="margin-top: 32px; padding: 0 4px;">
                <div style="font-size: 13px; color: #9ca3af; margin-bottom: 4px;">Order Number</div>
                <div style="font-size: 15px; color: #111827; font-weight: 600;">#${data.orderNumber}</div>
                
                <div style="margin-top: 20px; font-size: 13px; color: #9ca3af; margin-bottom: 4px;">Shipping Address</div>
                <div style="font-size: 15px; color: #111827; line-height: 1.5;">${data.shippingAddress}</div>
            </div>
        </div>
        
        <!-- Footer -->
        <div style="padding: 40px; background-color: #111827; text-align: center;">
            <div style="color: #ffffff; font-size: 14px; font-weight: 600; margin-bottom: 8px;">Need help with your order?</div>
            <div style="color: #9ca3af; font-size: 13px;">Reply to this email or contact us at khyberwearstore@gmail.com</div>
            <div style="margin-top: 32px; border-top: 1px solid #1f2937; pt: 32px; font-size: 12px; color: #4b5563;">
                 © ${new Date().getFullYear()} Peshawari Chappal Store. Traditional Excellence.
            </div>
        </div>
    </div>
</body>
</html>
        `,
    };
}

// Send order status update email
export async function sendOrderStatusEmail(data: OrderStatusEmailData): Promise<void> {
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
            From: 'noreply@webspires.co.uk',
            Subject: emailContent.subject,
        },
    };

    return new Promise((resolve, reject) => {
        emailsApi.emailsPost(email, (error: any, result: any) => {
            if (error) {
                console.error('Error sending status update email:', error);
                reject(error);
            } else {
                console.log('Order status email sent successfully');
                resolve(undefined);
            }
        });
    });
}

// Send admin notification
export async function sendAdminNotification(orderData: OrderEmailData) {
    const adminEmail = import.meta.env.ADMIN_EMAIL || (typeof process !== 'undefined' ? process.env.ADMIN_EMAIL : '') || 'khyberwearstore@gmail.com';
    const ownerEmail = import.meta.env.OWNER_EMAIL || (typeof process !== 'undefined' ? process.env.OWNER_EMAIL : '') || '';

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
            From: 'noreply@webspires.co.uk',
            Subject: `New Order #${orderData.orderNumber} - Peshawari Chappal`,
        },
    };

    return new Promise((resolve, reject) => {
        emailsApi.emailsPost(emailContent, (error: any, result: any) => {
            if (error) {
                console.error('Error sending admin email:', error);
                reject(error);
            } else {
                console.log('Admin notification sent successfully');
                resolve(undefined);
            }
        });
    });
}

// Send customer confirmation
export async function sendCustomerConfirmation(orderData: OrderEmailData) {
    const itemsList = orderData.items
        .map(item => `<tr>
            <td style="padding: 16px 0; border-bottom: 1px solid #f3f4f6;">
                <div style="font-weight: 600; color: #111827; font-size: 15px;">${item.title}</div>
                <div style="font-size: 13px; color: #6b7280; margin-top: 2px;">Qty: ${item.quantity} ${item.color ? `· ${item.color}` : ''} ${item.size ? `· Size ${item.size}` : ''}</div>
            </td>
            <td style="padding: 16px 0; border-bottom: 1px solid #f3f4f6; text-align: right; vertical-align: top;">
                <div style="font-weight: 600; color: #111827; font-size: 15px;">Rs ${(item.price * item.quantity).toLocaleString()}</div>
            </td>
        </tr>`)
        .join('');

    const deliveryLabel = orderData.deliveryMethod === 'express' ? 'Express Delivery' : 'Standard Delivery';
    const paymentLabel = orderData.paymentMethod === 'bank' ? 'Bank Transfer' : 'Cash on Delivery';

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    </style>
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; background-color: #fafafa; -webkit-font-smoothing: antialiased;">
    <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
        <!-- Logo -->
        <div style="padding: 40px 40px 20px; text-align: center;">
            <div style="font-size: 24px; font-weight: 700; letter-spacing: -0.025em; color: #111827; text-transform: uppercase;">Peshawari Chappal</div>
        </div>
        
        <!-- Welcome Hero -->
        <div style="padding: 0 40px 40px; text-align: center;">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 64px; background-color: #f9731615; color: #f97316; border-radius: 50%; font-size: 32px; margin-bottom: 24px;">
                ✨
            </div>
            <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #111827; letter-spacing: -0.5px;">Thank You for Your Order</h1>
            <p style="margin: 12px 0 0; font-size: 15px; color: #6b7280; line-height: 1.6;">Hello ${orderData.customerName}, we've received your order and our artisans are ready to begin working on your handcrafted footwear.</p>
        </div>
        
        <!-- Order Summary -->
        <div style="padding: 0 40px 40px;">
            <div style="background-color: #f9fafb; border-radius: 12px; padding: 24px;">
                <div style="font-size: 12px; font-weight: 600; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px;">Order Summary</div>
                <table style="width: 100%; border-collapse: collapse;">
                    ${itemsList}
                    <tr>
                        <td style="padding: 20px 0 8px; font-size: 14px; color: #6b7280;">Subtotal</td>
                        <td style="padding: 20px 0 8px; text-align: right; font-size: 14px; color: #111827;">Rs ${orderData.subtotal.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-size: 14px; color: #6b7280;">Delivery (${deliveryLabel})</td>
                        <td style="padding: 8px 0; text-align: right; font-size: 14px; color: #111827;">Rs ${orderData.deliveryCost.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td style="padding-top: 16px; font-weight: 700; color: #111827; font-size: 16px;">Total</td>
                        <td style="padding-top: 16px; text-align: right; font-weight: 700; color: #f97316; font-size: 18px;">Rs ${orderData.total.toLocaleString()}</td>
                    </tr>
                </table>
            </div>
            
            <div style="margin-top: 32px; padding: 0 4px;">
                <div style="font-size: 13px; color: #9ca3af; margin-bottom: 4px;">Order Number</div>
                <div style="font-size: 15px; color: #111827; font-weight: 600;">#${orderData.orderNumber}</div>
                
                <div style="margin-top: 20px; font-size: 13px; color: #9ca3af; margin-bottom: 4px;">Payment Method</div>
                <div style="font-size: 15px; color: #111827; font-weight: 600;">${paymentLabel}</div>

                <div style="margin-top: 20px; font-size: 13px; color: #9ca3af; margin-bottom: 4px;">Shipping Address</div>
                <div style="font-size: 15px; color: #111827; line-height: 1.5;">${orderData.shippingAddress}</div>
            </div>
        </div>
        
        <!-- Next Steps -->
        <div style="padding: 0 40px 40px;">
            <div style="font-size: 14px; font-weight: 600; color: #111827; margin-bottom: 12px;">What happens next?</div>
            <p style="margin: 0; font-size: 14px; color: #6b7280; line-height: 1.5;">Our team is now processing your order. Once your items are handcrafted and ready for shipment, we'll send you another email with your tracking details.</p>
        </div>

        <!-- Footer -->
        <div style="padding: 40px; background-color: #111827; text-align: center;">
            <div style="color: #ffffff; font-size: 14px; font-weight: 600; margin-bottom: 8px;">Questions about your order?</div>
            <div style="color: #9ca3af; font-size: 13px;">Feel free to contact us at khyberwearstore@gmail.com</div>
            <div style="margin-top: 32px; border-top: 1px solid #1f2937; padding-top: 32px; font-size: 12px; color: #4b5563;">
                 © ${new Date().getFullYear()} Peshawari Chappal Store. Traditional Excellence.
            </div>
        </div>
    </div>
</body>
</html>
    `;

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
                    Content: htmlContent,
                },
            ],
            From: 'noreply@webspires.co.uk',
            Subject: `Confirming your order #${orderData.orderNumber}`,
        },
    };

    return new Promise((resolve, reject) => {
        emailsApi.emailsPost(emailContent, (error: any, result: any) => {
            if (error) {
                console.error('Error sending customer email:', error);
                reject(error);
            } else {
                console.log('Customer confirmation sent successfully');
                resolve(undefined);
            }
        });
    });
}
