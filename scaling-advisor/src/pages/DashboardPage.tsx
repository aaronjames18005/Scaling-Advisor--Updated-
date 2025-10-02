import { Header } from "@/components/layout/header"
import { useAuth } from "@/hooks/useAuth"

export default function DashboardPage() {
  const { userId } = useAuth()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <p className="text-muted-foreground">
          Hello, user <code className="bg-muted px-1 rounded">{userId}</code>!
          Your scaling insights will appear here soon.
        </p>
      </main>
    </div>
  )
}
