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


import React, { useEffect } from "react";
import photo from "../image/Capture-removebg-preview.png";
import { useLocation, useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      name="Home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 bg-gradient-to-tr from-[rgb(43,160,152)] via-[#554db1] to-[#3788ec] text-white"
    >
      <div className="flex flex-col md:flex-row">
        {/* Text Section */}
        <div className="md:w-1/2 mt-12 md:mt-36 space-y-10 order-2 md:order-1 mb-20">
          <h1 className="text-5xl md:text-7xl font-bold">Let's Connect,</h1>
          <p className="font-semibold text-wrap text-3xl md:text-4xl">
            Share Your Profile With Anyone in Just One Single Click!
          </p>
          <p className="text-wrap font-thin">
            Make sharing information fun and easy with this smart business
            card which utilizes NFC technology. Say goodbye to traditional
            business paper visiting cards and embrace the future with
            <p className="text-xl font-thin">NFC enabled business cards.</p>
          </p>
          <button
            className="border rounded-md px-4 py-2 font-bold text-2xl border-black bg-white hover:bg-gradient-to-tr from-[rgb(43,160,152)] via-[hsl(245,35%,51%)] to-[hsl(213,69%,50%)] text-black hover:text-white hover:border-white"
            onClick={() => navigate("/pvc")}
          >
            Buy Now
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 md:mt-32 mt-24 order-1 md:ml-40">
          <img
            src={photo}
            className="rounded-full md:w-[450px] md:h-[450px] w-[300px] h-[300px] mx-auto"
            alt="NFC Image"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
