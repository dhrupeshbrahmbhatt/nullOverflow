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
        padding: '60px 140px',
        display: 'flex',
        gap: '40px',
        maxWidth: '1400px',
        margin: '0 auto',
        alignItems: 'center',
        flexWrap: 'nowrap'
      }}>
        {/* Left Content */}
        <div style={{
          flex: '1 1 500px',
          minWidth: '400px'
        }}>
          <h1 style={{
            fontSize: '68px',
            fontWeight: '100',
            lineHeight: '1.2',
            marginBottom: '60px',
            color: '#000'
          }} className="fade-in-up">
            <br />
            <span style={{ fontWeight: '500' }}>Discover</span> <br />
            <span style={{ fontWeight: '500' }}>Our</span> Studio
          </h1>
          
          <p style={{
            fontSize: '16px',
            lineHeight: '24px',
            width: '500px',
            color: '#666',
            marginBottom: '20px',
            fontWeight: '300'
          }} className="fade-in-up delay-1">
            At our design studio, we are a collective of talented individuals ignited by our unwavering passion for transforming ideas into reality. With a harmonious blend of diverse backgrounds and a vast array of skill sets, we join forces to create compelling solutions for our esteemed clients.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '24px', width: '500px', color: '#666', margin: '30px 0', fontWeight: '300' }} className="fade-in-up delay-2">
            Collaboration is at the heart of what we do. Our team thrives on the synergy that arises when unique perspectives converge, fostering an environment of boundless creativity. By harnessing our collective expertise, we produce extraordinary results that consistently surpass expectations.
          </p>

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
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
            
            <div>
              <div style={{
                fontSize: '18px',
                lineHeight: '27px',
                fontWeight: '500',
                color: '#000',
                marginBottom: '3px'
              }}>
                Passionately Creating <span style={{ fontWeight: '300', color: '#666' }}>Design Wonders:</span>
              </div>
              <div style={{
                fontSize: '18px',
                lineHeight: '27px',
                fontWeight: '100',
                color: '#000'
              }}>
                Unleashing <span style={{ fontWeight: '300', color: '#666' }}>Boundless Creativity</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div style={{
          flex: '1',
          minWidth: '400px', order: 2, display: 'flex', alignItems: 'stretch'
        }} className="fade-in delay-4">
          <img
            src="public/images/1_2.jpg"
            className="studio-img" alt="Studio workspace"
            style={{
              width: '100%',
              height: '620px',
              borderRadius: '8px',
              objectFit: 'cover',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
              transition: 'transform 0.5s ease',
              cursor: 'pointer'
            }}
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
              gap: 0px !important;
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