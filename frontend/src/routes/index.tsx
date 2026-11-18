import { createFileRoute } from "@tanstack/react-router"
import { useQuery } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/")({
  component: Home,
})

function Home() {
  const { data, isPending, error, refetch } = useQuery({
    queryKey: ["health"],            // ключ кэша
    queryFn: async () => {           // как получить данные
      const res = await fetch("/api/health")
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return (await res.json()) as { status: string }
    },
  })

  if (isPending) return <p>Загрузка…</p>
  if (error) return <p className="text-red-600">Ошибка: {error.message}</p>

  return (
    <div className="space-y-4">
      <p>Статус бэкенда: {data.status}</p>
      <Button onClick={() => refetch()}>Обновить</Button>
    </div>
  )
}