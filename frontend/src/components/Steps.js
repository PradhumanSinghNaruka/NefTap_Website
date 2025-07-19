// import React, { useEffect, useRef } from "react";
// import { FiShoppingCart } from "react-icons/fi";
// import { IoMdPhonePortrait } from "react-icons/io";
// import { IoQrCodeOutline } from "react-icons/io5";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import { TextPlugin } from "gsap/TextPlugin";

// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(TextPlugin);

// function Steps() {
//   const textRef = useRef(null);
//   const leftRef = useRef(null);
//   const rightRef = useRef(null);
//   const cardsRef = useRef(null);
//   useEffect(() => {
//     if (window.innerWidth >= 768) {
//       gsap.from(textRef.current, {
//         x: -100,
//         opacity: 0,
//         duration: 0.9,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: textRef.current,
//           start: "top 80%",
//           toggleActions: "play reverse play reverse",
//         },
//       });

//       gsap.from(leftRef.current, {
//         x: -100,
//         opacity: 0,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: leftRef.current,
//           start: "top 80%",
//           toggleActions: "play reverse play reverse",
//         },
//       });

//       gsap.from(rightRef.current, {
//         x: 100,
//         opacity: 0,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: rightRef.current,
//           start: "top 80%",
//           toggleActions: "play reverse play reverse",
//         },
//       });

//       cardsRef.current.forEach((card, i) => {
//         gsap.fromTo(
//           card,
//           {
//             rotateY: -180,
//             opacity: 0,
//             y: 50,
//           },
//           {
//             rotateY: 0,
//             opacity: 1,
//             y: 0,
//             duration: 1.5,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: card,
//               start: "top 80%",
//             },
//           }
//         );
//       });
//     }
//   }, []);
//   return (
//     <>
//       <div className="bg-white text-black">
//         <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 bg-white text-black mb-20 mt-0 md:mt-9">
//           <div className="container">
//             <h1
//               ref={textRef}
//               className="text-2xl md:text-4xl font-bold text-center"
//             >
//               How Do I Get My Hands on NFC Business Cards?
//             </h1>
//             <p className="text-center mt-6 text-md md:text-xl">
//               <span ref={leftRef}>
//                 Own your smart business card today in three
//               </span>
//               <br /> <span ref={rightRef}>simple steps</span>
//             </p>
//           </div>
//           <div className="block md:flex space-x-3 md:space-x-32 justify-center md:mt-0 py-24">
//             <div className="block text-center p-4 bg-black text-white cursor-pointer border rounded-xl w-[300px] ml-3 md:ml-0 space-y-6 hover:bg-white hover:text-black hover:border-black duration-300 shadow-2xl shadow-black">
//               <FiShoppingCart className="w-16 h-16 text-center ml-24 md:ml-24 mt-4" />
//               <h1 className="text-3xl font-semiblock">Order NafTap</h1>
//               <p className="text-clip text-wrap">
//                 Check our cards, finalise your choice, and place the order. You
//                 will get our NFC-enabled classy business cards in a few days.
//               </p>
//             </div>
//             <div className="block text-center p-4 bg-black text-white cursor-pointer border rounded-xl w-[300px] space-y-6 hover:bg-white hover:text-black hover:border-black duration-300 ml-12 md:ml-0 shadow-2xl shadow-black md:mt-0 mt-28">
//               <IoMdPhonePortrait className="w-16 h-16 text-center ml-24 md:ml-24" />
//               <h1 className="text-3xl font-semiblock">
//                 Setup & Activate Your Profile
//               </h1>
//               <p className="text-clip text-wrap">
//                 Once your NefTap is active, you can start networking in style.
//                 Just tap on your prospect's smartphone and network!
//               </p>
//             </div>
//             <div className="block text-center p-4 bg-black text-white cursor-pointer border rounded-xl w-[300px] space-y-6 hover:bg-white hover:text-black hover:border-black duration-300 shadow-2xl ml-20 md:ml-4 shadow-black md:mt-0 mt-24">
//               <IoQrCodeOutline className="w-16 h-16 text-center ml-24 md:ml-24 mt-4" />
//               <h1 className="text-3xl font-semiblock">Start Networking</h1>
//               <p className="text-clip text-wrap">
//                 Once your NefTap is active, you can start networking in style.
//                 Just tap on your prospect's smartphone and network!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Steps;

import React, { useEffect, useRef } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdPhonePortrait } from "react-icons/io";
import { IoQrCodeOutline } from "react-icons/io5";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

function Steps() {
  const textRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (window.innerWidth <= 768) return;
    gsap.from(textRef.current, {
      x: -100,
      opacity: 0,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

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
    cardsRef.current.forEach((card, i) => {
      if (window.innerWidth >= 768) {
        gsap.fromTo(
          card,
          {
            rotateY: -50,
            opacity: 0,
            y: 50,
          },
          {
            rotateY: 0,
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    });
  }, []);

  const steps = [
    {
      number: 1,
      title: "Order NefTap",
      description:
        "Check our cards, finalise your choice, and place the order. You will get our NFC-enabled classy business cards in a few days.",
    },
    {
      number: 2,
      title: "Setup & Activate",
      description:
        "Setup your profile with all your information, social links, and portfolio. Activate your NFC card to start sharing.",
    },
    {
      number: 3,
      title: "Start Networking",
      description:
        "Once your NefTap is active, you can start networking in style. Just tap on your prospect's smartphone and network!",
    },
  ];

  return (
    <>
      <div className="w-full bg-white text-black">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 bg-white text-black mb-20 mt-0 md:mt-9">
          <div className="container">
            <h1
              ref={textRef}
              className="font-bold text-2xl md:text-4xl lg:text-5xl text-center flex flex-wrap justify-center gap-2"
            >
              <span className="bg-gradient-to-tr from-[hsl(176,79%,34%)] via-[rgb(69,56,216)] to-[rgb(14,82,165)] leading-tight bg-clip-text text-transparent">
                How Do I Get My
              </span>
              <span className="leading-tight bg-clip-text">
                NFC Business Cards?
              </span>
            </h1>
            <p className="text-center mt-6 text-md md:text-xl">
              <span ref={leftRef}>
                Own your smart business card today in three
              </span>
              <br /> <span ref={rightRef}>simple steps</span>
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 mt-10 px-6">
            {steps.map((step) => (
              <div
                className="text-center border rounded-2xl shadow-lg shadow-gray-400 mt-6 p-4 hover:scale-105 duration-300 cursor-pointer"
                key={step.number}
              >
                <div className="w-20 md:w-14 lg:w-20 h-20 md:h-14 lg:h-20 bg-gradient-to-tr from-[hsl(176,79%,34%)] via-[rgb(69,56,216)] to-[rgb(14,82,165)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-3xl font-bold">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl md:text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Steps;
