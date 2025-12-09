import React, { useState, useEffect } from 'react'

function Navbar() {
  const [hidden, setHidden] = React.useState(false)
  const [lastScrollY, setLastScrollY] = React.useState(0)
  const [menuOpen, setMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      if (current > lastScrollY && current > 100) {
        // scrolling down
        setHidden(true)
      } else if (current < lastScrollY) {
        // scrolling up
        setHidden(false)
      }
      setLastScrollY(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 bg-opacity-80 border-b border-white/20 shadow-sm transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
      >
        {/* Container for brand and hamburger */}
        <div className="flex items-center justify-between px-6 py-4">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-1 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            <span className="font-light bg-clip-text bg-gradient-to-r text-[1em] text-[var(--color-null-purple)]">∅</span>
            <span className="bg-clip-text bg-gradient-to-r text-[var(--color-overflow-blue)] text-[1em]">Overflow()</span>
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
            <li><a href="#services" className="hover:text-[var(--color-null-purple)] transition">Services</a></li>
            <li><a href="#projects" className="hover:text-[var(--color-null-purple)] transition">Projects</a></li>
            <li><a href="#research" className="hover:text-[var(--color-null-purple)] transition">Research</a></li>
            <li><a href="#contact" className="hover:text-[var(--color-null-purple)] transition">Contact</a></li>
          </ul>
        </div>

        {/* Mobile menu */}
        <ul className={`md:hidden flex flex-col items-center gap-4 text-white font-medium backdrop-blur-md bg-white/20 border-t border-white/30 shadow-md transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-64 py-4' : 'max-h-0'}`}>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#research" onClick={closeMenu}>Research</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar