import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './HomeSection/footers';
import Navbar from '../component/Navbar/Navbar';
import Preloader from '../component/Preloader/Preloader';

// Portfolio Item Component with hover effect
const PortfolioItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    document.body.classList.add('mil-hide-ball');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    document.body.classList.remove('mil-hide-ball');
  };

  return (
    <div className={item.colSize}>
      <a
        href={`#project-${item.id}`}
        className={`mil-portfolio-item mil-mb-60 ${item.parallax ? 'mil-parallax' : ''}`}
        data-value-1={item.parallax ? "60" : undefined}
        data-value-2={item.parallax ? "-60" : undefined}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{ cursor: 'none', position: 'relative', display: 'block' }}
      >
        <div className={`mil-cover-frame mil-${item.layout} mil-up`} style={{ overflow: 'hidden' }}>
          <div className="mil-cover" style={{ overflow: 'hidden' }}>
            <img
              src={item.image}
              alt={item.title}
              style={{
                transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
        <div className="mil-descr">
          <div className="mil-labels mil-up mil-mb-15">
            <div className="mil-label mil-upper mil-accent">{item.category}</div>
            <div className="mil-label mil-upper">{item.date}</div>
          </div>
          <h4 className="mil-up">{item.title}</h4>
        </div>
        {/* Cursor-following MORE circle - now covers whole card */}
        <div
          style={{
            position: 'absolute',
            left: mousePos.x,
            top: mousePos.y,
            transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0})`,
            width: '100px',
            height: '100px',
            backgroundColor: '#000',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: isHovered ? 1 : 0,
            transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
            pointerEvents: 'none',
            zIndex: 10
          }}
        >
          <span
            style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}
          >
            More
          </span>
        </div>
      </a>
    </div>
  );
};

// Portfolio data
const portfolioItems = [
  {
    id: 1,
    image: '/images/Projects/1.jpg',
    category: 'Branding',
    date: 'may 24 2023',
    title: 'Interior design studio',
    layout: 'vert', // vertical image
    colSize: 'col-lg-5',
  },
  {
    id: 2,
    image: '/images/Projects/2.jpg',
    category: 'Design',
    date: 'may 24 2023',
    title: 'Home Security Camera',
    layout: 'hori', // horizontal image
    colSize: 'col-lg-6',
    parallax: true,
  },
  {
    id: 3,
    image: '/images/Projects/3.jpg',
    category: 'Design',
    date: 'may 24 2023',
    title: 'Kemia Honest Skincare',
    layout: 'hori',
    colSize: 'col-lg-6',
    parallax: true,
  },
  {
    id: 4,
    image: '/images/Projects/4.jpg',
    category: 'Photography',
    date: 'may 24 2023',
    title: 'Cascade of Lava',
    layout: 'vert',
    colSize: 'col-lg-5',
  },
  {
    id: 5,
    image: '/images/Projects/5.jpg',
    category: 'Design',
    date: 'may 24 2023',
    title: 'Air Pro by Molekule',
    layout: 'vert',
    colSize: 'col-lg-5',
  },
  {
    id: 6,
    image: '/images/Projects/6.jpg',
    category: 'Design',
    date: 'may 24 2023',
    title: "Tony's Chocolonely",
    layout: 'hori',
    colSize: 'col-lg-6',
    parallax: true,
  },
];

const Projects = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoColor, setLogoColor] = useState('black');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('mil-menu-open');
    } else {
      document.body.classList.remove('mil-menu-open');
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      // Logo stays black on this page (white background)
      setLogoColor('black');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="mil-wrapper" id="top">
      {/* Preloader */}
      <Preloader />

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

      {/* Scrollbar Progress */}
      <div className="mil-progress-track">
        <div className="mil-progress"></div>
      </div>

      {/* Page Styles */}
      <style>{`
        .mil-menu-btn {
          opacity: 1 !important;
          visibility: visible !important;
        }

        body.mil-menu-open .mil-frame {
          opacity: 0 !important;
          pointer-events: none !important;
        }

        .mil-menu-frame .mil-logo {
          color: white !important;
        }

        /* Override: Show menu right section on all screen sizes */
        .mil-menu-frame .mil-menu-right-frame {
          display: flex !important;
        }

        /* Make menu scrollable on smaller screens */
        @media screen and (max-width: 1200px) {
          .mil-menu-frame .mil-menu-right-frame {
            display: flex !important;
            padding-left: 0;
            border-left: none;
            padding-top: 30px;
          }
          .mil-menu-frame .mil-menu-content .row {
            flex-direction: column;
          }
          .mil-menu-frame .mil-menu-content {
            overflow-y: auto;
            max-height: 80vh;
          }
        }

        /* Hide ball cursor when hovering over portfolio images */
        body.mil-hide-ball .mil-ball {
          opacity: 0 !important;
          transform: scale(0) !important;
          transition: opacity 0.2s ease, transform 0.2s ease !important;
        }

        /* ===== 3D DODECAHEDRON ANIMATION STYLES ===== */

        /* Force show animation on all screen sizes - override display:none */
        .mil-inner-banner {
          position: relative;
          overflow: visible;
        }

        .mil-inner-banner .mil-banner-content {
          position: relative;
        }

        .mil-inner-banner .mil-animation-frame {
          position: absolute !important;
          width: 100% !important;
          height: 100vh !important;
          top: 0 !important;
          left: 0 !important;
          pointer-events: none !important;
          z-index: 0 !important;
          overflow: visible !important;
          animation: jump 10s linear infinite !important;
        }

        /* Override the display:none from style.css for smaller screens */
        .mil-inner-banner .mil-animation.mil-position-4 {
          display: block !important;
          position: absolute !important;
          width: 300px !important;
          height: 300px !important;
          top: 80px !important;
          right: 15% !important;
          opacity: 0.2 !important;
        }

        /* Dark pentagon borders for inner banner */
        .mil-inner-banner .mil-animation.mil-position-4.mil-dark .mil-pentagon div {
          border-top: 0.1px solid rgb(0, 0, 0) !important;
        }

        /* Ensure dodecahedron is visible */
        .mil-inner-banner .mil-animation .mil-dodecahedron {
          position: relative !important;
          left: 100px !important;
          top: 40px !important;
          width: 100px !important;
          height: 223px !important;
          transform-style: preserve-3d !important;
          animation: rotate 100s infinite linear !important;
        }

        .mil-inner-banner .mil-animation .mil-pentagon {
          position: absolute !important;
          width: 100px !important;
        }

        .mil-inner-banner .mil-animation .mil-pentagon div {
          position: absolute !important;
          width: 100px !important;
          height: 69px !important;
          transform-origin: bottom !important;
        }

        /* Ensure banner content is above animation */
        .mil-inner-banner .mil-banner-content .container {
          position: relative;
          z-index: 1;
        }

        /* ===== RESPONSIVE STYLES ===== */
        @media screen and (max-width: 768px) {
          .mil-frame-top {
            background-color: white !important;
            border-radius: 20px !important;
            padding: 10px 20px !important;
            margin: 10px !important;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
          }

          .mil-logo,
          #logoText {
            color: black !important;
          }

          .mil-menu-btn span,
          .mil-menu-btn span::before,
          .mil-menu-btn span::after {
            background-color: black !important;
          }

          .mil-inner-banner .mil-animation.mil-position-4 {
            right: 5% !important;
            top: 50px !important;
            width: 200px !important;
            height: 200px !important;
            opacity: 0.15 !important;
          }
        }

        @media screen and (max-width: 480px) {
          .mil-inner-banner .mil-animation.mil-position-4 {
            display: none !important;
          }
        }


      `}</style>

      <Navbar
        activePage="projects"
        logoColor={logoColor}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />

      {/* Content */}
      <div className="mil-content">
        <div id="swupMain" className="mil-main-transition">

          {/* Banner */}
          <div className="mil-inner-banner">
            <div className="mil-banner-content mil-up">
              <div className="mil-animation-frame">
                <div className="mil-animation mil-position-4 mil-dark mil-scale" data-value-1="6" data-value-2="1.4">
                  {/* 3D Dodecahedron Animation */}
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
                </div>
              </div>
              <div className="container">
                <ul className="mil-breadcrumbs mil-mb-60">
                  <li><Link to="/" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}>Homepage</Link></li>
                  <li><Link to="/projects" onClick={(e) => { e.preventDefault(); window.location.href = '/projects'; }}>Portfolio</Link></li>
                </ul>
                <h1 className="mil-mb-60">Designing a <br /> Better <span className="mil-thin">World Today</span></h1>
                <a href="#portfolio" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
                  <span>Our works</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mil-arrow">
                    <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* Banner End */}

          {/* Portfolio */}
          <section id="portfolio">
            <div className="container mil-portfolio mil-p-120-60">
              <div className="mil-lines-place">
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
              <div className="mil-lines-place mil-lines-long">
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

              <div className="row justify-content-between align-items-center">
                {portfolioItems.map((item) => (
                  <PortfolioItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </section>
          {/* Portfolio End */}

          {/* Call to Action */}
          <section className="mil-soft-bg">
            <div className="container mil-p-120-120">
              <div className="row">
                <div className="col-lg-10">
                  <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up">
                    Looking to make your mark? We'll help you turn <br /> your project into a success story.
                  </span>
                </div>
              </div>
              <div className="mil-center">
                <h2 className="mil-up mil-mb-60">
                  Ready to bring your <span className="mil-thin">ideas to</span> life? <br /> We're <span className="mil-thin">here to help</span>
                </h2>
                <div className="mil-up">
                  <a href="#contact" className="mil-button mil-arrow-place">
                    <span>Contact us</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mil-arrow">
                      <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* Call to Action End */}

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

export default Projects;
