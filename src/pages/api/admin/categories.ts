import type { APIRoute } from 'astro';
import { supabaseAdmin as supabase } from '../../../lib/db';

export const prerender = false;

// GET - List all categories
export const GET: APIRoute = async () => {
    try {
        const { data: categories, error } = await supabase
            .from('categories')
            .select('*')
            .order('name', { ascending: true });

        if (error) throw error;

        return new Response(
            JSON.stringify({ categories: categories || [] }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error fetching categories:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to fetch categories' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};

// POST - Create new category
export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const { name, slug, description, image_url, meta_title, meta_description } = body;

        const { data, error } = await supabase
            .from('categories')
            .insert([{ name, slug, description, image_url, meta_title, meta_description }])
            .select()
            .single();

        if (error) throw error;

        return new Response(
            JSON.stringify({ success: true, category: data }),
            { status: 201, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error creating category:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to create category' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};

// PUT - Update category
export const PUT: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const { id, ...updateData } = body;

        if (!id) {
            return new Response(
                JSON.stringify({ error: 'Category ID is required' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const { data, error } = await supabase
            .from('categories')
            .update(updateData)
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;

        return new Response(
            JSON.stringify({ success: true, category: data }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error updating category:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to update category' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};

// DELETE - Delete category
export const DELETE: APIRoute = async ({ request }) => {
    try {
        const { id } = await request.json();

        if (!id) {
            return new Response(
                JSON.stringify({ error: 'Category ID is required' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const { error } = await supabase
            .from('categories')
            .delete()
            .eq('id', id);

        if (error) throw error;

        return new Response(
            JSON.stringify({ success: true }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error deleting category:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to delete category' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};
