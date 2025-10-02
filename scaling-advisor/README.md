# Scaling Advisor

Personalized infrastructure scaling recommendations powered by AI and real-time metrics.

## ✨ Features
- GitHub OAuth login via Convex Auth
- Responsive dashboard with Tailwind + shadcn/ui
- Full-stack type safety with Convex
- CI/CD, testing, and error monitoring ready

## 🛠️ Tech Stack
- **Frontend**: React + Vite + TypeScript + Tailwind v4
- **UI**: shadcn/ui + Framer Motion
- **Backend**: Convex (database + auth + serverless)
- **Routing**: TanStack Router
- **Testing**: Vitest + React Testing Library
- **CI**: GitHub Actions
- **Monitoring**: Sentry

## 🚀 Setup

1. Clone repo
   ```bash
   git clone https://github.com/your-username/scaling-advisor.git
   cd scaling-advisor
   ```

2. Install dependencies
   ```bash
   pnpm install
   ```

3. Set up environment
   ```bash
   cp .env.example .env.local
   # Fill in values from Convex dashboard + GitHub OAuth
   ```

4. Run dev server
   ```bash
   pnpm dev
   ```

5. Build for production
   ```bash
   pnpm build
   ```

## 🧪 Testing
```bash
pnpm test          # watch mode
pnpm test:ci       # single run
```

## 📦 Deployment
- Frontend: Vercel / Netlify
- Backend: `npx convex deploy`

> See `ARCHITECTURE.md` for full system design.
