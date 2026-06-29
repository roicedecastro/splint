import { Link } from 'react-router-dom'

export default function CommunityCard({ community }) {
  return (
    <Link
      to={`/communities/${community.id}`}
      className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-200"
    >
      <div
        className="grid h-12 w-12 shrink-0 place-items-center rounded-lg text-lg font-bold text-white"
        style={{ backgroundColor: community.color }}
      >
        {community.name[0]}
      </div>
      <div className="min-w-0">
        <h3 className="font-semibold text-slate-900 group-hover:text-blue-700">
          {community.name}
        </h3>
        <p className="mt-0.5 line-clamp-2 text-sm text-slate-600">{community.tagline}</p>
        <p className="mt-2 text-xs text-slate-400">
          {community.members.toLocaleString()} members
        </p>
      </div>
    </Link>
  )
}
