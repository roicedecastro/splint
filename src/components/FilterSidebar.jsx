import { institutions } from '../data/institutions.js'
import { majors, interests } from '../data/students.js'

function Section({ title, children }) {
  return (
    <div className="border-b border-slate-100 py-3 last:border-0">
      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
        {title}
      </h3>
      {children}
    </div>
  )
}

export default function FilterSidebar({ filters, setFilters }) {
  const update = (key, value) => setFilters((f) => ({ ...f, [key]: value }))

  const toggleInterest = (interest) =>
    setFilters((f) => ({
      ...f,
      interests: f.interests.includes(interest)
        ? f.interests.filter((i) => i !== interest)
        : [...f.interests, interest],
    }))

  return (
    <aside className="h-fit rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-900">Filters</h2>
        <button
          type="button"
          onClick={() =>
            setFilters({ major: '', institution: '', minGpa: 0, interests: [] })
          }
          className="text-xs text-blue-600 hover:underline"
        >
          Reset
        </button>
      </div>

      <Section title="Major">
        <select
          value={filters.major}
          onChange={(e) => update('major', e.target.value)}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700"
        >
          <option value="">All majors</option>
          {majors.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </Section>

      <Section title="Institution">
        <select
          value={filters.institution}
          onChange={(e) => update('institution', e.target.value)}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700"
        >
          <option value="">All institutions</option>
          {institutions.map((i) => (
            <option key={i.id} value={i.id}>
              {i.name}
            </option>
          ))}
        </select>
      </Section>

      <Section title={`Min GPA: ${filters.minGpa.toFixed(1)}`}>
        <input
          type="range"
          min="0"
          max="4"
          step="0.1"
          value={filters.minGpa}
          onChange={(e) => update('minGpa', Number(e.target.value))}
          className="w-full accent-blue-600"
        />
      </Section>

      <Section title="Interests">
        <div className="flex flex-wrap gap-1.5">
          {interests.map((interest) => {
            const active = filters.interests.includes(interest)
            return (
              <button
                key={interest}
                type="button"
                onClick={() => toggleInterest(interest)}
                className={`rounded-full px-2.5 py-1 text-xs font-medium transition ${
                  active
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {interest}
              </button>
            )
          })}
        </div>
      </Section>
    </aside>
  )
}
