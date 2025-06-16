import React, { useEffect, useRef } from "react";
import photo from "../image/contact.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import gsap from "gsap";
function Contact() {
  const location = useLocation();
  const navigate = useNavigate();
  const heidingRef = useRef(null);
  const heidingsRef = useRef(null);
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
      city: data.city,
      message: data.message,
    };
    await axios
      .post("https://neftap-website-2.onrender.com/contactus/contactus", userInfo)
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
      if(window.innerWidth < 768) return;

      gsap.from(heidingRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
      });

      gsap.from(heidingsRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      });
    },[])
  return (
    <>
      <div name="/contact" className="text-black mt-20 mb-0 h-full max-w-screen-2xl container mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row shadow-lg">
            <div ref={heidingsRef} className="md:w-1/2 order-1 h-full p-8">
              <h1 className="md:mt-2 ml-4 md:ml-12 text-4xl md:text-5xl font-bold">
                Make Us A Call
              </h1>
              <p className="mt-4 mb-4 md:mb-0 md:ml-12 text-lg text-wrap">
                If you have any questions about our smart business card with NFC
                technology, don’t hesitate to contact us. We here at NafTap are
                happy to answer any of your questions.
              </p>
              <div className="ml-0 md:ml-12 md:mt-6 space-y-2 inline-grid border bg-white shadow-2xl rounded-md p-4 w-[310px] md:w-[490px]">
                <label className="block text-black font-bold">Full Name</label>
                <input
                  className="shadow rounded-lg appearance-none border py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[285px] md:w-[450px]"
                  id="name"
                  type="text"
                  placeholder="Enter your Full Name"
                  {...register("name", { required: true })}
                />

                {errors.name && (
                  <span className="text-sm text-red-600">
                    This field is required
                  </span>
                )}
                <label className="block text-black font-bold mt-4">Email</label>
                <input
                  className="shadow rounded-lg appearance-none border py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your Email"
                  {...register("email", { required: true })}
                />

                {errors.name && (
                  <span className="text-sm text-red-600">
                    This field is required
                  </span>
                )}
                <label className="block text-black font-bold mt-4">
                  Phone Number
                </label>
                <input
                  className="shadow rounded-lg appearance-none border py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="number"
                  type="number"
                  placeholder="Enter your Phone Number"
                  {...register("number", { required: true })}
                />

                {errors.number && (
                  <span className="text-sm text-red-600">
                    This field is required
                  </span>
                )}
                <label className="block text-black font-bold mt-4">City</label>
                <input
                  className="shadow rounded-lg appearance-none border py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="city"
                  type="text"
                  placeholder="Enter your City"
                  {...register("city", { required: true })}
                />

                {errors.name && (
                  <span className="text-sm text-red-600">
                    This field is required
                  </span>
                )}
                <label className="block text-black font-bold mt-4">
                  Message
                </label>
                <textarea
                  className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  name="message"
                  type="text"
                  placeholder="Enter your Message"
                  {...register("message", { required: true })}
                />

                {errors.name && (
                  <span className="text-sm text-red-600">
                    This field is required
                  </span>
                )}
                <button className="font-semibold text-xl border rounded-md p-2 w-[150px] bg-black text-white hover:bg-white hover:text-black hover:border-black duration-300 mt-8">
                  Send
                </button>
              </div>
            </div>
            <div ref={heidingRef} className="md:w-1/2 order-2 md:order-1">
              <img src={photo} className="h-[280px] md:h-[580px]"></img>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
