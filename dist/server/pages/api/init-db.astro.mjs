import { i as initializeDatabase } from '../../chunks/db_1iSa0BRq.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async () => {
  try {
    await initializeDatabase();
    return new Response(
      JSON.stringify({ success: true, message: "Database initialized" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Database initialization error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to initialize database" }),
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
