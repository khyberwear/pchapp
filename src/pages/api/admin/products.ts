import type { APIRoute } from 'astro';
import { supabaseAdmin as supabase } from '../../../lib/db';

export const prerender = false;

// GET - List all products
export const GET: APIRoute = async () => {
    try {
        const { data: products, error } = await supabase
            .from('products')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            throw error;
        }

        return new Response(
            JSON.stringify({ products: products || [] }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error fetching products:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to fetch products' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};

// POST - Create new product
export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();

        const { data, error } = await supabase
            .from('products')
            .insert([body])
            .select()
            .single();

        if (error) {
            throw error;
        }

        return new Response(
            JSON.stringify({ success: true, product: data }),
            { status: 201, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error creating product:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to create product' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};

// PUT - Update product
export const PUT: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const { id, ...updateData } = body;

        if (!id) {
            return new Response(
                JSON.stringify({ error: 'Product ID is required' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const { data, error } = await supabase
            .from('products')
            .update({ ...updateData, updated_at: new Date().toISOString() })
            .eq('id', id)
            .select()
            .single();

        if (error) {
            throw error;
        }

        return new Response(
            JSON.stringify({ success: true, product: data }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error updating product:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to update product' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};

// DELETE - Delete product
export const DELETE: APIRoute = async ({ request }) => {
    try {
        const { id } = await request.json();

        if (!id) {
            return new Response(
                JSON.stringify({ error: 'Product ID is required' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const { error } = await supabase
            .from('products')
            .delete()
            .eq('id', id);

        if (error) {
            throw error;
        }

        return new Response(
            JSON.stringify({ success: true }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error deleting product:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to delete product' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};
