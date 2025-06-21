import React, { useEffect, useRef } from "react";
import photo from "../image/contact1.jpg";
import Modal from "./Modal";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import gsap from "gsap";
function Enquire() {
  const location = useLocation();
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const heidingRef = useRef(null);
  const paraRef = useRef(null);
  const from = location.state?.from?.pathname || "/contact";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      number: data.number,
      cards: data.cards,
      city: data.city,
      message: data.message,
    };
    await axios
      .post("https://neftap-website-2.onrender.com/enquire/enquire", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          alert("Submitted Successfully");
          window.location.reload();
          setTimeout(() => {}, 3000);
          navigate(from, { replace: true });
        }
        localStorage.setItem("Contactus", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.message) {
          console.log(err);
          alert("Error :" + err.response.data.message);
          setTimeout(() => {}, 3000);
          window.location.reload();
        }
      });
  };
  const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
      if (window.innerWidth < 768) return;
        gsap.from(cardRef.current, {
          scale: 0.7,
          opacity: 0,
          duration: 0.8,
          delay: 0.7,
          ease: "back.out(1.7)",
        });

        gsap.from(heidingRef.current, {
          y: -50,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        });

        gsap.from(paraRef.current, {
          y: 30,
          opacity: 0,
          delay: 0.5,
          duration: 1,
          ease: "back.out(1.7)",
        });
    },[]);
  return (
    <>
      <div
        name="/enquire"
        className="max-w-screen-2xl container mx-auto text-black mt-20 h-full md:h-full mb-0"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="block md:flex flex-col md:flex-row">
            <div className="w-[375px] md:w-1/2 order-2 md:order-1">
              <img
                src={photo}
                ref={cardRef}
                className="w-[340px] h-[340px] md:w-full md:h-full"
              ></img>
            </div>
            <div className="w-[365px] md:w-1/2 order-1 bg-gray-50">
              <h1 ref={heidingRef} className="md:mt-4 ml-4 md:ml-24 text-2xl font-semibold">
                Bulk Order Enquiry Form
              </h1>
              <h1 ref={paraRef} className="text-black font-semibold text-sm md:text-3xl mt-4 md:mt-4 ml-4 md:ml-24 text-wrap">
                Fill the form and our team will get in touch with you.
              </h1>
              <div ref={paraRef} className="md:ml-24 md:mt-6 space-y-6 inline-grid">
                <div className="block md:flex mt-4 md:mt-0 ml-4 md:ml-0 md:space-x-10">
                  <div className="block">
                    <input
                      className="shadow rounded-md appearance-none border py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[220px]"
                      id="name"
                      type="text"
                      placeholder="Name"
                      {...register("name", { required: true })}
                    />
                    <br />
                    {errors.name && (
                      <span className="text-sm text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="block">
                    <input
                      className="shadow mt-4 md:mt-0 rounded-lg appearance-none border py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[220px]"
                      id="email"
                      type="email"
                      placeholder="Email"
                      {...register("email", { required: true })}
                    />
                    <br />
                    {errors.email && (
                      <span className="text-sm text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="block md:flex md:space-x-10 ml-4 md:ml-0">
                  <div className="block mt-2">
                    <input
                      className="shadow rounded-md appearance-none border py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[220px]"
                      id="number"
                      type="number"
                      placeholder="Phone Number"
                      {...register("number", { required: true })}
                    />
                    <br />
                    {errors.number && (
                      <span className="text-sm text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="block mt-2">
                    <input
                      className="shadow rounded-lg appearance-none border py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[220px] mt-4 md:mt-0"
                      id="cards"
                      type="number"
                      placeholder="Number of cards"
                      {...register("cards", { required: true })}
                    />
                    <br />
                    {errors.cards && (
                      <span className="text-sm text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex md:space-x-10">
                  <div className="block mt-2">
                    <input
                      className="hadow rounded-lg appearance-none border py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[220px] mt-4 md:mt-0 ml-4 md:ml-0"
                      id="city"
                      type="text"
                      placeholder="City"
                      {...register("city", { required: true })}
                    />
                    <br />
                    {errors.city && (
                      <span className="text-sm text-red-600 ml-3 md:ml-0">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-3">
                  <textarea
                    className="hadow rounded-lg appearance-none border py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[220px] mt-4 md:mt-0 ml-4 md:ml-0"
                    id="message"
                    name="message"
                    type="text"
                    placeholder="Enter your Message"
                    {...register("message", { required: true })}
                  />
                  <br />
                  {errors.message && (
                    <span className="text-sm text-red-600 ml-3 md:ml-0">
                      This field is required
                    </span>
                  )}
                </div>
                <button className="font-semibold text-xl border rounded-md p-2 w-[180px] bg-black text-white hover:bg-white hover:text-black hover:border-black duration-300 mt-4 ml-6 md:ml-0">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Enquire;
