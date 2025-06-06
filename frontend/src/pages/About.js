import React, { useEffect } from "react";
import photo from "../image/aboutus.png";
import photo1 from "../image/about.png";
import Modal from "./Modal";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { useLocation } from "react-router-dom";
function Login() {
  const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  return (
    <>
      <div name="/about" className="text-black mb-0 mt-20 max-w-screen-2xl container mx-auto">
        <div className="bg-gradient-to-tr from-[#cafffb] via-[#c1bbff] to-[rgb(192,220,255)]">
          <div className="bg-gradient-to-tr from-[hsl(176,70%,85%)] via-[rgb(192,185,255)] to-[rgb(200,225,255)]">
            <h1 className="ml-10 md:ml-24 font-bold text-4xl md:text-5xl py-4">About Us</h1>
            <p className="text-wrap mt-8 ml-10 md:ml-24">
              NafTap is refer to as smart business card with NFC technology
              which <br /> offers you easy sharing of contact information,
              social media
              <br />
              handles, portfolio, website, etc., with just a single tap.
              <br />
              Crafting bespoke solutions, we redefine connectivity and style.
            </p>
            <img src={photo}></img>
            <div className="mt-8">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 order-2 md:order-1 md:ml-24">
                  <img src={photo1} className="h-[300px] w-[300px] md:w-[600px] md:h-[500px] mt-8 md:mt-0 ml-8 md:ml-0"></img>
                </div>
                <div className="md:w-1/2 order-1 h-[600px] p-12 space-y-4">
                  <h1 className="md:mt-2 text-3xl font-semibold flex">
                    About{" "}
                    <p className="text-black text-3xl font-thin ml-4">NafTap</p>
                  </h1>
                  <div className="md:mt-6 space-y-2 inline-grid">
                    <p className="text-wrap text-lg">
                      At NafTap, we’re on a mission to make networking smarter
                      and more eco-friendly. Every year more than 7.2 Million
                      Trees are cut for visiting cards. By using NafTap you can
                      be a part of the change and network the sustainable way.
                    </p>
                    <p className="text-lg mt-8">
                      And what’s more is that we plant a tree for every order we
                      receive.
                    </p>
                    <h1 className="border rounded-lg bg-white shadow-xl duration-300 p-2 mt-8 flex">
                      <IoPhonePortraitOutline className="w-[100px] h-[100px] ml-4 text-blue-900" />
                      <div className="block mb-4 md:mb-0">
                        <h1 className="text-xl md:text-2xl ml-2">
                          The best networking solution
                        </h1>
                        <p className="ml-2 mt-2 text-wrap">
                          Paper cards are just a waste in this digital era due
                          to this everyone started level up themselves with our
                          QR code visiting cards.
                        </p>
                      </div>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex flex-col md:flex-row md:ml-16">
                <div className="md:w-1/2 order-1 h-[600px] p-12 space-y-4">
                  <h1 className="md:mt-2 text-3xl font-semibold block">
                    Customise NefTap{" "}
                    <p className="text-black text-3xl font-thin">
                      With your logo and details
                    </p>
                  </h1>
                  <div className="md:mt-6 space-y-2 inline-grid">
                    <p className="text-wrap text-lg">
                      Get personalized business cards that align with you and
                      network in style every time. Rich Kardz makes you stand
                      out from the crowd and also acts as a conversation
                      starter.
                    </p>
                    <h1 className="border rounded-lg bg-white shadow-xl duration-300 p-2 mt-8 flex">
                      <FaUsers className="h-[60px] w-[100px] md:h-[100px] md:ml-4 text-blue-900"/>
                      <div className="block">
                        <h1 className="text-3xl md:text-5xl p-4 md:ml-8">75K+ user</h1>
                      </div>
                    </h1>
                    <h1 className="border rounded-lg bg-white shadow-xl duration-300 p-2 mt-8 flex">
                      <FaAddressCard className="h-[60px] w-[100px] md:h-[100px] md:ml-4 text-blue-900" />
                      <div className="block">
                        <h1 className="text-3xl md:text-5xl p-4 md:ml-8">85K+ card</h1>
                      </div>
                    </h1>
                  </div>
                </div>
                <div className="md:w-1/2 order-2 md:order-1 md:mr-14">
                  <img src={photo1} className="h-[300px] w-[300px] md:w-[600px] md:h-[500px] mt-8 md:mt-0 ml-8 md:ml-0"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
