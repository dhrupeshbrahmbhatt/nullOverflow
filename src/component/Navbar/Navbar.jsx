import { Link } from 'react-router-dom';
import MenuButton from './MenuButton';

const Navbar = ({ activePage = 'home', logoColor = 'white', isMenuOpen, toggleMenu }) => {
  return (
    <>
      {/* Menu */}
      <div className={`mil-menu-frame ${isMenuOpen ? 'mil-active' : ''}`}>
        <div className="mil-frame-top">
          <Link to="/" className="mil-logo" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}>∅verflow</Link>
          <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} color="white" style={{ zIndex: 9999 }} />
        </div>
        <div className="container">
          <div className="mil-menu-content">
            <div className="row">
              <div className="col-xl-5">
                <nav className="mil-main-menu" id="swupMenu">
                  <ul>
                    <li className={`mil-has-children ${activePage === 'home' ? 'mil-active' : ''}`}>
                      <Link to="/" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}>Home</Link>
                    </li>
                    <li className={`mil-has-children ${activePage === 'projects' ? 'mil-active' : ''}`}>
                      <Link to="/projects" onClick={(e) => { e.preventDefault(); window.location.href = '/projects'; }}>Projects</Link>
                    </li>
                    <li className="mil-has-children">
                      <a href="#.">Services</a>
                    </li>
                    <li className="mil-has-children">
                      <a href="#.">Newsletter</a>
                    </li>
                    <li className="mil-has-children">
                      <a href="#.">Other pages</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-xl-7">
                <div className="mil-menu-right-frame">
                  <div className="mil-animation-in">
                    <div className="mil-animation-frame">
                      <div className="mil-animation mil-position-1 mil-scale" data-value-1="2" data-value-2="2">
                        <div className="mil-dodecahedron">
                          {[...Array(12)].map((_, i) => (
                            <div className="mil-pentagon" key={`menu-${i}`}>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mil-menu-right">
                    <div className="row">
                      <div className="col-lg-8 mil-mb-60">
                        <h6 className="mil-muted mil-mb-30">Projects</h6>
                        <ul className="mil-menu-list">
                          <li><a href="/projects" className="mil-light-soft">Interior design studio</a></li>
                          <li><a href="/projects" className="mil-light-soft">Home Security Camera</a></li>
                          <li><a href="/projects" className="mil-light-soft">Kemia Honest Skincare</a></li>
                          <li><a href="/projects" className="mil-light-soft">Cascade of Lava</a></li>
                          <li><a href="/projects" className="mil-light-soft">Air Pro by Molekule</a></li>
                          <li><a href="/projects" className="mil-light-soft">Tony&apos;s Chocolonely</a></li>
                        </ul>
                      </div>
                      <div className="col-lg-4 mil-mb-60">
                        <h6 className="mil-muted mil-mb-30">Useful links</h6>
                        <ul className="mil-menu-list">
                          <li><a href="#." className="mil-light-soft">Privacy Policy</a></li>
                          <li><a href="#." className="mil-light-soft">Terms and conditions</a></li>
                          <li><a href="#." className="mil-light-soft">Cookie Policy</a></li>
                          <li><a href="#." className="mil-light-soft">Careers</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="mil-divider mil-mb-60"></div>
                    <div className="row justify-content-between">
                      <div className="col-lg-4 mil-mb-60">
                        <h6 className="mil-muted mil-mb-30">Canada</h6>
                        <p className="mil-light-soft mil-up">71 South Los Carneros Road, California <span className="mil-no-wrap">+51 174 705 812</span></p>
                      </div>
                      <div className="col-lg-4 mil-mb-60">
                        <h6 className="mil-muted mil-mb-30">Germany</h6>
                        <p className="mil-light-soft">Leehove 40, 2678 MC De Lier, Netherlands <span className="mil-no-wrap">+31 174 705 811</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curtain */}
      <div className="mil-curtain"></div>

      {/* Frame */}
      <div className="mil-frame" style={{ zIndex: 10000, opacity: isMenuOpen ? 0 : 1, pointerEvents: 'none', transition: 'opacity 0.3s ease' }}>
        <div className="mil-frame-top" style={{ zIndex: 10000 }}>
          <a
            href="/"
            className="mil-logo"
            id="logoText"
            style={{
              fontSize: "40px",
              fontWeight: 600,
              position: "relative",
              zIndex: 10000,
              color: logoColor,
              transition: "color 0.3s ease",
              pointerEvents: "auto",
            }}
          >
            ∅verflow
          </a>
          <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} color={logoColor} style={{ zIndex: 10000 }} />
        </div>
        <div className="mil-frame-bottom">
          <div className="mil-current-page"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
