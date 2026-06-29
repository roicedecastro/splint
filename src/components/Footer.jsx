export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-slate-500 sm:flex-row">
        <span>Splint · for California community college students</span>
        <a href="mailto:splint.connect@gmail.com" className="hover:text-slate-800">
          splint.connect@gmail.com
        </a>
      </div>
    </footer>
  )
}
