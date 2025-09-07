# Ayurvedic Consultation Website – Full Stack

This repo contains both the **frontend** and **backend** for the Ayurvedic consultation platform for Dr. Ashim Aryan.

## 📂 Structure
- `frontend/` – Next.js frontend (App Router, i18n, booking, patient dashboard).
- `backend/` – Next.js API backend with Prisma + PostgreSQL, auth, payments, reminders.
- `VERCEL_ENV_VARS.md` – List of required environment variables for deployment.
- `SECURITY_CHECKLIST.md` – Security best practices.

## 🚀 Deployment on Vercel
1. Push repo to GitHub.
2. Connect GitHub repo to Vercel.
3. Set environment variables (from `VERCEL_ENV_VARS.md`) in Vercel project settings.
4. Deploy frontend and backend separately, or as monorepo with different builds.

## 🛡️ Security
- Secrets stored only in Vercel env vars.
- HTTPS enforced with HSTS.
- Webhooks validated for Stripe and Razorpay.
- Inputs validated and sanitized.

## 👤 Default Admin
After migration + seed, login with:
- **Email:** `admin@clinic.com`
- **Password:** `AdminPass123!`

## 🌱 Tech Stack
- **Frontend:** Next.js 13 (App Router), TailwindCSS, next-i18next
- **Backend:** Next.js API Routes, Prisma, PostgreSQL
- **Payments:** Razorpay, Stripe
- **Reminders:** Twilio (SMS), SendGrid (Email)
- **Auth:** JWT + bcrypt
- **Deployment:** Vercel
