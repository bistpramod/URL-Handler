import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* logo area — swapped plain text for a small branded mark */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-bold text-white shadow-lg shadow-violet-500/30">
            U
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-white">URL Shortener</p>
            <p className="text-xs text-slate-400">Short links, long reach</p>
          </div>
        </div>

        {/* placeholder nav — easy to hook up later when you add routes */}
        <nav className="hidden items-center gap-6 text-sm text-slate-400 sm:flex">
          <span className="cursor-default hover:text-white transition-colors">Home</span>
          <span className="cursor-default hover:text-white transition-colors">My Links</span>
        </nav>
      </div>
    </header>
  )
}

export default Header
