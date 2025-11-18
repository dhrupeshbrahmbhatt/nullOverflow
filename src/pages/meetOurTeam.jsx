import React, { useState, useEffect } from 'react';

const MeetOurTeamPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [ctaHovered, setCtaHovered] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CREATIVE DIRECTOR',
      image: '/images/3_1.jpg'
    },
    {
      id: 2,
      name: 'Emma Williams',
      role: 'SENIOR DESIGNER',
      image: '/images/3.jpg'
    },
    {
      id: 3,
      name: 'Michael Brown',
      role: 'LEAD DEVELOPER',
      image: '/images/4_1.jpg'
    },
    {
      id: 4,
      name: 'Lisa Trueman',
      role: 'UI/UX DESIGNER',
      image: '/images/4.jpg'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#fafafa] font-['Outfit',sans-serif] relative overflow-hidden">
      {/* Keyframe animations */}
      <style>
        {`
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

          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>

      <div className="flex px-[50px] max-w-[1400px] mx-auto my-[120px] items-start justify-center lg:flex-col lg:px-10 lg:my-20 lg:items-center md:flex-col md:px-5 md:my-16 max-md:flex-col max-md:px-4 max-md:my-10">

        {/* Left Section */}
        <section className="flex-[0_0_500px] pt-0 lg:flex-1 lg:max-w-full lg:mb-[60px] lg:pt-0 md:max-w-full md:mb-10 max-md:w-full max-md:mb-10">

          {/* Heading */}
          <h1
            className="text-[68px] font-medium leading-[82px] mb-[50px] text-black tracking-[-3px] lg:text-[56px] lg:mb-[35px] lg:tracking-[-2px] md:text-[48px] md:mb-[30px] md:tracking-[-1.5px] max-md:text-[42px] max-md:mb-[25px]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out'
            }}
          >
            Meet<br />Our Team
          </h1>

          {/* Description 1 */}
          <p
            className="text-base leading-6 font-light text-[#9b9b9b] mb-7 w-[70%] max-w-[450px] lg:w-full lg:max-w-[600px] lg:text-[15px] lg:mb-6 md:w-full md:text-[15px] md:leading-[1.6] md:mb-5 max-md:w-full max-md:text-sm max-md:leading-[1.5] max-md:mb-[18px]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out 0.2s'
            }}
          >
            We are talented individuals who are passionate about bringing ideas to life. With a diverse range of backgrounds and skill sets, we collaborate to produce effective solutions for our clients.
          </p>

          {/* Description 2 */}
          <p
            className="text-base leading-[1.7] text-[#9b9b9b] mb-7 w-[70%] max-w-[450px] lg:w-full lg:max-w-[600px] lg:text-[15px] lg:mb-6 md:w-full md:text-[15px] md:leading-[1.6] md:mb-5 max-md:w-full max-md:text-sm max-md:leading-[1.5] max-md:mb-[18px]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out 0.3s'
            }}
          >
            Together, our creative team is committed to delivering impactful work that exceeds expectations.
          </p>

          {/* CTA Button */}
          <button
            className="bg-[#ff9500] text-black border-none rounded-[50px] px-5 py-1 text-xs font-semibold tracking-[0.15em] cursor-pointer inline-flex items-center gap-4 transition-all duration-300 uppercase mt-[30px] mb-[100px] lg:mb-[60px] md:px-[35px] md:py-4 md:text-[11px] md:mb-[50px] max-md:px-[30px] max-md:py-[14px] max-md:text-[10px] max-md:gap-[15px]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out 0.4s',
              boxShadow: ctaHovered ? '0 15px 40px rgba(255, 149, 0, 0.4)' : '0 10px 30px rgba(255, 149, 0, 0.3)',
              transform: ctaHovered ? 'translateY(-2px)' : 'translateY(0)'
            }}
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
          >
            READ MORE
            <div className='mil-button mil-arrow-place mil-icon-button mil-arrow-right'></div>
          </button>

          {/* Tagline */}
          <div
            className="text-[28px] leading-[1.3] mt-[30px] lg:text-2xl md:text-[22px] md:leading-[1.4] max-md:text-xl"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'all 1s ease-out 0.6s'
            }}
          >
            <span className="text-black font-thin">We </span>
            <span className="text-black font-medium">delivering</span>
            <br />
            <span className="text-black font-thin">exceptional </span>
            <span className="text-black font-medium">results.</span>
          </div>
        </section>

        {/* Right Section - Team Photos */}
        <section className="flex-1 relative pt-0 max-w-[560px] lg:max-w-full lg:pt-0 md:w-full md:max-w-full max-md:w-full max-md:max-w-full">

          {/* Team Grid */}
          <div className="relative w-[545px] h-[850px] lg:w-[500px] lg:h-[780px] md:w-full md:h-auto md:grid md:grid-cols-2 md:gap-[15px] max-md:w-full max-md:h-auto max-md:grid max-md:grid-cols-1 max-md:gap-3">

            {/* Founder Label */}
            <div className="absolute left-[285px] top-[10px] text-lg leading-6 text-[#bbb] font-light tracking-[0.5px] z-10 lg:left-[250px] lg:text-base md:static md:col-span-2 md:mb-2.5 md:text-sm md:text-center max-md:static max-md:col-span-1 max-md:text-[13px] max-md:mb-2 max-md:text-center">
              <span className="text-red-500 text-[15px]">*</span> The founders of our agency
            </div>

            {/* Card 1 - Top Left */}
            <div
              className="absolute left-0 top-0 w-[260px] h-[390px] rounded-[30px] overflow-hidden cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] bg-[#e8e8e8] lg:w-[230px] lg:h-[350px] lg:rounded-[25px] md:relative md:left-0 md:top-0 md:w-full md:h-[280px] md:rounded-[20px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full max-md:h-[320px] max-md:rounded-[18px]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                transition: 'all 0.6s ease-out 0.5s'
              }}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img
                src={teamMembers[0].image}
                alt={teamMembers[0].name}
                className="w-full h-full object-cover transition-all duration-500 ease-out absolute inset-0"
                loading="lazy"
                style={{
                  transform: hoveredCard === 1 ? 'scale(1.1)' : 'scale(1)',
                  filter: hoveredCard === 1 ? 'blur(3px) brightness(0.7)' : 'blur(0px) brightness(1)',
                  zIndex: 1
                }}
              />
              <div
                className="absolute inset-0 flex items-center justify-center transition-all duration-300 pointer-events-none overflow-hidden"
                style={{
                  opacity: hoveredCard === 1 ? 1 : 0,
                  transform: hoveredCard === 1 ? 'translateY(0)' : 'translateY(20px)',
                  zIndex: 2
                }}
              >
                <div className="px-4 py-3 w-full max-w-full text-center">
                  <h3 className="text-2xl font-bold m-0 mb-2 leading-tight md:text-xl max-md:text-lg" style={{ color: '#ffffff' }}>
                    {teamMembers[0].name}
                  </h3>
                  <p className="text-sm font-semibold tracking-[2px] m-0 uppercase md:text-xs max-md:text-xs" style={{ color: '#ffffff' }}>
                    {teamMembers[0].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Top Right */}
            <div
              className="absolute left-[285px] top-[80px] w-[260px] h-[390px] rounded-[30px] overflow-hidden cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] bg-[#e8e8e8] lg:left-[250px] lg:top-[70px] lg:w-[230px] lg:h-[350px] lg:rounded-[25px] md:relative md:left-0 md:top-0 md:w-full md:h-[280px] md:rounded-[20px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full max-md:h-[320px] max-md:rounded-[18px]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                transition: 'all 0.6s ease-out 0.6s'
              }}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img
                src={teamMembers[1].image}
                alt={teamMembers[1].name}
                className="w-full h-full object-cover transition-all duration-500 ease-out absolute inset-0"
                loading="lazy"
                style={{
                  transform: hoveredCard === 2 ? 'scale(1.1)' : 'scale(1)',
                  filter: hoveredCard === 2 ? 'blur(3px) brightness(0.7)' : 'blur(0px) brightness(1)',
                  zIndex: 1
                }}
              />
              <div
                className="absolute inset-0 flex items-center justify-center transition-all duration-300 pointer-events-none overflow-hidden"
                style={{
                  opacity: hoveredCard === 2 ? 1 : 0,
                  transform: hoveredCard === 2 ? 'translateY(0)' : 'translateY(20px)',
                  zIndex: 2
                }}
              >
                <div className="px-4 py-3 w-full max-w-full text-center">
                  <h3 className="text-2xl font-bold m-0 mb-2 leading-tight md:text-xl max-md:text-lg" style={{ color: '#ffffff' }}>
                    {teamMembers[1].name}
                  </h3>
                  <p className="text-sm font-semibold tracking-[2px] m-0 uppercase md:text-xs max-md:text-xs" style={{ color: '#ffffff' }}>
                    {teamMembers[1].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Bottom Left */}
            <div
              className="absolute left-0 top-[415px] w-[260px] h-[390px] rounded-[30px] overflow-hidden cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] bg-[#e8e8e8] lg:top-[385px] lg:w-[230px] lg:h-[350px] lg:rounded-[25px] md:relative md:left-0 md:top-0 md:w-full md:h-[280px] md:rounded-[20px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full max-md:h-[320px] max-md:rounded-[18px]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                transition: 'all 0.6s ease-out 0.7s'
              }}
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img
                src={teamMembers[2].image}
                alt={teamMembers[2].name}
                className="w-full h-full object-cover transition-all duration-500 ease-out absolute inset-0"
                loading="lazy"
                style={{
                  transform: hoveredCard === 3 ? 'scale(1.1)' : 'scale(1)',
                  filter: hoveredCard === 3 ? 'blur(3px) brightness(0.7)' : 'blur(0px) brightness(1)',
                  zIndex: 1
                }}
              />
              <div
                className="absolute inset-0 flex items-center justify-center transition-all duration-300 pointer-events-none overflow-hidden"
                style={{
                  opacity: hoveredCard === 3 ? 1 : 0,
                  transform: hoveredCard === 3 ? 'translateY(0)' : 'translateY(20px)',
                  zIndex: 2
                }}
              >
                <div className="px-4 py-3 w-full max-w-full text-center">
                  <h3 className="text-2xl font-bold m-0 mb-2 leading-tight md:text-xl max-md:text-lg" style={{ color: '#ffffff' }}>
                    {teamMembers[2].name}
                  </h3>
                  <p className="text-sm font-semibold tracking-[2px] m-0 uppercase md:text-xs max-md:text-xs" style={{ color: '#ffffff' }}>
                    {teamMembers[2].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 - Bottom Right */}
            <div
              className="absolute left-[285px] top-[495px] w-[260px] h-[390px] rounded-[30px] overflow-hidden cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] bg-[#e8e8e8] lg:left-[250px] lg:top-[455px] lg:w-[230px] lg:h-[350px] lg:rounded-[25px] md:relative md:left-0 md:top-0 md:w-full md:h-[280px] md:rounded-[20px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full max-md:h-[320px] max-md:rounded-[18px]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                transition: 'all 0.6s ease-out 0.8s'
              }}
              onMouseEnter={() => setHoveredCard(4)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img
                src={teamMembers[3].image}
                alt={teamMembers[3].name}
                className="w-full h-full object-cover transition-all duration-500 ease-out absolute inset-0"
                loading="lazy"
                style={{
                  transform: hoveredCard === 4 ? 'scale(1.1)' : 'scale(1)',
                  filter: hoveredCard === 4 ? 'blur(3px) brightness(0.7)' : 'blur(0px) brightness(1)',
                  zIndex: 1
                }}
              />
              <div
                className="absolute inset-0 flex items-center justify-center transition-all duration-300 pointer-events-none overflow-hidden"
                style={{
                  opacity: hoveredCard === 4 ? 1 : 0,
                  transform: hoveredCard === 4 ? 'translateY(0)' : 'translateY(20px)',
                  zIndex: 2
                }}
              >
                <div className="px-4 py-3 w-full max-w-full text-center">
                  <h3 className="text-2xl font-bold m-0 mb-2 leading-tight md:text-xl max-md:text-lg" style={{ color: '#ffffff' }}>
                    {teamMembers[3].name}
                  </h3>
                  <p className="text-sm font-semibold tracking-[2px] m-0 uppercase md:text-xs max-md:text-xs" style={{ color: '#ffffff' }}>
                    {teamMembers[3].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MeetOurTeamPage;
