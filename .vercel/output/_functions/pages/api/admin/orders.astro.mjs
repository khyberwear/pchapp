import { g as getAll } from '../../../chunks/db_h1ugnc2a.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async ({ request }) => {
  try {
    const authHeader = request.headers.get("authorization");
    const orders = await getAll(
      `SELECT 
        id,
        order_number,
        customer_name,
        customer_email,
        customer_phone,
        shipping_address,
        shipping_city,
        shipping_postal_code,
        items,
        total,
        status,
        created_at
      FROM orders
      ORDER BY created_at DESC
      LIMIT 100`
    );
    const ordersWithParsedItems = orders.map((order) => ({
      ...order,
      items: JSON.parse(order.items),
      date: order.created_at
    }));
    return new Response(
      JSON.stringify({ orders: ordersWithParsedItems }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching orders:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch orders" }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
