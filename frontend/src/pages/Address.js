import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import Modal from "./Modal.js";
import Payment from "./Payment.js";
import axios from "axios";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

function Address() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/payment";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = async (data) => {
  //   const userInfo = {
  //     first: data.first,
  //     last: data.last,
  //     email: data.email,
  //     number: data.number,
  //     address: data.address,
  //     country: data.country,
  //     state: data.state,
  //     city: data.city,
  //     pin: data.pin,
  //     card: data.card,
  //   };
  //   await axios
  //     .post("https://neftap-website-2.onrender.com/address/address", userInfo)
  //     .then((res) => {
  //       console.log(res.data);
  //       if (res.data) {
  //         const serviceId = "service_e36fvr6";
  //         const templateId = "template_eb272io";
  //         const publicKey = "VGPXJonQQJ9SNaVIZ";

  //         const templateParams = {
  //           from_email: data.email,
  //           user_name: data.name,
  //           to_email: data.email,
  //           message: `Hi ${data.name}, your card order has been received successfully.`,
  //         };

  //         emailjs.send(serviceId, templateId, templateParams, publicKey);
  //         alert(
  //           "Order Place Successfully Make Payment & Send Mail For Register"
  //         );
  //         navigate(from, { replace: true });
  //       }
  //       localStorage.setItem("Address", JSON.stringify(res.data.user));
  //     })
  //     .catch((err) => {
  //       if (err.message) {
  //         console.log(err);
  //         alert("Error :" + err.response.data.message);
  //         setTimeout(() => {}, 3000);
  //         window.location.reload();
  //       }
  //     });
  // };
  const onSubmit = async (data) => {
    const addressData = {
      first: data.first,
      last: data.last,
      email: data.email,
      number: data.number,
      address: data.address,
      country: data.country,
      state: data.state,
      city: data.city,
      pin: data.pin,
      card: data.card,
    };
  //   try {
  //   const checkRes = await axios.post(
  //     "https://api.neftap.com/address/check-email",
  //     { email: data.email }
  //   );

  //   if (checkRes.data.exists) {
  //     alert("This email has already been used to place a card order.");
  //     return;
  //   }
  // } catch (err) {
  //   alert("Email check failed. Try again.");
  //   console.error("Email check error:", err);
  //   return;
  // }

    localStorage.setItem("addressData", JSON.stringify(addressData));

    const options = {
      key: "rzp_live_BWHi0ZhWDyy93S",
      amount: 89900,
      currency: "INR",
      name: "NefTap Card Payment",
      description: "Card Order Payment",
      prefill: {
        name: data.first + " " + data.last,
        email: data.email,
        contact: data.number,
      },
      theme: {
        color: "#3788ec",
      },
      handler: async function (response) {
        const printingData = JSON.parse(localStorage.getItem("printingData"));
        const googleData = JSON.parse(localStorage.getItem("googleData"));
        const addressData = JSON.parse(localStorage.getItem("addressData"));
        try {
          await axios.post(
            "https://api.neftap.com/card/card",
            printingData
          );

          await axios.post(
            "https://api.neftap.com/google/google",
            googleData
          );

          await axios.post(
            "https://api.neftap.com/address/address",
            addressData
          );

          const serviceId = "service_6uf7gz7";
          const templateId = "template_09fcbta";
          const publicKey = "PgFW2yvfbkcJLEE6X";  

          const templateParams = {
            from_email: addressData.email,
            user_name: `${addressData.first} ${addressData.last}`,
            to_email: addressData.email,
            message: `Hi ${addressData.first}, your card order has been received successfully.`,
          };

          emailjs.send(serviceId, templateId, templateParams, publicKey);

          alert("Successfully Order placed & payment successful!");
          localStorage.removeItem("printingData");
          localStorage.removeItem("googleData");
          localStorage.removeItem("addressData");
        } catch (error) {
          console.error(
            "Error details:",
            error.response?.data || error.message
          );
          alert(
            "Backend error after payment: " +
              (error.response?.data?.message || error.message)
          );
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div name="/address" className="mt-36 mb-8 md:mb-12">
      <div className="flex flex-col md:flex-row">
        <div className="w-[330px] ml-4 md:w-9/12 order-2 md:order-1 bg-gray-100 text-black md:ml-20 shadow-xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-4 border border-black rounded-md block">
              <h1 className="font-bold text-2xl md:text-3xl text-left flex flex-wrap gap-2 ml-0 md:ml-4">
                  <span className="leading-tight bg-clip-text">
                    2.Delivery
                  </span>
                  <span
                    className="bg-gradient-to-tr from-[hsl(176,79%,34%)] via-[rgb(69,56,216)] to-[rgb(14,82,165)] leading-tight bg-clip-text text-transparent"
                  >
                    Address
                  </span>
                </h1>
              <div className="md:ml-10 md:mt-6 space-y-6 inline-grid">
                <div className="block md:flex md:space-x-12 md:gap-12 mt-4 md:mt-0">
                  <div className="block">
                    <label className="block font-bold">First Name</label>
                    <input
                      className="shadow rounded-md appearance-none border py-3 md:py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[350px]"
                      id="first"
                      type="text"
                      placeholder="First Name"
                      {...register("first", { required: true })}
                    />
                    <br />
                    {errors.first && (
                      <span className="text-sm text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="block">
                    <label className="font-bold block">Last Name</label>
                    <input
                      className="shadow rounded-lg appearance-none border py-3 md:py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[350px]"
                      id="last"
                      type="text"
                      placeholder="Last Name"
                      {...register("last", { required: true })}
                    />
                    <br />
                    {errors.last && (
                      <span className="text-sm text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="block md:flex md:space-x-12 md:gap-12">
                  <div className="block mt-2">
                    <label className="block font-bold">Email Address</label>
                    <input
                      className="shadow rounded-md appearance-none border py-3 md:py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[350px]"
                      id="email"
                      type="email"
                      placeholder="Email Address"
                      {...register("email", { required: true })}
                    />
                    <br />
                    {errors.email && (
                      <span className="text-sm text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="block mt-2">
                    <label className="block font-bold">Phone Number</label>
                    <input
                      className="shadow rounded-md appearance-none border py-3 md:py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[350px]"
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
                </div>
                <div className="block md:flex md:space-x-12 md:gap-12">
                  <div className="block mt-2">
                    <label className="block font-bold">Address</label>
                    <input
                      className="shadow rounded-md appearance-none border py-3 md:py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[350px]"
                      id="address"
                      type="text"
                      placeholder="Address"
                      {...register("address", { required: true })}
                    />
                    <br />
                    {errors.address && (
                      <span className="text-sm text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="block md:flex md:space-x-12 md:gap-12">
                  <div className="block mt-2">
                    <label className="block font-bold">Country</label>
                    <select
                      className="shadow rounded-md border py-3 md:py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[350px]"
                      id="country"
                      defaultValue=""
                      {...register("country", { required: true })}
                    >
                      <br />
                      {errors.country && (
                        <span className="text-sm text-red-600">
                          This field is required
                        </span>
                      )}
                      <option value="" disabled>
                        Select a country
                      </option>
                      <option value="India">India</option>
                    </select>
                  </div>
                  <div className="block mt-2">
                    <label className="block font-bold">State</label>
                    <select
                      className="shadow rounded-md border py-3 md:py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[350px]"
                      id="state"
                      defaultValue=""
                      {...register("state", { required: true })}
                    >
                      <br />
                      {errors.state && (
                        <span className="text-sm text-red-600">
                          This field is required
                        </span>
                      )}
                      <option value="" disabled>
                        Select a state
                      </option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Gujrat">Gujrat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Punjab">Punjab</option>
                    </select>
                  </div>
                </div>
                <div className="block md:flex md:space-x-12 md:gap-12">
                  <div className="block mt-2">
                    <label className="block font-bold">City</label>
                    <input
                      className="shadow rounded-md appearance-none border py-3 md:py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[350px]"
                      id="city"
                      type="text"
                      placeholder="City"
                      {...register("city", { required: true })}
                    />
                    <br />
                    {errors.city && (
                      <span className="text-sm text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="block mt-2">
                    <label className="block font-bold">Pin Code</label>
                    <input
                      className="shadow rounded-md appearance-none border py-3 md:py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[350px]"
                      id="pin"
                      type="number"
                      placeholder="Pin Code"
                      {...register("pin", { required: true })}
                    />
                    <br />
                    {errors.pin && (
                      <span className="text-sm text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="block md:flex md:space-x-12 md:gap-12">
                  <div className="block mt-2">
                    <label className="block font-bold">Card Name</label>
                    <input
                      className="shadow rounded-md appearance-none border py-3 md:py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[350px]"
                      id="card"
                      type="text"
                      placeholder="Enter Your Card Name"
                      {...register("card", { required: true })}
                    />
                    <br />
                    {errors.card && (
                      <span className="text-sm text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                {/* <button className="font-semibold text-xl border rounded-md p-2 w-[180px] bg-black text-white hover:bg-white hover:text-black hover:border-black duration-300 mt-4" onClick={()=>document.getElementById("my_modal_3").showModal()}><Payment/>
              </button> */}
                <button
                  className="font-semibold text-xl border rounded-md p-2 w-[180px] bg-black text-white hover:bg-white hover:text-black hover:border-black duration-300 mt-4"
                  type="submit"
                >
                  Proceed to Pay
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="w-[350px] md:w-[300px] order-1 mb-8 md:mb-0 ml-2 md:ml-0">
          <div className="p-4 border border-black rounded-lg block ml-6 bg-gray-100 mr-4 shadow-xl">
            <h1 className="font-semibold text-xl">Order Summary</h1>
            <h1 className="flex gap-6 text-lg mt-2">
              Base Total <p>₹899</p>
            </h1>
            <h1 className="flex gap-6 text-lg mt-2">
              Delivery Charges <p>₹0</p>
            </h1>
            <h1 className="flex gap-6 text-sm font-semibold mt-6 text-center">
              <p className="mt-2">Grand Total</p>{" "}
              <p className="text-2xl mb-2">₹899</p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
