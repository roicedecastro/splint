import { useState } from 'react'
import { Link } from 'react-router-dom'
import { institutions } from '../data/institutions.js'

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', institution: '', major: '' })

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-3xl">
          ✅
        </div>
        <h1 className="mt-6 text-3xl font-bold text-slate-900">You're on the list!</h1>
        <p className="mt-3 text-slate-600">
          Thanks {form.name.split(' ')[0] || 'friend'} — we'll email{' '}
          <span className="font-medium text-slate-800">{form.email}</span> when Splint
          opens at {institutions.find((i) => i.id === form.institution)?.name || 'your campus'}.
        </p>
        <Link
          to="/home"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Preview the app
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900">Join the waitlist</h1>
      <p className="mt-2 text-slate-600">
        Be first in line when Splint launches at your community college.
      </p>

      <form
        onSubmit={onSubmit}
        name="waitlist"
        data-netlify="true"
        className="mt-8 flex flex-col gap-4"
      >
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
          Full name
          <input
            required
            value={form.name}
            onChange={update('name')}
            className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-blue-500"
            placeholder="Jordan Rivera"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={update('email')}
            className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-blue-500"
            placeholder="you@student.edu"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
          Community college
          <select
            required
            value={form.institution}
            onChange={update('institution')}
            className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-blue-500"
          >
            <option value="">Select your campus</option>
            {institutions.map((i) => (
              <option key={i.id} value={i.id}>
                {i.name}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
          Intended major
          <input
            value={form.major}
            onChange={update('major')}
            className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-blue-500"
            placeholder="Computer Science"
          />
        </label>

        <button
          type="submit"
          className="mt-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          Join waitlist
        </button>
      </form>
    </div>
  )
}
