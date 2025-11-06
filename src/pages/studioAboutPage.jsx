import React, { useState, useEffect } from 'react';
import { Menu, ArrowUp, Pause, Play } from 'lucide-react';

const StudioAboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      margin: 0,
      padding: 0,
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      position: 'relative'
    }}>
      {/* Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
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
          
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          .fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          
          .fade-in {
            animation: fadeIn 1s ease-out forwards;
          }
          
          .delay-1 {
            animation-delay: 0.2s;
            opacity: 0;
          }
          
          .delay-2 {
            animation-delay: 0.4s;
            opacity: 0;
          }
          
          .delay-3 {
            animation-delay: 0.6s;
            opacity: 0;
          }
          
          .delay-4 {
            animation-delay: 0.8s;
            opacity: 0;
          }
        `}
      </style>

      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '30px 60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        zIndex: 1000,
        transition: 'all 0.3s ease'
      }}>
        
        
        
      </header>

      {/* Main Content */}
      <main style={{
        paddingTop: '120px',
        padding: '120px 60px 60px',
        display: 'flex',
        gap: '80px',
        maxWidth: '1400px',
        margin: '0 auto',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        {/* Left Content */}
        <div style={{
          flex: '1 1 500px',
          minWidth: '400px'
        }}>
          <h1 style={{
            fontSize: '64px',
            fontWeight: '600',
            lineHeight: '1.2',
            marginBottom: '40px',
            color: '#000'
          }} className="fade-in-up">
            Discover<br />
            <span style={{ fontWeight: '300' }}>Our</span> Studio
          </h1>
          
          <p style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: '#666',
            marginBottom: '30px',
            fontWeight: '300'
          }} className="fade-in-up delay-1">
            At our design studio, we are a collective of talented individuals ignited by our unwavering passion for transforming ideas into reality. With a harmonious blend of diverse backgrounds and a vast array of skill sets, we join forces to create compelling solutions for our esteemed clients.
          </p>
          
          <p style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: '#666',
            marginBottom: '50px',
            fontWeight: '300'
          }} className="fade-in-up delay-2">
            Collaboration is at the heart of what we do. Our team thrives on the synergy that arises when unique perspectives converge, fostering an environment of boundless creativity. By harnessing our collective expertise, we produce extraordinary results that consistently surpass expectations.
          </p>
          
          {/* Audio Player */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            padding: '15px 0'
          }} className="fade-in-up delay-3">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
              alt="Profile"
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FFA500, #FF8C00)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.2s ease',
                boxShadow: '0 4px 12px rgba(255, 165, 0, 0.3)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {isPlaying ? <Pause size={16} color="#fff" /> : <Play size={16} color="#fff" />}
            </button>
            
            <div>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#000',
                marginBottom: '3px'
              }}>
                Passionately Creating <span style={{ fontWeight: '300', color: '#666' }}>Design Wonders:</span>
              </div>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#000'
              }}>
                Unleashing <span style={{ fontWeight: '300', color: '#666' }}>Boundless Creativity</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div style={{
          flex: '1 1 500px',
          minWidth: '400px'
        }} className="fade-in delay-4">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=900&fit=crop"
            alt="Studio workspace"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '0',
              objectFit: 'cover',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
              transition: 'transform 0.5s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
      </main>

      {/* Side Navigation */}
      
      

      {/* Back to Top Button */}
      

      

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 1024px) {
            header {
              padding: 20px 40px !important;
            }
            
            main {
              padding: 100px 40px 40px !important;
              gap: 60px !important;
            }
            
            h1 {
              font-size: 52px !important;
            }
          }
          
          @media (max-width: 768px) {
            header {
              padding: 20px 30px !important;
            }
            
            main {
              padding: 100px 30px 40px !important;
              gap: 40px !important;
            }
            
            main > div {
              min-width: 100% !important;
            }
            
            h1 {
              font-size: 42px !important;
            }
            
            .side-nav {
              display: none !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default StudioAboutPage;