import { Link } from 'react-router-dom'
import PhotoPlaceholder from './PhotoPlaceholder.jsx'
import { institutionById } from '../data/institutions.js'

export default function StudentCard({ student }) {
  const inst = institutionById(student.institution)
  return (
    <Link
      to={`/profile/${student.id}`}
      className="group flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-200"
    >
      <div className="flex items-center gap-3">
        <PhotoPlaceholder name={student.name} color={inst?.color} />
        <div className="min-w-0">
          <h3 className="truncate font-semibold text-slate-900 group-hover:text-blue-700">
            {student.name}
          </h3>
          <p className="truncate text-sm text-slate-500">
            {student.major} · GPA {student.gpa.toFixed(2)}
          </p>
        </div>
      </div>

      <p className="line-clamp-2 text-sm text-slate-600">{student.bio}</p>
      <p className="truncate text-xs text-slate-400">{inst?.name}</p>
    </Link>
  )
}
