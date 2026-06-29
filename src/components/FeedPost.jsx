import { useState } from 'react'
import { Link } from 'react-router-dom'
import PhotoPlaceholder from './PhotoPlaceholder.jsx'
import { institutionById } from '../data/institutions.js'

export default function FeedPost({ post }) {
  const inst = institutionById(post.institution)
  const [liked, setLiked] = useState(false)

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-center gap-3">
        <PhotoPlaceholder name={post.author} color={inst?.color} size={40} />
        <div className="min-w-0">
          <Link
            to={`/profile/${post.authorId}`}
            className="font-semibold text-slate-900 hover:text-blue-700"
          >
            {post.author}
          </Link>
          <p className="truncate text-xs text-slate-500">
            {inst?.name} · {post.time}
          </p>
        </div>
      </div>

      <p className="mt-3 text-sm text-slate-700">{post.text}</p>

      <div className="mt-3 flex items-center gap-3 text-xs text-slate-500">
        <button
          type="button"
          onClick={() => setLiked((v) => !v)}
          className={`transition hover:text-slate-700 ${liked ? 'text-rose-600' : ''}`}
        >
          {liked ? '♥' : '♡'} {post.likes + (liked ? 1 : 0)}
        </button>
        <span>{post.comments} comments</span>
      </div>
    </article>
  )
}
