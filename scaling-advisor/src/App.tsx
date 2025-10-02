import { createRootRoute, Outlet } from "@tanstack/react-router"
import { AuthProvider } from "@convex-dev/auth/react"
import { ConvexProvider, ConvexReactClient } from "convex/react"
import { Toaster } from "sonner"

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL)

export const Route = createRootRoute({
  component: () => (
    <ConvexProvider client={convex}>
      <AuthProvider>
        <div className="min-h-screen bg-background">
          <Outlet />
          <Toaster />
        </div>
      </AuthProvider>
    </ConvexProvider>
  ),
})
