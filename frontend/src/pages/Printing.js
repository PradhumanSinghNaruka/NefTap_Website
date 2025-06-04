// import axios from "axios";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useLocation, useNavigate } from "react-router-dom";
// import emailjs from "@emailjs/browser";

// function Printing() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/address";
//   const [email, setEmail] = useState('');
  
//   const handleEmailSend  = (e) => {
//     e.preventDefault();
//     const serviceId = 'service_e36fvr6';
//     const templatedId = 'template_eb272io';
//     const publicKey = 'VGPXJonQQJ9SNaVIZ';

//     const templateparams = {
//       from_email: email
//     };

//     emailjs.send(serviceId, templatedId, publicKey)
//       .then((response) => {
//         alert("Email Send SuccessFully", response);
//         setEmail('');
//       })
//       .catch((error) => {
//         alert('Error Sending email', error);
//       });
//   }
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const userInfo = {
//       name: data.name,
//       email: data.email,
//       number: data.number,
//       name2: data.name2,
//       name1: data.name1,
//     };

//     try {
//       const res = await axios.post("http://localhost:4001/card/card", userInfo);
//       console.log(res.data);
//       if (res.data) {
//         alert("Submit Successfully");
//         localStorage.setItem("Address", JSON.stringify(res.data.user));
//         navigate(from, { replace: true });
//       }
//     } catch (err) {
//       console.log(err);
//       alert("Error: " + (err.response?.data?.message || err.message));
//     }
//   };

//   return (
//     <>
//       <div name="/printing" className="mt-36">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="flex flex-col md:flex-row">
//             <div className="w-[280px] md:w-9/12 order-2 md:order-1 bg-gray-100 text-black ml-4 md:ml-20 shadow-xl">
//               <div className="p-4 border border-black rounded-md block">
//                 <h1 className="text-lg md:text-3xl font-semibold">
//                   1.Enter Details To be Printed On Card.
//                 </h1>
//                 <div className="md:ml-10 md:mt-6 space-y-6 inline-grid">
//                   <div className="block md:flex space-x-0 md:space-x-12 md:gap-12">
//                     <div className="block">
//                       <label className="block font-bold mt-4 md:mt-0">
//                         Full Name
//                       </label>
//                       <input
//                         className="shadow rounded-md appearance-none border py-2 md:py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[250px] md:w-[350px] md:mt-0"
//                         id="name"
//                         type="text"
//                         placeholder="Name"
//                         {...register("name", { required: true })}
//                       />
//                       <br/>
//                       {errors.name && (
//                         <span className="text-sm text-red-600">
//                           This field is required
//                         </span>
//                       )}
//                     </div>
//                     <div className="block mt-2 md:mt-0 ">
//                       <label className="font-bold block">Email Address</label>
//                       <input
//                         className="shadow rounded-lg appearance-none border py-2 md:py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[250px] md:w-[350px]"
//                         id="email"
//                         type="email"
//                         placeholder="Email"
//                         {...register("email", { required: true })}
//                       />
//                       <br/>
//                       {errors.email && (
//                         <span className="text-sm text-red-600">
//                           This field is required
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                   <div className="block md:flex md:space-x-12 md:gap-12">
//                     <div className="block mt-2">
//                       <label className="block font-bold">Phone Number</label>
//                       <input
//                         className="shadow rounded-md appearance-none border py-2 md:py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[250px] md:w-[350px]"
//                         id="number"
//                         type="number"
//                         placeholder="Phone Number"
//                         {...register("number", { required: true })}
//                       />
//                       <br/>
//                       {errors.number && (
//                         <span className="text-sm text-red-600">
//                           This field is required
//                         </span>
//                       )}
//                     </div>
//                     <div className="block mt-2">
//                       <label className="block font-bold">Designation</label>
//                       <input
//                         className="shadow rounded-md appearance-none border py-2 md:py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[250px] md:w-[350px]"
//                         id="name2"
//                         type="text"
//                         placeholder="Designation"
//                         {...register("name2", { required: true })}
//                       />
//                       <br/>
//                       {errors.name2 && (
//                         <span className="text-sm text-red-600">
//                           This field is required
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                   <div className="flex space-x-12 md:gap-12">
//                     <div className="block mt-2">
//                       <label className="block font-bold">Company Name</label>
//                       <input
//                         className="shadow rounded-md appearance-none border py-2 md:py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[250px] md:w-[350px]"
//                         id="name1"
//                         type="text"
//                         placeholder="Company Name"
//                         {...register("name1", { required: true })}
//                       />
//                       <br/>
//                       {errors.name1 && (
//                         <span className="text-sm text-red-600">
//                           This field is required
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                   <button
//                     type="submit"
//                     className="font-semibold text-xl border rounded-md p-2 w-[100px] md:w-[180px] bg-black text-white hover:bg-white hover:text-black hover:border-black duration-300 mt-4"
//                   >
//                     Next
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="w-[280px] md:w-[300px] order-1 mb-6 md:mb-0 ml-4 md:ml-0">
//               <div className="p-4 border border-black rounded-lg block ml-6 bg-gray-100 mr-4 shadow-xl">
//                 <h1 className="font-semibold text-xl">Order Summary</h1>
//                 <h1 className="flex gap-6 text-lg mt-2">
//                   Base Total <p>₹899</p>
//                 </h1>
//                 <h1 className="flex gap-6 text-lg mt-2">
//                   Delivery Charges <p>₹0</p>
//                 </h1>
//                 <h1 className="flex gap-6 text-lg mt-2">
//                   GST @ 18% <p>₹143.82</p>
//                 </h1>
//                 <h1 className="flex gap-4 font-semibold text-center mt-4">
//                   <p className="flex mt-2">Grand Total</p>{" "}
//                   <p className="text-2xl">₹1042.82</p>
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Printing;


import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";


function Printing() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/address";

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
      name2: data.name2,
      name1: data.name1,
    };

    try {
      const res = await axios.post("https://neftap-website-2.onrender.com/card/card", userInfo);
      console.log(res.data);

      if (res.data) {
        // EmailJS: send email
        // const serviceId = 'service_e36fvr6'; 
        // const templateId = 'template_eb272io';
        // const publicKey = 'VGPXJonQQJ9SNaVIZ';

        // const templateParams = {
        //   from_email: data.email,
        //   user_name: data.name,
        //   to_email: data.email,
        //   message: `Hi ${data.name}, your card order has been received successfully.`,
        // };

        // await emailjs.send(serviceId, templateId, templateParams, publicKey);

        alert("Form submitted");
        localStorage.setItem("Address", JSON.stringify(res.data.user));
        navigate(from, { replace: true });
      }
    } catch (err) {
      console.log(err);
      alert("Error: " + (err.response?.data?.message || err.message));
    }
  };
  const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

  return (
    <>
      <div name="/printing" className="mt-36">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row">
            <div className="w-[330px] md:w-9/12 order-2 md:order-1 bg-gray-100 text-black ml-4 md:ml-20 shadow-xl">
              <div className="p-4 border border-black rounded-md block">
                <h1 className="text-lg md:text-3xl font-semibold">
                  1.Enter Details To be Printed On Card.
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
                      <label className="block font-bold">Designation</label>
                      <input
                        className="shadow rounded-md appearance-none border py-2 md:py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[350px]"
                        id="name2"
                        type="text"
                        placeholder="Designation"
                        {...register("name2", { required: true })}
                      />
                      <br />
                      {errors.name2 && (
                        <span className="text-sm text-red-600">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-12 md:gap-12">
                    <div className="block mt-2">
                      <label className="block font-bold">Company Name</label>
                      <input
                        className="shadow rounded-md appearance-none border py-2 md:py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[350px]"
                        id="name1"
                        type="text"
                        placeholder="Company Name"
                        {...register("name1", { required: true })}
                      />
                      <br />
                      {errors.name1 && (
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
                <h1 className="flex gap-6 text-lg mt-2">
                  GST @ 18% <p>₹143.82</p>
                </h1>
                <h1 className="flex gap-4 font-semibold text-center mt-4">
                  <p className="flex mt-2">Grand Total</p>{" "}
                  <p className="text-2xl">₹1042.82</p>
                </h1>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Printing;
