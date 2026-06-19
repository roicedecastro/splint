import { useMemo, useState } from 'react'
import { students } from '../data/students.js'
import StudentCard from '../components/StudentCard.jsx'
import FilterSidebar from '../components/FilterSidebar.jsx'

export default function Discover() {
  const [filters, setFilters] = useState({
    major: '',
    institution: '',
    minGpa: 0,
    interests: [],
  })

  const results = useMemo(() => {
    return students.filter((s) => {
      if (filters.major && s.major !== filters.major) return false
      if (filters.institution && s.institution !== filters.institution) return false
      if (s.gpa < filters.minGpa) return false
      if (
        filters.interests.length &&
        !filters.interests.every((i) => s.interests.includes(i))
      )
        return false
      return true
    })
  }, [filters])

  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[280px_1fr]">
      <FilterSidebar filters={filters} setFilters={setFilters} />

      <div>
        <div className="mb-5 flex items-baseline justify-between">
          <h1 className="text-2xl font-bold text-slate-900">Discover students</h1>
          <span className="text-sm text-slate-500">
            {results.length} {results.length === 1 ? 'match' : 'matches'}
          </span>
        </div>

        {results.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
            No students match these filters. Try loosening them.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {results.map((s) => (
              <StudentCard key={s.id} student={s} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
