import { feed } from '../data/feed.js'
import { communities } from '../data/communities.js'
import FeedPost from '../components/FeedPost.jsx'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[1fr_260px]">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Your feed</h1>
          <p className="mt-1 text-sm text-slate-500">Sample posts from transfer-minded students</p>
        </div>
        {feed.map((post) => (
          <FeedPost key={post.id} post={post} />
        ))}
      </div>

      <aside className="hidden h-fit lg:block">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="text-sm font-semibold text-slate-900">Communities</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {communities.slice(0, 4).map((c) => (
              <li key={c.id}>
                <Link
                  to={`/communities/${c.id}`}
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-700"
                >
                  <span
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-md text-xs font-bold text-white"
                    style={{ backgroundColor: c.color }}
                  >
                    {c.name[0]}
                  </span>
                  <span className="truncate font-medium">{c.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/communities"
            className="mt-3 inline-block text-sm text-blue-600 hover:underline"
          >
            See all
          </Link>
        </div>
      </aside>
    </div>
  )
}
