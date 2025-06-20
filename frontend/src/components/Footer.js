import React from "react";
import photo from "../image/Logo-Png.png";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto text-white bg-gradient-to-tr from-[rgb(43,160,152)] via-[#554db1] to-[#3788ec]">
        <div className="flex flex-col md:flex-row mt-24">
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
                For Enquire : neftap@gmail.com/
              </p>
              <p className="mt-2 font-bold cursor-pointer">
                For Sale : neftap@gmail.com/
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
            <div className="ml-2 mt-4 md:mt-16 flex md:block space-x-4">
              <h1 className="font-bold text-3xl">Follow Us</h1>
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
        <div className="flex space-x-8 ml-2 md:ml-24">
          <p
            className="text-sm mt-4 font-bold cursor-pointer hover:underline mb-4"
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
          <p className="text-sm mt-4 text-end">
            Copyright © 2025 Neftap. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
