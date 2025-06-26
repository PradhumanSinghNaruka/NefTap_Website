// import React, { useEffect } from "react";
// import photo from "../image/Capture-removebg-preview.png";
// import { useLocation, useNavigate } from "react-router-dom";
// import video from "../image/com--unscreen.gif";
// function Banner() {
//   const navigate = useNavigate();
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   return (
//     <>
//       <div
//         name="Home"
//         className="max-w-screen-2xl container mx-auto px-4 md:px-20 bg-gradient-to-tr from-[rgb(43,160,152)] via-[#554db1] to-[hsl(213,69%,50%)] text-white"
//       >
//         <div className="flex flex-col md:flex-row">
//           <div className="md:w-1/2 mt-12 md:mt-36 space-y-6 order-2 md:order-1 mb-20">
//             <div className="">
//               <h1 className="text-5xl md:text-7xl font-bold">Let's Connect,</h1>
//               <br />
//               <br />
//               <p className="font-thin text-wrap text-3xl md:text-4xl">
//                 Share Your Profile With Anyone in Just One Single Click !
//               </p>
//             </div>
//             <br />
//             <p className="text-wrap font-thin">
//               Make sharing information fun and easy with this smart business
//               card which utilises NFC technology. Say goodbye to traditional
//               business paper visiting cards and embrace the future with{" "}
//               <p className="text-xl font-thin">NFC enabled business cards.</p>
//             </p>
//             <br />
//             <button
//               className="border rounded-md px-4 py-2 font-bold text-2xl border-black bg-white hover:bg-gradient-to-tr from-[rgb(43,160,152)] via-[hsl(245,35%,51%)] to-[hsl(213,69%,50%)] text-black hover:text-white hover:border-white"
//               onClick={() => navigate("/pvc")}
//             >
//               Buy Now
//             </button>
//           </div>
//           <div className="md:w-1/2 md:mt-32 mt-24 order-1 md:ml-40">
//             <img
//               src={photo}
//               className="rounded-full md:w-[450px] md:h-[450px]"
//               alt=""
//             ></img>
//             {/* <video autoplay loop muted playsinline width="640"  src={video} type="video/mp4">
//     Your browser does not support the video tag.
// </video> */}

//             {/* <iframe
//   src="https://iframe.cloudflarestream.com/d57acb13277d25f3d42dec5691410144?autoplay=true&muted=true&loop=true"
//   width="500"
//   height="500"
//   allow="autoplay"
//   frameborder="0"
// ></iframe> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Banner;

// import React, { useEffect } from "react";
// import photo from "../image/Capture-removebg-preview.png";
// import { useLocation, useNavigate } from "react-router-dom";

// function Banner() {
//   const navigate = useNavigate();
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return (
//     <div
//       name="Home"
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 bg-gradient-to-tr from-[rgb(43,160,152)] via-[#554db1] to-[#3788ec] text-white"
//     >
//       <div className="flex flex-col md:flex-row">
//         {/* Text Section */}
//         <div className="md:w-1/2 mt-12 md:mt-36 space-y-10 order-2 md:order-1 mb-20">
//           <h1 className="text-5xl md:text-7xl font-bold">Let's Connect,</h1>
//           <p className="font-semibold text-wrap text-3xl md:text-4xl">
//             Share Your Profile With Anyone in Just One Single Click!
//           </p>
//           <p className="text-wrap font-thin">
//             Make sharing information fun and easy with this smart business
//             card which utilizes NFC technology. Say goodbye to traditional
//             business paper visiting cards and embrace the future with
//             <p className="text-xl font-thin">NFC enabled business cards.</p>
//           </p>
//           <button
//             className="border rounded-md px-4 py-2 font-bold text-2xl border-black bg-white hover:bg-gradient-to-tr from-[rgb(43,160,152)] via-[hsl(245,35%,51%)] to-[hsl(213,69%,50%)] text-black hover:text-white hover:border-white"
//             onClick={() => navigate("/pvc")}
//           >
//             Buy Now
//           </button>
//         </div>

//         {/* Image Section */}
//         <div className="md:w-1/2 md:mt-32 mt-24 order-1 md:ml-40">
//           <img
//             src={photo}
//             className="rounded-full md:w-[450px] md:h-[450px] w-[300px] h-[300px] mx-auto"
//             alt="NFC Image"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Banner;

import React, { useEffect, useRef } from "react";
import photo from "../image/banner1-removebg-preview.png";
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

  useEffect(() => {
    if (window.innerWidth >= 768) {
      gsap.from(headingRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(paraRef.current, {
        y: 30,
        opacity: 0,
        delay: 0.5,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(cardRef.current, {
        scale: 0.7,
        opacity: 0,
        duration: 1,
        delay: 0.7,
        ease: "back.out(1.7)",
      });
    }
  }, []);
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
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 bg-gradient-to-tr from-[rgb(43,160,152)] via-[#554db1] to-[#3788ec] text-white"
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* LEFT TEXT SIDE */}
          <div className="w-full md:w-3/5 mt-12 md:mt-28 space-y-6 md:space-y-10 order-2 md:order-1 mb-10 md:mb-20 px-2 sm:px-4">
            <p
              className="font-semibold text-sm sm:text-base md:text-lg font-inter text-wrap text-center md:text-left"
              ref={headingRef}
            >
              INSTANTLY SHARE CONTACT DETAILS WITH A SINGLE TAP
            </p>
            <h1
              ref={headingRef}
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-center md:text-left text-wrap"
            >
              Your Digital Business Card Platform
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg font-thin text-center md:text-left"
              ref={paraRef}
            >
              Make sharing information fun and easy with this smart business
              card which utilises NFC technology. Say goodbye to traditional
              paper visiting cards and embrace the future with
              <span className="block text-xl font-thin mt-1">
                NFC enabled business cards.
              </span>
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
          <div className="w-full md:w-2/5 md:mt-12 mt-24 order-1 md:ml-10 flex justify-center">
            <img
              ref={cardRef}
              src={photo}
              className="w-full sm:w-[300px] md:w-[450px] h-auto"
              alt="NFC Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
