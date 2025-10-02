import { ConvexReactClient } from "convex/react"

export const convex = new ConvexReactClient(
  process.env.VITE_CONVEX_URL!
)
