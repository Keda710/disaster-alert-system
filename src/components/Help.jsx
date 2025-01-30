import { disasters } from "../data/disasters"
import { DisasterCard } from "../components/DisasterCard"

export default function Help() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-transparent p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Disaster Management</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl lg:grid-cols-3 gap-6  ">
          {disasters.map((disaster) => (
            <DisasterCard key={disaster.id} info={disaster} />
          ))}
        </div>
      </div>
    </main>
  )
}

