import { e as executeQuery } from '../../chunks/db_1iSa0BRq.mjs';
import * as ElasticEmail from '@elasticemail/elasticemail-client';
export { renderers } from '../../renderers.mjs';

const defaultClient = ElasticEmail.ApiClient.instance;
const apikey = defaultClient.authentications["apikey"];
apikey.apiKey = "285DC040B9E83DCDED5FCEC7A6B079919FE3664B3462758AFA099B14BF509DF916CFC8CEE50EBB46B806539A63434E0B";
const emailsApi = new ElasticEmail.EmailsApi();
async function sendAdminNotification(orderData) {
  const adminEmail = "mail@webspires.co.uk";
  const ownerEmail = "atifjan2019@gmail.com";
  const recipients = [
    {
      Email: adminEmail,
      Fields: {
        name: "Admin"
      }
    }
  ];
  {
    recipients.push({
      Email: ownerEmail,
      Fields: {
        name: "Owner"
      }
    });
  }
  const itemsList = orderData.items.map((item) => `- ${item.title} x ${item.quantity} = Rs ${item.price * item.quantity}`).join("\n");
  const deliveryLabel = orderData.deliveryMethod === "express" ? "Express Delivery" : "Normal Delivery";
  const paymentLabel = orderData.paymentMethod === "bank" ? "Bank Transfer" : "Cash on Delivery";
  const emailContent = {
    Recipients: recipients,
    Content: {
      Body: [
        {
          ContentType: "HTML",
          Charset: "utf-8",
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
              <p><strong>Notes:</strong> ${orderData.orderNotes || "None"}</p>
              <hr style="border: 1px solid #eee;">
              <h3>Order Items:</h3>
              <pre style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${itemsList}</pre>
              <p><strong>Subtotal:</strong> Rs ${orderData.subtotal}</p>
              <p><strong>Delivery Cost:</strong> Rs ${orderData.deliveryCost}</p>
              <h3 style="color: #ff6b35;">Total: Rs ${orderData.total}</h3>
              <hr style="border: 1px solid #eee;">
              <p style="color: #666; font-size: 12px;">Received at ${(/* @__PURE__ */ new Date()).toLocaleString()}</p>
            </div>
          `
        }
      ],
      From: "noreply@webspires.co.uk",
      Subject: `New Order #${orderData.orderNumber} - Peshawari Chappal`
    }
  };
  try {
    const callback = function(error, data, response) {
      if (error) {
        console.error("Error sending admin email:", error);
      } else {
        console.log("Admin notification sent successfully");
      }
    };
    emailsApi.emailsPost(emailContent, callback);
  } catch (error) {
    console.error("Failed to send admin notification:", error);
    throw error;
  }
}
async function sendCustomerConfirmation(orderData) {
  const itemsList = orderData.items.map((item) => `- ${item.title} x ${item.quantity} = Rs ${item.price * item.quantity}`).join("\n");
  const deliveryLabel = orderData.deliveryMethod === "express" ? "Express Delivery" : "Normal Delivery";
  const paymentLabel = orderData.paymentMethod === "bank" ? "Bank Transfer" : "Cash on Delivery";
  const emailContent = {
    Recipients: [
      {
        Email: orderData.customerEmail,
        Fields: {
          name: orderData.customerName
        }
      }
    ],
    Content: {
      Body: [
        {
          ContentType: "HTML",
          Charset: "utf-8",
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
              <p style="color: #666; font-size: 12px;">Order placed on ${(/* @__PURE__ */ new Date()).toLocaleString()}</p>
            </div>
          `
        }
      ],
      From: "noreply@webspires.co.uk",
      Subject: `Order Confirmation #${orderData.orderNumber} - Peshawari Chappal`
    }
  };
  try {
    const callback = function(error, data, response) {
      if (error) {
        console.error("Error sending customer email:", error);
      } else {
        console.log("Customer confirmation sent successfully");
      }
    };
    emailsApi.emailsPost(emailContent, callback);
  } catch (error) {
    console.error("Failed to send customer confirmation:", error);
    throw error;
  }
}

const prerender = false;
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const orderNumber = `PCH-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
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
      deliveryCost
    } = data;
    if (!customerName || !customerEmail || !shippingAddress || !items || !total) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }
    const fullShippingAddress = `${shippingAddress}
${shippingCity}, ${shippingPostalCode}
${shippingCountry}
Phone: ${customerPhone}
Delivery: ${deliveryMethod}
Payment: ${paymentMethod}
Notes: ${orderNotes}`;
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
        customerPhone || "",
        fullShippingAddress,
        shippingCity || "",
        shippingPostalCode || "",
        JSON.stringify(items),
        total,
        "pending"
      ]
    );
    const emailData = {
      orderNumber,
      customerName,
      customerEmail,
      customerPhone,
      items: items.map((item) => ({
        title: item.title,
        quantity: item.quantity,
        price: item.price
      })),
      total,
      subtotal,
      deliveryCost,
      deliveryMethod,
      paymentMethod,
      orderNotes,
      shippingAddress: `${shippingAddress}, ${shippingCity} ${shippingPostalCode}, ${shippingCountry}`
    };
    try {
      await Promise.all([
        sendAdminNotification(emailData),
        sendCustomerConfirmation(emailData)
      ]);
    } catch (emailError) {
      console.error("Email sending error:", emailError);
    }
    return new Response(
      JSON.stringify({
        success: true,
        orderNumber,
        message: "Order placed successfully!"
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Order creation error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create order" }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
