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
      <header className="testimonial-header" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '40px 80px',
        position: 'relative'
      }}>

      </header>

      {/* Top Right Text */}
      <div className="top-right-text" style={{
        position: 'absolute',
        top: '80px',
        right: '550px',
        textAlign: 'right',
        fontSize: '16px',
        fontWeight: '300',
        color: '#999999',
        lineHeight: '24px',
        maxWidth: '280px'
      }}>
        Customer reviews are a valuable source<br />
        of information for both businesses and consumers.
      </div>

      {/* Main Content */}
      <main className="testimonial-main" style={{
        padding: '80px 80px 120px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 200px)'
      }}>
        {/* Title */}
        <h1 className="testimonial-title" style={{
          fontSize: '68px',
          fontWeight: '100',
          color: '#000000',
          textAlign: 'center',
          marginBottom: '80px',
          lineHeight: '82px',
          letterSpacing: '-1px',
          animation: 'fadeInUp 0.8s ease-out'
        }}>
          <span style={{ fontWeight: '500' }}>Customer</span> <span style={{ fontWeight: '100' }}>Voices:</span>
          <br />
          <span style={{ fontWeight: '500' }}>Hear What</span> <span style={{ fontWeight: '100' }}>They Say!</span>
        </h1>

        {/* Avatar Carousel */}
        <div className="avatar-carousel" style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          gap: '15px',
          marginBottom: '80px',
          position: 'relative',
          minHeight: '180px'
        }}>
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeTestimonial;

            // Make the active avatar slightly larger
            const size = isActive ? '110px' : '90px';
            const borderWidth = isActive ? '5px' : '0px';

            // Create alternating vertical positions for wave effect
            // Pattern: down, up, down, up, down, up, down
            let marginBottom = '0px';
            if (index === 0 || index === 2 || index === 4 || index === 6) {
              marginBottom = '0px'; // These stay at the bottom
            } else if (index === 1 || index === 3 || index === 5) {
              marginBottom = '40px'; // These are raised up
            }

            return (
              <div
                key={testimonial.id}
                onMouseEnter={() => setHoveredAvatar(index)}
                onMouseLeave={() => setHoveredAvatar(null)}
                onClick={() => handleAvatarClick(index)}
                style={{
                  width: size,
                  height: size,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: `scale(${hoveredAvatar === index && !isActive ? 1.05 : 1})`,
                  opacity: 1,
                  border: isActive ? `${borderWidth} solid #FF8C00` : 'none',
                  boxSizing: 'border-box',
                  position: 'relative',
                  flexShrink: 0,
                  marginBottom: marginBottom
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

        {/* Scroll Hint for Mobile */}
        <div className="scroll-hint" style={{ display: 'none' }}></div>

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
          className="testimonial-content testimonial-content-wrapper"
          style={{
            maxWidth: '700px',
            textAlign: 'center'
          }}
        >
          {/* Name */}
          <h3 className="testimonial-name" style={{
            fontSize: '20px',
            lineHeight: '30px',
            fontWeight: '500',
            color: '#000000',
            marginBottom: '8px',
            letterSpacing: '-0.5px'
          }}>
            {testimonials[activeTestimonial].name}
          </h3>

          {/* Company */}
          <p className="testimonial-company" style={{
            fontSize: '12px',
            fontWeight: '500',
            lineHeight: '24px',
            color: '#999999',
            letterSpacing: '2px',
            marginBottom: '40px'
          }}>
            {testimonials[activeTestimonial].company}
          </p>

          {/* Testimonial Text */}
          <p className="testimonial-text" style={{
            fontSize: '22px',
            lineHeight: '40px',
            fontWeight: '300',
            color: '#666666',
            letterSpacing: '0.3px'
          }}>
            {testimonials[activeTestimonial].text}
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="nav-arrows" style={{
          display: 'flex',
          gap: '20px',
          marginTop: '60px'
        }}>
          {/* Previous Button */}
          <button
            className="nav-button"
            onClick={handlePrevious}
            onMouseEnter={() => setHoveredNav('prev')}
            onMouseLeave={() => setHoveredNav(null)}
            disabled={activeTestimonial === 0}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              border: '2px solid #E0E0E0',
              background: activeTestimonial === 0 ? '#F5F5F5' : (hoveredNav === 'prev' ? '#000000' : '#ffffff'),
              cursor: activeTestimonial === 0 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              boxShadow: hoveredNav === 'prev' && activeTestimonial !== 0 ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
              opacity: activeTestimonial === 0 ? 0.4 : 1
            }}
          >
            <ChevronLeft
              size={24}
              color={activeTestimonial === 0 ? '#CCCCCC' : (hoveredNav === 'prev' ? '#ffffff' : '#000000')}
              style={{ transition: 'color 0.3s ease' }}
            />
          </button>

          {/* Next Button */}
          <button
            className="nav-button"
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

      </main>

      {/* Back to Top Button */}
      

      {/* Homepage Link */}
      

      {/* Responsive Styles */}
      <style>
        {`
          /* Tablet View (768px - 1024px) */
          @media (max-width: 1024px) {
            .testimonial-header {
              padding: 30px 40px !important;
            }

            .top-right-text {
              right: 40px !important;
              top: 120px !important;
              max-width: 250px !important;
              font-size: 14px !important;
              line-height: 22px !important;
            }

            .testimonial-main {
              padding: 60px 40px 100px !important;
            }

            .testimonial-title {
              font-size: 52px !important;
              line-height: 64px !important;
              margin-bottom: 60px !important;
            }

            .avatar-carousel {
              gap: 12px !important;
              margin-bottom: 60px !important;
              min-height: 150px !important;
            }

            .avatar {
              /* Avatars will be resized individually */
            }

            .quote-icon {
              font-size: 42px !important;
              margin-bottom: 25px !important;
            }

            .testimonial-content-wrapper {
              max-width: 600px !important;
            }

            .testimonial-name {
              font-size: 18px !important;
              line-height: 28px !important;
            }

            .testimonial-company {
              font-size: 11px !important;
              margin-bottom: 35px !important;
            }

            .testimonial-text {
              font-size: 20px !important;
              line-height: 36px !important;
            }

            .nav-arrows {
              margin-top: 50px !important;
            }

            .nav-button {
              width: 45px !important;
              height: 45px !important;
            }
          }

          /* Mobile View (up to 767px) */
          @media (max-width: 767px) {
            .testimonial-header {
              padding: 25px 20px !important;
            }

            .top-right-text {
              position: static !important;
              text-align: center !important;
              max-width: 100% !important;
              font-size: 13px !important;
              line-height: 20px !important;
              padding: 0 20px !important;
              margin-bottom: 20px !important;
            }

            .testimonial-main {
              padding: 40px 20px 80px !important;
              min-height: auto !important;
            }

            .testimonial-title {
              font-size: 42px !important;
              line-height: 52px !important;
              margin-bottom: 50px !important;
            }

            .avatar-carousel {
              gap: 10px !important;
              margin-bottom: 15px !important;
              min-height: 120px !important;
              flex-wrap: nowrap !important;
              overflow-x: auto !important;
              overflow-y: hidden !important;
              justify-content: flex-start !important;
              padding: 0 20px 15px 20px !important;
              width: 100vw !important;
              margin-left: -20px !important;
              scrollbar-width: thin !important;
              scrollbar-color: rgba(255, 140, 0, 0.5) transparent !important;
              scroll-behavior: smooth !important;
              -webkit-overflow-scrolling: touch !important;
            }

            .avatar-carousel::-webkit-scrollbar {
              height: 4px !important;
            }

            .avatar-carousel::-webkit-scrollbar-track {
              background: rgba(0, 0, 0, 0.05) !important;
              border-radius: 10px !important;
            }

            .avatar-carousel::-webkit-scrollbar-thumb {
              background: rgba(255, 140, 0, 0.5) !important;
              border-radius: 10px !important;
            }

            .avatar-carousel::-webkit-scrollbar-thumb:hover {
              background: rgba(255, 140, 0, 0.8) !important;
            }

            .scroll-hint {
              display: block !important;
              text-align: center !important;
              font-size: 12px !important;
              color: #999 !important;
              margin-bottom: 35px !important;
              font-weight: 300 !important;
            }

            .scroll-hint::after {
              content: " ← Swipe to see all →" !important;
            }

            .quote-icon {
              font-size: 38px !important;
              margin-bottom: 20px !important;
            }

            .testimonial-content-wrapper {
              max-width: 100% !important;
            }

            .testimonial-name {
              font-size: 18px !important;
              line-height: 26px !important;
            }

            .testimonial-company {
              font-size: 10px !important;
              margin-bottom: 30px !important;
            }

            .testimonial-text {
              font-size: 17px !important;
              line-height: 30px !important;
            }

            .nav-arrows {
              margin-top: 40px !important;
              gap: 15px !important;
            }

            .nav-button {
              width: 42px !important;
              height: 42px !important;
            }
          }

          /* Small Mobile View (up to 480px) */
          @media (max-width: 480px) {
            .testimonial-header {
              padding: 20px 15px !important;
            }

            .top-right-text {
              font-size: 12px !important;
              line-height: 18px !important;
              padding: 0 15px !important;
            }

            .testimonial-main {
              padding: 30px 15px 60px !important;
            }

            .testimonial-title {
              font-size: 36px !important;
              line-height: 44px !important;
              margin-bottom: 40px !important;
            }

            .avatar-carousel {
              gap: 8px !important;
              margin-bottom: 12px !important;
              min-height: 100px !important;
              padding: 0 15px 12px 15px !important;
              margin-left: -15px !important;
            }

            .scroll-hint {
              font-size: 11px !important;
              margin-bottom: 30px !important;
            }

            .quote-icon {
              font-size: 34px !important;
              margin-bottom: 18px !important;
            }

            .testimonial-name {
              font-size: 17px !important;
              line-height: 24px !important;
            }

            .testimonial-company {
              font-size: 9px !important;
              margin-bottom: 25px !important;
            }

            .testimonial-text {
              font-size: 15px !important;
              line-height: 26px !important;
            }

            .nav-arrows {
              margin-top: 35px !important;
            }

            .nav-button {
              width: 38px !important;
              height: 38px !important;
            }
          }

          /* Desktop - hide scroll hint */
          @media (min-width: 768px) {
            .scroll-hint {
              display: none !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CustomerTestimonials;