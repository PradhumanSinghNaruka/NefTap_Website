import React, { useEffect, useRef } from "react";
import photo from "../image/degine.png";
import * as motion from "motion/react-client";
import gsap from "gsap";

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
  });
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="relative flex items-center justify-center mt-28">
          {/* Left Image - only on md and above */}
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

          {/* Heading */}
          <h1
            ref={textRef}
            className="text-black text-2xl md:text-5xl font-bold text-center"
          >
            How NefTap Works ?
          </h1>

          {/* Right Image - only on md and above */}
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
      </div>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 bg-white mt-10 md:mt-28">
        <div className="flex justify-center">
          <img
            src="https://img.youtube.com/vi/I6brxApr_XU/maxresdefault.jpg"
            alt="YouTube Thumbnail"
            width="750"
            height="615"
            className="border rounded-2xl"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Video;
