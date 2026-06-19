import { useParams, Link } from 'react-router-dom'
import { studentById } from '../data/students.js'
import { institutionById } from '../data/institutions.js'
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx'

function Chip({ children, tone = 'slate' }) {
  const tones = {
    slate: 'bg-slate-100 text-slate-700',
    blue: 'bg-blue-50 text-blue-700',
    emerald: 'bg-emerald-50 text-emerald-700',
    violet: 'bg-violet-50 text-violet-700',
  }
  return (
    <span className={`rounded-full px-3 py-1 text-sm font-medium ${tones[tone]}`}>
      {children}
    </span>
  )
}

export default function Profile() {
  const { id } = useParams()
  const student = studentById(id)

  if (!student) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Student not found</h1>
        <Link to="/discover" className="mt-4 inline-block text-blue-600 hover:underline">
          ← Back to discover
        </Link>
      </div>
    )
  }

  const inst = institutionById(student.institution)

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link to="/discover" className="text-sm text-blue-600 hover:underline">
        ← Discover
      </Link>

      <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="h-24" style={{ backgroundColor: inst?.color }} />
        <div className="px-6 pb-6">
          <div className="-mt-10 flex items-end gap-4">
            <div className="rounded-full border-4 border-white">
              <PhotoPlaceholder name={student.name} color={inst?.color} size={88} />
            </div>
            <div className="pb-1">
              <h1 className="text-2xl font-bold text-slate-900">{student.name}</h1>
              <p className="text-sm text-slate-500">{inst?.name}</p>
            </div>
          </div>

          <p className="mt-4 text-slate-700">{student.bio}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Chip tone="blue">{student.major}</Chip>
            <Chip tone="emerald">GPA {student.gpa.toFixed(2)}</Chip>
            {student.transferGoals.map((g) => (
              <Chip key={g} tone="violet">
                🎯 {g}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-semibold text-slate-900">Courses</h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
            {student.courses.map((c) => (
              <li key={c} className="rounded-lg bg-slate-50 px-3 py-2">
                {c}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-semibold text-slate-900">Extracurriculars</h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
            {student.ecs.map((e) => (
              <li key={e} className="rounded-lg bg-slate-50 px-3 py-2">
                {e}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-semibold text-slate-900">Interests</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {student.interests.map((i) => (
              <Chip key={i}>{i}</Chip>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
