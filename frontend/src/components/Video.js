import React, { useEffect, useRef } from "react";
import photo from "../image/degine.png";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoIosColorPalette } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { LuDollarSign } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { RiRecycleFill } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

function Video() {
  const textRef = useRef(null);

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
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
      <div className="relative flex items-center justify-center mt-16 md:mt-28">
        {/* Left Ball */}
        <motion.img
          src={photo}
          alt="ball-left"
          className="hidden md:block w-[120px] h-[120px] rounded-full object-cover absolute left-0"
          initial={{ rotate: 0 }}
          animate={{ rotate: 60 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          whileHover={{
            scale: 1.05,
            rotateX: 10,
            rotateY: -10,
            transition: { type: "spring", stiffness: 200, damping: 12 },
          }}
        />
        <h1
          ref={textRef}
          className="font-bold text-3xl md:text-5xl text-center flex flex-wrap justify-center gap-2"
        >
          <span className="leading-tight bg-clip-text">Why</span>
          <span className="bg-gradient-to-tr from-[hsl(176,79%,34%)] via-[rgb(69,56,216)] to-[rgb(14,82,165)] leading-tight bg-clip-text text-transparent">
            NefTap ?
          </span>
        </h1>
        <motion.img
          src={photo}
          alt="ball-right"
          className="hidden md:block w-[120px] h-[120px] rounded-full object-cover absolute right-0"
          initial={{ rotate: 0 }}
          animate={{ rotate: 120 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          whileHover={{
            scale: 1.05,
            rotateX: 10,
            rotateY: -10,
            transition: { type: "spring", stiffness: 200, damping: 12 },
          }}
        />
      </div>

      <div className="bg-white text-black p-8 mt-10 flex flex-col md:items-center overflow-x-auto">
        <div className="grid grid-cols-3 gap-6 w-[900px] text-center mt-4">
          <div className="flex flex-col gap-4 items-start text-left p-12 py-20 space-y-4 border rounded-xl shadow-xl">
            <div className="flex items-center gap-3">
              <IoIosColorPalette className="w-6 h-6" /> Custom Design
            </div>
            <div className="flex items-center gap-3">
              <FaShoppingCart className="w-6 h-6" /> One-Time Purchase
            </div>
            <div className="flex items-center gap-3">
              <FaPenToSquare className="w-6 h-6" /> Update Info Anytime
            </div>
            <div className="flex items-center gap-3">
              <LuDollarSign className="w-6 h-6" /> Cost-Effective
            </div>
            <div className="flex items-center gap-3">
              <FaRegStar className="w-6 h-6" /> Unique User Experience
            </div>
            <div className="flex items-center gap-3">
              <BsGraphUpArrow className="w-6 h-6" /> Real-Time Analytics
            </div>
            <div className="flex items-center gap-3">
              <RiRecycleFill className="w-6 h-6" /> Endlessly Reusable
            </div>
          </div>
          <div className="bg-white shadow-xl border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-4">NefTap Smart Card</h3>
            {Array(7)
              .fill()
              .map((_, i) => (
                <div key={i} className="py-3 text-green-600 text-2xl">
                  ✔️
                </div>
              ))}
          </div>
          <div className="bg-white shadow-xl border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-4">Paper Business Cards</h3>
            <div className="py-3 text-green-600 text-2xl">✔️</div>
            {Array(6)
              .fill()
              .map((_, i) => (
                <div key={i} className="py-3 text-red-500 text-2xl">
                  ❌
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;