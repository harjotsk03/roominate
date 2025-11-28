export default function Footer() {
  return (
    <footer className="w-full bg-[#595675] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Top section */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <p className="text-2xl font-semibold tracking-wide">Roominate</p>
            <p className="mt-2 max-w-sm text-sm text-white/70">
              Designing better room experiences, from idea to prototype.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex gap-6 text-sm">
            <a href="/" className="transition-opacity hover:opacity-80">
              Home
            </a>
            <a href="/process" className="transition-opacity hover:opacity-80">
              Process
            </a>
            <a href="/team" className="transition-opacity hover:opacity-80">
              Team
            </a>
            <a
              href="/prototype"
              className="transition-opacity hover:opacity-80"
            >
              Prototype
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-white/20" />

        {/* Bottom section */}
        <div className="flex flex-col gap-2 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Roominate. All rights reserved.</p>
          <p>Built with care and curiosity ✨</p>
        </div>
      </div>
    </footer>
  );
}
