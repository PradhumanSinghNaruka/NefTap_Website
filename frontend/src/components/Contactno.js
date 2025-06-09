import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Contactno() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit, 
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      number: data.number,
      email: data.email,
      message: data.message,
    };
    await axios
      .post("https://neftap-website-2.onrender.com/contact/contact", userInfo)
      .then((res) => {
        console.log(res.data && res.data.message);
        if (res.data) {
          alert(res.data.message);
          window.location.reload();
          setTimeout(() => {}, 3000);
          navigate(from, { replace: true });
        }
        localStorage.setItem("Contacts", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          alert("Error: " + err.response.data.message);
          setTimeout(() => {}, 3000);
          window.location.reload();
        }
      });
  };
  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      ></button>
      <dialog id="my_modal_1" className="modal border rounded-xl w-[450px]">
        <div className="modal-box p-6 w-full border rounded-xl inline-grid">
          <h1 className="font-bold text-2xl">For Contact</h1>
          <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={()=> document.getElementById('my_modal_1').close()}>
          ✕
          </button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2 mt-4">
              <span className="text-xl text-black">Phone Number</span>
              <br />
              <input
                type="number"
                placeholder="Enter Your Number"
                className="w-64 md:w-96 px-3 border rounded-md outline-none py-1"
                {...register("number", { required: true })}
              />
              <br />
              {errors.number && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-6 space-y-2">
              <span className="text-xl text-black">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-64 md:w-96 px-3 border rounded-md outline-none py-1"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-6 space-y-2">
              <span className="text-xl text-black">Message</span>
              <br />
              <textarea
                type="text"
                placeholder="Enter Your Message"
                className="w-64 md:w-96 px-3 border rounded-md outline-none py-1"
                {...register("message", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <button className="btn mt-10 ml-6 bg-black text-white hover:bg-blue-50 hover:text-black duration-300 p-2 border rounded-lg hover:border-black">
              Submit
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Contactno;

{
  /* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button> */
}

