import { render, screen } from "@testing-library/react"
import AuthPage from "@/pages/AuthPage"

test("renders sign in button", () => {
  render(<AuthPage />)
  expect(screen.getByText(/Sign in with GitHub/i)).toBeInTheDocument()
})
