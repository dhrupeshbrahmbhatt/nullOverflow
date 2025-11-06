import React, { useState } from 'react';
import { ArrowRight, Menu } from 'lucide-react';

const PopularPublications = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  const publications = [
    {
      id: 1,
      category: 'TECHNOLOGY',
      date: 'MAY 24 2023',
      title: 'How to Become a Graphic Designer in 10 Simple Steps',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eus sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupidita...',
      image: 'https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      category: 'TECHNOLOGY',
      date: 'MAY 24 2023',
      title: '16 Best Graphic Design Online and Offline Courses',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eus sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupidita...',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop'
    }
  ];

  return (
    <div style={{
      fontFamily: "'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      position: 'relative'
    }}>
      {/* Add Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            overflow-x: hidden;
          }
        `}
      </style>

      {/* Header */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '40px 80px',
        position: 'relative'
      }}>
        {/* Logo */}
        <div style={{
          fontSize: '32px',
          fontWeight: '600',
          color: '#000000',
          letterSpacing: '-1px'
        }}>
          A.
        </div>

        {/* Hamburger Menu */}
        <button style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Menu size={32} color="#000000" strokeWidth={2} />
        </button>
      </header>

      {/* Main Content */}
      <main style={{
        padding: '60px 80px 80px'
      }}>
        {/* Section Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '60px'
        }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '600',
            color: '#000000',
            letterSpacing: '-1px'
          }}>
            Popular Publications:
          </h1>

          <button
            onMouseEnter={() => setHoveredButton('viewAll')}
            onMouseLeave={() => setHoveredButton(null)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: hoveredButton === 'viewAll' ? '#000000' : '#f5f5f5',
              color: hoveredButton === 'viewAll' ? '#ffffff' : '#000000',
              border: 'none',
              padding: '16px 28px',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '1.5px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: hoveredButton === 'viewAll' ? '0 4px 12px rgba(0,0,0,0.15)' : 'none'
            }}
          >
            VIEW ALL
            <ArrowRight 
              size={18} 
              style={{
                transition: 'transform 0.3s ease',
                transform: hoveredButton === 'viewAll' ? 'translateX(4px)' : 'translateX(0)'
              }}
            />
          </button>
        </div>

        {/* Publications Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '40px'
        }}>
          {publications.map((pub) => (
            <article
              key={pub.id}
              onMouseEnter={() => setHoveredCard(pub.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: '#ffffff',
                borderRadius: '0',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoveredCard === pub.id ? 'translateY(-8px)' : 'translateY(0)',
                cursor: 'pointer'
              }}
            >
              {/* Image */}
              <div style={{
                width: '100%',
                height: '280px',
                overflow: 'hidden',
                backgroundColor: '#f5f5f5',
                position: 'relative'
              }}>
                <img
                  src={pub.image}
                  alt={pub.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: hoveredCard === pub.id ? 'scale(1.08)' : 'scale(1)'
                  }}
                />
              </div>

              {/* Content */}
              <div style={{
                padding: '32px 0'
              }}>
                {/* Category and Date */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '20px'
                }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: '#FFA500',
                    letterSpacing: '1.5px'
                  }}>
                    {pub.category}
                  </span>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: '600',
                    color: '#999999',
                    letterSpacing: '1px'
                  }}>
                    {pub.date}
                  </span>
                </div>

                {/* Title */}
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: '600',
                  color: '#000000',
                  lineHeight: '1.3',
                  marginBottom: '16px',
                  letterSpacing: '-0.5px',
                  transition: 'color 0.3s ease'
                }}>
                  {pub.title}
                </h2>

                {/* Description */}
                <p style={{
                  fontSize: '15px',
                  fontWeight: '400',
                  color: '#666666',
                  lineHeight: '1.6',
                  marginBottom: '28px'
                }}>
                  {pub.description}
                </p>

                {/* Read More Button */}
                <button
                  onMouseEnter={(e) => {
                    setHoveredButton(`read-${pub.id}`);
                  }}
                  onMouseLeave={(e) => {
                    setHoveredButton(null);
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'transparent',
                    border: 'none',
                    padding: '0',
                    fontSize: '13px',
                    fontWeight: '700',
                    letterSpacing: '1.5px',
                    color: '#000000',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  READ MORE
                  <ArrowRight 
                    size={18} 
                    style={{
                      transition: 'transform 0.3s ease',
                      transform: hoveredButton === `read-${pub.id}` ? 'translateX(6px)' : 'translateX(0)'
                    }}
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Back to Top Button */}
      <button style={{
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        width: '50px',
        height: '120px',
        background: '#000000',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        color: '#ffffff',
        fontSize: '10px',
        fontWeight: '600',
        letterSpacing: '1px',
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
        transform: 'rotate(180deg)',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
      }}>
        BACK TO TOP
      </button>

      {/* Homepage Link */}
      <div style={{
        position: 'fixed',
        left: '40px',
        top: '50%',
        transform: 'translateY(-50%)',
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
        fontSize: '11px',
        fontWeight: '600',
        letterSpacing: '2px',
        color: '#000000'
      }}>
        HOMEPAGE
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 1200px) {
            header, main {
              padding-left: 40px !important;
              padding-right: 40px !important;
            }
          }

          @media (max-width: 768px) {
            main > div:first-child {
              flex-direction: column;
              align-items: flex-start !important;
              gap: 20px;
            }
            
            main > div:nth-child(2) {
              grid-template-columns: 1fr !important;
              gap: 60px !important;
            }

            header, main {
              padding-left: 20px !important;
              padding-right: 20px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default PopularPublications;