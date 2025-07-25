import React, { useEffect, useRef } from "react";
import photo from "../image/aboutus.png";
import photo1 from "../image/17.png";
import Modal from "./Modal";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaEye } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import photo2 from "../image/mission.png";
import photo3 from "../image/vision.png";
import Ready from "../components/Ready.js";

gsap.registerPlugin(ScrollTrigger);

function Login() {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const parasRef = useRef([]);
  const imageRef = useRef(null);
  const cardRef = useRef([]);
  const cardsRef = useRef([]);
  const headingsRef = useRef([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    gsap.from(headingRef.current, {
      y: -50,
      opacity: 0,
      duration: 1.6,
      ease: "power3.out",
    });

    gsap.from(paraRef.current, {
      y: 30,
      opacity: 0,
      delay: 0.5,
      duration: 1,
    });

    gsap.from(imageRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 1,
    });
    cardRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { scale: 0.85, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
            scrub: false,
          },
        }
      );
    });
    cardsRef.current.forEach((cards, i) => {
      gsap.fromTo(
        cards,
        { scale: 0.85, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: cards,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
            scrub: false,
          },
        }
      );
    });

    headingsRef.current.forEach((headings, i) => {
      gsap.fromTo(
        headings,
        { scale: 0.5, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headings,
            start: "top 85%",
            scrub: false,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
    parasRef.current.forEach((paras, i) => {
      gsap.fromTo(
        paras,
        { scale: 0.5, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: paras,
            start: "top 85%",
            scrub: false,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div name="/about" className="text-black mt-20 w-full">
        <div className="max-w-screen-2xl mx-auto">
          <div className="">
            <h1
              ref={headingRef}
              className="ml-10 md:ml-24 font-bold text-4xl md:text-5xl py-4"
            >
              About Us
            </h1>
            <p ref={paraRef} className="text-wrap mt-8 ml-10 md:ml-24">
              NafTap is refer to as smart business card with NFC technology
              which <br /> offers you easy sharing of contact information,
              social media
              <br />
              handles, portfolio, website, etc., with just a single tap.
              <br />
              Crafting bespoke solutions, we redefine connectivity and style.
            </p>
            <img ref={imageRef} src={photo}></img>
            <div className="mt-8">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 order-2 md:order-1 md:ml-24">
                  <img
                    ref={(el) => (cardRef.current[0] = el)}
                    src={photo1}
                    className="h-[300px] w-[300px] md:w-[600px] md:h-[500px] mt-8 md:mt-0 ml-8 md:ml-0 border rounded-3xl"
                  ></img>
                </div>
                <div
                  ref={(el) => (parasRef.current[0] = el)}
                  className="md:w-1/2 order-1 h-[600px] p-12 space-y-4"
                >
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
                <div
                  ref={(el) => (headingsRef.current[0] = el)}
                  className="md:w-1/2 order-1 h-[600px] p-12 space-y-4"
                >
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
                      <FaUsers className="h-[60px] w-[100px] md:h-[100px] md:ml-4 text-blue-900" />
                      <div className="block">
                        <h1 className="text-3xl md:text-5xl p-4 md:ml-8">
                          500+ user
                        </h1>
                      </div>
                    </h1>
                    <h1 className="border rounded-lg bg-white shadow-xl duration-300 p-2 mt-8 flex">
                      <FaAddressCard className="h-[60px] w-[100px] md:h-[100px] md:ml-4 text-blue-900" />
                      <div className="block">
                        <h1 className="text-3xl md:text-5xl p-4 md:ml-8">
                          1k+ card
                        </h1>
                      </div>
                    </h1>
                  </div>
                </div>
                <div className="md:w-1/2 order-2 md:order-1 md:mr-14">
                  <img
                    ref={(el) => (cardsRef.current[0] = el)}
                    src={photo1}
                    className="h-[300px] w-[300px] md:w-[600px] md:h-[500px] mt-8 md:mt-0 ml-8 md:ml-0 border rounded-3xl"
                  ></img>
                </div>
              </div>
            </div>
            <div className="w-full grid md:flex px-20 mt-16 mb-24 gap-14">
              <div className="w-full md:w-1/2">
                <img
                  src={photo2}
                  className="justify-center items-center text-center w-full h-full rounded-2xl order-2 md:order-1"
                />
              </div>
              <div className="w-full md:w-1/2 grid justify-start items-start text-start order-1 md:order-2 space-y-3 md:space-y-0">
                <div className="w-full flex gap-3">
                  <FaFlag className="w-1/4 h-12 md:h-16" />
                  <h1 className="text-2xl md:text-5xl font-semibold ">
                    <span className="bg-gradient-to-tr from-[hsl(176,79%,34%)] via-[rgb(69,56,216)] to-[rgb(14,82,165)] leading-tight bg-clip-text text-transparent">
                      {" "}
                      Our Mission
                    </span>
                  </h1>
                </div>
                <p className="text-gray-600 text-wrap">
                  At Neftap, our mission is to empower individuals and
                  businesses with smarter, seamless, and sustainable networking
                  solutions through cutting-edge NFC technology. In an age where
                  everything is going digital, traditional paper business cards
                  are no longer effective — they get misplaced, become outdated,
                  and often end up in landfills. We aim to eliminate this
                  inefficiency by introducing a modern alternative that not only
                  reflects professionalism but also embraces eco-conscious
                  values.
                </p>
                <button
                  className="border rounded-md px-6 py-2 font-bold text-lg md:text-2xl border-black bg-white hover:bg-gradient-to-tr from-[rgb(43,160,152)] via-[hsl(245,35%,51%)] to-[hsl(213,69%,50%)] text-black hover:text-white hover:border-white transition duration-300"
                  onClick={() => navigate("/pvc")}
                >
                  Buy Now
                </button>
              </div>
            </div>
            <div className="w-full grid md:flex px-20 mt-16 mb-24 gap-14">
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <img
                  src={photo3}
                  className="justify-center items-center text-center w-full h-full rounded-2xl "
                />
              </div>
              <div className="w-full md:w-1/2 grid justify-start items-start text-start order-2 md:order-1 space-y-3 md:space-y-0">
                <div className="w-full flex gap-3">
                  <FaEye className="w-1/4 h-12 md:h-16" />
                  <h1 className="text-2xl md:text-5xl font-semibold">
                    <span className="bg-gradient-to-tr from-[hsl(176,79%,34%)] via-[rgb(69,56,216)] to-[rgb(14,82,165)] leading-tight bg-clip-text text-transparent">
                      {" "}
                      Our vission
                    </span>
                  </h1>
                </div>
                <p className="text-gray-600 text-wrap">
                  Our vision at Neftap is to become the leading global platform
                  for contactless digital identity exchange, redefining how
                  people and brands present themselves in an increasingly
                  connected world. We imagine a future where NFC cards replace
                  millions of disposable paper business cards, reducing
                  environmental waste while enhancing the way professionals
                  interact across industries. In this future, your profile isn’t
                  static — it’s dynamic, always updated, and instantly
                  shareable, opening new doors in real time.
                </p>
                <button
                  className="border rounded-md px-6 py-2 font-bold text-lg md:text-2xl border-black bg-white hover:bg-gradient-to-tr from-[rgb(43,160,152)] via-[hsl(245,35%,51%)] to-[hsl(213,69%,50%)] text-black hover:text-white hover:border-white transition duration-300"
                  onClick={() => navigate("/pvc")}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div>
            <Ready/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
