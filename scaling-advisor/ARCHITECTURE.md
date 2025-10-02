# Architecture Overview

## Stack
- **Frontend**: React + Vite + TypeScript + Tailwind v4 + shadcn/ui
- **Routing**: TanStack Router (React Router v7 compatible)
- **Backend**: Convex (database, auth, serverless functions)
- **Auth**: Convex Auth with GitHub OAuth
- **Testing**: Vitest + React Testing Library
- **CI**: GitHub Actions
- **Monitoring**: Sentry (frontend)

## Data Flow
1. User visits app → routed to `AuthPage` if not signed in.
2. On GitHub login, Convex Auth creates session.
3. Authenticated users access `DashboardPage`.
4. All data mutations/queries go through Convex actions/queries.

## Folder Structure
- `src/convex/`: Convex schema, auth config
- `src/pages/`: Route components
- `src/components/`: Reusable UI
- `src/hooks/`: Custom hooks (e.g., `useAuth`)

## Deployment
- Frontend: Vercel/Netlify (static)
- Backend: Convex Cloud (auto-deployed via `npx convex deploy`)
