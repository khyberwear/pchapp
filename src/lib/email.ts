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
    }>;
    total: number;
    subtotal: number;
    deliveryCost: number;
    deliveryMethod: string;
    paymentMethod: string;
    orderNotes: string;
    shippingAddress: string;
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
        .map(item => `- ${item.title} x ${item.quantity} = Rs ${item.price * item.quantity}`)
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
        .map(item => `- ${item.title} x ${item.quantity} = Rs ${item.price * item.quantity}`)
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
            From: 'noreply@webspires.co.uk',
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
