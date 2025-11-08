import React, { useState, useEffect } from 'react';

export default function AgencyLandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [ctaHovered, setCtaHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  const styles = {
    container: {
      backgroundColor: '#000',
      minHeight: '100vh',
      color: '#fff',
      fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
      overflow: 'hidden',
      position: 'relative'
    },
    decorativeTop: {
      position: 'absolute',
      top: '-100px',
      left: '100px',
      width: '300px',
      height: '300px',
      opacity: 0.1,
      pointerEvents: 'none'
    },
    decorativeBottom: {
      position: 'absolute',
      bottom: '-50px',
      right: '100px',
      width: '400px',
      height: '400px',
      opacity: 0.08,
      pointerEvents: 'none'
    },
    heroSection: {
      paddingTop: '180px',
      paddingBottom: '100px',
      paddingLeft: '2rem',
      paddingRight: '2rem',
      textAlign: 'center',
      position: 'relative'
    },
    tagline: {
      fontSize: '0.85rem',
      color: '#999',
      marginBottom: '3rem',
      fontWeight: '300',
      letterSpacing: '0.1em',
      animation: 'fadeInDown 0.8s ease-out'
    },
    mainHeading: {
      marginBottom: '4rem',
      animation: 'fadeInUp 1s ease-out 0.2s both'
    },
    uniqueIdeas: {
      fontSize: '4.5rem',
      fontWeight: '300',
      marginBottom: '0.5rem',
      letterSpacing: '-0.02em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1.5rem'
    },
    imageCircle: {
      width: '250px',
      height: '80px',
      borderRadius: '80px',
      overflow: 'hidden'
    },
    forYourBusiness: {
      fontSize: '4.5rem',
      fontWeight: '300',
      letterSpacing: '-0.02em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem'
    },
    ctaButton: {
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
    },
    arrow: {
      width: '28px',
      height: '28px',
      borderRadius: '50%',
      backgroundColor: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.6rem'
    },
    servicesGrid: {
      width: '70%',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      borderLeft: 'none',
      gap: '0',
      margin: '5rem auto 0',
      padding: '0'
    },
    serviceCard: (isHovered) => ({
      backgroundColor: 'transparent',
      borderRight: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '0px',
      padding: '20px 10px',
      minHeight: '300px',
      transition: 'all 0.4s ease',
      transform: 'none',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }),
    progressBar: (isHovered) => ({
      position: 'absolute',
      top: 0,
      left: 0,
      height: '3px',
      backgroundColor: '#ff9500',
      width: isHovered ? '100%' : '0%',
      transition: 'width 0.4s ease',
      zIndex: 3
    }),
    cardOverlay: (isHovered) => ({
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(255, 149, 0, 0.05) 0%, transparent 100%)',
      opacity: isHovered ? 1 : 0,
      transition: 'opacity 0.4s ease',
      pointerEvents: 'none'
    }),
    serviceIcon: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 149, 0, 0.8)',
      marginBottom: '2.5rem',
      boxShadow: '0 0 20px rgba(255, 149, 0, 0.4)'
    },
    serviceTitle: {
      fontSize: '1.35rem',
      fontWeight: '400',
      marginBottom: '1rem',
      lineHeight: '1.5',
      color: '#fff',
      letterSpacing: '-0.01em'
    },
    serviceDescription: (isHovered) => ({
      fontSize: '0.9rem',
      color: '#666',
      lineHeight: '1.6',
      marginBottom: '40px',
      height: '100px', // Reserve space to avoid layout shift
      opacity: isHovered ? 1 : 0,
      transition: 'opacity 0.3s ease',
      overflow: 'hidden'
    }),
    arrowButton: (isHovered) => ({
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: isHovered ? '#ff9500' : 'transparent',
      border: isHovered ? 'none' : '1px solid rgba(255, 149, 0, 0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.2rem',
      color: isHovered ? '#000' : '#ff9500',
      transition: 'all 0.4s ease',
      alignSelf: 'flex-start',
      transform: isHovered ? 'scale(1)' : 'scale(0.8)',
      opacity: isHovered ? 1 : 0.6
    })
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { margin: 0; padding: 0; overflow-x: hidden; }
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 1200px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 768px) { 
          .hero-heading { font-size: 2.5rem !important; }
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={styles.container}>
        <svg style={styles.decorativeTop} viewBox="0 0 300 300">
          <path d="M150,50 L250,130 L220,230 L80,230 L50,130 Z" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          <line x1="150" y1="50" x2="150" y2="230" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          <line x1="50" y1="130" x2="250" y2="130" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
        </svg>

        <div className="mil-animation-frame">
          <div className="mil-animation mil-position-1 mil-scale" data-value-1="2.4" data-value-2="1.4" style={{top: '300px', right: '-100px'}}></div>
          <div className="mil-animation mil-position-2 mil-scale" data-value-1="2" data-value-2="1" style={{left: '150px'}}></div>
        </div>

        <svg style={styles.decorativeBottom} viewBox="0 0 400 400">
          <polygon points="200,50 350,150 300,300 100,300 50,150" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
          <circle cx="200" cy="200" r="80" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          <line x1="100" y1="100" x2="300" y2="300" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
        </svg>
        
        <section style={styles.heroSection}>
          <div style={styles.tagline}>
            Professionals focused on helping your brand<br/>grow and move forward.
          </div>

          <div style={styles.mainHeading}>
            <div style={styles.uniqueIdeas} className="hero-heading">
              <div style={styles.imageCircle}>
                <img src="public/images/2_1.jpg" alt="team" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top'}}/>
              </div>
              <span style={{fontWeight:'700'}}>Unique</span>
              <span style={{fontWeight:'200',color:'#ccc'}}>Ideas</span>
            </div>
            
            <div style={styles.forYourBusiness} className="hero-heading">
              <span style={{fontWeight:'700'}}>For Your</span>
              <span style={{fontWeight:'200',color:'#ccc'}}>Business.</span>
              <button 
                style={styles.ctaButton}
                onMouseEnter={() => setCtaHovered(true)}
                onMouseLeave={() => setCtaHovered(false)}
              >
                WHAT WE DO
                <div className='mil-button mil-arrow-place mil-icon-button mil-arrow-right'></div>
              </button>
            </div>
          </div>

          <div style={styles.servicesGrid} className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                ...styles.serviceCard(hoveredCard === index),
                borderRight: index === services.length - 1 ? 'none' : styles.serviceCard(false).borderRight
              }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={styles.progressBar(hoveredCard === index)}></div>
                <div style={styles.cardOverlay(hoveredCard === index)}></div>
                <div style={{height: '238px', width: '223px'
                }}>
                  <h3 style={{...styles.serviceTitle, fontSize: '20px', fontWeight: '500', lineHeight: '30px'}}>
                    {service.title.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < service.title.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                  <p style={{
                    ...styles.serviceDescription(hoveredCard === index),
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontWeight: '300',
                    width: '95%'
                  }}>
                    {service.description}
                  </p>
                </div>
                <div style={styles.arrowButton(hoveredCard === index)}>→</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}