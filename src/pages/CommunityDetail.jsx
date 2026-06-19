import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { communityById, channelMessages } from '../data/communities.js'

export default function CommunityDetail() {
  const { id } = useParams()
  const community = communityById(id)
  const [activeChannel, setActiveChannel] = useState(
    community?.channels[0]?.id ?? null,
  )

  if (!community) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Community not found</h1>
        <Link to="/communities" className="mt-4 inline-block text-blue-600 hover:underline">
          ← Back to communities
        </Link>
      </div>
    )
  }

  const messages = channelMessages[activeChannel] || channelMessages.default

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Link to="/communities" className="text-sm text-blue-600 hover:underline">
        ← All communities
      </Link>

      <div className="mt-3 flex items-center gap-4">
        <div
          className="grid h-14 w-14 place-items-center rounded-xl text-2xl font-black text-white"
          style={{ backgroundColor: community.color }}
        >
          {community.name[0]}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{community.name}</h1>
          <p className="text-sm text-slate-500">
            {community.members.toLocaleString()} members
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:grid-cols-[200px_1fr]">
        <nav className="border-b border-slate-100 bg-slate-50 p-3 sm:border-b-0 sm:border-r">
          <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Channels
          </p>
          <ul className="flex flex-row gap-1 overflow-x-auto sm:flex-col">
            {community.channels.map((ch) => (
              <li key={ch.id}>
                <button
                  type="button"
                  onClick={() => setActiveChannel(ch.id)}
                  className={`w-full whitespace-nowrap rounded-lg px-3 py-2 text-left text-sm font-medium transition ${
                    activeChannel === ch.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  # {ch.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex min-h-[320px] flex-col">
          <div className="border-b border-slate-100 px-4 py-3 text-sm font-semibold text-slate-700">
            # {community.channels.find((c) => c.id === activeChannel)?.name}
          </div>
          <div className="flex flex-1 flex-col gap-4 p-4">
            {messages.map((m) => (
              <div key={m.id} className="flex gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-200 text-xs font-semibold text-slate-600">
                  {m.author
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="text-sm">
                    <span className="font-semibold text-slate-900">{m.author}</span>{' '}
                    <span className="text-xs text-slate-400">{m.time}</span>
                  </p>
                  <p className="text-sm text-slate-700">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-100 p-3">
            <input
              disabled
              placeholder="Messaging coming soon…"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-400"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
