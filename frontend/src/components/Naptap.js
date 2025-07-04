// import React from 'react'
// import { FaLink } from "react-icons/fa6";
// import { MdOutlineShare } from "react-icons/md";
// import { MdOutlinePhonelinkErase } from "react-icons/md";
// import { MdUpdate } from "react-icons/md";
// import photo from "../image/Capture-removebg-preview.png";

// function Naptap() {
//   return (
//     <>
//         <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
//             <h1 className='text-2xl md:text-4xl font-bold space-y-4 text-black mt-8 text-center'>Why NFC Smart Business Card Are Perfect for Events & Seminars ?</h1>
//         </div>
//         <div className="max-w-screen-2xl container mx-auto text-white mt-2 md:mt-8">
//             <div className="flex flex-col md:flex-row">
//                 <div className="md:w-1/3 mt-2 md:mt-8 order-2 md:order-1 mb-20">
//                     <div className='h-72 bg-gradient-to-tr from-[rgb(211,255,251)] via-[rgb(193,186,255)] to-[hsl(213,100%,90%)] text-white'>
//                         <div className='ml-20 py-2'>
//                             <FaLink className='w-12 h-12 text-black py-2'></FaLink>
//                             <h1 className='text-black text-3xl font-bold mt-4'>My Neftap</h1>
//                             <p className='text-black mt-4 text-wrap'>Sharing information is now easy with our NFC technology business card. Exchange your contact information, website, portfolio, etc with a single tap on a smartphone.</p>
//                         </div>
//                     </div>
//                     <div className='h-72 bg-green-200 text-white'>
//                         <div className='ml-20'>
//                             <MdOutlineShare className='w-12 h-12 text-black'></MdOutlineShare>
//                             <h1 className='text-black text-3xl font-bold mt-4'>Unlimited Sharing</h1>
//                             <p className='text-black mt-4 text-wrap mr-4'>Unlimited Sharing turns your NFC card into a powerful tool to instantly share contact info, social media, and more—anytime, anywhere, with no limits.</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="md:w-1/3 mt-8 h-[575px] order-1 bg-gradient-to-tr from-[rgb(167,255,248)] via-[#948cdd] to-[#9dc9ff]">
//                     <img src={photo} className="md:w-[400px] md:h-[400px] mt-4" alt=''></img>
//                 </div>
//                 <div className="md:w-1/3 mt-0 md:mt-8 order-2 md:order-1 mb-20">
//                     <div className='h-72 bg-green-200 text-white py-4'>
//                         <div className='ml-20'>
//                             <MdOutlinePhonelinkErase className='w-12 h-12 text-black'></MdOutlinePhonelinkErase>
//                             <h1 className='text-black text-3xl text-wrap font-bold mt-4'>No App Needed!</h1>
//                             <p className='text-black text-wrap mt-4'>Just tap the NFC card—your info appears instantly. Fast, easy, and app-free!</p>
//                         </div>
//                     </div>
//                     <div className='h-72 bg-gradient-to-tr from-[rgb(211,255,251)] via-[rgb(193,186,255)] to-[hsl(213,100%,90%)] text-white'>
//                         <div className='ml-20'>
//                             <MdUpdate className='w-12 h-12 text-black'></MdUpdate>
//                             <h1 className='text-black text-3xl font-bold mt-4'>Update Anytime</h1>
//                             <p className='text-black text-wrap mt-4'>Easily update your info anytime—no need to reprint your NFC card. Changes sync instantly online!</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Naptap

import React, { useEffect, useRef } from "react";
import { FaLink } from "react-icons/fa6";
import {
  MdOutlineShare,
  MdOutlinePhonelinkErase,
  MdUpdate,
} from "react-icons/md";
import photo from "../image/banner1-removebg-preview.png";
import gsap from "gsap";

function Naptap() {
  const textRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    gsap.from(textRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    cardsRef.current.forEach((card, index) => {
      if (window.innerWidth >= 768) {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 1,
          delay: index * 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        });
      }
    });
  }, []);
  return (
    <>
      <div className=" p-3">
          <h1 ref={textRef} className="font-bold text-2xl md:text-5xl text-center flex flex-wrap justify-center gap-2">
            <span className="leading-tight bg-clip-text">Why Choose</span>
            <span className="bg-gradient-to-tr from-[hsl(176,79%,34%)] via-[rgb(69,56,216)] to-[rgb(14,82,165)] leading-tight bg-clip-text text-transparent">
              NefTap
            </span>
          </h1>
        </div>

      <div className="w-full text-white mt-2 md:mt-8">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row">
          {/* LEFT SIDE */}
          <div className="md:w-1/3 mt-2 md:mt-8 order-2 md:order-1 mb-20">
            <div
              ref={(el) => (cardsRef.current[0] = el)}
              className="h-72 bg-gradient-to-tr from-[rgb(211,255,251)] via-[rgb(193,186,255)] to-[hsl(213,100%,90%)] text-white"
            >
              <div className="ml-20 py-2">
                <FaLink className="w-12 h-12 text-black py-2" />
                <h1 className="text-black text-3xl font-bold mt-4">
                  My Neftap
                </h1>
                <p className="text-black mt-4 text-wrap">
                  Sharing information is now easy with our NFC technology
                  business card. Exchange your contact information, website,
                  portfolio, etc with a single tap on a smartphone.
                </p>
              </div>
            </div>

            <div
              ref={(el) => (cardsRef.current[1] = el)}
              className="h-72 bg-green-200 text-white"
            >
              <div className="ml-20">
                <MdOutlineShare className="w-12 h-12 text-black" />
                <h1 className="text-black text-3xl font-bold mt-4">
                  Unlimited Sharing
                </h1>
                <p className="text-black mt-4 text-wrap mr-4">
                  Share contact info, social media, and more—anytime, anywhere,
                  with no limits.
                </p>
              </div>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="md:w-1/3 mt-8 h-[575px] order-1 bg-gradient-to-tr from-[rgb(167,255,248)] via-[#948cdd] to-[#9dc9ff]">
            <img
              src={photo}
              className="md:w-[400px] h-full mt-4"
              alt=""
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="md:w-1/3 mt-0 md:mt-8 order-2 md:order-1 mb-20">
            <div
              ref={(el) => (cardsRef.current[2] = el)}
              className="h-72 bg-green-200 text-white py-4"
            >
              <div className="ml-20">
                <MdOutlinePhonelinkErase className="w-12 h-12 text-black" />
                <h1 className="text-black text-3xl text-wrap font-bold mt-4">
                  No App Needed!
                </h1>
                <p className="text-black text-wrap mt-4">
                  Just tap the NFC card—your info appears instantly. Fast, easy,
                  and app-free!
                </p>
              </div>
            </div>

            <div
              ref={(el) => (cardsRef.current[3] = el)}
              className="h-72 bg-gradient-to-tr from-[rgb(211,255,251)] via-[rgb(193,186,255)] to-[hsl(213,100%,90%)] text-white"
            >
              <div className="ml-20">
                <MdUpdate className="w-12 h-12 text-black" />
                <h1 className="text-black text-3xl font-bold mt-4">
                  Update Anytime
                </h1>
                <p className="text-black text-wrap mt-4">
                  Easily update your info anytime—no need to reprint your NFC
                  card. Changes sync instantly online!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Naptap;
