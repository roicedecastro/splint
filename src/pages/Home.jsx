import { feed } from '../data/feed.js'
import { communities } from '../data/communities.js'
import FeedPost from '../components/FeedPost.jsx'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[1fr_300px]">
      <div className="flex flex-col gap-5">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          Preview mode — this is a sneak peek of the Splint feed with sample data.
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Your feed</h1>
        {feed.map((post) => (
          <FeedPost key={post.id} post={post} />
        ))}
      </div>

      <aside className="hidden h-fit flex-col gap-4 lg:flex">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-semibold text-slate-900">Popular communities</h2>
          <ul className="mt-3 flex flex-col gap-3">
            {communities.slice(0, 4).map((c) => (
              <li key={c.id}>
                <Link
                  to={`/communities/${c.id}`}
                  className="flex items-center gap-3 text-sm hover:text-blue-700"
                >
                  <span
                    className="grid h-8 w-8 place-items-center rounded-lg text-xs font-black text-white"
                    style={{ backgroundColor: c.color }}
                  >
                    {c.name[0]}
                  </span>
                  <span className="font-medium text-slate-700">{c.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/communities"
            className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
          >
            Browse all →
          </Link>
        </div>
      </aside>
    </div>
  )
}
