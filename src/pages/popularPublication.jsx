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
      {/* Main Content */}
      <main className="pub-main" style={{
        padding: '80px 96px 120px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Section Header */}
        <div className="pub-section-header" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '60px',
          marginLeft: '100px'
        }}>
          <h1 className="pub-title" style={{
            fontSize: '56px',
            fontWeight: '500',
            color: '#000000',
            letterSpacing: '-1px',
            lineHeight: '1.2'
          }}>
            Popular Publications:
          </h1>

          <button
            className="view-all-btn"
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
        <div className="pub-grid" style={{
          display: 'flex',
          gap: '60px',
          marginLeft: '100px'
        }}>
          {publications.map((pub) => (
            <article
              key={pub.id}
              className="pub-card"
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
              <div className="pub-card-image" style={{
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
              <div className="pub-card-content" style={{
                padding: '36px 0 0 0',
                width: '100%',
                maxWidth: '555px'
              }}>
                {/* Category and Date */}
                <div className="pub-meta" style={{
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
                <h2 className="pub-card-title" style={{
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
                <p className="pub-card-desc" style={{
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
                  className="read-more-btn"
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
                  <div className="read-more-circle" style={{
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

      {/* Homepage Link */}
      <div className="homepage-link" style={{
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
          /* Tablet View (768px - 1024px) */
          @media (max-width: 1024px) {
            .pub-header {
              padding: 40px 40px !important;
            }

            .pub-main {
              padding: 60px 40px 100px !important;
            }

            .pub-section-header {
              margin-left: 0 !important;
              margin-bottom: 50px !important;
            }

            .pub-title {
              font-size: 48px !important;
            }

            .view-all-btn {
              padding: 14px 24px !important;
              font-size: 13px !important;
            }

            .pub-grid {
              margin-left: 0 !important;
              gap: 50px !important;
            }

            .pub-card-image {
              max-width: 100% !important;
              height: 340px !important;
            }

            .pub-card-content {
              max-width: 100% !important;
            }

            .pub-card-title {
              font-size: 26px !important;
            }
          }

          /* Mobile View (up to 767px) */
          @media (max-width: 767px) {
            .pub-header {
              padding: 30px 20px !important;
            }

            .pub-main {
              padding: 40px 20px 80px !important;
            }

            .pub-section-header {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 20px !important;
              margin-bottom: 40px !important;
            }

            .pub-title {
              font-size: 38px !important;
              letter-spacing: -0.5px !important;
            }

            .view-all-btn {
              padding: 12px 20px !important;
              font-size: 12px !important;
              align-self: flex-start !important;
            }

            .pub-grid {
              flex-direction: column !important;
              gap: 40px !important;
            }

            .pub-card {
              width: 100% !important;
            }

            .pub-card-image {
              height: 280px !important;
              border-radius: 16px !important;
            }

            .pub-card-content {
              padding: 28px 0 0 0 !important;
            }

            .pub-meta {
              margin-bottom: 14px !important;
            }

            .pub-card-title {
              font-size: 24px !important;
              line-height: 1.3 !important;
              margin-bottom: 14px !important;
            }

            .pub-card-desc {
              font-size: 14px !important;
              line-height: 1.6 !important;
              margin-bottom: 22px !important;
            }

            .read-more-btn {
              font-size: 12px !important;
              gap: 10px !important;
            }

            .read-more-circle {
              width: 36px !important;
              height: 36px !important;
            }
            .homepage-link {
              display: none !important;
            }
          }

          /* Small Mobile View (up to 480px) */
          @media (max-width: 480px) {
            .pub-header {
              padding: 25px 15px !important;
            }

            .pub-main {
              padding: 30px 15px 60px !important;
            }

            .pub-title {
              font-size: 32px !important;
            }

            .view-all-btn {
              padding: 10px 18px !important;
              font-size: 11px !important;
              letter-spacing: 1px !important;
            }

            .pub-grid {
              gap: 35px !important;
            }

            .pub-card-image {
              height: 240px !important;
              border-radius: 14px !important;
            }

            .pub-card-content {
              padding: 24px 0 0 0 !important;
            }

            .pub-card-title {
              font-size: 22px !important;
            }

            .pub-card-desc {
              font-size: 13px !important;
              line-height: 1.55 !important;
            }

            .read-more-btn {
              font-size: 11px !important;
            }

            .read-more-circle {
              width: 34px !important;
              height: 34px !important;
            }

          }
        `}
      </style>
    </div>
  );
};

export default PopularPublications;