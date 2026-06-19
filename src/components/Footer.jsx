import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded bg-blue-600 text-xs font-black text-white">
            S
          </span>
          <span className="font-semibold text-slate-700">Splint</span>
          <span>· for California community college students</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/about" className="hover:text-slate-800">
            About
          </Link>
          <Link to="/discover" className="hover:text-slate-800">
            Discover
          </Link>
          <Link to="/waitlist" className="hover:text-slate-800">
            Waitlist
          </Link>
          <a href="mailto:splint.connect@gmail.com" className="hover:text-slate-800">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
