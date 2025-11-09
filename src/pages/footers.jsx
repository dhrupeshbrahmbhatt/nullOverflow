import React, { memo, useCallback, useState } from 'react';

// Social icons data
const SOCIAL_LINKS = [
  {
    name: 'Behance',
    path: 'M20.07 6.35H15v1.33h5.07V6.35zM19.5 14.5c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5c0 1.93 1.57 3.5 3.5 3.5 1.4 0 2.6-.82 3.16-2h-2.32c-.25.3-.63.5-1.07.5-.83 0-1.5-.67-1.5-1.5h5.22c.01-.17.01-.33.01-.5zM14.5 13.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5h-3zM9.5 9C8.67 9 8 9.67 8 10.5S8.67 12 9.5 12c.17 0 .33-.03.5-.08v3.58c0 .83-.67 1.5-1.5 1.5H7c-.83 0-1.5-.67-1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5S2.5 10.67 2.5 11.5v4c0 1.93 1.57 3.5 3.5 3.5h1.5c1.93 0 3.5-1.57 3.5-3.5V10.5C11 9.67 10.33 9 9.5 9z',
    fill: 'currentColor'
  },
  {
    name: 'Dribbble',
    stroke: 'currentColor',
    paths: ['M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z', 'M2 12c5 0 10-3 10-10M12 2c0 7 3 12 10 12M22 12c-7 0-12 3-12 10M12 22c0-5-3-10-10-10']
  },
  {
    name: 'Twitter',
    path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
    fill: 'currentColor'
  },
  {
    name: 'GitHub',
    path: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z',
    fill: 'currentColor'
  }
];

const NAV_LINKS = [
  { text: 'Home', active: false },
  { text: 'Portfolio', active: false },
  { text: 'Services', active: false },
  { text: 'Contact', active: false },
  { text: 'Blog', active: false }
];

const POLICY_LINKS = ['Privacy Policy', 'Terms and conditions', 'Cookie Policy', 'Careers'];

const LOCATIONS = [
  { title: 'Canada', address: '71 South Los Carneros Road,\nCalifornia +51 174 705 812' }
];

const BRAND_NAME = '∅verflow';

// Memoized SocialIcon component
const SocialIcon = memo(({ name, path, paths, fill, stroke }) => (
  <a href="#" className="social-icon" aria-label={name}>
    <svg width="22" height="22" viewBox="0 0 24 24" fill={fill || 'none'} stroke={stroke} strokeWidth={stroke ? '2' : undefined}>
      {paths ? paths.map((p, i) => <path key={i} d={p} />) : <path d={path} />}
    </svg>
  </a>
));

SocialIcon.displayName = 'SocialIcon';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  }, [email]);

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Column - Brand and Newsletter */}
        <div className="footer-column brand-column">
          <div className="brand">
            <span className="brand-name">{BRAND_NAME}</span>
          </div>

          <p className="newsletter-text">Subscribe our newsletter:</p>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="ENTER OUR EMAIL"
              className="email-input"
              value={email}
              onChange={handleEmailChange}
              aria-label="Email address"
            />
            <button type="submit" className="submit-btn" aria-label="Subscribe">
              <div className='mil-button mil-arrow-place mil-icon-button mil-arrow-right'></div>
            </button>
          </form>

          <div className="social-links">
            {SOCIAL_LINKS.map(link => (
              <SocialIcon key={link.name} {...link} />
            ))}
          </div>

          <p className="copyright">© Copyright 2023 - Mil. All Rights Reserved.</p>
        </div>

        {/* Middle Column - Navigation */}
        <nav className="footer-column nav-column">
          {NAV_LINKS.map(link => (
            <a
              key={link.text}
              href="#"
              className={`nav-link ${link.active ? 'active' : ''}`}
            >
              {link.text}
            </a>
          ))}
        </nav>

        {/* Right Column - Policies and Locations */}
        <div className="footer-column info-column">
          <div className="policies">
            {POLICY_LINKS.map(policy => (
              <a key={policy} href="#" className="policy-link">{policy}</a>
            ))}
          </div>

          <div className="locations">
            {LOCATIONS.map(location => (
              <div key={location.title} className="location">
                <h3 className="location-title">{location.title}</h3>
                <p className="location-address">
                  {location.address.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < location.address.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top Button - Right Side */}
      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
        <span className="back-to-top-text">BACK TO TOP</span>
      </button>
    </footer>
  );
};

// Inline styles
const styles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

.footer {
  background-color: #000000;
  color: #ffffff;
  padding: 100px 200px 100px;
  position: relative;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
  min-height: 700px;
}

.footer-container {
  display: grid;
  grid-template-columns: 420px 300px 1fr;
  gap: 100px;
  max-width: 1600px;
  margin: 0 auto;
  position: relative;
}

/* Brand Column */
.brand-column {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.brand {
  display: flex;
  align-items: flex-start;
  gap: 0;
  margin-bottom: 10px;
}

.brand-letter {
  font-size: 96px;
  font-weight: 300;
  color: #ffffff;
  line-height: 0.9;
  letter-spacing: -2px;
}

.brand-name {
  font-size: 52px;
  font-weight: 300;
  color: #ffffff;
  line-height: 0.9;
  margin-left: 0;
  letter-spacing: -1px;
}

.newsletter-text {
  color: #888888;
  font-size: 15px;
  margin-bottom: -5px;
  font-weight: 400;
}

.newsletter-form {
  display: flex;
  align-items: center;
  background-color: #1a1a1a;
  border-radius: 60px;
  padding: 0px 8px 0px 0px;
  max-width: 400px;
  width: 100%;
  height: 60px;
  transition: background-color 0.3s ease;
}

.newsletter-form:focus-within {
  background-color: #222222;
}

.email-input {
  flex: 1;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 13px;
  letter-spacing: 1px;
  outline: none;
  font-weight: 400;
  padding: 0 35px;
  text-align: left;
}

.email-input::placeholder {
  color: #666666;
  letter-spacing: 1px;
  font-size: 13px;
}

.submit-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ff9500;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background-color: #ffa726;
  transform: scale(1.05);
}

.submit-btn:active {
  transform: scale(0.95);
}

.social-links {
  display: flex;
  gap: 24px;
  margin-top: 30px;
}

.social-icon {
  color: #ffffff;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.social-icon:hover {
  color: #ff9500;
  transform: translateY(-2px);
}

.copyright {
  color: #555555;
  font-size: 13px;
  margin-top: 60px;
  font-weight: 400;
}

.homepage-label {
  color: #666666;
  font-size: 10px;
  letter-spacing: 3px;
  font-weight: 500;
  writing-mode: vertical-rl;
  position: absolute;
  left: 30px;
  bottom: 60px;
  transform: rotate(180deg);
}

/* Navigation Column */
.nav-column {
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-top: 0;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 38px;
  font-weight: 300;
  transition: all 0.3s ease;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.nav-link:hover {
  color: #ff9500;
  transform: translateX(5px);
}

.nav-link.active {
  color: #ff9500;
}

/* Info Column */
.info-column {
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding-top: 5px;
}

.policies {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.policy-link {
  color: #888888;
  text-decoration: none;
  font-size: 15px;
  transition: all 0.3s ease;
  font-weight: 400;
}

.policy-link:hover {
  color: #ffffff;
  transform: translateX(3px);
}

.locations {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}

.location {
  flex: 1;
}

.location-title {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #ffffff;
  letter-spacing: -0.5px;
}

.location-address {
  color: #888888;
  font-size: 15px;
  line-height: 1.9;
  font-weight: 400;
}

/* Back to Top Button */
.back-to-top {
  position: fixed;
  right: 30px;
  bottom: 30px;
  background: #000000;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 16px 12px;
  color: #ffffff;
  transition: all 0.3s ease;
  border-radius: 50px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.back-to-top:hover {
  color: #ff9500;
  background: #1a1a1a;
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
}

.back-to-top svg {
  color: inherit;
}

.back-to-top-text {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 10px;
  letter-spacing: 3px;
  color: #666666;
  font-weight: 500;
  transition: color 0.3s ease;
}

.back-to-top:hover .back-to-top-text {
  color: #ff9500;
}

/* Responsive Design */
/* Large Desktop View (up to 1400px) */
@media (max-width: 1400px) {
  .footer-container {
    grid-template-columns: 380px 280px 1fr;
    gap: 60px;
  }

  .footer {
    padding: 80px 60px 50px;
  }
}

/* Tablet View (768px - 1024px) */
@media (max-width: 1024px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 70px;
  }

  .footer {
    padding: 60px 40px 40px;
  }

  .brand-name {
    font-size: 48px;
  }

  .newsletter-text {
    font-size: 14px;
  }

  .newsletter-form {
    max-width: 100%;
  }

  .email-input {
    font-size: 13px;
  }

  .nav-link {
    font-size: 36px;
  }

  .policy-link {
    font-size: 14px;
  }

  .location-title {
    font-size: 22px;
  }

  .location-address {
    font-size: 14px;
  }

  .homepage-label {
    position: static;
    writing-mode: horizontal-tb;
    transform: none;
    margin-top: 50px;
    font-size: 10px;
  }

  .locations {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .back-to-top {
    bottom: 25px;
    right: 25px;
  }

  .back-to-top:hover {
    transform: translateY(-2px);
  }
}

/* Mobile View (up to 767px) */
@media (max-width: 767px) {
  .footer {
    padding: 50px 20px 40px;
    min-height: auto;
  }

  .footer-container {
    gap: 50px;
  }

  .brand-column {
    gap: 40px;
  }

  .brand-name {
    font-size: 42px;
    line-height: 1;
  }

  .newsletter-text {
    font-size: 13px;
    margin-bottom: -3px;
  }

  .newsletter-form {
    height: 56px;
    padding: 0 6px 0 0;
  }

  .email-input {
    font-size: 12px;
    padding: 0 25px;
  }

  .email-input::placeholder {
    font-size: 12px;
  }

  .submit-btn {
    width: 46px;
    height: 46px;
  }

  .social-links {
    gap: 20px;
    margin-top: 20px;
  }

  .social-icon svg {
    width: 20px;
    height: 20px;
  }

  .copyright {
    font-size: 12px;
    margin-top: 50px;
  }

  .nav-column {
    gap: 24px;
  }

  .nav-link {
    font-size: 30px;
    line-height: 1.1;
  }

  .info-column {
    gap: 60px;
  }

  .policies {
    gap: 16px;
  }

  .policy-link {
    font-size: 13px;
  }

  .location-title {
    font-size: 20px;
    margin-bottom: 16px;
  }

  .location-address {
    font-size: 13px;
    line-height: 1.8;
  }

  .homepage-label {
    display: none;
  }

  .back-to-top {
    bottom: 20px;
    right: 20px;
    gap: 16px;
    padding: 16px 12px;
  }

  .back-to-top svg {
    width: 20px;
    height: 20px;
  }

  .back-to-top-text {
    font-size: 9px;
    letter-spacing: 2.5px;
  }
}

/* Small Mobile View (up to 480px) */
@media (max-width: 480px) {
  .footer {
    padding: 40px 15px 30px;
  }

  .footer-container {
    gap: 45px;
  }

  .brand-column {
    gap: 35px;
  }

  .brand-name {
    font-size: 36px;
  }

  .newsletter-text {
    font-size: 12px;
  }

  .newsletter-form {
    height: 52px;
    padding: 0 5px 0 0;
  }

  .email-input {
    font-size: 11px;
    padding: 0 20px;
  }

  .email-input::placeholder {
    font-size: 11px;
    letter-spacing: 0.5px;
  }

  .submit-btn {
    width: 42px;
    height: 42px;
  }

  .social-links {
    gap: 18px;
    margin-top: 18px;
  }

  .social-icon svg {
    width: 18px;
    height: 18px;
  }

  .copyright {
    font-size: 11px;
    margin-top: 45px;
  }

  .nav-column {
    gap: 22px;
  }

  .nav-link {
    font-size: 26px;
  }

  .info-column {
    gap: 50px;
  }

  .policies {
    gap: 14px;
  }

  .policy-link {
    font-size: 12px;
  }

  .location-title {
    font-size: 18px;
    margin-bottom: 14px;
  }

  .location-address {
    font-size: 12px;
    line-height: 1.7;
  }

  .back-to-top {
    bottom: 15px;
    right: 15px;
    gap: 14px;
    padding: 14px 10px;
  }

  .back-to-top svg {
    width: 18px;
    height: 18px;
  }

  .back-to-top-text {
    font-size: 8px;
    letter-spacing: 2px;
  }
}
`;

// Create a style element and inject CSS
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  if (!document.head.querySelector('style[data-footer-styles]')) {
    styleSheet.setAttribute('data-footer-styles', 'true');
    document.head.appendChild(styleSheet);
  }
}

export default Footer;