// import React, { useRef } from "react";
// import {
//   motion,
//   useMotionTemplate,
//   useMotionValue,
//   useSpring,
// } from "framer-motion";
// import { FiMousePointer } from "react-icons/fi";

// const Animation = () => {
//   return (
//     <div className="grid w-full place-content-center bg-white px-4 py-2 md:mb-48 text-slate-900">
//         <h1 className="text-5xl font-bold text-center text-gray-800 mb-24">What Your NFC Card Will Look Like</h1>
//       <TiltCard />
//     </div>
//   );
// };

// const ROTATION_RANGE = 32.5;
// const HALF_ROTATION_RANGE = 32.5 / 2;

// const TiltCard = () => {
//   const ref = useRef(null);

//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const xSpring = useSpring(x);
//   const ySpring = useSpring(y);

//   const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

//   const handleMouseMove = (e) => {
//     if (!ref.current) return [0, 0];

//     const rect = ref.current.getBoundingClientRect();

//     const width = rect.width;
//     const height = rect.height;

//     const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
//     const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

//     const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
//     const rY = mouseX / width - HALF_ROTATION_RANGE;

//     x.set(rX);
//     y.set(rY);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <motion.div
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         transformStyle: "preserve-3d",
//         transform,
//       }}
//       className="relative h-96 w-[700px] rounded-xl bg-gradient-to-br from-indigo-500 to-violet-400"
//     >
//       <div
//         style={{
//           transform: "translateZ(75px)",
//           transformStyle: "preserve-3d",
//         }}
//         className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
//       >
//         <FiMousePointer
//           style={{
//             transform: "translateZ(75px)",
//           }}
//           className="mx-auto text-4xl"
//         />
//         <p
//           style={{
//             transform: "translateZ(50px)",
//           }}
//           className="text-center text-2xl font-bold"
//         >
//           HOVER ME
//         </p>
//       </div>
//     </motion.div>
//   );
// };

// export default Animation;

import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import photo1 from "../image/card1.png";

const Animation = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 mb-6 md:mb-24">
      <h1 className="text-xl md:text-5xl font-bold text-center text-black mb-10 md:mb-16">
        What Your NFC Card Will Look Like
      </h1>
      <TiltCard />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 20 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative w-full max-w-[700px] h-80 sm:h-96 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 shadow-2xl"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 sm:inset-6 flex justify-center items-center rounded-2xl bg-white shadow-lg overflow-hidden"
      >
        <img
          src={photo1}
          alt="NFC Card Preview"
          className="w-full h-full object-contain sm:object-cover rounded-xl"
        />
      </div>
    </motion.div>
  );
};

export default Animation;
