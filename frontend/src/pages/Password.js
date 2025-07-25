// import React from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import emailjs from "@emailjs/browser";
// import { useForm } from "react-hook-form";

// function Password() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       const checkRes = await axios.post(
//         "https://api.neftap.com/auth/check-email",
//         { email: data.email }
//       );

//       if (checkRes.data.exists) {
//         const serviceId = "service_e36fvr6";
//         const templateId = "template_tg2btb7";
//         const publicKey = "VGPXJonQQJ9SNaVIZ";

//         const templateParams = {
//           from_email: data.email,
//           user_name: data.name || "User", // fallback
//           to_email: data.email,
//           message: `Hi, click the link below to reset your password:`,
//         };

//         await emailjs.send(serviceId, templateId, templateParams, publicKey);
//         alert("Check your email to reset your password.");
//       } else {
//         alert("Email not registered.");
//       }
//     } catch (err) {
//       console.error("Email check error:", err);
//       alert("Something went wrong. Try again.");
//     }
//   };

//   return (
//     <>
//       <button
//         className="btn font-bold hover:text-blue-700 duration-300"
//         onClick={() => document.getElementById("my_modal_8").showModal()}
//       >
//         Forget Password?
//       </button>

//       <dialog id="my_modal_8" className="modal p-6 w-[600px] rounded-xl">
//         <div className="modal-box">
//           <form method="dialog">
//             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//           </form>

//           <h3 className="font-bold text-xl md:text-2xl mt-2">
//             Enter Your Registered Email
//           </h3>

//           <form onSubmit={handleSubmit(onSubmit)} className="grid mt-6 space-y-6 p-2">
//             <input
//               placeholder="Enter Your Email"
//               name="email"
//               {...register("email", { required: true })}
//               className="border border-lg border-black p-3 rounded-xl w-[300px] md:w-[350px]"
//             />

//             <button

//               className="p-2 w-[100px] md:w-[130px] border rounded-md bg-black text-white hover:bg-blue-50 hover:text-black hover:border-black duration-300"
//             >
//               Continue
//             </button>
//           </form>
//         </div>
//       </dialog>
//     </>
//   );
// }

// export default Password;

import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import emailjs from "@emailjs/browser";

function Password() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, event) => {
    event.preventDefault(); // prevent default submit behavior

    try {
      const checkRes = await axios.post(
        "https://api.neftap.com/auth/check-email",
        {
          email: data.email,
        }
      );

      if (checkRes.data.exists) {
        const serviceId = "service_6uf7gz7";
        const templateId = "template_pl1r8ng";
        const publicKey = "PgFW2yvfbkcJLEE6X";

        const templateParams = {
          from_email: data.email,
          to_email: data.email,
          user_name: data.name || "User",
          message: `Hi, click the link below to reset your password:\n\nhttps://neftap.com/reset-password/${data.email}`,
        };
        console.log(data.email);
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        alert("Link sent! Check your email.");
        localStorage.setItem("email", JSON.stringify(data.email));
      } else {
        alert("Email not registered.");
      }
    } catch (err) {
      console.error("Email check error:", err);
    }
  };

  return (
    <>
      <div
        class="password"
        className="p-6 rounded-xl mt-28 space-y-8 mb-8 md:mb-12 justify-center items-center text-center"
      >
        <div className="border rounded-xl shadow-xl justify-center items-center text-center w-full space-y-6">                          
          <h3 className="font-bold text-xl md:text-2xl text-center mt-4">
            Enter Your Registered Email
          </h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid space-y-6 justify-center items-center mb-6">
              <input
                placeholder="Enter Your Email"
                {...register("email", { required: true })}
                className="border border-lg border-black p-3 rounded-xl w-[300px] md:w-[350px]"
                type="email"
              />

              {errors.email && (
                <span className="text-red-500 text-sm">Email is required</span>
              )}

              <button className="p-2 w-[100px] md:w-[130px] border rounded-md bg-black text-white hover:bg-blue-50 hover:text-black hover:border-black duration-300">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Password;
