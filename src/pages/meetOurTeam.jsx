import React, { useState, useEffect, useCallback, useMemo } from 'react';

const MeetOurTeamPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
    const [ctaHovered, setCtaHovered] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame for smoother animation trigger
    const timer = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  // Memoize event handlers to prevent recreation on every render
  const handleButtonMouseEnter = useCallback((e) => {
    e.currentTarget.style.backgroundColor = '#e69500';
    e.currentTarget.style.transform = 'translateX(5px)';
  }, []);

  const handleButtonMouseLeave = useCallback((e) => {
    e.currentTarget.style.backgroundColor = '#ffa500';
    e.currentTarget.style.transform = 'translateX(0)';
  }, []);

  // Memoize animated styles to prevent recalculation
  const headingStyle = useMemo(() => ({
    ...styles.heading,
    fontSize: '68px',
    fontWeight: '500',
    lineHeight: '82px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.8s ease-out'
  }), [isVisible]);

  const description1Style = useMemo(() => ({
    ...styles.description,
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '300',
    width: '70%',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.8s ease-out 0.2s'
  }), [isVisible]);

  const description2Style = useMemo(() => ({
    ...styles.description,
    width: '70%',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.8s ease-out 0.3s'
  }), [isVisible]);

  const buttonStyle = useMemo(() => ({
    ...styles.readMoreButton,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.8s ease-out 0.4s'
  }), [isVisible]);

  const taglineStyle = useMemo(() => ({
    ...styles.tagline,
    opacity: isVisible ? 1 : 0,
    transition: 'all 1s ease-out 0.6s'
  }), [isVisible]);

  const ctaButton = useMemo(() => ({
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
    transform: ctaHovered ? 'translateY(-2px)' : 'translateY(0)',
    opacity: isVisible ? 1 : 0,
    marginTop: '30px',
    marginBottom: '100px'
  }), [ctaHovered, isVisible]);

  return (
    <div style={styles.container}>
      <div style={styles.main}>
        {/* Left Section */}
        <section style={styles.leftSection}>
          <h1 style={headingStyle}>
            Meet<br />Our Team
          </h1>

          <p style={description1Style}>
            We are talented individuals who are passionate about bringing ideas to life. With a diverse range of backgrounds and skill sets, we collaborate to produce effective solutions for our clients.
          </p>

          <p style={description2Style}>
            Together, our creative team is committed to delivering impactful work that exceeds expectations.
          </p>

          <button 
            style={ctaButton}
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
          >
            READ MORE
            <div className='mil-button mil-arrow-place mil-icon-button mil-arrow-right'></div>
          </button>

          <div style={taglineStyle}>
            <span style={styles.we}>We </span>
            <span style={styles.delivering}>delivering</span>
            <br />
            <span style={styles.exceptional}>exceptional </span>
            <span style={styles.results}>results.</span>
          </div>
        </section>

        {/* Right Section - Team Photos */}
        <section style={styles.rightSection}>
          <div style={styles.teamGrid}>
            {/* Card 1 - Top Left */}
            <div
              style={{
                ...styles.card1,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                transition: 'all 0.6s ease-out 0.5s'
              }}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img src="images/3_1.jpg" alt="Sarah Johnson" style={styles.teamImage} loading="lazy" />
              <div style={{ ...styles.overlay, opacity: hoveredCard === 1 ? 1 : 0 }}>
                <div style={styles.memberInfo}>
                  <h3 style={styles.memberName}>Sarah Johnson</h3>
                  <p style={styles.memberRole}>CREATIVE DIRECTOR</p>
                </div>
              </div>
            </div>

            {/* Card 2 - Top Right */}
            <div style={styles.founderLabel}> <span style={{ color: 'red', fontSize: '15px' }}>*</span> The founders of our agency</div>
            <div
              style={{
                ...styles.card2,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                transition: 'all 0.6s ease-out 0.6s'
              }}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img src="images/3.jpg" alt="Emma Williams" style={styles.teamImage} loading="lazy" />
              <div style={{ ...styles.overlay, opacity: hoveredCard === 2 ? 1 : 0 }}>
                <div style={styles.memberInfo}>
                  <h3 style={styles.memberName}>Emma Williams</h3>
                  <p style={styles.memberRole}>SENIOR DESIGNER</p>
                </div>
              </div>
            </div>

            {/* Card 3 - Bottom Left */}
            <div
              style={{
                ...styles.card3,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                transition: 'all 0.6s ease-out 0.7s'
              }}
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img src="images/4_1.jpg" alt="Michael Brown" style={styles.teamImage} loading="lazy" />
              <div style={{ ...styles.overlay, opacity: hoveredCard === 3 ? 1 : 0 }}>
                <div style={styles.memberInfo}>
                  <h3 style={styles.memberName}>Michael Brown</h3>
                  <p style={styles.memberRole}>LEAD DEVELOPER</p>
                </div>
              </div>
            </div>

            {/* Card 4 - Bottom Right */}
            <div
              style={{
                ...styles.card4,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                transition: 'all 0.6s ease-out 0.8s'
              }}
              onMouseEnter={() => setHoveredCard(4)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img src="images/4.jpg" alt="Lisa Trueman" style={styles.teamImage} loading="lazy" />
              <div style={{ ...styles.overlay, opacity: hoveredCard === 4 ? 1 : 0 }}>
                <div style={styles.memberInfo}>
                  <h3 style={styles.memberName}>Lisa Trueman</h3>
                  <p style={styles.memberRole}>UI/UX DESIGNER</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#fafafa',
    fontFamily: "'Outfit', sans-serif",
    position: 'relative',
    overflow: 'hidden'
  },
  main: {
    display: 'flex',
    padding: '0 50px',
    maxWidth: '1400px',
    margin: '120px auto',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  leftSection: {
    flex: '0 0 500px',
    paddingTop: '0px'
  },
  heading: {
    fontSize: '90px',
    fontWeight: '800',
    lineHeight: '0.95',
    marginBottom: '50px',
    color: '#000',
    letterSpacing: '-3px',
    fontFamily: "'Outfit', sans-serif"
  },
  description: {
    fontSize: '16px',
    lineHeight: '1.7',
    color: '#9b9b9b',
    marginBottom: '28px',
    fontWeight: '400',
    maxWidth: '450px'
  },
  readMoreButton: {
    backgroundColor: '#FFA801',
    color: '#000',
    border: 'none',
    padding: '20px 45px',
    borderRadius: '50px',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '2px',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '20px',
    marginTop: '30px',
    marginBottom: '100px',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 20px rgba(255, 165, 0, 0.35)'
  },
  readMoreText: {
    lineHeight: '24px',
    fontSize: '12px',
    fontWeight: '300'

  },
  tagline: {
    fontSize: '28px',
    lineHeight: '1.3',
    marginTop: '30px',
    fontWeight: '400'
  },
  we: {
    color: '#000',
    fontWeight: '100'
  },
  delivering: {
    color: '#000',
    fontWeight: '500'
  },
  exceptional: {
    color: '#000',
    fontWeight: '100'
  },
  results: {
    color: '#000',
    fontWeight: '500'
  },
  rightSection: {
    flex: '1',
    position: 'relative',
    paddingTop: '0px',
    maxWidth: '560px'
  },
  founderLabel: {
    position: 'absolute',
    left: '285px',
    top: '10px',
    fontSize: '18px',
    lineHeight: '24px',
    color: '#bbb',
    fontWeight: '300',
    letterSpacing: '0.5px',
    zIndex: 10
  },
  teamGrid: {
    position: 'relative',
    width: '545px',
    height: '850px'
  },
  card1: {
    position: 'absolute',
    left: '0',
    top: '0',
    width: '260px',
    height: '390px',
    borderRadius: '25px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: 'none',
    backgroundColor: '#e8e8e8'
  },
  card2: {
    position: 'absolute',
    left: '285px',
    top: '80px',
    width: '260px',
    height: '390px',
    borderRadius: '25px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: 'none',
    backgroundColor: '#e8e8e8'
  },
  card3: {
    position: 'absolute',
    left: '0',
    top: '415px',
    width: '260px',
    height: '390px',
    borderRadius: '25px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: 'none',
    backgroundColor: '#e8e8e8'
  },
  card4: {
    position: 'absolute',
    left: '285px',
    top: '495px',
    width: '260px',
    height: '390px',
    borderRadius: '25px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: 'none',
    backgroundColor: '#e8e8e8'
  },
  teamImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(42, 42, 42, 0.7)',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '30px',
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none'
  },
  memberInfo: {
    color: '#fff'
  },
  memberName: {
    fontSize: '24px',
    fontWeight: '700',
    margin: '0 0 8px 0',
    color: '#fff'
  },
  memberRole: {
    fontSize: '11px',
    fontWeight: '400',
    letterSpacing: '1.5px',
    margin: '0 0 15px 0',
    color: '#888'
  },
  socialIcons: {
    display: 'flex',
    gap: '15px',
    fontSize: '18px'
  },
  socialIcon: {
    color: '#fff',
    cursor: 'pointer',
    transition: 'color 0.3s ease'
  }
};

export default MeetOurTeamPage;