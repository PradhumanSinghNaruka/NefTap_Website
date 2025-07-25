import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

function Google() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/address";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      number: data.number,
      link: data.link,
    };

    localStorage.setItem("googleData", JSON.stringify(userInfo));

    navigate(from, { replace: true });

    alert("Card details saved! Proceed to enter your address.");
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div name="/google" className="mt-36 mb-8 md:mb-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row">
            <div className="w-[330px] md:w-9/12 order-2 md:order-1 bg-gray-100 text-black ml-4 md:ml-20 shadow-xl">
              <div className="p-4 border border-black rounded-md block">
                <h1 className="font-bold text-2xl md:text-3xl text-left flex flex-wrap gap-2 ml-0 md:ml-4">
                  <span className="leading-tight bg-clip-text">
                    1.Enter Details To be
                  </span>
                  <span
                    className="bg-gradient-to-tr from-[hsl(176,79%,34%)] via-[rgb(69,56,216)] to-[rgb(14,82,165)] leading-tight bg-clip-text text-transparent"
                  >
                    Printed On Card.
                  </span>
                </h1>
                <div className="md:ml-10 md:mt-6 space-y-6 inline-grid">
                  <div className="block md:flex space-x-0 md:space-x-12 md:gap-12">
                    <div className="block">
                      <label className="block font-bold mt-4 md:mt-0">
                        Full Name
                      </label>
                      <input
                        className="shadow rounded-md appearance-none border py-2 md:py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[350px] md:mt-0"
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
                    <div className="block mt-2 md:mt-0 ">
                      <label className="font-bold block">Email Address</label>
                      <input
                        className="shadow rounded-lg appearance-none border py-2 md:py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[350px]"
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
                  <div className="block md:flex md:space-x-12 md:gap-12">
                    <div className="block mt-2">
                      <label className="block font-bold">Phone Number</label>
                      <input
                        className="shadow rounded-md appearance-none border py-2 md:py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[350px]"
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
                      <label className="block font-bold">GMV Link</label>
                      <input
                        className="shadow rounded-md appearance-none border py-2 md:py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[350px]"
                        id="link"
                        type="text"
                        placeholder="Enter Your GMV Link"
                        {...register("text", { required: true })}
                      />
                      <br />
                      {errors.text && (
                        <span className="text-sm text-red-600">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="font-semibold text-xl border rounded-md p-2 w-[100px] md:w-[180px] bg-black text-white hover:bg-white hover:text-black hover:border-black duration-300 mt-4"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[330px] md:w-[300px] order-1 mb-6 md:mb-0 ml-4 md:ml-0">
              <div className="p-4 border border-black rounded-lg block ml-6 bg-gray-100 mr-4 shadow-xl">
                <h1 className="font-semibold text-xl">Order Summary</h1>
                <h1 className="flex gap-6 text-lg mt-2">
                  Base Total <p>₹899</p>
                </h1>
                <h1 className="flex gap-6 text-lg mt-2">
                  Delivery Charges <p>₹0</p>
                </h1>
                <h1 className="flex gap-4 font-semibold text-center mt-4">
                  <p className="flex mt-2">Grand Total</p>{" "}
                  <p className="text-2xl">₹899</p>
                </h1>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Google;
