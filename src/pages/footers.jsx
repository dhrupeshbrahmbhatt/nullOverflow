import React, { memo, useCallback, useState } from 'react';
import '../index.css';

// Social icons data
const SOCIAL_LINKS = [
  {
    name: 'Behance',
    path: 'M20.07 6.35H15v1.33h5.07V6.35zM19.5 14.5c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5c0 1.93 1.57 3.5 3.5 3.5 1.4 0 2.6-.82 3.16-2h-2.32c-.25.3-.63.5-1.07.5-.83 0-1.5-.67-1.5-1.5h5.22c.01-.17.01-.33.01-.5zM14.5 13.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5h-3zM9.5 9C8.67 9 8 9.67 8 10.5S8.67 12 9.5 12c.17 0 .33-.03.5-.08v3.58c0 .83-.67 1.5-1.5 1.5H7c-.83 0-1.5-.67-1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5S2.5 10.67 2.5 11.5v4c0 1.93 1.57 3.5 3.5 3.5h1.5c1.93 0 3.5-1.57 3.5-3.5V10.5C11 9.67 10.33 9 9.5 9z',
    fill: 'currentColor'
  },
  {
    name: 'Dribbble',
    stroke: 'currentColor',
    paths: ['M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z', 'M2 12c5 0 10-3 10-10M12 2c0 7 3 12 10 12M22 12c-7 0-12 3-12 10M12 22c0-5-3-10-10-10']
  },
  {
    name: 'Twitter',
    path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
    fill: 'currentColor'
  },
  {
    name: 'GitHub',
    path: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z',
    fill: 'currentColor'
  }
];

const NAV_LINKS = [
  { text: 'Home', active: true },
  { text: 'Portfolio', active: false },
  { text: 'Services', active: true },
  { text: 'Contact', active: false },
  { text: 'Blog', active: false }
];

const POLICY_LINKS = ['Privacy Policy', 'Terms and conditions', 'Cookie Policy', 'Careers'];

const LOCATIONS = [
  {
    title: 'Canada',
    address: '71 South Los Carneros Road,',
    city: 'California +51 174 705 812'
  }
];

const BRAND_NAME = '∅verflow';

// Memoized SocialIcon component
const SocialIcon = memo(({ name, path, paths, fill, stroke }) => (
  <a
    href="#"
    className="text-[#a0a0a0] transition-all duration-300 ease-in-out hover:text-[#ff9500] hover:-translate-y-0.5 flex items-center cursor-pointer"
    aria-label={name}
  >
    <svg className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px]" viewBox="0 0 24 24" fill={fill || 'none'} stroke={stroke} strokeWidth={stroke ? '2' : undefined}>
      {paths ? paths.map((p, i) => <path key={i} d={p} />) : <path d={path} />}
    </svg>
  </a>
));

SocialIcon.displayName = 'SocialIcon';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  }, [email]);

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  return (
    <footer className="bg-[#000000] py-[120px] px-[200px] relative min-h-[600px] xl:py-24 xl:px-[60px] lg:py-[70px] lg:px-10 md:py-[60px] md:px-8 sm:py-12 sm:px-6 max-sm:py-10 max-sm:px-5" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
      <div className="grid grid-cols-[1fr_auto_1fr] gap-[150px] max-w-[1600px] mx-auto relative xl:gap-[100px] lg:grid-cols-1 lg:gap-[70px] md:gap-[60px] sm:gap-[50px] max-sm:gap-[40px]">

        {/* Left Column - Brand and Newsletter */}
        <div className="flex flex-col gap-[50px] md:gap-[40px] sm:gap-[35px] max-sm:gap-[30px]">
          <div className="flex items-start mb-2.5">
            <span className="text-[48px] font-light text-[#ffffff] leading-[1.1] tracking-tight lg:text-5xl md:text-[42px] sm:text-[38px] max-sm:text-[32px]">{BRAND_NAME}</span>
          </div>

          <p className="text-[#a0a0a0] text-[15px] font-normal lg:text-sm md:text-[14px] sm:text-[13px] max-sm:text-xs">Subscribe our newsletter:</p>

          <form
            className="flex items-center bg-[#2a2a2a] rounded-[60px] pr-2 max-w-[450px] w-full h-[60px] transition-colors duration-300 ease-in-out focus-within:bg-[#333333] md:h-[56px] sm:h-[52px] max-sm:h-[48px]"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="ENTER OUR EMAIL"
              className="flex-1 bg-transparent mt-4 border-none text-[#ffffff] text-[13px] tracking-wider outline-none font-normal px-[35px] text-left placeholder:text-[#606060] placeholder:tracking-wider placeholder:text-[13px] md:px-[30px] md:text-xs sm:px-6 sm:text-[11px] sm:placeholder:text-[11px] max-sm:px-5 max-sm:text-[10px] max-sm:placeholder:text-[10px]"
              value={email}
              onChange={handleEmailChange}
              aria-label="Email address"
            />
            <button
              type="submit"
              className="w-[54px] h-[54px] rounded-full bg-[#ff9500] border-none cursor-pointer flex items-center justify-center flex-shrink-0 transition-all duration-300 ease-in-out hover:bg-[#ffa726] hover:scale-105 active:scale-95 md:w-[50px] md:h-[50px] sm:w-[46px] sm:h-[46px] max-sm:w-[42px] max-sm:h-[42px]"
              aria-label="Subscribe"
            >
              <div className='mil-button mil-arrow-place mil-icon-button mil-arrow-right'></div>
            </button>
          </form>

          <div className="flex justify-content-md-around md:gap-5 sm:gap-4 max-sm:gap-3.5">
            {SOCIAL_LINKS.map(link => (
              <SocialIcon key={link.name} {...link} />
            ))}
          </div>

          <p className="text-[#606060] text-[16px] font-normal mt-auto md:text-xs sm:text-[11px] max-sm:text-[10px]">© Copyright 2025 - ∅verflow. All Rights Reserved.</p>
        </div>

        {/* Middle Column - Navigation */}
        <nav className="flex flex-col gap-7 pt-0 min-w-[200px] md:gap-6 sm:gap-5 max-sm:gap-4 lg:min-w-0">
          {NAV_LINKS.map(link => (
            <a
              key={link.text}
              href="#"
              className="no-underline text-[#ffffff] text-[38px] font-light transition-all duration-300 ease-in-out tracking-tight leading-[1.2] hover:text-[#ff9500] hover:translate-x-1.5 lg:text-4xl md:text-[32px] sm:text-[28px] max-sm:text-2xl"
            >
              {link.text}
            </a>
          ))}
        </nav>

        {/* Right Column - Policies and Locations */}
        <div className="flex flex-col gap-20 pt-[5px] md:gap-[60px] sm:gap-[50px] max-sm:gap-10 justify-between">
          <div className="flex flex-col gap-[18px] md:gap-4 sm:gap-3.5 max-sm:gap-3">
            {POLICY_LINKS.map(policy => (
              <a
                key={policy}
                href="#"
                className="text-[#a0a0a0] no-underline text-[15px] transition-all duration-300 ease-in-out font-normal hover:text-[#ff9500] hover:translate-x-[3px] lg:text-sm md:text-[14px] sm:text-[13px] max-sm:text-xs"
              >
                {policy}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-10">
            {LOCATIONS.map(location => (
              <div key={location.title} className="flex-1">
                <h3 className="text-2xl font-medium mb-5 text-[#ffffff] tracking-tight lg:text-[22px] md:text-xl md:mb-4 sm:text-lg sm:mb-3.5 max-sm:text-base max-sm:mb-3">{location.title}</h3>
                <p className="text-[#a0a0a0] text-[15px] leading-[1.9] font-normal lg:text-sm md:text-[14px] md:leading-[1.8] sm:text-[13px] sm:leading-[1.7] max-sm:text-xs max-sm:leading-[1.6]">
                  {location.address}<br />
                  {location.city}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top Button - Right Side */}
      <button
        className="fixed right-[30px] bottom-[30px] bg-[#1a1a1a] border-none cursor-pointer flex flex-col items-center gap-3 py-4 px-3 text-[#ffffff] transition-all duration-300 ease-in-out rounded-[50px] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:text-[#ff9500] hover:bg-[#2a2a2a] hover:-translate-y-0.5 hover:shadow-[0_6px_25px_rgba(0,0,0,0.4)] lg:bottom-[25px] lg:right-[25px] md:bottom-5 md:right-5 sm:bottom-4 sm:right-4 max-sm:bottom-3 max-sm:right-3 max-sm:py-3 max-sm:px-2.5"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6 md:w-5 md:h-5 sm:w-[18px] sm:h-[18px] max-sm:w-4 max-sm:h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
        <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] tracking-[3px] text-[#606060] font-medium transition-colors duration-300 ease-in-out hover:text-[#ff9500] md:text-[9px] md:tracking-[2.5px] sm:text-[8px] sm:tracking-[2px] max-sm:text-[7px] max-sm:tracking-[1.5px]">BACK TO TOP</span>
      </button>
    </footer>
  );
};

export default Footer;
