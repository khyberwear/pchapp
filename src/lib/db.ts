import { createClient } from '@libsql/client';

// Initialize Turso client
// Initialize Turso client
export const turso = createClient({
  url: import.meta.env.TURSO_DATABASE_URL || 'libsql://pchapp-orders-khyberwear.aws-ap-south-1.turso.io',
  authToken: import.meta.env.TURSO_AUTH_TOKEN || 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJnaWQiOiJlYjM3NzE0ZC1iZmJhLTRiMTAtYTU2ZC04NGMyOWE2MDY5YzkiLCJpYXQiOjE3NjQ1NzM5MTEsInJpZCI6IjdiZjViNzRlLTA2MmQtNDFhNS04ZWZlLTJmYjJiZDc5ZWJlZCJ9.BRCLool-KIKPDcFpBMz0RhKmQX_RzE0uvkER1oJk5KComA_ej4drkE-dYTMTfhZinTfroUbRsaCIQlXRopENCQ',
});

// Helper function to execute queries
export async function executeQuery(sql: string, params: any[] = []) {
  try {
    const result = await turso.execute({
      sql,
      args: params,
    });
    return result;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

// Helper to get all records
export async function getAll(sql: string, params: any[] = []) {
  const result = await executeQuery(sql, params);
  return result.rows;
}

// Helper to get single record
export async function getOne(sql: string, params: any[] = []) {
  const result = await executeQuery(sql, params);
  return result.rows[0] || null;
}

// Create orders table if it doesn't exist
export async function initializeDatabase() {
  await executeQuery(`
    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_number TEXT UNIQUE NOT NULL,
      customer_name TEXT NOT NULL,
      customer_email TEXT NOT NULL,
      customer_phone TEXT,
      shipping_address TEXT NOT NULL,
      shipping_city TEXT NOT NULL,
      shipping_postal_code TEXT NOT NULL,
      items TEXT NOT NULL,
      total REAL NOT NULL,
      status TEXT DEFAULT 'pending',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await executeQuery(`
    CREATE INDEX IF NOT EXISTS idx_order_number ON orders(order_number)
  `);

  await executeQuery(`
    CREATE INDEX IF NOT EXISTS idx_created_at ON orders(created_at DESC)
  `);
}
