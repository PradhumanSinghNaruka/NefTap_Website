// import React, { useState } from "react";
// import photo from "../image/Logo-Png.png";
// // import { CiMenuFries } from "react-icons/ci";
// // import { IoCloseSharp } from "react-icons/io5";
// import { FaPhoneAlt } from "react-icons/fa";
// import { IoBagAdd } from "react-icons/io5";
// import { FaUserAlt } from "react-icons/fa";
// import { Link } from "react-scroll";
// // import Login from '../pages/Login';
// import Contactno from "./Contactno";
// import { useNavigate } from "react-router-dom";

// function Navbar() {
//   const [menu, setMenu] = useState(false);
//   const navItems = [
//     {
//       id: 1,
//       text: "Home",
//     },
//     {
//       id: 2,
//       text: "Enquire Now",
//       path:"/enquire",
//     },
//     {
//       id: 3,
//       text: "Company",
//     },
//     {
//       id: 4,
//       text: "Contact Us",
//     },
//   ];
//   const navigate = useNavigate();
//   return (
//     <>
//       <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-20 shadow-md shadow-gray-700 fixed top-0 left-0 right-0 z-50 bg-black text-white">
//         <div className="flex justify-between items-center h-20 text-white">
//           <div className="flex">
//             <img src={photo} className="h-10 w-25 cursor-pointer" alt="" />
//           </div>
//           <div className="flex">
//             <ul className="hidden md:flex space-x-12 font-thin text-xl">
//               {navItems.map(({ id, text }) => (
//                 <li
//                   className="hover:scale-105 hover:text-blue-400 duration-300 cursor-pointer"
//                   key={id}
//                 >
//                   <Link
//                     to={text}
//                     smooth={true}
//                     duration={500}
//                     offset={-70}
//                     activeClass="active"
//                   >
//                     {text}
//                   </Link>
//                   <Link to={"/enquire"}>{navItems.text}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div
//             onClick={() => setMenu(!menu)}
//             className="text-white cursor-pointer mt-6 flex space-x-12"
//           >
//             <div className="">
//               <FaPhoneAlt
//                 className="hover:scale-125 duration-300"
//                 onClick={() =>
//                   document.getElementById("my_modal_1").showModal()
//                 }
//               ></FaPhoneAlt>
//               <Contactno />
//             </div>
//             <FaUserAlt
//               className="hover:scale-125 duration-300"
//               onClick={() => navigate("/login")} 
//             />
//             <IoBagAdd className="hover:scale-125 duration-300" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import photo from "../image/Logo-Png.png";
// import { CiMenuFries } from "react-icons/ci";
// import { IoCloseSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";
import { FaUserAlt , FaHouseUser  } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import Contactno from "./Contactno";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "Enquire Now", path: "/enquire" },
    { id: 3, text: "Company", path:"/about"},
    { id: 4, text: "Contact Us", path:"/contact"},
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-20 shadow-md shadow-blue-50 fixed top-0 left-0 right-0 z-50 bg-black text-white">
        <div className="flex justify-between items-center h-20 text-white">
          <div className="flex">
            <img src={photo} className="h-10 w-25 cursor-pointer" alt="Logo" onClick={()=> navigate("/")} />
          </div>
          <div className="flex">
            <ul className="hidden md:flex space-x-12 font-thin text-xl">
              {navItems.map(({ id, text, path, scroll }) => (
                <li
                  key={id}
                  className="hover:scale-105 text-white font-thin hover:text-blue-700 duration-300 cursor-pointer"
                >
                  {scroll ? (
                    <ScrollLink
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"
                      spy={true}
                      className="text-white"
                    >
                      {text}
                    </ScrollLink>
                  ) : (
                    <span
                      onClick={() => navigate(path)}
                      className="text-white"
                    >
                      {text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div
            onClick={() => setMenu(!menu)}
            className="text-white cursor-pointer mt-6 flex space-x-12"
          >
            <div>
              <FaPhoneAlt
                className="hover:scale-125 duration-300"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              />
              <Contactno />
            </div>
            {/* <FaUserAlt
              className="hover:scale-125 duration-300"
              onClick={() => navigate("/login")}
            /> */}
            {localStorage.getItem("Contactus") ? (
              <FaHouseUser className="hover:scale-125 duration-300"
              onClick={() => navigate("/dashboard")}/>
            ) : (
              <FaUserAlt className="hover:scale-125 duration-300"
              onClick={() => navigate("/login")}/>
            )}
            <IoBagAdd className="hover:scale-125 duration-300" onClick={()=> navigate("/addtocart")}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
