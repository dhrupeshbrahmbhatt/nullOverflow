import React, { useEffect, useRef, useState } from 'react';
import Footer from './footers';
import CustomerTestimonials from './testimonial';
import MeetOurTeamPage from './meetOurTeam';
import AgencyLandingPage from './agencyLanding';
import StudioAboutPage from './studioAboutPage';

import PopularPublications from './popularPublication';

const Home = () => {
  const topRef = useRef(null);
  const aboutRef = useRef(null);
  const [showTop, setShowTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        setShowTop(window.scrollY >= aboutRef.current.offsetTop - 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Add/remove class to body when menu opens/closes
    if (isMenuOpen) {
      document.body.classList.add('mil-menu-open');
    } else {
      document.body.classList.remove('mil-menu-open');
    }
  }, [isMenuOpen]);

  useEffect(() => {
    // Initialize jQuery plugins and animations after React renders
    // This ensures all DOM elements are available before jQuery tries to manipulate them
    const initializeScripts = () => {
      // Trigger jQuery ready event manually for scripts that depend on it
      if (window.jQuery && window.jQuery.isReady !== undefined) {
        // jQuery is loaded and ready, trigger custom initialization if needed
        console.log('React mounted, jQuery scripts should now initialize');
      }
    };

    // Small delay to ensure all child components have rendered
    const timer = setTimeout(initializeScripts, 100);

    return () => clearTimeout(timer);
  }, []); // Run once on mount

  return (
    <div className="mil-wrapper" id="top" ref={topRef}>
      {/* Cursor */}
      <div className="mil-ball">
        <span className="mil-icon-1">
          <svg viewBox="0 0 128 128">
            <path d="M106.1,41.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2L116.8,61H11.2l14.9-14.9c1.2-1.2,1.2-3.1,0-4.2	c-1.2-1.2-3.1-1.2-4.2,0l-20,20c-1.2,1.2-1.2,3.1,0,4.2l20,20c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9c1.2-1.2,1.2-3.1,0-4.2	L11.2,67h105.5l-14.9,14.9c-1.2,1.2-1.2,3.1,0,4.2c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9l20-20c1.2-1.2,1.2-3.1,0-4.2L106.1,41.9	z"></path>
          </svg>
        </span>
        <div className="mil-more-text">More</div>
        <div className="mil-choose-text">Сhoose</div>
      </div>

     {/* Preloader */}
      <div className="mil-preloader">
        <div className="mil-preloader-animation">
          <div className="mil-pos-abs mil-animation-1">
            <p className="mil-h3 mil-muted mil-thin">Pioneering</p>
            <p className="mil-h3 mil-muted">Creative</p>
            <p className="mil-h3 mil-muted mil-thin">Excellence</p>
          </div>
          <div className="mil-pos-abs mil-animation-2">
            <div className="mil-reveal-frame">
              <p className="mil-reveal-box"></p>
              <p className="mil-h3 mil-muted mil-thin">∅verflow()</p>
            </div>
          </div>
        </div>
      </div>

      {/* Preloader Mobile Responsive Styles */}
      <style>{`
        /* Hide back-to-top button on mobile and tablets to prevent auto-scroll issues */
        @media screen and (max-width: 768px) {
          .mil-back-to-top,
          .mil-back-to-top * {
            display: none !important;
            visibility: hidden !important;
            pointer-events: none !important;
            opacity: 0 !important;
          }
        }

        /* Tablet and Mobile Responsive Styles for Preloader */
        @media screen and (max-width: 1024px) {
          .mil-preloader .mil-preloader-animation .mil-pos-abs {
            padding: 0 40px;
          }

          .mil-preloader .mil-h3 {
            font-size: 36px !important;
            line-height: 1.2 !important;
          }

          .mil-preloader .mil-preloader-animation .mil-pos-abs .mil-reveal-frame {
            padding: 0 30px;
          }
        }

        @media screen and (max-width: 767px) {
          .mil-preloader .mil-preloader-animation .mil-pos-abs {
            padding: 0 20px;
            justify-content: center;
            align-items: center;
            text-align: center;
          }

          .mil-preloader .mil-h3 {
            font-size: 28px !important;
            line-height: 1.3 !important;
          }

          .mil-preloader .mil-preloader-animation .mil-pos-abs .mil-reveal-frame {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 15px;
            position: relative;
          }

          .mil-preloader .mil-preloader-animation .mil-pos-abs .mil-reveal-frame p {
            position: relative;
            z-index: 5;
            width: auto;
            text-align: center;
          }
            

          .mil-preloader .mil-preloader-animation .mil-pos-abs .mil-reveal-frame .mil-reveal-box {
            width: 100%;
            left: 0;
            right: 0;
          }
        }

        @media screen and (max-width: 480px) {
          .mil-preloader .mil-preloader-animation .mil-pos-abs {
            padding: 0 15px;
          }

          .mil-preloader .mil-h3 {
            font-size: 30px !important;
            line-height: 1.4 !important;
            color: white !important;
          }
          .mil-preloader .mil-preloader-animation .mil-pos-abs .mil-reveal-frame {
            padding: 0 20px;
          }
        }
      `}</style>



      {/* Scrollbar Progress */}
      <div className="mil-progress-track">
        <div className="mil-progress"></div>
      </div>

      {/* Menu */}
      <div className={`mil-menu-frame ${isMenuOpen ? 'mil-active' : ''}`}>
        <div className="mil-frame-top">
          <a href="home-1.html" className="mil-logo">∅verflow</a>
          <div className={`mil-menu-btn ${isMenuOpen ? 'mil-active' : ''}`} onClick={toggleMenu} style={{zIndex: 9999}}>
            <span></span>
          </div>
        </div>
        <div className="container">
          <div className="mil-menu-content">
            <div className="row">
              <div className="col-xl-5">
                <nav className="mil-main-menu" id="swupMenu">
                  <ul>
                    <li className="mil-has-children mil-active">
                      
                      
                    </li>
                    <li className="mil-has-children">
                      <a href="#.">Portfolio</a>
                      <ul>
                        <li><a href="portfolio-1.html">Grid type 1</a></li>
                        <li><a href="portfolio-2.html">Grid type 2</a></li>
                        <li><a href="portfolio-3.html">Slider</a></li>
                      </ul>
                    </li>
                    <li className="mil-has-children">
                      <a href="#.">Services</a>
                      <ul>
                        <li><a href="services.html">Services List</a></li>
                        <li><a href="service.html">Single service</a></li>
                      </ul>
                    </li>
                    <li className="mil-has-children">
                      <a href="#.">Newsletter</a>
                      <ul>
                        <li><a href="blog.html">Blog List</a></li>
                        <li><a href="publication.html">Publication</a></li>
                      </ul>
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
                      <div className="mil-animation mil-position-1 mil-scale" data-value-1="2" data-value-2="2"></div>
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
      <div className="mil-frame">
        <div className="mil-frame-top">
          <a
  href="home-1.html"
  className="mil-logo"
  id="logoText"
  style={{
    fontSize: "40px",
    fontWeight: 600,
    position: "relative",

    zIndex: 9999, 
    
  }}
>
  ∅verflow
</a>


          <div className={`mil-menu-btn ${isMenuOpen ? 'mil-active' : ''}`} onClick={toggleMenu} style={{zIndex: 50}}>
            <span></span>
          </div>
        </div>
        <div className="mil-frame-bottom">
          <div className="mil-current-page"></div>
        </div>
      </div>

      {/* Content */}
      <div className="mil-content">
        <div id="swupMain" className="mil-main-transition">
          
          {/* Banner */}
          <section className="mil-banner mil-dark-bg">
            <div className="mi-invert-fix">
              <div className="mil-animation-frame">
                <div className="mil-animation mil-position-1 mil-scale" data-value-1="7" data-value-2="1.6"></div>
                <div className="mil-animation mil-position-2 mil-scale" data-value-1="4" data-value-2="1"></div>
                <div className="mil-animation mil-position-3 mil-scale" data-value-1="1.2" data-value-2=".1"></div>
              </div>

              <div className="mil-gradient"></div>

              <div className="container">
                <div className="mil-banner-content mil-up">
                  <h1 className="mil-muted mil-mb-60">Designing <span className="mil-thin">a Better</span><br /> World <span className="mil-thin">Today</span></h1>
                  <div className="row">
                    <div className="col-md-7 col-lg-5">
                      <p className="mil-light-soft mil-mb-60">Welcome to our world of endless imigination and boundless <br /> creativity. Together, let's embark on a remarkable journey where <br /> dreams become tangible realities.</p>
                    </div>
                  </div>
                  <a href="#." className="mil-button mil-arrow-place mil-btn-space">
                    <span>What we do</span>
                  </a>
                  <a href="portfolio-1.html" className="mil-link mil-muted mil-arrow-place mil-view-works">
                    <span>View works</span>
                  </a>
                  <div className="mil-circle-text">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve" className="mil-ct-svg mil-rotate" data-value="360">
                      <defs>
                        <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "></path>
                      </defs>
                      <circle cx="60" cy="80" r="45" fill="none"></circle>
                      <g>
                        <use xlinkHref="#circlePath" fill="none"></use>
                        <text style={{letterSpacing: '6.5px'}}>
                          <textPath xlinkHref="#circlePath">Scroll down - Scroll down - </textPath>
                        </text>
                      </g>
                    </svg>
                    <a href="#about" onClick={(e)=>{e.preventDefault(); scrollToAbout();}} className="mil-button mil-arrow-place mil-icon-button mil-arrow-down"></a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Banner Responsive Styles */}
          <style>{`
            /* Tablet View (1024px and below) */
            @media screen and (max-width: 1024px) {
              .mil-banner .mil-banner-content {
                padding-bottom: 100px;
              }
              .mil-banner h1 {
                font-size: 64px !important;
                line-height: 1.2 !important;
                margin-bottom: 40px !important;
              }
              .mil-banner p {
                font-size: 15px !important;
                line-height: 22px !important;
                margin-bottom: 40px !important;
              }
            }

            /* Tablet and Phone View (768px and below) */
            @media screen and (max-width: 768px) {
              .mil-banner .mil-banner-content {
                padding-bottom: 80px;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
              }
              .mil-banner h1 {
                font-size: 48px !important;
                line-height: 1.3 !important;
                margin-bottom: 30px !important;
                text-align: center;
              }
              .mil-banner .row {
                width: 100%;
                justify-content: center;
              }
              .mil-banner .row .col-md-7 {
                max-width: 100%;
                padding: 0 20px;
              }
              .mil-banner p {
                font-size: 14px !important;
                line-height: 20px !important;
                margin-bottom: 35px !important;
                text-align: center;
              }
              .mil-banner p br {
                display: none;
              }
              .mil-banner .mil-button {
                margin: 0 auto 20px;
              }
              .mil-banner .mil-view-works {
                display: none !important;
              }
            }

            /* Phone View (600px and below) */
            @media screen and (max-width: 600px) {
              .mil-banner .mil-banner-content {
                padding-bottom: 60px;
              }
              .mil-banner h1 {
                font-size: 40px !important;
                line-height: 1.25 !important;
                margin-bottom: 25px !important;
              }
              .mil-banner p {
                font-size: 13px !important;
                line-height: 19px !important;
                margin-bottom: 30px !important;
              }
            }

            /* Small Phone View (480px and below) */
            @media screen and (max-width: 480px) {
              .mil-banner .mil-banner-content {
                padding-bottom: 50px;
              }
              .mil-banner h1 {
                font-size: 36px !important;
                line-height: 1.3 !important;
                margin-bottom: 20px !important;
              }
              .mil-banner p {
                font-size: 12px !important;
                line-height: 18px !important;
                margin-bottom: 25px !important;
                padding: 0 10px;
              }
              .mil-banner .mil-button {
                font-size: 10px !important;
                height: 60px !important;
                padding: 0 10px 0 40px !important;
              }
            }

            /* Extra Small Phone View (375px and below) */
            @media screen and (max-width: 375px) {
              .mil-banner h1 {
                font-size: 32px !important;
                line-height: 1.3 !important;
              }
              .mil-banner p {
                font-size: 11px !important;
                line-height: 17px !important;
              }
            }
          `}</style>

          {/* About */}
          <div id="about" ref={aboutRef}>
            <div className="mil-about">
              <StudioAboutPage />
            </div>
          </div>

          {/* Services */}
          <AgencyLandingPage />

          {/* Team */}
          <MeetOurTeamPage />

          {/* Reviews */}
          <CustomerTestimonials />

          {/* Blog */}
          <PopularPublications />
          
          {/* Footer */}
          <Footer />

          {/* Hidden Elements */}
          <div className="mil-hidden-elements">
            <div className="mil-dodecahedron">
              {[...Array(12)].map((_, i) => (
                <div className="mil-pentagon" key={i}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              ))}
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mil-arrow">
              <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"></path>
            </svg>

            <svg width="250" viewBox="0 0 300 1404" fill="none" xmlns="http://www.w3.org/2000/svg" className="mil-lines">
              <path fillRule="evenodd" clipRule="evenodd" d="M1 892L1 941H299V892C299 809.71 232.29 743 150 743C67.7096 743 1 809.71 1 892ZM0 942H300V892C300 809.157 232.843 742 150 742C67.1573 742 0 809.157 0 892L0 942Z" className="mil-move"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M299 146V97L1 97V146C1 228.29 67.7096 295 150 295C232.29 295 299 228.29 299 146ZM300 96L0 96V146C0 228.843 67.1573 296 150 296C232.843 296 300 228.843 300 146V96Z" className="mil-move"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M299 1H1V1403H299V1ZM0 0V1404H300V0H0Z"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M150 -4.37115e-08L150 1404L149 1404L149 0L150 -4.37115e-08Z"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M150 1324C232.29 1324 299 1257.29 299 1175C299 1092.71 232.29 1026 150 1026C67.7096 1026 1 1092.71 1 1175C1 1257.29 67.7096 1324 150 1324ZM150 1325C232.843 1325 300 1257.84 300 1175C300 1092.16 232.843 1025 150 1025C67.1573 1025 0 1092.16 0 1175C0 1257.84 67.1573 1325 150 1325Z" className="mil-move"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M300 1175H0V1174H300V1175Z" className="mil-move"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M150 678C232.29 678 299 611.29 299 529C299 446.71 232.29 380 150 380C67.7096 380 1 446.71 1 529C1 611.29 67.7096 678 150 678ZM150 679C232.843 679 300 611.843 300 529C300 446.157 232.843 379 150 379C67.1573 379 0 446.157 0 529C0 611.843 67.1573 679 150 679Z" className="mil-move"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M299 380H1V678H299V380ZM0 379V679H300V379H0Z" className="mil-move"></path>
            </svg>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;