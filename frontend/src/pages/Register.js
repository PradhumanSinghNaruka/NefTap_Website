// import React, { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// function Register() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const from = location.state?.from?.pathname || "/login";
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const userInfo = {
//       name: data.name,
//       email: data.email,
//       password: data.password,
//     };
//     await axios
//       .post("https://neftap-website-2.onrender.com/register/register", userInfo)
//       .then((res) => {
//         console.log(res.data);
//         if (res.data) {
//           alert("Registor Successfully Use same Email,Password for Login");
          
//           setTimeout(() => {}, 3000);
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
//       <div name="/registor" className="text-black mt-20 h-[500px] mb-0">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="flex flex-col md:flex-row text-center">
//           <div className="md:w-full order-1 h-[600px] bg-blue-50 p-12 text center">
//             <h1 className="md:mt-2 text-xl md:text-3xl font-semibold">
//               Registration For Your Login
//             </h1>
//             <div className="md:mt-6 space-y-2 inline-grid">
//               <label className="block text-black text-left font-bold">
//                 Name
//               </label>
//               <input
//                 className="shadow rounded-lg appearance-none border py-3 px-2 text-gray-700 leading-tight focus:shadow-outline w-[300px] md:w-[350px]"
//                 id="name"
//                 type="name"
//                 placeholder="Enter your Full Name"
//                 {...register("name", {required: true})}/>
//                 {errors.name &&(
//                 <span className="text-sm text-left text-red-500">
//                 This field is required
//               </span>
//               )}
//               <label className="block text-black font-bold mt-4 text-left">
//                 Email
//               </label>
//               <input
//                 className="shadow rounded-lg appearance-none border py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[350px]"
//                 id="email"
//                 type="email"
//                 placeholder="Enter your Email"
//               {...register("email", {required: true})}/>
//               {errors.email &&(
//                 <span className="text-sm text-left text-red-500">
//                 This field is required
//               </span>
//               )}
//               <label className="block text-black font-bold mt-4 text-left">
//                 Password
//               </label>
//               <input
//                 className="shadow rounded-lg appearance-none border py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:mb-2"
//                 id="password"
//                 type="password"
//                 placeholder="Enter your Password"
//               {...register("password", {required: true})}/>
//               {errors.password &&(
//                 <span className="text-sm text-left text-red-500">
//                 This field is required
//               </span>
//               )}
//               <button className="font-semibold text-xl border rounded-md p-2 w-[350] bg-black text-white hover:bg-white hover:text-black hover:border-black duration-300 mt-4">
//                 Register
//               </button>
//             </div>
//           </div>
//         </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Register;

// // http://localhost:3000/register


import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function Register() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/login";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("https://neftap-website-2.onrender.com/register/register", userInfo)  // Check yeh URL backend ke hisaab se sahi hai
      .then((res) => {
        if (res.data && res.data.message) {
          alert(res.data.message); // backend ka message show karega
          setTimeout(() => {
            navigate(from, { replace: true });
          }, 1500); 
        }
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.message) {
          alert("Error: " + err.response.data.message);
        } else {
          alert("Something went wrong.");
        }
        window.location.reload();
      });
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div name="/registor" className="text-black mt-20 h-[500px] mb-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row text-center">
            <div className="md:w-full order-1 h-[600px] bg-blue-50 p-12 text center">
              <h1 className="md:mt-2 text-xl md:text-3xl font-semibold">
                Registration For Your Login
              </h1>
              <div className="md:mt-6 space-y-2 inline-grid">
                <label className="block text-black text-left font-bold">Name</label>
                <input
                  className="shadow rounded-lg appearance-none border py-3 px-2 text-gray-700 leading-tight focus:shadow-outline w-[300px] md:w-[350px]"
                  id="name"
                  type="name"
                  placeholder="Enter your Full Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-sm text-left text-red-500">This field is required</span>
                )}

                <label className="block text-black font-bold mt-4 text-left">Email</label>
                <input
                  className="shadow rounded-lg appearance-none border py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] md:w-[350px]"
                  id="email"
                  type="email"
                  placeholder="Enter your Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-left text-red-500">This field is required</span>
                )}

                <label className="block text-black font-bold mt-4 text-left">Password</label>
                <input
                  className="shadow rounded-lg appearance-none border py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:mb-2"
                  id="password"
                  type="password"
                  placeholder="Enter your Password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-left text-red-500">This field is required</span>
                )}

                <button
                  className="font-semibold text-xl border rounded-md p-2 w-[350px] bg-black text-white hover:bg-white hover:text-black hover:border-black duration-300 mt-4"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;

