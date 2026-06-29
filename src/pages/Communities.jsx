import { communities } from '../data/communities.js'
import CommunityCard from '../components/CommunityCard.jsx'

export default function Communities() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold text-slate-900">Communities</h1>
      <p className="mt-1 text-sm text-slate-500">
        Channels for classes, transfer apps, and study groups
      </p>

      <div className="mt-6 flex flex-col gap-3">
        {communities.map((c) => (
          <CommunityCard key={c.id} community={c} />
        ))}
      </div>
    </div>
  )
}
