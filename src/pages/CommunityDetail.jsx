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
          Back to communities
        </Link>
      </div>
    )
  }

  const messages = channelMessages[activeChannel] || channelMessages.default
  const channelName = community.channels.find((c) => c.id === activeChannel)?.name

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex items-center gap-3">
        <div
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-lg font-bold text-white"
          style={{ backgroundColor: community.color }}
        >
          {community.name[0]}
        </div>
        <div>
          <h1 className="text-xl font-bold text-slate-900">{community.name}</h1>
          <p className="text-sm text-slate-500">
            {community.members.toLocaleString()} members
          </p>
        </div>
      </div>

      <div className="mt-5 grid overflow-hidden rounded-xl border border-slate-200 bg-white sm:grid-cols-[180px_1fr]">
        <nav className="border-b border-slate-100 bg-slate-50 p-2 sm:border-b-0 sm:border-r">
          <ul className="flex flex-row gap-1 overflow-x-auto sm:flex-col">
            {community.channels.map((ch) => (
              <li key={ch.id}>
                <button
                  type="button"
                  onClick={() => setActiveChannel(ch.id)}
                  className={`w-full whitespace-nowrap rounded-lg px-3 py-2 text-left text-sm transition ${
                    activeChannel === ch.id
                      ? 'bg-blue-100 font-medium text-blue-700'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  # {ch.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex min-h-[300px] flex-col">
          <div className="flex flex-1 flex-col gap-3 p-4">
            {messages.map((m) => (
              <div key={m.id} className="flex gap-2.5">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-200 text-xs font-semibold text-slate-600">
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
              placeholder={`Message #${channelName ?? 'general'} (coming soon)`}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-400"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
