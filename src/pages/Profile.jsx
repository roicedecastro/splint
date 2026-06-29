import { useParams, Link } from 'react-router-dom'
import { studentById } from '../data/students.js'
import { institutionById } from '../data/institutions.js'
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx'

export default function Profile() {
  const { id } = useParams()
  const student = studentById(id)

  if (!student) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Student not found</h1>
        <Link to="/discover" className="mt-4 inline-block text-blue-600 hover:underline">
          Back to discover
        </Link>
      </div>
    )
  }

  const inst = institutionById(student.institution)

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Link to="/discover" className="text-sm text-slate-500 hover:text-blue-600">
        ← Discover
      </Link>

      <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="h-16" style={{ backgroundColor: inst?.color }} />
        <div className="px-5 pb-5">
          <div className="-mt-8 flex items-end gap-4">
            <div className="rounded-full border-4 border-white">
              <PhotoPlaceholder name={student.name} color={inst?.color} size={72} />
            </div>
            <div className="pb-1">
              <h1 className="text-xl font-bold text-slate-900">{student.name}</h1>
              <p className="text-sm text-slate-500">
                {inst?.name} · {student.major} · GPA {student.gpa.toFixed(2)}
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-700">{student.bio}</p>

          {student.transferGoals.length > 0 && (
            <p className="mt-3 text-sm text-slate-600">
              <span className="font-medium text-slate-800">Transfer goals:</span>{' '}
              {student.transferGoals.join(', ')}
            </p>
          )}

          <div className="mt-6 grid gap-6 border-t border-slate-100 pt-6 sm:grid-cols-3">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Courses
              </h2>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                {student.courses.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Extracurriculars
              </h2>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                {student.ecs.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Interests
              </h2>
              <p className="mt-2 text-sm text-slate-600">{student.interests.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
