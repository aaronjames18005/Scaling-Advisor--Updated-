import { Button } from "@/components/ui/button"
import { useSignIn } from "@convex-dev/auth/react"

export default function AuthPage() {
  const { signIn } = useSignIn()

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8 max-w-md">
        <h1 className="text-3xl font-bold">Welcome to Scaling Advisor</h1>
        <p className="text-muted-foreground">
          Sign in to get personalized scaling recommendations.
        </p>
        <Button onClick={() => signIn("github")} className="w-full">
          Sign in with GitHub
        </Button>
      </div>
    </div>
  )
}
