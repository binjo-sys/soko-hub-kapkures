# SOKO HUB database setup

SOKO HUB uses Cloudflare D1 (SQLite) as the planned application database.

## Initial migration

From the project root, after installing Wrangler and authenticating with the correct Cloudflare account:

```bash
npx wrangler d1 create soko-hub-db
```

Add the returned database ID to the project's Wrangler configuration as a D1 binding named `DB`, with `migrations_dir = "migrations"`.

Apply the schema to the remote database:

```bash
npx wrangler d1 migrations apply soko-hub-db --remote
```

For local development, use:

```bash
npx wrangler d1 migrations apply soko-hub-db --local
```

## Current schema

`migrations/0001_initial_schema.sql` creates:

- Phone-number user accounts with customer, seller, and admin roles.
- Seller applications with pending/approved/rejected review states.
- Shops and product categories.
- Products with KSh prices and stock quantities.
- Customer orders and order items.
- M-PESA transaction records (the payment integration is not active yet).

The first migration also seeds the initial product categories.

## Security requirements before launch

- Do not commit Cloudflare database IDs that are private to another environment, API tokens, Daraja credentials, OTP secrets, or passwords.
- Enforce role checks on the server for every seller and admin operation.
- Validate prices and stock on the server; never trust totals sent by a browser.
- Verify M-PESA callbacks and reconcile payment status server-side.
- Keep seller applications private until an administrator approves them.
- Restrict orders and customer information to the relevant customer, seller, and authorized administrators.

The schema is the database foundation only. Authentication, API routes, seller approval actions, checkout, and payment callbacks still need implementation before real users can transact.
