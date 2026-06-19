import { useState } from 'react'
import { Link } from 'react-router-dom'
import PhotoPlaceholder from './PhotoPlaceholder.jsx'
import { institutionById } from '../data/institutions.js'

export default function FeedPost({ post }) {
  const inst = institutionById(post.institution)
  const [liked, setLiked] = useState(false)

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <PhotoPlaceholder name={post.author} color={inst?.color} size={42} />
        <div>
          <Link
            to={`/profile/${post.authorId}`}
            className="font-semibold text-slate-900 hover:text-blue-700"
          >
            {post.author}
          </Link>
          <p className="text-xs text-slate-500">
            {inst?.name} · {post.time}
          </p>
        </div>
      </div>

      <p className="mt-3 text-slate-700">{post.text}</p>

      <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
        <button
          type="button"
          onClick={() => setLiked((v) => !v)}
          className={`flex items-center gap-1 rounded-lg px-2 py-1 transition hover:bg-slate-100 ${
            liked ? 'text-rose-600' : ''
          }`}
        >
          <span>{liked ? '♥' : '♡'}</span>
          {post.likes + (liked ? 1 : 0)}
        </button>
        <span className="flex items-center gap-1 px-2 py-1">💬 {post.comments}</span>
      </div>
    </article>
  )
}
