
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.log("Missing Supabase credentials");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkCache() {
    console.log("Checking sitemap_cache table...");
    const { data, error } = await supabase
        .from("sitemap_cache")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1);

    if (error) {
        console.error("Error fetching cache:", error.message);
        return;
    }

    if (!data || data.length === 0) {
        console.log("Cache table is EMPTY.");
    } else {
        console.log("Cache entry found!");
        console.log("Created At:", data[0].created_at);
        console.log("ID:", data[0].id);
        const products = data[0].data.products?.length || 0;
        console.log("Products in cache:", products);
    }
}

checkCache();
