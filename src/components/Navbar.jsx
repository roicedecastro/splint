import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/home', label: 'Feed' },
  { to: '/discover', label: 'Discover' },
  { to: '/communities', label: 'Communities' },
  { to: '/about', label: 'About' },
]

function NavLinks({ onNavigate, className = '' }) {
  return (
    <div className={className}>
      {links.map((l) => (
        <NavLink
          key={l.to}
          to={l.to}
          onClick={onNavigate ? () => onNavigate() : undefined}
          className={({ isActive }) =>
            `rounded-lg px-3 py-2 text-sm font-medium transition ${
              isActive
                ? 'bg-blue-50 text-blue-700'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`
          }
        >
          {l.label}
        </NavLink>
      ))}
    </div>
  )
}

export default function Navbar({ appPreview }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const onWaitlist = pathname === '/waitlist'

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-blue-600 font-black text-white">
            S
          </span>
          <span className="truncate text-lg font-bold tracking-tight text-slate-900">
            Splint
          </span>
          {appPreview && (
            <span className="hidden rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500 sm:inline">
              Preview
            </span>
          )}
        </Link>

        <NavLinks className="hidden items-center gap-1 md:flex" />

        <div className="flex items-center gap-2">
          {!appPreview && !onWaitlist && (
            <Link
              to="/waitlist"
              className="hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 sm:inline-flex"
            >
              Join waitlist
            </Link>
          )}

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label="Menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-100 px-4 py-3 md:hidden">
          <NavLinks
            className="flex flex-col gap-1"
            onNavigate={() => setMenuOpen(false)}
          />
          {!appPreview && !onWaitlist && (
            <Link
              to="/waitlist"
              onClick={() => setMenuOpen(false)}
              className="mt-3 block rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Join waitlist
            </Link>
          )}
        </div>
      )}
    </header>
  )
}
