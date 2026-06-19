import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900">What is Splint?</h1>
      <p className="mt-4 text-lg text-slate-600">
        Splint is the social network built for California community college students
        who are serious about transferring. Community college can feel isolating —
        Splint connects you with peers who share your goals, classes, and ambition.
      </p>

      <div className="mt-8 flex flex-col gap-5">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Connect across campuses</h2>
          <p className="mt-1 text-slate-600">
            Find transfer-minded students at your CC or across the state. Filter by
            major, courses, GPA, extracurriculars, and interests.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Build community</h2>
          <p className="mt-1 text-slate-600">
            Join communities with dedicated channels for classes, transfer apps, and
            study groups — so you never grind alone.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Stay motivated</h2>
          <p className="mt-1 text-slate-600">
            Share wins, swap advice, and keep each other accountable on the road to
            transfer.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
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
