const Preloader = () => {
  return (
    <>
      {/* Preloader */}
      <div className="mil-preloader">
        <div className="mil-preloader-animation">
          <div className="mil-pos-abs mil-animation-1">
            <p className="mil-h3 mil-muted mil-thin">Pioneering</p>
            <p className="mil-h3 mil-muted">Creative</p>
            <p className="mil-h3 mil-muted mil-thin">Excellence</p>
          </div>
          <div className="mil-pos-abs mil-animation-2">
            <div className="mil-reveal-frame">
              <p className="mil-reveal-box"></p>
              <p className="mil-h3 mil-muted mil-thin">∅verflow()</p>
            </div>
          </div>
        </div>
      </div>

      {/* Preloader Styles */}
      <style>{`
        /* Ensure preloader works on all devices */
        .mil-preloader {
          z-index: 9999 !important;
        }

        /* Center preloader text on mobile */
        @media screen and (max-width: 992px) {
          .mil-preloader .mil-preloader-animation .mil-pos-abs {
            text-align: center !important;
          }

          .mil-preloader .mil-preloader-animation .mil-pos-abs p {
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }

        /* Mobile preloader text adjustments */
        @media screen and (max-width: 768px) {
          .mil-preloader .mil-h3 {
            font-size: 28px !important;
          }

          .mil-preloader .mil-preloader-animation .mil-pos-abs .mil-reveal-frame {
            padding: 0 20px;
          }
        }

        @media screen and (max-width: 480px) {
          .mil-preloader .mil-h3 {
            font-size: 24px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Preloader;
