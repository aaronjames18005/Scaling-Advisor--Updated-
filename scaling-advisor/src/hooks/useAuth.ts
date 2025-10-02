import { useAuthInfo } from "@convex-dev/auth/react"
import { useMutation } from "convex/react"
import { api } from "../../convex/_generated/api"

export function useAuth() {
  const authInfo = useAuthInfo()
  const signOutMutation = useMutation(api.auth.signOut)

  const signOut = async () => {
    await signOutMutation()
  }

  return {
    isAuthenticated: authInfo.isAuthenticated,
    isLoading: authInfo.isLoading,
    signOut,
    userId: authInfo.userId,
  }
}
