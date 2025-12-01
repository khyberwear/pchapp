# Turso Database Setup Guide

## 1. Sign Up for Turso

1. Go to [turso.tech](https://turso.tech)
2. Sign up with GitHub or email
3. Install Turso CLI (optional but helpful):
   ```bash
   curl -sSfL https://get.tur.so/install.sh | bash
   ```

## 2. Create Your Database

### Option A: Using Turso CLI (Recommended)
```bash
# Login
turso auth login

# Create database
turso db create pchapp-orders

# Get database URL
turso db show pchapp-orders

# Create auth token
turso db tokens create pchapp-orders
```

### Option B: Using Turso Dashboard
1. Go to https://app.turso.tech
2. Click "Create Database"
3. Name it: `pchapp-orders`
4. Choose region closest to your users
5. Copy the database URL
6. Go to "Settings" → "Tokens" → "Create Token"

## 3. Update Environment Variables

### Local Development (.env file is already created)
Update `/Users/atifjan/PC/pchapp/.env`:
```
TURSO_DATABASE_URL=libsql://your-database-url.turso.io
TURSO_AUTH_TOKEN=your-auth-token-here
```

### Vercel Deployment
1. Go to https://vercel.com/your-project/settings/environment-variables
2. Add these variables:
   - `TURSO_DATABASE_URL` = Your Turso database URL
   - `TURSO_AUTH_TOKEN` = Your Turso auth token
   - `ELASTIC_EMAIL_API_KEY` = (already set in .env)
   - `ADMIN_EMAIL` = mail@webspires.co.uk (already set in .env)

## 4. Initialize Database

Once you have added the Turso credentials:

### Locally:
Run the dev server and visit:
```
http://localhost:4322/api/init-db
```

### On Production:
After deployment, visit:
```
https://www.peshawarichappal.store/api/init-db
```

This will create the `orders` table automatically.

## 5. Test the System

1. **Place a test order:**
   - Add items to cart
   - Go to checkout
   - Fill in the form
   - Submit order

2. **Check emails:**
   - Admin email (mail@webspires.co.uk) should receive notification
   - Customer email should receive confirmation

3. **View in admin:**
   - Login as admin (admin@pchapp.com)
   - Go to `/admin`
   - Orders should appear from database

## 6. Deploy

```bash
git add .
git commit -m "Add Turso database and Elastic Email integration"
git push
```

Vercel will automatically deploy the changes.

## Troubleshooting

### "Database not found" error
- Check TURSO_DATABASE_URL is correct
- Ensure auth token has not expired

### Emails not sending
- Verify ELASTIC_EMAIL_API_KEY in environment
- Check Elastic Email dashboard for sending status

### Orders not appearing in admin
- Visit `/api/init-db` to initialize database
- Check browser console for API errors
- Verify Turso credentials are set

## Database Schema

```sql
CREATE TABLE orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_number TEXT UNIQUE NOT NULL,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  shipping_address TEXT NOT NULL,
  shipping_city TEXT NOT NULL,
  shipping_postal_code TEXT NOT NULL,
  items TEXT NOT NULL,  -- JSON array
  total REAL NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## What's Working Now

✅ Orders saved to Turso database (persistent, not localStorage)
✅ Admin email notifications (mail@webspires.co.uk)
✅ Customer email confirmations
✅ Admin dashboard shows real orders from database
✅ Order numbers generated automatically (PCH-xxxxx format)
✅ Site remains fast (static product pages)
✅ Only checkout and admin are dynamic

## Next Steps

1. Set up Turso account
2. Create database and get credentials
3. Add to .env (local) and Vercel (production)
4. Initialize database by visiting /api/init-db
5. Test order flow
6. Deploy!
