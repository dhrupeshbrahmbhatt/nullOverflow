import React, { useState, useEffect } from 'react';

const MeetOurTeamPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={styles.container}>
      {/* Navigation */}
      

      {/* Main Content */}
      <main style={styles.main}>
        {/* Left Section */}
        <section style={styles.leftSection}>
          <h1 style={{
            ...styles.heading,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
          }}>
            Meet<br />Our Team
          </h1>

          <p style={{
            ...styles.description,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out 0.2s'
          }}>
            We are talented individuals who are passionate about bringing ideas to life. With a diverse range of backgrounds and skill sets, we collaborate to produce effective solutions for our clients.
          </p>

          <p style={{
            ...styles.description,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out 0.3s'
          }}>
            Together, our creative team is committed to delivering impactful work that exceeds expectations.
          </p>

          <button style={{
            ...styles.readMoreButton,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out 0.4s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#e69500';
            e.currentTarget.style.transform = 'translateX(5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ffa500';
            e.currentTarget.style.transform = 'translateX(0)';
          }}>
            <span style={styles.readMoreText}>READ MORE</span>
            <div style={styles.arrowCircle}>→</div>
          </button>

          <div style={{
            ...styles.tagline,
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s ease-out 0.6s'
          }}>
            <span style={styles.we}>We </span>
            <span style={styles.delivering}>delivering</span>
            <br />
            <span style={styles.exceptional}>exceptional </span>
            <span style={styles.results}>results.</span>
          </div>
        </section>

        {/* Right Section - Team Photos */}
        <section style={styles.rightSection}>
          <div style={styles.founderLabel}>* The founders of our agency</div>
          
          <div style={styles.teamGrid}>
            {/* Top Left - Woman with glasses */}
            <div style={{
              ...styles.teamMember,
              ...styles.topLeft,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.8)',
              transition: 'all 0.6s ease-out 0.5s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            }}>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop" 
                alt="Team Member 1" 
                style={styles.teamImage}
              />
            </div>

            {/* Top Right - Woman in yellow */}
            <div style={{
              ...styles.teamMember,
              ...styles.topRight,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.8)',
              transition: 'all 0.6s ease-out 0.6s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            }}>
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=600&fit=crop" 
                alt="Team Member 2" 
                style={styles.teamImage}
              />
            </div>

            {/* Bottom Left - Man with beard */}
            <div style={{
              ...styles.teamMember,
              ...styles.bottomLeft,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.8)',
              transition: 'all 0.6s ease-out 0.7s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            }}>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=600&fit=crop" 
                alt="Team Member 3" 
                style={styles.teamImage}
              />
            </div>

            {/* Bottom Right - Woman with blonde hair */}
            <div style={{
              ...styles.teamMember,
              ...styles.bottomRight,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.8)',
              transition: 'all 0.6s ease-out 0.8s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            }}>
              <img 
                src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=600&fit=crop" 
                alt="Team Member 4" 
                style={styles.teamImage}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Side Navigation - HOMEPAGE */}
      <div style={styles.sideNavLeft}>
        <div style={styles.homePageText}>HOMEPAGE</div>
      </div>

      {/* Back to Top Button */}
      
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
  
  
  menuButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    transition: 'all 0.3s ease'
  },
  menuLine: {
    width: '32px',
    height: '2.5px',
    backgroundColor: '#000',
    transition: 'all 0.3s ease'
  },
  main: {
    display: 'flex',
    padding: '80px 80px 80px 80px',
    gap: '100px',
    maxWidth: '1600px',
    margin: '120px auto',
    alignItems: 'flex-start'
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
    color: '#afafaf',
    marginBottom: '28px',
    fontWeight: '400',
    maxWidth: '450px'
  },
  readMoreButton: {
    backgroundColor: '#ffa500',
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
    lineHeight: '1'
  },
  arrowCircle: {
    fontSize: '18px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '28px',
    height: '28px',
    backgroundColor: '#000',
    borderRadius: '50%',
    color: '#fff'
  },
  tagline: {
    fontSize: '34px',
    lineHeight: '1.3',
    marginTop: '30px',
    fontWeight: '400'
  },
  we: {
    color: '#d0d0d0',
    fontWeight: '400'
  },
  delivering: {
    color: '#000',
    fontWeight: '700'
  },
  exceptional: {
    color: '#000',
    fontWeight: '400'
  },
  results: {
    color: '#000',
    fontWeight: '800'
  },
  rightSection: {
    flex: '1',
    position: 'relative',
    paddingTop: '0px',
    maxWidth: '600px'
  },
  founderLabel: {
    fontSize: '13px',
    color: '#ffa500',
    marginBottom: '30px',
    fontWeight: '500',
    letterSpacing: '0.5px'
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: '200px 225px',
    gridTemplateRows: 'auto auto',
    gap: '25px',
    position: 'relative',
    justifyContent: 'flex-start'
  },
  teamMember: {
    borderRadius: '12px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  },
  topLeft: {
    gridColumn: '1',
    gridRow: '1',
    height: '280px'
  },
  topRight: {
    gridColumn: '2',
    gridRow: '1 / 3',
    height: '380px',
    marginTop: '50px'
  },
  bottomLeft: {
    gridColumn: '1',
    gridRow: '2',
    height: '280px'
  },
  bottomRight: {
    gridColumn: '2',
    gridRow: '2',
    height: '350px',
    marginTop: '-95px'
  },
  teamImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  },
  sideNavLeft: {
    position: 'fixed',
    left: '30px',
    top: '50%',
    transform: 'translateY(-50%) rotate(-90deg)',
    transformOrigin: 'left center',
    zIndex: 50
  },
  homePageText: {
    fontSize: '11px',
    letterSpacing: '4px',
    color: '#000',
    fontWeight: '700'
  },
  backToTopContainer: {
    position: 'fixed',
    right: '40px',
    bottom: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    zIndex: 100
  },
  backToTopButton: {
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
  },
  upArrow: {
    fontSize: '20px',
    fontWeight: '700'
  },
  backToTopText: {
    fontSize: '9px',
    letterSpacing: '3px',
    fontWeight: '700',
    color: '#000',
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)'
  }
};

export default MeetOurTeamPage;