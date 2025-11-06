import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Column - Brand and Newsletter */}
        <div className="footer-column brand-column">
          <div className="brand">
            <span className="brand-letter">A</span>
            <span className="brand-name">Ashley.</span>
          </div>
          
          <p className="newsletter-text">Subscribe our newsletter:</p>
          
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="ENTER OUR EMAIL" 
              className="email-input"
            />
            <button className="submit-btn">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Behance">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.07 6.35H15v1.33h5.07V6.35z"/>
                <path d="M19.5 14.5c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5c0 1.93 1.57 3.5 3.5 3.5 1.4 0 2.6-.82 3.16-2h-2.32c-.25.3-.63.5-1.07.5-.83 0-1.5-.67-1.5-1.5h5.22c.01-.17.01-.33.01-.5zM14.5 13.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5h-3z"/>
                <path d="M9.5 9C8.67 9 8 9.67 8 10.5S8.67 12 9.5 12c.17 0 .33-.03.5-.08v3.58c0 .83-.67 1.5-1.5 1.5H7c-.83 0-1.5-.67-1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5S2.5 10.67 2.5 11.5v4c0 1.93 1.57 3.5 3.5 3.5h1.5c1.93 0 3.5-1.57 3.5-3.5V10.5C11 9.67 10.33 9 9.5 9z"/>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Dribbble">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12c5 0 10-3 10-10M12 2c0 7 3 12 10 12M22 12c-7 0-12 3-12 10M12 22c0-5-3-10-10-10"/>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="GitHub">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
          </div>

          <p className="copyright">© Copyright 2023 - Mil. All Rights Reserved.</p>
          
          <div className="homepage-label">HOMEPAGE</div>
        </div>

        {/* Middle Column - Navigation */}
        <div className="footer-column nav-column">
          <a href="#" className="nav-link active">Home</a>
          <a href="#" className="nav-link">Portfolio</a>
          <a href="#" className="nav-link">Services</a>
          <a href="#" className="nav-link active">Contact</a>
          <a href="#" className="nav-link">Blog</a>
        </div>

        {/* Right Column - Policies and Locations */}
        <div className="footer-column info-column">
          <div className="policies">
            <a href="#" className="policy-link">Privacy Policy</a>
            <a href="#" className="policy-link">Terms and conditions</a>
            <a href="#" className="policy-link">Cookie Policy</a>
            <a href="#" className="policy-link">Careers</a>
          </div>

          <div className="locations">
            <div className="location">
              <h3 className="location-title">Canada</h3>
              <p className="location-address">
                71 South Los Carneros Road,<br />
                California +51 174 705 812
              </p>
            </div>

            <div className="location">
              <h3 className="location-title">Germany</h3>
              <p className="location-address">
                Leehove 40, 2678 MC De Lier,<br />
                Netherlands +31 174 705 811
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button className="back-to-top" aria-label="Back to top">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path d="M10 16V4M10 4L4 10M10 4L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
  padding: 100px 80px 60px;
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
  gap: 35px;
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
  padding: 10px 10px 10px 32px;
  max-width: 420px;
  transition: background-color 0.3s ease;
}

.newsletter-form:focus-within {
  background-color: #222222;
}

.email-input {
  flex: 1;
  background: transparent;
  border: none;
  color: #666666;
  font-size: 12px;
  letter-spacing: 1.5px;
  outline: none;
  font-weight: 500;
}

.email-input::placeholder {
  color: #555555;
  letter-spacing: 1.5px;
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
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 15px;
  color: #ffffff;
  transition: all 0.3s ease;
}

.back-to-top:hover {
  color: #ff9500;
  transform: translateY(-50%) scale(1.05);
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
@media (max-width: 1400px) {
  .footer-container {
    grid-template-columns: 380px 280px 1fr;
    gap: 60px;
  }
  
  .footer {
    padding: 80px 60px 50px;
  }
}

@media (max-width: 1024px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 70px;
  }
  
  .footer {
    padding: 60px 40px 40px;
  }

  .homepage-label {
    position: static;
    writing-mode: horizontal-tb;
    transform: none;
    margin-top: 50px;
  }

  .locations {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .back-to-top {
    bottom: 30px;
    top: auto;
    right: 30px;
    transform: none;
  }
  
  .back-to-top:hover {
    transform: scale(1.05);
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 50px 30px 40px;
  }
  
  .brand-letter {
    font-size: 56px;
  }
  
  .brand-name {
    font-size: 40px;
  }
  
  .nav-link {
    font-size: 32px;
  }
  
  .newsletter-form {
    max-width: 100%;
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