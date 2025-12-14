import React from 'react'

function Footer() {
  return (
    <footer className="relative w-full px-6 py-16 bg-transparent">
      <div className="max-w-7xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-10 md:p-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">NullOverflow</h3>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              AI-driven innovation, seamless digital experiences & cloud transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Projects', 'Team', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/70 text-sm hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-3">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Email: hello@nulloverflow.ai</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Innovation Way, Silicon Valley, CA</li>
            </ul>
            {/* Social icons */}
            <div className="flex items-center mt-4 space-x-4">
              {['fab fa-linkedin-in', 'fab fa-github', 'fab fa-twitter'].map((icon) => (
                <span key={icon} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition">
                  <i className={icon}></i>
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/50">
          © {new Date().getFullYear()} NullOverflow. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
