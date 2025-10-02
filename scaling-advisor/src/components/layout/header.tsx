import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"

export function Header() {
  const { signOut, isAuthenticated } = useAuth()

  return (
    <header className="border-b p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Scaling Advisor</h1>
      {isAuthenticated && (
        <Button variant="outline" onClick={() => signOut()}>
          Sign Out
        </Button>
      )}
    </header>
  )
}
