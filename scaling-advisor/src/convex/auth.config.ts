import { convexAuth } from "@convex-dev/auth/server"
import { GitHub } from "@convex-dev/auth/providers"

export const { auth, signIn, signOut } = convexAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
})
