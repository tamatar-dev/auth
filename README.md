# 🔐 Tamatar Auth

Centralized authentication microservice for the [Tamatar ecosystem](https://tamatar.dev), built with modern Bun stack.

## 💡 Stack
- ⚡ Bun + Hono
- 🧠 Drizzle ORM + Postgres
- 🔐 JWT & bcrypt-based auth
- ✉️ Resend + React Email
- 🔐 Secrets managed with Doppler

## 🧱 Features
- Email/password signup & login
- JWT-based access & refresh tokens
- Refresh token sessions stored in DB
- Email verification (via Resend)
- Fully stateless API (no cookies handled)

## 📁 Structure
- `src/` - routes, services, utils
- `drizzle/` - schema & migrations
- `.env.example` - configuration

## 🛠 Setup

```bash
bun install
bun run dev

