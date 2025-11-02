import React from 'react'

/**
 * Hero component – minimalist & elegant introductory banner for NullOverflow.
 * Highlights brand with gradient text and clear value prop.
 */
function Hero() {
  return (
    <section
      className="relative w-screen h-screen flex items-center justify-center px-6 py-16 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 -z-10" aria-hidden="true" />

      <div className="max-w-3xl text-center">
        {/* Brand heading */}
        <h1 className="flex items-center justify-center gap-1 text-[var(--fs-hero)] sm:text-[calc(var(--fs-hero)*0.9)] md:text-[var(--fs-hero)] font-extrabold tracking-tight text-white">
          {/* Null symbol */}
          <span className="font-light bg-clip-text bg-gradient-to-r text-[1em] text-[var(--color-null-purple)]">
            ∅
          </span>
          {/* Rest of the brand */}
          <span className="bg-clip-text bg-gradient-to-r text-[var(--color-overflow-blue)] text-[1em] font-semibold">
            Overflow()
          </span>
        </h1>

        {/* Tagline */}
        <p className="mt-6 text-[var(--fs-primary)] sm:text-[calc(var(--fs-primary)*0.9)] md:text-[var(--fs-primary)] text-white font-medium" style={{ color: '#ffffff' }}>
          AI-driven innovation, seamless digital experiences & cloud transformation.
        </p>
        <p className="mt-3 text-[var(--fs-secondary)] text-white max-w-xl mx-auto">
          We bridge research & real-world impact through precision engineering and a client-first mindset.
        </p>

        {/* Call-to-action buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 inline-block rounded-full text-white font-semibold shadow-md transition transform-gpu hover:shadow-lg hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1E83F3]"
            style={{ background: 'linear-gradient(135deg, #1E83F3 0%, #B464F3 100%)' }}
          >
            Start Your Transformation
          </a>
          <a
            href="#work"
            className="px-8 py-3 inline-block rounded-full border-2 border-white text-white font-semibold transition hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
