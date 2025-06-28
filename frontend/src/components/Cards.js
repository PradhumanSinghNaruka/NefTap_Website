// import React, { useEffect } from "react";
// import photo1 from "../image/metal.png";
// import photo2 from "../image/pvc.png";
// import photo4 from "../image/influencer-removebg-preview.png";
// import { Navigate, useNavigate } from "react-router-dom";
// function Cards() {
//   const greenShadow = {
//     boxShadow: "0 14px 16px hsla(120, 1.60%, 47.80%, 0.50)",
//   };
//   const navigate = useNavigate();

//   return (
//     <>
//       <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
//         <marquee>
//           <p className="text-2xl md:text-3xl font-bold space-y-4 text-black mt-6">
//             SMART, CLASSY, SECURE, SAFE, SMART, CLASSY, SECURE, SAFE, SMART,
//             CLASSY, SECURE, SAFE
//           </p>
//         </marquee>
//       </div>
//       <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 bg-gradient-to-tr from-[hsl(176,70%,85%)] via-[hsl(246,43%,72%)] to-[#bad2f0] mt-4">
//         <div className="mt-4 p-3">
//           <h1 className="font-semibold md:font-bold mt-4 text-2xl md:text-5xl text-center">
//             Find the best digital NFC business card for you:
//           </h1>
//         </div>

//         <div className="flex flex-col md:flex-row">
//           <div className="md:w-1/2 mt-12 md:mt-20 space-y-10 order-2 md:order-1 mb-20">
//             <div
//               className="bg-white border rounded-lg p-4 hover:bg-black hover:text-white duration-500 hover:scale-105"
//               style={greenShadow}
//             >
//               <div className="flex flex-col md:flex-row cursor-pointer">
//                 <div className="md:w-3/4 space-y-4 order-2 md:order-1">
//                   <h1 className="text-3xl">Metal</h1>
//                   <h1 className="font-bold text-3xl">NFC Cards</h1>
//                   <p className="">
//                     Make connection with these high-quality NFC visiting card
//                     and create a statement that's sure to impress!
//                   </p>
//                   <button
//                     className="p-3 bg-black text-white border font-bold rounded-md hover:bg-white hover:text-black hover:border-black duration-700"
//                     onClick={() => navigate("/pvc")}
//                   >
//                     Shop Now
//                   </button>
//                 </div>
//                 <div className="md:w-1/2 order-1">
//                   <img src={photo1} className="md:w-[450px] mt-4" alt=""></img>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="bg-black text-white border rounded-lg p-4 hover:bg-white hover:text-black duration-500 hover:scale-105"
//               style={greenShadow}
//             >
//               <div className="flex flex-col md:flex-row cursor-pointer">
//                 <div className="md:w-3/4 space-y-4 order-2 md:order-1">
//                   <h1 className="text-3xl">Influencer</h1>
//                   <h1 className="font-bold text-3xl">NFC Cards</h1>
//                   <p className="">
//                     These smart business cards are made just for influencers to
//                     network with a dash of style cards !
//                   </p>
//                   <button
//                     className="p-3 bg-black text-white border font-bold rounded-md hover:bg-white hover:text-black hover:border-black duration-700"
//                     onClick={() => navigate("/pvc")}
//                   >
//                     Shop Now
//                   </button>
//                 </div>
//                 <div className="md:w-1/2 order-1">
//                   <img src={photo4} className="md:w-[600px] mt-4" alt=""></img>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="md:w-1/2 md:mt-20 mt-12 md:ml-12 order-1 space-y-10 md:order-1">
//             <div
//               className="bg-black text-white border rounded-lg p-4 hover:bg-white hover:text-black duration-500 hover:scale-105"
//               style={greenShadow}
//             >
//               <div className="flex flex-col md:flex-row cursor-pointer">
//                 <div className="md:w-3/4 space-y-4 order-2 md:order-1">
//                   <h1 className="text-3xl">PVC</h1>
//                   <h1 className="font-bold text-3xl">NFC Cards</h1>
//                   <p className="">
//                     PVC NFC cards by Rich Kardz is the perfect solution for a
//                     cheaper but durable business visiting card.
//                   </p>
//                   <button
//                     className="p-3 bg-black text-white border font-bold rounded-md hover:bg-white hover:text-black hover:border-black duration-700"
//                     onClick={() => navigate("/pvc")}
//                   >
//                     Shop Now
//                   </button>
//                 </div>
//                 <div className="md:w-1/2 order-1">
//                   <img src={photo2} className="md:w-[450px] mt-4" alt=""></img>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="bg-white border rounded-lg p-4 hover:bg-black hover:text-white duration-500 hover:scale-105"
//               style={greenShadow}
//             >
//               <div className="flex flex-col md:flex-row cursor-pointer">
//                 <div className="md:w-3/4 space-y-4 order-2 md:order-1">
//                   <h1 className="text-3xl">Engraved</h1>
//                   <h1 className="font-bold text-3xl">NFC Cards</h1>
//                   <p className="">
//                     Each engraved NFC based business card is a masterpiece,
//                     carefully engraved to reflect your unique style!
//                   </p>
//                   <button
//                     className="p-3 bg-black text-white border font-bold rounded-md hover:bg-white hover:text-black hover:border-black duration-700"
//                     onClick={() => navigate("/pvc")}
//                   >
//                     Shop Now
//                   </button>
//                 </div>
//                 <div className="md:w-1/2 order-1">
//                   <img src={photo2} className="md:w-[450px] mt-4" alt=""></img>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cards;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import photo1 from "../image/metal.png";
import photo2 from "../image/pvc.png";
import photo4 from "../image/influencer-removebg-preview.png";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Cards() {
  const navigate = useNavigate();
  const cardsRef = useRef([]);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { scale: 0.85, opacity: 0, y: 30 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power4.out", // smoother easing
            scrollTrigger: {
              trigger: card,
              start: "top 85%", // animation starts later = smoother
              toggleActions: "play none none reverse",
              scrub: false, // scrub false = better performance
            },
          }
        );
      });
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      gsap.from(leftRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(rightRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
    }
  }, []);

  const greenShadow = {
    boxShadow: "0 16px 25px hsla(120, 2.6%, 50.8%, 0.5)",
  };

  return (
    <>
      <div className="relative max-w-screen-xl mx-auto px-4 md:px-20 bg-white overflow-hidden">

        <div className="absolute top-0 left-0 h-full w-12 bg-white blur-lg z-10" />

        <div className="absolute top-0 right-0 h-full w-12 bg-white blur-lg z-10" />

        <marquee>
          <p className="text-2xl md:text-3xl font-bold text-black mt-6 z-20 relative">
            SMART, CLASSY, SECURE, SAFE, SMART, CLASSY, SECURE, SAFE, SMART,
            CLASSY, SECURE, SAFE
          </p>
        </marquee>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 md:px-20 bg-white mt-4">
        <div className="mt-4 p-3">
          <h1 className="font-bold mt-4 text-2xl md:text-5xl text-center flex flex-wrap justify-center gap-2">
            <span ref={leftRef} className="leading-tight bg-clip-text">
              Find the best digital
            </span>
            <span
              ref={rightRef}
              className="bg-gradient-to-tr from-[hsl(176,79%,34%)] via-[rgb(69,56,216)] to-[rgb(14,82,165)] leading-tight bg-clip-text text-transparent"
            >
              NFC business card for you:
            </span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-20 space-y-10 order-2 md:order-1 mb-20">
            <div
              ref={(el) => (cardsRef.current[0] = el)}
              className="bg-white border rounded-lg p-4 hover:bg-black hover:text-white duration-500"
              style={greenShadow}
            >
              <div className="flex flex-col md:flex-row cursor-pointer">
                <div className="md:w-3/4 space-y-4 order-2 md:order-1">
                  <h1 className="text-3xl">Metal</h1>
                  <h1 className="font-bold text-3xl">NFC Cards</h1>
                  <p>
                    Make connection with these high-quality NFC visiting card
                    and create a statement that's sure to impress!
                  </p>
                  <button
                    className="p-3 bg-black text-white border font-bold rounded-md hover:bg-white hover:text-black hover:border-black duration-700"
                    onClick={() => navigate("/pvc")}
                  >
                    Shop Now
                  </button>
                </div>
                <div className="md:w-1/2 order-1">
                  <img src={photo1} className="md:w-[450px] mt-4" alt="" />
                </div>
              </div>
            </div>

            <div
              ref={(el) => (cardsRef.current[1] = el)}
              className="bg-black text-white border rounded-lg p-4 hover:bg-white hover:text-black duration-500"
              style={greenShadow}
            >
              <div className="flex flex-col md:flex-row cursor-pointer">
                <div className="md:w-3/4 space-y-4 order-2 md:order-1">
                  <h1 className="text-3xl">Influencer</h1>
                  <h1 className="font-bold text-3xl">NFC Cards</h1>
                  <p>
                    These smart business cards are made just for influencers to
                    network with a dash of style cards!
                  </p>
                  <button
                    className="p-3 bg-black text-white border font-bold rounded-md hover:bg-white hover:text-black hover:border-black duration-700"
                    onClick={() => navigate("/pvc")}
                  >
                    Shop Now
                  </button>
                </div>
                <div className="md:w-1/2 order-1">
                  <img src={photo4} className="md:w-[600px] mt-4" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:mt-20 mt-12 md:ml-12 order-1 space-y-10 md:order-1">
            <div
              ref={(el) => (cardsRef.current[2] = el)}
              className="bg-black text-white border rounded-lg p-4 hover:bg-white hover:text-black duration-500 hover:scale-105"
              style={greenShadow}
            >
              <div className="flex flex-col md:flex-row cursor-pointer">
                <div className="md:w-3/4 space-y-4 order-2 md:order-1">
                  <h1 className="text-3xl">PVC</h1>
                  <h1 className="font-bold text-3xl">NFC Cards</h1>
                  <p>
                    PVC NFC cards by NefTap is the perfect solution for a
                    cheaper but durable business visiting card.
                  </p>
                  <button
                    className="p-3 bg-black text-white border font-bold rounded-md hover:bg-white hover:text-black hover:border-black duration-700"
                    onClick={() => navigate("/pvc")}
                  >
                    Shop Now
                  </button>
                </div>
                <div className="md:w-1/2 order-1">
                  <img src={photo2} className="md:w-[450px] mt-4" alt="" />
                </div>
              </div>
            </div>

            <div
              ref={(el) => (cardsRef.current[3] = el)}
              className="bg-white border rounded-lg p-4 hover:bg-black hover:text-white duration-500 hover:scale-105"
              style={greenShadow}
            >
              <div className="flex flex-col md:flex-row cursor-pointer">
                <div className="md:w-3/4 space-y-4 order-2 md:order-1">
                  <h1 className="text-3xl">Engraved</h1>
                  <h1 className="font-bold text-3xl">NFC Cards</h1>
                  <p>
                    Each engraved NFC based business card is a masterpiece,
                    carefully engraved to reflect your unique style!
                  </p>
                  <button
                    className="p-3 bg-black text-white border font-bold rounded-md hover:bg-white hover:text-black hover:border-black duration-700"
                    onClick={() => navigate("/pvc")}
                  >
                    Shop Now
                  </button>
                </div>
                <div className="md:w-1/2 order-1">
                  <img src={photo2} className="md:w-[450px] mt-4" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
