import React, { useState, useEffect } from 'react';

export default function AgencyLandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerStyle = {
    backgroundColor: '#000000',
    minHeight: '100vh',
    color: '#ffffff',
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    overflow: 'hidden',
    position: 'relative'
  };

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    padding: '2rem 4rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
    transition: 'all 0.3s ease',
    backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
    backdropFilter: scrolled ? 'blur(10px)' : 'none'
  };

  const logoStyle = {
    fontSize: '2.5rem',
    fontWeight: '300',
    letterSpacing: '0.05em',
    color: '#ffffff'
  };

  const hamburgerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    cursor: 'pointer',
    padding: '10px'
  };

  const hamburgerLineStyle = {
    width: '30px',
    height: '2px',
    backgroundColor: '#ffffff',
    transition: 'all 0.3s ease'
  };

  const decorativeShapeTopStyle = {
    position: 'absolute',
    top: '-100px',
    left: '100px',
    width: '300px',
    height: '300px',
    opacity: 0.1,
    pointerEvents: 'none'
  };

  const decorativeShapeBottomStyle = {
    position: 'absolute',
    bottom: '-50px',
    right: '100px',
    width: '400px',
    height: '400px',
    opacity: 0.08,
    pointerEvents: 'none'
  };

  const heroSectionStyle = {
    paddingTop: '180px',
    paddingBottom: '100px',
    paddingLeft: '4rem',
    paddingRight: '4rem',
    textAlign: 'center',
    position: 'relative'
  };

  const taglineStyle = {
    fontSize: '0.85rem',
    color: '#999999',
    marginBottom: '3rem',
    fontWeight: '300',
    letterSpacing: '0.1em',
    animation: 'fadeInDown 0.8s ease-out'
  };

  const mainHeadingContainerStyle = {
    marginBottom: '4rem',
    animation: 'fadeInUp 1s ease-out 0.2s both'
  };

  const uniqueIdeasStyle = {
    fontSize: '4.5rem',
    fontWeight: '300',
    marginBottom: '0.5rem',
    letterSpacing: '-0.02em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem'
  };

  const imageCircleStyle = {
    width: '180px',
    height: '110px',
    borderRadius: '80px',
    overflow: 'hidden',
    display: 'inline-block',
    background: 'linear-gradient(135deg, #d4a574 0%, #c89b6a 100%)'
  };

  const uniqueTextStyle = {
    fontWeight: '700',
    color: '#ffffff'
  };

  const ideasTextStyle = {
    fontWeight: '200',
    color: '#cccccc'
  };

  const forYourBusinessStyle = {
    fontSize: '4.5rem',
    fontWeight: '300',
    letterSpacing: '-0.02em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem'
  };

  const forYourTextStyle = {
    fontWeight: '700',
    color: '#ffffff'
  };

  const businessTextStyle = {
    fontWeight: '200',
    color: '#cccccc'
  };

  const ctaButtonStyle = {
    backgroundColor: '#ff9500',
    color: '#000000',
    border: 'none',
    borderRadius: '50px',
    padding: '1.2rem 2.5rem',
    fontSize: '0.75rem',
    fontWeight: '600',
    letterSpacing: '0.15em',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '1rem',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    boxShadow: '0 10px 30px rgba(255, 149, 0, 0.3)'
  };

  const ctaButtonHoverStyle = {
    ...ctaButtonStyle,
    transform: 'translateY(-2px)',
    boxShadow: '0 15px 40px rgba(255, 149, 0, 0.4)'
  };

  const arrowStyle = {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#000000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem'
  };

  const servicesGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1.5rem',
    marginTop: '5rem',
    padding: '0 4rem'
  };

  const serviceCardStyle = (isHovered) => ({
    backgroundColor: 'rgba(20, 20, 20, 0.5)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    padding: '3rem 2rem',
    minHeight: '320px',
    transition: 'all 0.4s ease',
    transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
    boxShadow: isHovered 
      ? '0 20px 60px rgba(255, 149, 0, 0.15)' 
      : '0 5px 20px rgba(0, 0, 0, 0.3)',
    borderColor: isHovered ? 'rgba(255, 149, 0, 0.3)' : 'rgba(255, 255, 255, 0.08)',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden'
  });

  const serviceCardBeforeStyle = (isHovered) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(255, 149, 0, 0.05) 0%, transparent 100%)',
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.4s ease',
    pointerEvents: 'none'
  });

  const serviceIconStyle = {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 149, 0, 0.8)',
    marginBottom: '2.5rem',
    boxShadow: '0 0 20px rgba(255, 149, 0, 0.4)'
  };

  const serviceTitleStyle = {
    fontSize: '1.35rem',
    fontWeight: '400',
    marginBottom: '0.5rem',
    lineHeight: '1.5',
    color: '#ffffff',
    letterSpacing: '-0.01em'
  };

  const backToTopStyle = {
    position: 'fixed',
    bottom: '3rem',
    right: '3rem',
    writingMode: 'vertical-rl',
    textOrientation: 'mixed',
    fontSize: '0.7rem',
    letterSpacing: '0.2em',
    color: '#666666',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  };

  const homepageLabelStyle = {
    position: 'fixed',
    left: '3rem',
    top: '50%',
    transform: 'translateY(-50%) rotate(-90deg)',
    fontSize: '0.7rem',
    letterSpacing: '0.3em',
    color: '#666666',
    textTransform: 'uppercase',
    fontWeight: '300'
  };

  const services = [
    { title: 'Branding and\nIdentity Design' },
    { title: 'Website Design\nand Development' },
    { title: 'Advertising and\nMarketing Campaigns' },
    { title: 'Creative Consulting\nand Development' }
  ];

  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1200px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .hero-heading {
            font-size: 2.5rem !important;
          }
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .header {
            padding: 1.5rem 2rem !important;
          }
        }
      `}</style>

      <div    style={containerStyle}>
        {/* Decorative Geometric Shapes */}
        <svg style={decorativeShapeTopStyle} viewBox="0 0 300 300">
          <path d="M150,50 L250,130 L220,230 L80,230 L50,130 Z" 
                fill="none" 
                stroke="rgba(255,255,255,0.1)" 
                strokeWidth="1"/>
          <line x1="150" y1="50" x2="150" y2="230" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          <line x1="50" y1="130" x2="250" y2="130" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
        </svg>


        <div className="mil-animation-frame">
                <div className="mil-animation mil-position-1 mil-scale" data-value-1="2.4" data-value-2="1.4" style={{top: '300px', right: '-100px'}}></div>
                <div className="mil-animation mil-position-2 mil-scale" data-value-1="2" data-value-2="1" style={{left: '150px'}}></div>
              </div>


        <svg style={decorativeShapeBottomStyle} viewBox="0 0 400 400">
          <polygon points="200,50 350,150 300,300 100,300 50,150" 
                   fill="none" 
                   stroke="rgba(255,255,255,0.08)" 
                   strokeWidth="1"/>
          <circle cx="200" cy="200" r="80" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          <line x1="100" y1="100" x2="300" y2="300" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
        </svg>

        {/* Header */}
        

        {/* Homepage Label */}
        
        {/* Hero Section */}
        <section style={heroSectionStyle}>
          <div style={taglineStyle}>
            Professionals focused on helping your brand<br/>grow and move forward.
          </div>

          <div style={mainHeadingContainerStyle}>
            <div style={uniqueIdeasStyle} className="hero-heading">
              <div style={imageCircleStyle}></div>
              <span style={uniqueTextStyle}>Unique</span>
              <span style={ideasTextStyle}>Ideas</span>
            </div>
            
            <div style={forYourBusinessStyle} className="hero-heading">
              <span style={forYourTextStyle}>For Your</span>
              <span style={businessTextStyle}>Business.</span>
              <button 
                style={ctaHovered ? ctaButtonHoverStyle : ctaButtonStyle}
                onMouseEnter={() => setCtaHovered(true)}
                onMouseLeave={() => setCtaHovered(false)}
              >
                WHAT WE DO
                <div style={arrowStyle}>→</div>
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div style={servicesGridStyle} className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                style={serviceCardStyle(hoveredCard === index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={serviceCardBeforeStyle(hoveredCard === index)}></div>
                <div style={serviceIconStyle}></div>
                <h3 style={serviceTitleStyle}>
                  {service.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < service.title.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Back to Top */}
        
      </div>
    </>
  );
}