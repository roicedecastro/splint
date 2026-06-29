import { Link } from 'react-router-dom'
import { institutions } from '../data/institutions.js'

const features = [
  {
    title: 'Find your people',
    body: 'Match with transfer-minded students by major, courses, GPA, and interests.',
  },
  {
    title: 'Join communities',
    body: 'Discord-style communities with channels for every class and campus.',
  },
  {
    title: 'Stay motivated',
    body: 'Share wins, find study partners, and keep each other accountable.',
  },
]

export default function Landing() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-slate-50" />
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:py-28">
          <p className="text-sm font-medium text-blue-700">
            For California community college students
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            The social network for{' '}
            <span className="text-blue-600">transfer-minded</span> CC students
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Connect with peers at your community college or across campuses, share
            stats, find study partners, and stay motivated together.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/waitlist"
              className="rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-700"
            >
              Join the waitlist
            </Link>
            <Link
              to="/home"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Preview the app
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title}>
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 text-center">
        <p className="text-sm text-slate-500">
          Launching at {institutions.map((i) => i.name).join(', ')}
        </p>
      </section>
    </div>
  )
}
