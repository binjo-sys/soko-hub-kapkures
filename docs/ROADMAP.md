# SOKO HUB build roadmap

Launch area: **Kapkures, Kenya**. The service-area setting is stored on marketplace records so the platform can expand later without redesigning the data model.

## Milestone 1 — Storefront foundation
- [x] Mobile-first storefront and product discovery preview
- [x] Category filters and product search
- [x] Sample product cards and basket counter
- [x] Seller information page preview

## Milestone 2 — Data foundation
- [x] Initial Cloudflare D1 schema
- [x] Seller application review states
- [x] Shops, products, orders, order items, and payment records
- [ ] Create the D1 database in the owner's Cloudflare account
- [ ] Apply and verify the migration

## Milestone 3 — Accounts and seller onboarding
- [ ] Phone-number authentication with secure verification
- [ ] Seller application submission endpoint
- [ ] Admin review and seller approval
- [ ] Seller dashboard and shop profile management
- [ ] Server-side role and ownership checks

## Milestone 4 — Marketplace transactions
- [ ] Seller product management and image uploads
- [ ] Real basket persisted to the database
- [ ] Checkout with pickup or Kapkures local delivery
- [ ] Order management for customers and sellers
- [ ] M-PESA Daraja STK Push and verified callbacks

## Milestone 5 — Launch readiness
- [ ] Admin dashboard and audit trail
- [ ] Privacy, terms, refunds, and seller policies
- [ ] Security and mobile usability testing
- [ ] Cloudflare deployment and custom domain
- [ ] Pilot with a small group of Kapkures sellers

Do not accept live orders or payments until authentication, authorization, stock validation, order persistence, and payment verification have been tested.
