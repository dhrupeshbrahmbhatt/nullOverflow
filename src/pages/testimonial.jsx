import React, { useState, useEffect } from 'react';
import { Menu, ChevronLeft, ChevronRight, ArrowUp } from 'lucide-react';

const CustomerTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredAvatar, setHoveredAvatar] = useState(null);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 0,
      name: 'Sarah Newman',
      company: 'ENVATO MARKET',
      text: 'This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work.',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: 1,
      name: 'Emma Wilson',
      company: 'CREATIVE STUDIO',
      text: 'Working with this team has been an absolute pleasure. Their professionalism and creativity exceeded all expectations. They bring fresh perspectives to every project.',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'TECH INNOVATIONS',
      text: 'Outstanding service and remarkable attention to detail. The team delivered beyond what we imagined and transformed our vision into reality.',
      avatar: 'https://i.pravatar.cc/150?img=12'
    },
    {
      id: 3,
      name: 'Lisa Anderson',
      company: 'DESIGN HOUSE',
      text: 'Exceptional creativity and flawless execution. Their innovative approach and dedication to excellence make them stand out in the industry.',
      avatar: 'https://i.pravatar.cc/150?img=9'
    },
    {
      id: 4,
      name: 'David Martinez',
      company: 'BRAND STUDIO',
      text: 'The quality of work is simply outstanding. They understand client needs perfectly and deliver results that surpass expectations every single time.',
      avatar: 'https://i.pravatar.cc/150?img=14'
    },
    {
      id: 5,
      name: 'Sophie Taylor',
      company: 'DIGITAL AGENCY',
      text: 'Incredible team with amazing talent. Their creative solutions and professional approach make them the best choice for any project.',
      avatar: 'https://i.pravatar.cc/150?img=10'
    },
    {
      id: 6,
      name: 'James Wilson',
      company: 'STARTUP CO',
      text: 'Truly impressive work ethic and creativity. They brought our ideas to life in ways we never thought possible. Highly recommended!',
      avatar: 'https://i.pravatar.cc/150?img=13'
    }
  ];

  // Auto-rotate testimonials every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleAvatarClick = (index) => {
    setIsAutoPlaying(false);
    setActiveTestimonial(index);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div style={{
      fontFamily: "'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      minHeight: '100vh',
      backgroundColor: '#F5F5F5',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Google Fonts */}
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

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scaleIn {
            from {
              transform: scale(0.8);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .testimonial-content {
            animation: fadeInUp 0.6s ease-out;
          }

          .quote-icon {
            animation: scaleIn 0.5s ease-out;
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
        
      </header>

      {/* Top Right Text */}
      <div style={{
        position: 'absolute',
        top: '40px',
        right: '180px',
        textAlign: 'right',
        fontSize: '13px',
        color: '#999999',
        lineHeight: '1.6',
        maxWidth: '280px'
      }}>
        Customer reviews are a valuable source<br />
        of information for both businesses and consumers.
      </div>

      {/* Main Content */}
      <main style={{
        padding: '80px 80px 120px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 200px)'
      }}>
        {/* Title */}
        <h1 style={{
          fontSize: '72px',
          fontWeight: '400',
          color: '#000000',
          textAlign: 'center',
          marginBottom: '80px',
          lineHeight: '1.2',
          letterSpacing: '-1px',
          animation: 'fadeInUp 0.8s ease-out'
        }}>
          <span style={{ fontWeight: '700' }}>Customer</span> <span style={{ fontWeight: '300' }}>Voices:</span>
          <br />
          <span style={{ fontWeight: '700' }}>Hear What</span> <span style={{ fontWeight: '300' }}>They Say!</span>
        </h1>

        {/* Avatar Carousel */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '80px',
          position: 'relative',
          minHeight: '120px'
        }}>
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeTestimonial;
            const distance = Math.abs(index - activeTestimonial);
            const isVisible = distance <= 3;
            
            let scale = 1;
            let opacity = 1;
            let zIndex = 10;
            
            if (isActive) {
              scale = 1.15;
              zIndex = 20;
            } else if (distance === 1) {
              scale = 0.95;
              opacity = 0.8;
              zIndex = 15;
            } else if (distance === 2) {
              scale = 0.85;
              opacity = 0.6;
              zIndex = 10;
            } else {
              scale = 0.75;
              opacity = 0.4;
              zIndex = 5;
            }

            return (
              <div
                key={testimonial.id}
                onMouseEnter={() => setHoveredAvatar(index)}
                onMouseLeave={() => setHoveredAvatar(null)}
                onClick={() => handleAvatarClick(index)}
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: `scale(${hoveredAvatar === index ? scale * 1.05 : scale})`,
                  opacity: isVisible ? opacity : 0,
                  border: isActive ? '4px solid #FFA500' : '4px solid transparent',
                  boxShadow: isActive ? '0 8px 24px rgba(255, 165, 0, 0.3)' : 'none',
                  zIndex: zIndex,
                  position: 'relative',
                  pointerEvents: isVisible ? 'auto' : 'none'
                }}
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Quote Icon */}
        <div 
          key={`quote-${activeTestimonial}`}
          className="quote-icon"
          style={{
            fontSize: '48px',
            color: '#FFA500',
            marginBottom: '30px',
            fontWeight: '700'
          }}
        >
          ,,
        </div>

        {/* Testimonial Content */}
        <div 
          key={`content-${activeTestimonial}`}
          className="testimonial-content"
          style={{
            maxWidth: '700px',
            textAlign: 'center'
          }}
        >
          {/* Name */}
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#000000',
            marginBottom: '8px',
            letterSpacing: '-0.5px'
          }}>
            {testimonials[activeTestimonial].name}
          </h3>

          {/* Company */}
          <p style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#999999',
            letterSpacing: '2px',
            marginBottom: '40px'
          }}>
            {testimonials[activeTestimonial].company}
          </p>

          {/* Testimonial Text */}
          <p style={{
            fontSize: '17px',
            fontWeight: '400',
            color: '#666666',
            lineHeight: '1.8',
            letterSpacing: '0.3px'
          }}>
            {testimonials[activeTestimonial].text}
          </p>
        </div>

        {/* Navigation Arrows */}
        <div style={{
          display: 'flex',
          gap: '20px',
          marginTop: '60px'
        }}>
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            onMouseEnter={() => setHoveredNav('prev')}
            onMouseLeave={() => setHoveredNav(null)}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              border: '2px solid #E0E0E0',
              background: hoveredNav === 'prev' ? '#000000' : '#ffffff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              boxShadow: hoveredNav === 'prev' ? '0 4px 12px rgba(0,0,0,0.15)' : 'none'
            }}
          >
            <ChevronLeft 
              size={24} 
              color={hoveredNav === 'prev' ? '#ffffff' : '#000000'}
              style={{ transition: 'color 0.3s ease' }}
            />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            onMouseEnter={() => setHoveredNav('next')}
            onMouseLeave={() => setHoveredNav(null)}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              border: '2px solid #E0E0E0',
              background: hoveredNav === 'next' ? '#000000' : '#ffffff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              boxShadow: hoveredNav === 'next' ? '0 4px 12px rgba(0,0,0,0.15)' : 'none'
            }}
          >
            <ChevronRight 
              size={24} 
              color={hoveredNav === 'next' ? '#ffffff' : '#000000'}
              style={{ transition: 'color 0.3s ease' }}
            />
          </button>
        </div>

        {/* Auto-play Indicator */}
        <div style={{
          marginTop: '30px',
          display: 'flex',
          gap: '8px'
        }}>
          {testimonials.map((_, index) => (
            <div
              key={index}
              style={{
                width: index === activeTestimonial ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: index === activeTestimonial ? '#FFA500' : '#D0D0D0',
                transition: 'all 0.4s ease',
                cursor: 'pointer'
              }}
              onClick={() => handleAvatarClick(index)}
            />
          ))}
        </div>
      </main>

      {/* Back to Top Button */}
      

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
            h1 {
              font-size: 48px !important;
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

export default CustomerTestimonials;