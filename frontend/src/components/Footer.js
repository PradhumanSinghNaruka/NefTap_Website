import React from "react";
import photo from "../image/Logo-Png.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaYoutube ,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="max-w-screen-2xl container mx-auto text-white bg-gradient-to-tr from-[#167972] via-[hsl(245,68%,45%)] to-[#2a65ad]">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 order-1 text-white mb-4">
            <div className="ml-4 md:ml-24 mt-16">
              <img src={photo} className="h-10 w-25 cursor-pointer" alt="" />
              <p className="font-bold text-white mt-4">
                NefTap NFC card is an essential tool for professionals to
                connect with potential clients and stay organized and
                productive.All rights reserved.
              </p>
              <p className="font-bold mt-4">
                NEFTAP PRIVATE LIMITED
                <br />
                2nd Floor Balaji Communication
                <br />
                Sector4 Rajat Path, mansarovar
                <br />
                Jaipur, Rajasthan
                <br />
                INDIA
              </p>
              <p className="mt-8 font-bold">Office Hours : 10:00 to 6:30</p>
              <p className="mt-2 font-bold cursor-pointer">
                For Enquire : info.neftap@gmail.com
              </p>
              <p className="mt-2 font-bold cursor-pointer">
                For Sale : info.neftap@gmail.com
              </p>
              <br />
            </div>
          </div>
          <div className="md:w-1/6 order-2 mb-4 md:mb-20">
            <div className="ml-6 mt-8 md:mt-16">
              <h1 className="text-3xl">Company</h1>
              <p
                className="mt-3 md:mt-6 cursor-pointer hover:text-blue-500 duration-300 hover:underline"
                onClick={() => navigate("/")}
              >
                Home
              </p>
              <p
                className="mt-2 cursor-pointer hover:text-blue-500 duration-300 hover:underline"
                onClick={() => navigate("/enquire")}
              >
                Enquire
              </p>
              <p
                className="mt-2 cursor-pointer hover:text-blue-500 duration-300 hover:underline"
                onClick={() => navigate("/about")}
              >
                Company
              </p>
              <p
                className="mt-2 cursor-pointer hover:text-blue-500 duration-300 hover:underline"
                onClick={() => navigate("/contact")}
              >
                Contact US
              </p>
            </div>
          </div>
          <div className="md:w-1/6 order-2 mb-4 md:mb-20">
            <div className="ml-6 mt-8 md:mt-16">
              <h1 className="text-3xl">Products</h1>
              <p
                className="mt-6 cursor-pointer hover:text-blue-500 duration-300 hover:underline"
                onClick={() => navigate("/metal")}
              >
                Metal Cards
              </p>
              <p
                className="mt-2 cursor-pointer hover:text-blue-500 duration-300 hover:underline"
                onClick={() => navigate("/pvc")}
              >
                PVC Cards
              </p>
              <p
                className="mt-2 cursor-pointer hover:text-blue-500 duration-300 hover:underline"
                onClick={() => navigate("/influencer")}
              >
                Influencer Cards
              </p>
              <p
                className="mt-2 cursor-pointer hover:text-blue-500 duration-300 hover:underline"
                onClick={() => navigate("/engraved")}
              >
                Engraved Cards
              </p>
            </div>
          </div>
          <div className="md:w-1/6 order-2 mb-4 md:mb-20">
            <div className="ml-6 md:ml-2 mt-4 md:mt-16 flex md:block space-x-4">
              <h1 className="text-3xl">Follow Us</h1>
              <div className="flex space-x-4 ">
                <FaInstagram className="hover:scale-125 duration-300 md:mt-6 w-7 h-7 cursor-pointer" />
                <FaLinkedin className="hover:scale-125 duration-300 md:mt-6 w-7 h-7 cursor-pointer" />
                <FaYoutube className="hover:scale-125 duration-300 md:mt-6 w-7 h-7 cursor-pointer" />
                <CiFacebook className="hover:scale-125 duration-300 md:mt-6 w-7 h-7 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full" />

        <div
          name="Home"
          className="max-w-screen-2xl container mx-auto px-4 md:px-20 text-white"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 text-left space-y-10 order-1 md:order-1 mb-4">
              <p className="text-sm mt-4 text-start">
                Copyright © 2025 Neftap. All rights reserved.
              </p>
            </div>

            <div className="md:w-1/2 order-2 flex space-x-8">
              <p
                className="text-sm font-bold cursor-pointer hover:underline mt-4"
                onClick={() => navigate("/privacy")}
              >
                Privacy Policy
              </p>
              <p
                className="text-sm mt-4 font-bold cursor-pointer hover:underline"
                onClick={() => navigate("/termcondition")}
              >
                Term & Condition
              </p>
              <p
                className="text-sm mt-4 font-bold cursor-pointer hover:underline"
                onClick={() => navigate("/returnrefund")}
              >
                Return & Refund policy
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="w-full mt-12 p-6 mx-auto text-white bg-gradient-to-tr from-[#177a74] via-[rgb(52,37,209)] to-[hsl(213,68%,40%)]">
        <div className="max-w-screen-2xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl mb-4">
              <img src={photo} className="h-10 w-25 cursor-pointer" alt="" />
            </div>
            <p className="text-white font-thin mb-6 text-xl">
              NefTap NFC card is an essential tool for professionals to connect
              with potential clients and stay organized and productive.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/neftap.in/"
                className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/neftap.in/"
                className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors"
              >
                <FaTwitter className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/neftap.in/"
                className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="https://www.youtube.com/@NefTap"
                className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors"
              >
                <FaYoutube className="text-white" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 md:space-y-5 text-gray-400">
              <li>
                <a className="hover:text-teal-400 transition-colors text-white cursor-pointer" onClick={() => navigate("/")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors text-white cursor-pointer" onClick={() => navigate("/enquire")}>
                  Enquire
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/about")} className="hover:text-teal-400 transition-colors text-white cursor-pointer">
                  Company
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/contact")} className="hover:text-teal-400 transition-colors text-white cursor-pointer">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 md:space-y-5 text-gray-400">
              <li>
                <a onClick={() => navigate("/metal")} className="hover:text-teal-400 transition-colors text-white cursor-pointer">
                  Metal Cards
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/pvc")} className="hover:text-teal-400 transition-colors text-white cursor-pointer">
                  PVC Cards
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/influencer")} className="hover:text-teal-400 transition-colors text-white cursor-pointer">
                  Influencer Cards
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/engraved")} className="hover:text-teal-400 transition-colors text-white cursor-pointer">
                  Engraved Cards
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-6 text-gray-400">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-teal-400 mt-1" />
                <div className="text-white">
                  <p>NEFTAP PRIVATE LIMITED</p>
                  <p>2nd Floor Balaji Communication</p>
                  <p>Sector4 Rajat Path, mansarovar</p>
                  <p>Jaipur, Rajasthan, INDIA</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaClock className="text-teal-400" />
                <p className="text-white">Office Hours: 10:00 to 6:30</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-teal-400" />
                <p className="text-white cursor-pointer">info.neftap@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white mt-12 pt-8 max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white ray-400 mb-4 md:mb-0">
              Copyright © 2025 Neftap. All rights reserved.
            </p>
            <div className="flex space-x-6 text-white">
              <a onClick={() => navigate("/privacy")} className="hover:text-teal-400 transition-colors cursor-pointer">
                Privacy Policy
              </a>
              <a onClick={() => navigate("/termcondition")} className="hover:text-teal-400 transition-colors cursor-pointer">
                Terms & Conditions
              </a>
              <a onClick={() => navigate("/returnrefund")} className="hover:text-teal-400 transition-colors cursor-pointer">
                Return & Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
