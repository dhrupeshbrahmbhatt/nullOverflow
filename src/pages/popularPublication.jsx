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
      image: 'images/1_1.jpg'
    },
    {
      id: 2,
      category: 'TECHNOLOGY',
      date: 'MAY 24 2023',
      title: '16 Best Graphic Design Online and Offline Courses',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eus sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupidita...',
      image: 'images/2_3.jpg'
    }
  ];

  return (
    <div style={{
      fontFamily: "'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      minHeight: '100vh',
      backgroundColor: '#F8F8F8',
      position: 'relative'
    }}>
      {/* Add Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
          
          * {
            margin: 0 px;
            padding: 0 px;
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
        padding: '60px 80px',
        position: 'relative'
      }}>
        

        
      </header>

      {/* Main Content */}
      <main style={{
        padding: '80px 96px 120px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Section Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '60px',
          marginLeft: '100px'
        }}>
          <h1 style={{
            fontSize: '56px',
            fontWeight: '500',
            color: '#000000',
            letterSpacing: '-1px',
            lineHeight: '1.2'
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
          display: 'flex',
          gap: '60px',
          marginLeft: '100px'
        }}>
          {publications.map((pub) => (
            <article
              key={pub.id}
              onMouseEnter={() => setHoveredCard(pub.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: 'transparent',
                borderRadius: '0',
                overflow: 'visible',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoveredCard === pub.id ? 'translateY(-8px)' : 'translateY(0)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}
            >
              {/* Image */}
              <div style={{
                width: '100%',
                maxWidth: '555px',
                height: '360px',
                overflow: 'hidden',
                borderRadius: '20px',
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
                padding: '36px 0 0 0',
                width: '100%',
                maxWidth: '555px'
              }}>
                {/* Category and Date */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '18px'
                }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: '#FF8C00',
                    letterSpacing: '1.5px'
                  }}>
                    {pub.category}
                  </span>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: '600',
                    color: '#AAAAAA',
                    letterSpacing: '1px'
                  }}>
                    {pub.date}
                  </span>
                </div>

                {/* Title */}
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: '500',
                  color: '#000000',
                  lineHeight: '1.35',
                  marginBottom: '16px',
                  letterSpacing: '-0.5px',
                  transition: 'color 0.3s ease'
                }}>
                  {pub.title}
                </h2>

                {/* Description */}
                <p style={{
                  fontSize: '15px',
                  fontWeight: '300',
                  color: '#888888',
                  lineHeight: '1.65',
                  marginBottom: '26px'
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
                    gap: '14px',
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
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: hoveredButton === `read-${pub.id}` ? '#000000' : '#F0F0F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    transform: hoveredButton === `read-${pub.id}` ? 'translateX(6px)' : 'translateX(0)'
                  }}>
                    <ArrowRight
                      size={18}
                      color={hoveredButton === `read-${pub.id}` ? '#ffffff' : '#000000'}
                      style={{
                        transition: 'color 0.3s ease'
                      }}
                    />
                  </div>
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
      
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 1400px) {
            main {
              padding-left: 60px !important;
              padding-right: 60px !important;
            }
          }

          @media (max-width: 1200px) {
            main {
              padding-left: 40px !important;
              padding-right: 40px !important;
            }

            main h1 {
              font-size: 48px !important;
            }

            main > div:nth-child(2) {
              grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)) !important;
            }
          }

          @media (max-width: 992px) {
            main > div:first-child {
              flex-direction: column;
              align-items: flex-start !important;
              gap: 24px;
            }

            main > div:nth-child(2) {
              grid-template-columns: 1fr !important;
              gap: 50px !important;
            }

            main h1 {
              font-size: 42px !important;
            }

            article > div:first-child {
              height: 320px !important;
            }
          }

          @media (max-width: 768px) {
            main {
              padding: 60px 24px 80px !important;
            }

            main h1 {
              font-size: 36px !important;
            }

            article h2 {
              font-size: 24px !important;
            }

            article p {
              font-size: 14px !important;
              line-height: 1.6 !important;
            }

            article > div:first-child {
              height: 280px !important;
            }
          }

          @media (max-width: 580px) {
            main {
              padding: 40px 20px 60px !important;
            }

            main h1 {
              font-size: 32px !important;
            }

            main > div:nth-child(2) {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }

            article h2 {
              font-size: 22px !important;
            }

            article > div:first-child {
              height: 240px !important;
            }

            article button {
              font-size: 12px !important;
            }

            article button > div {
              width: 36px !important;
              height: 36px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default PopularPublications;