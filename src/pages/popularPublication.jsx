import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen bg-[#F8F8F8] relative font-['Outfit','Inter',-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
      {/* Main Content */}
      <main className="pt-20 px-24 pb-[120px] max-w-[1200px] mx-auto lg:pt-[60px] lg:px-10 lg:pb-[100px] md:pt-10 md:px-5 md:pb-20 max-md:pt-[30px] max-md:px-[15px] max-md:pb-[60px]">
        {/* Section Header */}
        <div className="flex pt-5 justify-between items-center mb-[60px] ml-[100px] lg:ml-0 lg:mb-[50px] md:flex-col md:items-start md:gap-5 md:mb-10 max-md:mb-10">
          <h1 className="text-[56px] font-medium text-black tracking-[-1px] leading-[1.2] lg:text-5xl md:text-[38px] md:tracking-[-0.5px] max-md:text-[32px]">
            Popular Publications:
          </h1>

          <button
            onMouseEnter={() => setHoveredButton('viewAll')}
            onMouseLeave={() => setHoveredButton(null)}
            className={`flex items-center gap-3 border-none px-7 py-4 rounded-[50px] text-sm font-semibold tracking-[1.5px] cursor-pointer transition-all duration-300 ease-in-out lg:px-6 lg:py-3.5 lg:text-[13px] md:px-5 md:py-3 md:text-xs md:self-start max-md:px-[18px] max-md:py-2.5 max-md:text-[11px] max-md:tracking-wider ${
              hoveredButton === 'viewAll'
                ? 'bg-black text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)]'
                : 'bg-[#f5f5f5] text-black'
            }`}
          >
            VIEW ALL
            <ArrowRight
              size={18}
              className={`transition-transform duration-300 ease-in-out ${
                hoveredButton === 'viewAll' ? 'translate-x-1' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Publications Grid */}
        <div className="flex gap-[60px] ml-[100px] lg:ml-0 lg:gap-[50px] md:flex-col md:gap-10 max-md:gap-[35px]">
          {publications.map((pub) => (
            <article
              key={pub.id}
              onMouseEnter={() => setHoveredCard(pub.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`bg-transparent overflow-visible transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer flex flex-col items-start md:w-full ${
                hoveredCard === pub.id ? '-translate-y-2' : 'translate-y-0'
              }`}
            >
              {/* Image */}
              <div className="w-full max-w-[555px] h-[360px] overflow-hidden rounded-[20px] bg-[#f5f5f5] relative lg:max-w-full lg:h-[340px] md:h-[280px] md:rounded-2xl max-md:h-[240px] max-md:rounded-[14px]">
                <img
                  src={pub.image}
                  alt={pub.title}
                  className={`w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    hoveredCard === pub.id ? 'scale-[1.08]' : 'scale-100'
                  }`}
                />
              </div>

              {/* Content */}
              <div className="pt-9 w-full max-w-[555px] lg:max-w-full md:pt-7 max-md:pt-6">
                {/* Category and Date */}
                <div className="flex items-center gap-4 mb-[18px] md:mb-3.5">
                  <span className="text-[11px] font-bold text-[#FF8C00] tracking-[1.5px]">
                    {pub.category}
                  </span>
                  <span className="text-[11px] font-semibold text-[#AAAAAA] tracking-wider">
                    {pub.date}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-[28px] font-medium text-black leading-[1.35] mb-4 tracking-[-0.5px] transition-colors duration-300 lg:text-[26px] md:text-2xl md:leading-[1.3] md:mb-3.5 max-md:text-[22px]">
                  {pub.title}
                </h2>

                {/* Description */}
                <p className="text-[15px] font-light text-[#888888] leading-[1.65] mb-[26px] md:text-sm md:leading-[1.6] md:mb-[22px] max-md:text-[13px] max-md:leading-[1.55]">
                  {pub.description}
                </p>

                {/* Read More Button */}
                <button
                  onMouseEnter={() => setHoveredButton(`read-${pub.id}`)}
                  onMouseLeave={() => setHoveredButton(null)}
                  className="inline-flex items-center gap-3.5 bg-transparent border-none p-0 text-[13px] font-bold tracking-[1.5px] text-black cursor-pointer transition-all duration-300 md:text-xs md:gap-2.5 max-md:text-[11px]"
                >
                  READ MORE
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 md:w-9 md:h-9 max-md:w-[34px] max-md:h-[34px] ${
                      hoveredButton === `read-${pub.id}`
                        ? 'bg-black translate-x-1.5'
                        : 'bg-[#F0F0F0] translate-x-0'
                    }`}
                  >
                    <ArrowRight
                      size={18}
                      className={`transition-colors duration-300 ${
                        hoveredButton === `read-${pub.id}` ? 'text-white' : 'text-black'
                      }`}
                    />
                  </div>
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Homepage Link - Hidden on mobile */}
      <div className="fixed left-10 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] text-[11px] font-semibold tracking-[2px] text-black md:hidden"></div>
    </div>
  );
};

export default PopularPublications;
