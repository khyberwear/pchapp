import type { APIRoute } from "astro";
import { supabase } from "@lib/db";

export const GET: APIRoute = async () => {
  try {
    const { data: blogs, error } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return new Response(JSON.stringify({ blogs }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const { data: blog, error } = await supabase
      .from("blogs")
      .insert([
        {
          title: data.title,
          slug: data.slug,
          author: data.author,
          author_image: data.author_image,
          excerpt: data.excerpt,
          content: data.content,
          featured_image: data.featured_image,
          category: data.category,
          tags: data.tags || [],
          published: data.published || false,
          featured: data.featured || false,
        },
      ])
      .select()
      .single();

    if (error) throw error;

    return new Response(JSON.stringify({ blog }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const PUT: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    if (!data.id) {
      return new Response(JSON.stringify({ error: "Blog ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { data: blog, error } = await supabase
      .from("blogs")
      .update({
        title: data.title,
        slug: data.slug,
        author: data.author,
        author_image: data.author_image,
        excerpt: data.excerpt,
        content: data.content,
        featured_image: data.featured_image,
        category: data.category,
        tags: data.tags || [],
        published: data.published || false,
        featured: data.featured || false,
        updated_at: new Date().toISOString(),
      })
      .eq("id", data.id)
      .select()
      .single();

    if (error) throw error;

    return new Response(JSON.stringify({ blog }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    if (!data.id) {
      return new Response(JSON.stringify({ error: "Blog ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { error } = await supabase.from("blogs").delete().eq("id", data.id);

    if (error) throw error;

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
