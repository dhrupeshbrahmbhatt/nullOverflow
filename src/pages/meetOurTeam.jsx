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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800&display=swap');

        /* Tablet View (768px - 1024px) */
        @media (max-width: 1024px) {
          .meet-team-main {
            flex-direction: column !important;
            padding: 0 40px !important;
            margin: 80px auto !important;
            align-items: center !important;
          }

          .left-section {
            flex: 1 !important;
            max-width: 100% !important;
            margin-bottom: 60px !important;
            padding-top: 0 !important;
          }

          .meet-heading {
            font-size: 56px !important;
            margin-bottom: 35px !important;
            letter-spacing: -2px !important;
          }

          .meet-description {
            width: 100% !important;
            max-width: 600px !important;
            font-size: 15px !important;
            margin-bottom: 24px !important;
          }

          .meet-tagline {
            font-size: 24px !important;
          }

          .cta-button-meet {
            margin-bottom: 60px !important;
          }

          .right-section {
            max-width: 100% !important;
            padding-top: 0 !important;
          }

          .team-grid {
            width: 500px !important;
            height: 780px !important;
          }

          .team-card-1 {
            width: 230px !important;
            height: 350px !important;
          }

          .team-card-2 {
            left: 250px !important;
            top: 70px !important;
            width: 230px !important;
            height: 350px !important;
          }

          .team-card-3 {
            top: 385px !important;
            width: 230px !important;
            height: 350px !important;
          }

          .team-card-4 {
            left: 250px !important;
            top: 455px !important;
            width: 230px !important;
            height: 350px !important;
          }

          .founder-label {
            left: 250px !important;
            font-size: 16px !important;
          }
        }

        /* Mobile View (up to 767px) */
        @media (max-width: 767px) {
          .meet-team-main {
            flex-direction: column !important;
            padding: 0 20px !important;
            margin: 60px auto !important;
          }

          .left-section {
            flex: 1 !important;
            max-width: 100% !important;
            margin-bottom: 40px !important;
          }

          .meet-heading {
            font-size: 48px !important;
            margin-bottom: 30px !important;
            letter-spacing: -1.5px !important;
          }

          .meet-description {
            width: 100% !important;
            font-size: 15px !important;
            line-height: 1.6 !important;
            margin-bottom: 20px !important;
          }

          .meet-tagline {
            font-size: 22px !important;
            line-height: 1.4 !important;
          }

          .cta-button-meet {
            padding: 16px 35px !important;
            font-size: 11px !important;
            margin-bottom: 50px !important;
          }

          .right-section {
            width: 100% !important;
            max-width: 100% !important;
          }

          .team-grid {
            position: relative !important;
            width: 100% !important;
            height: auto !important;
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 15px !important;
          }

          .team-card-1,
          .team-card-2,
          .team-card-3,
          .team-card-4 {
            position: relative !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            height: 280px !important;
            border-radius: 20px !important;
          }

          .founder-label {
            position: static !important;
            grid-column: 1 / -1 !important;
            margin-bottom: 10px !important;
            font-size: 14px !important;
            text-align: center !important;
          }

          .team-member-name {
            font-size: 20px !important;
          }

          .team-member-role {
            font-size: 10px !important;
          }

          .team-overlay {
            padding: 20px !important;
          }
        }

        /* Small Mobile View (up to 480px) */
        @media (max-width: 480px) {
          .meet-team-main {
            padding: 0 15px !important;
            margin: 40px auto !important;
          }

          .meet-heading {
            font-size: 42px !important;
            margin-bottom: 25px !important;
          }

          .meet-description {
            font-size: 14px !important;
            line-height: 1.5 !important;
            margin-bottom: 18px !important;
          }

          .meet-tagline {
            font-size: 20px !important;
          }

          .cta-button-meet {
            padding: 14px 30px !important;
            font-size: 10px !important;
            gap: 15px !important;
          }

          .team-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }

          .team-card-1,
          .team-card-2,
          .team-card-3,
          .team-card-4 {
            height: 320px !important;
            border-radius: 18px !important;
          }

          .founder-label {
            font-size: 13px !important;
            margin-bottom: 8px !important;
          }

          .team-member-name {
            font-size: 18px !important;
          }

          .team-member-role {
            font-size: 9px !important;
          }
        }
      `}</style>

      <div style={styles.container}>
        <div style={styles.main} className="meet-team-main">
          {/* Left Section */}
          <section style={styles.leftSection} className="left-section">
            <h1 style={headingStyle} className="meet-heading">
              Meet<br />Our Team
            </h1>

            <p style={description1Style} className="meet-description">
              We are talented individuals who are passionate about bringing ideas to life. With a diverse range of backgrounds and skill sets, we collaborate to produce effective solutions for our clients.
            </p>

            <p style={description2Style} className="meet-description">
              Together, our creative team is committed to delivering impactful work that exceeds expectations.
            </p>

            <button
              style={ctaButton}
              className="cta-button-meet"
              onMouseEnter={() => setCtaHovered(true)}
              onMouseLeave={() => setCtaHovered(false)}
            >
              READ MORE
              <div className='mil-button mil-arrow-place mil-icon-button mil-arrow-right'></div>
            </button>

            <div style={taglineStyle} className="meet-tagline">
              <span style={styles.we}>We </span>
              <span style={styles.delivering}>delivering</span>
              <br />
              <span style={styles.exceptional}>exceptional </span>
              <span style={styles.results}>results.</span>
            </div>
          </section>

          {/* Right Section - Team Photos */}
          <section style={styles.rightSection} className="right-section">
            <div style={styles.teamGrid} className="team-grid">
              {/* Card 1 - Top Left */}
              <div
                className="team-card-1"
                style={{
                  ...styles.card1,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                  transition: 'all 0.6s ease-out 0.5s'
                }}
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img src="/images/3_1.jpg" alt="Sarah Johnson" style={styles.teamImage} loading="lazy" />
                <div style={{ ...styles.overlay, opacity: hoveredCard === 1 ? 1 : 0 }} className="team-overlay">
                  <div style={styles.memberInfo}>
                    <h3 style={styles.memberName} className="team-member-name">Sarah Johnson</h3>
                    <p style={styles.memberRole} className="team-member-role">CREATIVE DIRECTOR</p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Top Right */}
              <div style={styles.founderLabel} className="founder-label"> <span style={{ color: 'red', fontSize: '15px' }}>*</span> The founders of our agency</div>
              <div
                className="team-card-2"
                style={{
                  ...styles.card2,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                  transition: 'all 0.6s ease-out 0.6s'
                }}
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img src="/images/3.jpg" alt="Emma Williams" style={styles.teamImage} loading="lazy" />
                <div style={{ ...styles.overlay, opacity: hoveredCard === 2 ? 1 : 0 }} className="team-overlay">
                  <div style={styles.memberInfo}>
                    <h3 style={styles.memberName} className="team-member-name">Emma Williams</h3>
                    <p style={styles.memberRole} className="team-member-role">SENIOR DESIGNER</p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Bottom Left */}
              <div
                className="team-card-3"
                style={{
                  ...styles.card3,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                  transition: 'all 0.6s ease-out 0.7s'
                }}
                onMouseEnter={() => setHoveredCard(3)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img src="/images/4_1.jpg" alt="Michael Brown" style={styles.teamImage} loading="lazy" />
                <div style={{ ...styles.overlay, opacity: hoveredCard === 3 ? 1 : 0 }} className="team-overlay">
                  <div style={styles.memberInfo}>
                    <h3 style={styles.memberName} className="team-member-name">Michael Brown</h3>
                    <p style={styles.memberRole} className="team-member-role">LEAD DEVELOPER</p>
                  </div>
                </div>
              </div>

              {/* Card 4 - Bottom Right */}
              <div
                className="team-card-4"
                style={{
                  ...styles.card4,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                  transition: 'all 0.6s ease-out 0.8s'
                }}
                onMouseEnter={() => setHoveredCard(4)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img src="/images/4.jpg" alt="Lisa Trueman" style={styles.teamImage} loading="lazy" />
                <div style={{ ...styles.overlay, opacity: hoveredCard === 4 ? 1 : 0 }} className="team-overlay">
                  <div style={styles.memberInfo}>
                    <h3 style={styles.memberName} className="team-member-name">Lisa Trueman</h3>
                    <p style={styles.memberRole} className="team-member-role">UI/UX DESIGNER</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
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