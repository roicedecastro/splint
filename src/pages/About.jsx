import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900">What is Splint?</h1>
      <p className="mt-4 text-lg text-slate-600">
        Splint is the social network built for California community college students
        who are serious about transferring. Community college can feel isolating —
        Splint connects you with peers who share your goals, classes, and ambition.
      </p>

      <ul className="mt-8 space-y-4 text-slate-600">
        <li>
          <span className="font-medium text-slate-900">Connect across campuses</span>
          {' — '}
          Find transfer-minded students by major, courses, GPA, and interests.
        </li>
        <li>
          <span className="font-medium text-slate-900">Build community</span>
          {' — '}
          Join channels for classes, transfer apps, and study groups.
        </li>
        <li>
          <span className="font-medium text-slate-900">Stay motivated</span>
          {' — '}
          Share wins and keep each other accountable on the road to transfer.
        </li>
      </ul>

      <div className="mt-10">
        <Link
          to="/waitlist"
          className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Join the waitlist
        </Link>
      </div>
    </div>
  )
}
