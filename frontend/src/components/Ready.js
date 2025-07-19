import React, { useEffect, useRef } from "react";
import photo from "../image/banner2-removebg-preview.png";
import { useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";

function Banner() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const cardRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      scale: 1.07,
      boxShadow: "0 0 30px rgba(80,160,170,20)",
      duration: 0.3,
      ease: "power2.out",
    });
  };
  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  return (
    <>
      <div
        name="Home"
        className="w-full mt-24 mx-auto px-4 md:px-20 bg-gradient-to-tr from-[hsl(176,80%,60%)] via-[rgb(85,73,219)] to-[hsl(213,82%,62%)] text-white"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-3/4 mt-12 md:mt-16 space-y-6 md:space-y-10 order-2 lg:order-1 mb-10 md:mb-16 px-2 sm:px-4">
            <h1
              ref={headingRef}
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-center md:text-left text-wrap font-poppins"
            >
              Ready to Transform Your Networking?
            </h1>
            <p
              className="text-sm sm:text-base md:text-xl font-thin text-center md:text-left"
              ref={paraRef}
            >
              Join thousands of professionals who have already upgraded to smart
              NFC business cards and revolutionized their networking game.
            </p>
            <div className="flex justify-center md:justify-start">
              <button
                ref={buttonRef}
                className="border rounded-md px-6 py-2 font-bold text-lg md:text-2xl border-black bg-white hover:bg-gradient-to-tr from-[rgb(43,160,152)] via-[hsl(245,35%,51%)] to-[hsl(213,69%,50%)] text-black hover:text-white hover:border-white transition duration-300"
                onClick={() => navigate("/pvc")}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Buy Now
              </button>
            </div>
          </div>
          <div className="w-full lg:w-2/5 order-1 md:ml-10 flex justify-center">
            <img
              ref={cardRef}
              src={photo}
              className="w-full sm:w-[300px] md:w-[500px] lg:w-full h-auto"
              alt="NFC Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
