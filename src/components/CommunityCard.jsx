import { Link } from 'react-router-dom'

export default function CommunityCard({ community }) {
  return (
    <Link
      to={`/communities/${community.id}`}
      className="group flex flex-col gap-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="h-20 w-full" style={{ backgroundColor: community.color }} />
      <div className="flex flex-1 flex-col gap-2 p-5 pt-0">
        <div
          className="-mt-8 grid h-14 w-14 place-items-center rounded-xl border-4 border-white text-xl font-black text-white shadow"
          style={{ backgroundColor: community.color }}
        >
          {community.name[0]}
        </div>
        <h3 className="font-semibold text-slate-900 group-hover:text-blue-700">
          {community.name}
        </h3>
        <p className="text-sm text-slate-600">{community.tagline}</p>
        <p className="mt-auto text-xs font-medium text-slate-400">
          {community.members.toLocaleString()} members · {community.channels.length} channels
        </p>
      </div>
    </Link>
  )
}
