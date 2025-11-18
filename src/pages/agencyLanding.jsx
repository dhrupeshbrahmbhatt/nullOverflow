import React, { useState, useEffect } from 'react';

export default function AgencyLandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [ctaHovered, setCtaHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic header behavior - white text on transparent background
  useEffect(() => {
    const logo = document.querySelector('.mil-logo');
    const menuBtn = document.querySelector('.mil-menu-btn');
    const navLinks = document.querySelectorAll('.mil-top-panel a');

    const updateHeaderStyle = () => {
      // Always keep transparent background with white text
      if (logo) {
        logo.style.transition = 'color 0.3s';
        logo.style.color = 'rgb(255, 255, 255)';
      }
      if (menuBtn) {
        menuBtn.style.zIndex = '9999';
        menuBtn.style.transition = 'color 0.3s';
        menuBtn.style.color = 'rgb(255, 255, 255)';
        const spans = menuBtn.querySelectorAll('span');
        spans.forEach(span => {
          span.style.transition = 'background-color 0.3s';
          span.style.backgroundColor = 'rgb(255, 255, 255)';
        });
      }
      navLinks.forEach(link => {
        link.style.transition = 'color 0.3s';
        link.style.color = 'rgb(255, 255, 255)';
      });
    };

    // Set initial state
    updateHeaderStyle();

    // Cleanup on unmount
    return () => {
      if (logo) {
        logo.style.transition = '';
        logo.style.color = '';
      }
      if (menuBtn) {
        menuBtn.style.zIndex = '';
        menuBtn.style.transition = '';
        menuBtn.style.color = '';
        const spans = menuBtn.querySelectorAll('span');
        spans.forEach(span => {
          span.style.transition = '';
          span.style.backgroundColor = '';
        });
      }
      navLinks.forEach(link => {
        link.style.transition = '';
        link.style.color = '';
      });
    };
  }, []);

  const services = [
    {
      title: 'Branding and\nIdentity Design',
      description: 'Our creative agency is a team of professionals focused on helping your brand grow.'
    },
    {
      title: 'Website Design\nand Development',
      description: 'Our creative agency is a team of professionals focused on helping your brand grow.'
    },
    {
      title: 'Advertising and\nMarketing Campaigns',
      description: 'Our creative agency is a team of professionals focused on helping your brand grow.'
    },
    {
      title: 'Creative Consulting\nand Development',
      description: 'Our creative agency is a team of professionals focused on helping your brand grow.'
    }
  ];

  // Hover handler functions
  const handleCardEnter = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const handleCtaEnter = () => {
    setCtaHovered(true);
  };

  const handleCtaLeave = () => {
    setCtaHovered(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Get card styles based on hover state
  const getCardStyles = (isHovered) => ({
    progressBar: {
      width: isHovered ? '100%' : '0%'
    },
    overlay: {
      opacity: isHovered ? 1 : 0
    },
    description: {
      opacity: isHovered ? 1 : 0
    },
    arrow: {
      backgroundColor: isHovered ? '#ff9500' : 'transparent',
      borderColor: isHovered ? 'transparent' : 'rgba(255, 149, 0, 0.3)',
      color: isHovered ? '#000' : '#ff9500',
      transform: isHovered ? 'scale(1)' : 'scale(0.8)',
      opacity: isHovered ? 1 : 0.6
    }
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600;700&display=swap');

        html, body {
          margin: 0 !important;
          padding: 0 !important;
          background-color: #000 !important;
          overflow-x: hidden;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .agency-landing-container {
          background-color: #000 !important;
          min-height: 100vh;
          width: 100%;
          color: #fff;
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
          overflow: hidden;
          position: relative;
          isolation: isolate;
        }

        .decorative-svg-left {
          position: absolute;
          top: 50%;
          left: 50px;
          transform: translateY(-50%);
          width: 300px;
          height: 300px;
          opacity: 0.1;
          pointer-events: none;
          z-index: 1;
        }

        .decorative-svg-right {
          position: absolute;
          top: 50%;
          right: 50px;
          transform: translateY(-50%);
          width: 300px;
          height: 300px;
          opacity: 0.1;
          pointer-events: none;
          z-index: 1;
        }

        .decorative-svg-bottom-left {
          position: absolute;
          bottom: 100px;
          left: 50%;
          transform: translateX(-50%);
          width: 350px;
          height: 350px;
          opacity: 0.08;
          pointer-events: none;
          z-index: 1;
        }

        /* Tablet View (768px - 1024px) */
        @media (max-width: 1024px) {
          .hero-section {
            padding-top: 140px !important;
            padding-bottom: 60px !important;
          }

          .tagline {
            font-size: 0.8rem !important;
            margin-bottom: 2.5rem !important;
          }

          .hero-heading {
            font-size: 3.2rem !important;
            gap: 1.2rem !important;
            flex-wrap: wrap !important;
          }

          .image-circle {
            width: 180px !important;
            height: 60px !important;
          }

          .services-grid {
            width: 90% !important;
            grid-template-columns: repeat(2, 1fr) !important;
            margin-top: 3rem !important;
          }
        }

        /* Mobile View (up to 767px) */
        @media (max-width: 767px) {
          .hero-section {
            padding-top: 100px !important;
            padding-bottom: 40px !important;
          }

          .tagline {
            font-size: 0.75rem !important;
            margin-bottom: 2rem !important;
            line-height: 1.5 !important;
          }

          .hero-heading {
            font-size: 2.2rem !important;
            gap: 0.75rem !important;
            flex-direction: column !important;
          }

          .image-circle {
            width: 140px !important;
            height: 50px !important;
          }

          .services-grid {
            width: 100% !important;
            grid-template-columns: 1fr !important;
            margin-top: 2rem !important;
          }

          .service-card {
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
          }

          .service-card:last-child {
            border-bottom: none !important;
          }

          .decorative-svg-top,
          .decorative-svg-bottom {
            display: none !important;
          }
        }

        /* Small Mobile View (up to 480px) */
        @media (max-width: 480px) {
          .hero-section {
            padding-top: 80px !important;
          }

          .tagline {
            font-size: 0.7rem !important;
            margin-bottom: 1.5rem !important;
          }

          .hero-heading {
            font-size: 1.8rem !important;
            gap: 0.6rem !important;
          }

          .image-circle {
            width: 120px !important;
            height: 42px !important;
          }
        }
      `}</style>

      <div className="agency-landing-container">
        {/* Menu */}
        <div className={`mil-menu-frame ${isMenuOpen ? 'mil-active' : ''}`}>
          <div className="mil-frame-top">
            <a href="home-1.html" className="mil-logo text-white transition-colors duration-300">∅verflow</a>
            <div
              className={`mil-menu-btn ${isMenuOpen ? 'mil-active' : ''} text-white cursor-pointer`}
              onClick={toggleMenu}
              style={{zIndex: 9999}}
            >
              <span className="bg-white transition-colors duration-300"></span>
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
                  {/* <div className="mil-menu-right-frame">
                    <div className="mil-animation-in">
                      <div className="mil-animation-frame">
                        <div className="mil-animation mil-position-1 mil-scale" data-value-1="2" data-value-2="2"></div>
                      </div>
                    </div>

                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Background Animation Frame */}
        <div className="mil-animation-frame">
          <div className="mil-animation mil-position-1 mil-scale" data-value-1="2.4" data-value-2="1.4" style={{top: '300px', right: '-100px'}}>
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
          <div className="mil-animation mil-position-3 mil-scale" data-value-1="1.2" data-value-2=".1"></div>

          <div className="mil-animation mil-position-2 mil-scale" data-value-1="2" data-value-2="1" style={{left: '150px'}}>
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

        {/* Hero Section */}
        <section
          className="hero-section"
          style={{
            paddingTop: '180px',
            paddingBottom: '100px',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            textAlign: 'center',
            position: 'relative'
          }}
        >
          {/* Tagline */}
          <div
            className="tagline"
            style={{
              fontSize: '0.85rem',
              color: '#999',
              marginBottom: '3rem',
              fontWeight: '300',
              letterSpacing: '0.1em',
              animation: 'fadeInDown 0.8s ease-out'
            }}
          >
            Professionals focused on helping your brand<br/>grow and move forward.
          </div>

          {/* Main Heading */}
          <div style={{
            marginBottom: '4rem',
            animation: 'fadeInUp 1s ease-out 0.2s both'
          }}>
            {/* Unique Ideas Row */}
            <div
              className="hero-heading"
              style={{
                fontSize: '4.5rem',
                fontWeight: '300',
                marginBottom: '0.5rem',
                letterSpacing: '-0.02em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.5rem'
              }}
            >
              <div
                className="image-circle"
                style={{
                  width: '250px',
                  height: '80px',
                  borderRadius: '80px',
                  overflow: 'hidden'
                }}
              >
                <img src="/images/2_1.jpg" alt="team" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top'}}/>
              </div>
              <span style={{fontWeight:'700'}}>Unique</span>
              <span style={{fontWeight:'200',color:'#ccc'}}>Ideas</span>
            </div>

            {/* For Your Business Row */}
            <div
              className="hero-heading"
              style={{
                fontSize: '4.5rem',
                fontWeight: '300',
                letterSpacing: '-0.02em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2rem'
              }}
            >
              <span style={{fontWeight:'700'}}>For Your</span>
              <span style={{fontWeight:'200',color:'#ccc'}}>Business.</span>
              <button
                style={{
                  backgroundColor: '#ff9500',
                  color: '#000',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '4px 20px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  boxShadow: ctaHovered ? '0 15px 40px rgba(255, 149, 0, 0.4)' : '0 10px 30px rgba(255, 149, 0, 0.3)',
                  transform: ctaHovered ? 'translateY(-2px)' : 'translateY(0)'
                }}
                onMouseEnter={handleCtaEnter}
                onMouseLeave={handleCtaLeave}
              >
                WHAT WE DO
                <div className='mil-button mil-arrow-place mil-icon-button mil-arrow-right'></div>
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div
            className="services-grid"
            style={{
              width: '70%',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              gap: '0',
              margin: '5rem auto 0',
              padding: '0'
            }}
          >
            {services.map((service, index) => {
              const isHovered = hoveredCard === index;
              const cardStyles = getCardStyles(isHovered);

              return (
                <div
                  key={index}
                  className="service-card"
                  style={{
                    backgroundColor: 'transparent',
                    borderRight: index === services.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '0px',
                    padding: '20px 10px',
                    minHeight: '300px',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                  onMouseEnter={() => handleCardEnter(index)}
                  onMouseLeave={handleCardLeave}
                >
                  {/* Progress Bar */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '3px',
                      backgroundColor: '#ff9500',
                      width: cardStyles.progressBar.width,
                      transition: 'width 0.4s ease',
                      zIndex: 3
                    }}
                  ></div>

                  {/* Card Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(255, 149, 0, 0.05) 0%, transparent 100%)',
                      opacity: cardStyles.overlay.opacity,
                      transition: 'opacity 0.4s ease',
                      pointerEvents: 'none'
                    }}
                  ></div>

                  <div style={{height: '238px', width: '223px'}}>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: '500',
                      lineHeight: '30px',
                      marginBottom: '1rem',
                      color: '#fff',
                      letterSpacing: '-0.01em'
                    }}>
                      {service.title.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < service.title.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </h3>
                    <p
                      style={{
                        fontSize: '16px',
                        lineHeight: '24px',
                        fontWeight: '300',
                        color: '#666',
                        marginBottom: '40px',
                        height: '100px',
                        width: '95%',
                        opacity: cardStyles.description.opacity,
                        transition: 'opacity 0.3s ease',
                        overflow: 'hidden'
                      }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow Button */}
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: cardStyles.arrow.backgroundColor,
                      border: `1px solid ${cardStyles.arrow.borderColor}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      color: cardStyles.arrow.color,
                      transition: 'all 0.4s ease',
                      alignSelf: 'flex-start',
                      transform: cardStyles.arrow.transform,
                      opacity: cardStyles.arrow.opacity
                    }}
                  >
                    →
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
