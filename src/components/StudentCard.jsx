import { Link } from 'react-router-dom'
import PhotoPlaceholder from './PhotoPlaceholder.jsx'
import { institutionById } from '../data/institutions.js'

export default function StudentCard({ student }) {
  const inst = institutionById(student.institution)
  return (
    <Link
      to={`/profile/${student.id}`}
      className="group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <PhotoPlaceholder name={student.name} color={inst?.color} />
        <div className="min-w-0">
          <h3 className="truncate font-semibold text-slate-900 group-hover:text-blue-700">
            {student.name}
          </h3>
          <p className="truncate text-sm text-slate-500">{inst?.name}</p>
        </div>
      </div>

      <p className="line-clamp-2 text-sm text-slate-600">{student.bio}</p>

      <div className="mt-auto flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-blue-50 px-2 py-1 font-medium text-blue-700">
          {student.major}
        </span>
        <span className="rounded-full bg-emerald-50 px-2 py-1 font-medium text-emerald-700">
          GPA {student.gpa.toFixed(2)}
        </span>
      </div>
    </Link>
  )
}
