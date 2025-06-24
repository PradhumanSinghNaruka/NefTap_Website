// import React, { useEffect } from "react";
// import photo from "../image/Logo-Png.png";
// import { useLocation } from "react-router-dom";
// function Payment() {
//   const { pathname } = useLocation();
  
//     useEffect(() => {
//       window.scrollTo(0, 0);
//     }, [pathname]);
//   return (
//     <>
//       <div
//         className="modal p-6 w-full rounded-xl bg-white"
//         name="/payment"
//       >
//         <div className="modal-box">
//           <form method="dialog">
//             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//               ✕
//             </button>
//           </form>
//           <div className="flex flex-col md:flex-row">
//             <div className="md:w-1/2 block space-y-2 order-2 md:order-1">
//               <div className="md:w-1/2 flex order-2 md:order-1 md:mt-24">
//                 <img src={photo} className="w-full h-full"></img>
//               </div>
//               <div className="md:w-1/2 order-1 text-4xl flex mt-4">
//                 Pay with Trust
//               </div>
//               <h1 className="mt-4 text-start text-5xl">
//                 Scan the QR and Pay With :
//               </h1>
//               <img
//                 src="https://1000logos.net/wp-content/uploads/2022/11/PhonePe-Logo.png"
//                 className="w-24 h-16 border rounded-lg"
//               ></img>
//               <img
//                 src="https://d1.awsstatic.com/Paytm-Logo.516dcbea24a48dc1f0187700fbd0f6a48f9a18c3.png"
//                 className="w-22 h-16 border rounded-lg p-1"
//               ></img>
//               <img
//                 src="https://tse3.mm.bing.net/th?id=OIP.Ue40NKqi8Lfd0lYYxoblrQHaD4&pid=Api&P=0&h=220"
//                 className="w-22 h-16 border rounded-lg"
//               ></img>
//             </div>
//             <div className="md:w-1/2 order-1">
//               <h1 className="text-2xl">Scan Me:</h1>
//               <img
//                 src="https://www.dreamhost.com/blog/wp-content/uploads/2022/12/qr-estatico.jpg"
//                 className="w-96 h-96 border rounded-lg md:ml-24 md:mt-32"
//               ></img>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Payment;
