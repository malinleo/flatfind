import { createRootRouteWithContext, Link, Outlet } from "@tanstack/react-router"
import type { QueryClient } from "@tanstack/react-query"

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: () => (
    <>
      <nav className="flex gap-4 border-b p-4">
        <Link to="/" className="[&.active]:font-bold">Главная</Link>
        <Link to="/about" className="[&.active]:font-bold">О проекте</Link>
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
    </>
  ),
})