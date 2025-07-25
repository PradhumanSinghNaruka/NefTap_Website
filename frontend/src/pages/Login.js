// import React, { useEffect } from "react";
// import photo from "../image/contactBanner.png";
// import Modal from "./Modal";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";
// function Login() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/dashboard";
//   const onSubmit = async (data) => {
//     const userInfo = {
//       email: data.email,
//       password: data.password,
//     };
//     await axios
//       .post("https://neftap-website-2.onrender.com/register/login", userInfo)
//       .then((res) => {
//         console.log(res.data);
//         if (res.data) {
//           alert("Login Successfully");
//           localStorage.setItem("Contactus", JSON.stringify(res.data.user));
//           navigate(from, { replace: true });
//         }
//       })
//       .catch((err) => {
//         if (err.message) {
//           console.log(err);
//           alert("Error :" + err.response.data.message);
//           setTimeout(() => {}, 3000);
//           window.location.reload();
//         }
//       });
//   };
//   const { pathname } = useLocation();

//     useEffect(() => {
//       window.scrollTo(0, 0);
//     }, [pathname]);
//   return (
//     <>
//       <div name="/login" className="text-black mt-20 h-[400px] max-w-screen-2xl container mx-auto">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="flex flex-col md:flex-row">
//             <div className="md:w-1/2 order-2 md:order-1">
//               <img src={photo} className="w-full h-[500px]"></img>
//             </div>
//             <div className="md:w-1/2 order-1 h-[500px] bg-blue-100 p-8 md:p-12">
//               <h1 className="md:mt-2 ml-6 md:ml-24 text-xl md:text-3xl font-semibold">
//                 Login Into Your Account
//               </h1>
//               <div className="md:ml-24 md:mt-6 space-y-2 inline-grid">
//                 <label className="block text-black font-bold mt-4">Email</label>
//                 <input
//                   className="shadow rounded-lg appearance-none border py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[350px]"
//                   id="email"
//                   type="email"
//                   placeholder="Enter your Email"
//                   {...register("email", { required: true })}
//                 />
//                 {errors.email && (
//                   <span className="text-sm text-left text-red-500">
//                     This field is required
//                   </span>
//                 )}
//                 <label className="block text-black font-bold mt-4">
//                   Password
//                 </label>
//                 <input
//                   className="shadow rounded-lg appearance-none border py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   id="password"
//                   type="password"
//                   placeholder="Enter your Password"
//                   {...register("password", { required: true })}
//                 />
//                 {errors.password && (
//                   <span className="text-sm text-left text-red-500">
//                     This field is required
//                   </span>
//                 )}
//                 <button className="font-semibold text-xl border rounded-md p-2 w-[350] bg-black text-white hover:bg-white hover:text-black hover:border-black duration-300">
//                   Login
//                 </button>
//                 <p className="flex">
//                   Don't have login details?{" "}
//                   <p
//                     className="font-bold cursor-pointer ml-2 hover:text-blue-900"
//                     onClick={() =>
//                       document.getElementById("my_modal_3").showModal()
//                     }
//                   >
//                     <Modal />
//                   </p>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Login;

import React, { useEffect } from "react";
import photo from "../image/contactBanner.png";
import Modal from "./Modal";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Password from "../pages/Password.js";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(
        "https://api.neftap.com/register/login",
        userInfo
      );

      if (res.data && res.data.user) {
        alert("Login Successfully");
        localStorage.setItem("Contactus", JSON.stringify(res.data.user));
        navigate(from, { replace: true });
      }
    } catch (err) {
      console.error("Login Error:", err);
      const errorMsg = err.response?.data?.message || "Login failed";
      alert("Error: " + errorMsg);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div name="/login" className="text-black mt-20 h-full w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 order-2 md:order-1 hidden md:flex">
              <img src={photo} alt="Login Banner" className="w-full h-full" />
            </div>

            <div className="md:w-1/2 order-1 bg-blue-100 p-8 md:p-12 w-full">
              <h1 className="md:mt-2 ml-6 md:ml-24 text-2xl md:text-3xl font-semibold">
                Login Into Your Account
              </h1>
              <div className="md:ml-24 md:mt-6 space-y-2 inline-grid">
                <label className="block text-black font-bold mt-4">Email</label>
                <input
                  className="shadow rounded-lg appearance-none border py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[350px]"
                  type="email"
                  placeholder="Enter your Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-left text-red-500">
                    This field is required
                  </span>
                )}

                <label className="block text-black font-bold mt-4">
                  Password
                </label>
                <input
                  className="shadow rounded-lg appearance-none border py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[350px]"
                  type="password"
                  placeholder="Enter your Password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-left text-red-500">
                    This field is required
                  </span>
                )}
                <button
                  type="submit"
                  className="font-semibold text-xl border rounded-md p-2 w-[300px] md:w-[350px] bg-black text-white hover:bg-white hover:text-black hover:border-black duration-300"
                >
                  Login
                </button>

                <p className="flex">
                  Don't have login details?
                  <span
                    className="font-bold cursor-pointer ml-2 hover:text-blue-900"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  ></span>
                  <Modal />
                </p>
                <a
                  onClick={() => navigate("/password")}
                  className="hover:text-blue-700 text-bold transition-colors cursor-pointer"
                >
                  Forget Password ?
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
