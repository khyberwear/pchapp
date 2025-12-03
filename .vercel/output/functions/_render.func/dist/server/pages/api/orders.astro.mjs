import { i as initializeDatabase, e as executeQuery } from '../../chunks/db_h1ugnc2a.mjs';
import { a as sendAdminNotification, b as sendCustomerConfirmation } from '../../chunks/email_Be65Twn2.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
let dbInitialized = false;
const POST = async ({ request }) => {
  try {
    if (!dbInitialized) {
      try {
        await initializeDatabase();
        dbInitialized = true;
        console.log("Database initialized successfully");
      } catch (initError) {
        console.error("Database initialization error:", initError);
        return new Response(
          JSON.stringify({
            error: "Database initialization failed",
            details: initError instanceof Error ? initError.message : "Unknown error"
          }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
    }
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
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const fullShippingAddress = `${shippingAddress}
${shippingCity}, ${shippingPostalCode}
${shippingCountry}
Phone: ${customerPhone}
Delivery: ${deliveryMethod}
Payment: ${paymentMethod}
Notes: ${orderNotes}`;
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
          customerPhone || "",
          fullShippingAddress,
          shippingCity || "",
          shippingPostalCode || "",
          JSON.stringify(items),
          total,
          "pending"
        ]
      );
    } catch (dbError) {
      console.error("Database insert error:", dbError);
      return new Response(
        JSON.stringify({
          error: "Failed to save order to database",
          details: dbError instanceof Error ? dbError.message : "Unknown error"
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const emailData = {
      orderNumber,
      customerName,
      customerEmail,
      customerPhone,
      items: items.map((item) => ({
        title: item.title,
        quantity: item.quantity,
        price: item.price,
        color: item.color,
        size: item.size
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
      {
        status: 201,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Order creation error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to create order",
        details: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
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
