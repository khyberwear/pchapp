import { createClient } from '@libsql/client';
import * as dotenv from 'dotenv';

dotenv.config();

const turso = createClient({
    url: process.env.TURSO_DATABASE_URL || '',
    authToken: process.env.TURSO_AUTH_TOKEN || '',
});

async function testConnection() {
    try {
        console.log('Testing database connection...');
        console.log('URL:', process.env.TURSO_DATABASE_URL);
        console.log('Auth Token exists:', !!process.env.TURSO_AUTH_TOKEN);
        
        const result = await turso.execute('SELECT 1 as test');
        console.log('✅ Database connection successful!');
        console.log('Result:', result);
        
        // Test if orders table exists
        const tables = await turso.execute(`
            SELECT name FROM sqlite_master WHERE type='table' AND name='orders'
        `);
        console.log('\n📋 Orders table exists:', tables.rows.length > 0);
        
        if (tables.rows.length > 0) {
            // Get table schema
            const schema = await turso.execute(`PRAGMA table_info(orders)`);
            console.log('\n📊 Orders table schema:');
            console.log(schema.rows);
        }
        
    } catch (error) {
        console.error('❌ Database connection failed:');
        console.error(error);
    }
}

testConnection();
