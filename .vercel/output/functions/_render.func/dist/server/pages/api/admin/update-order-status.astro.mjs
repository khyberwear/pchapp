import { a as getOne, e as executeQuery } from '../../../chunks/db_h1ugnc2a.mjs';
import { s as sendOrderStatusEmail } from '../../../chunks/email_Mt44NHyd.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { orderNumber, status } = body;
    if (!orderNumber || !status) {
      return new Response(
        JSON.stringify({ error: "Order number and status are required" }),
        { status: 400 }
      );
    }
    const validStatuses = ["pending", "processing", "dispatched", "completed", "cancelled"];
    if (!validStatuses.includes(status.toLowerCase())) {
      return new Response(
        JSON.stringify({ error: "Invalid status. Valid statuses are: " + validStatuses.join(", ") }),
        { status: 400 }
      );
    }
    const order = await getOne(
      `SELECT * FROM orders WHERE order_number = ?`,
      [orderNumber]
    );
    if (!order) {
      return new Response(
        JSON.stringify({ error: "Order not found" }),
        { status: 404 }
      );
    }
    await executeQuery(
      `UPDATE orders SET status = ? WHERE order_number = ?`,
      [status.toLowerCase(), orderNumber]
    );
    try {
      const items = typeof order.items === "string" ? JSON.parse(order.items) : order.items;
      await sendOrderStatusEmail({
        orderNumber: order.order_number,
        customerName: order.customer_name,
        customerEmail: order.customer_email,
        status: status.toLowerCase(),
        items,
        total: order.total,
        shippingAddress: `${order.shipping_address}, ${order.shipping_city} ${order.shipping_postal_code}`
      });
    } catch (emailError) {
      console.error("Failed to send status update email:", emailError);
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
    console.error("Error updating order status:", error);
    return new Response(
      JSON.stringify({ error: "Failed to update order status" }),
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
