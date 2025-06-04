import React from "react";
import { useNavigate } from "react-router-dom";
import Shop from "./Shop";

function Modal() {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Click Here
      </button>
      <dialog id="my_modal_3" className="modal p-6 w-[700px] rounded-xl">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-xl md:text-2xl mt-2 ml-6 md:ml-44">How to Create Account ?</h3>
          <p className="py-4 font-semibold text-lg md:text-xl text-wrap justify-center ml-4 md:ml-32"><p className="ml-6 text-wrap text-sm md:text-lg">You need to buy one NafTap Card,</p><p className="ml-6 text-wrap text-sm md:text-lg">then only you can create an account </p><p className="ml-28 md:ml-36 text-wrap text-sm md:text-lg">with us.</p></p>
          <button className="p-2 w-[100px] md:w-[130px] border rounded-md ml-24 md:ml-60 bg-black text-white hover:bg-blue-50 hover:text-black hover:border-black duration-300" onClick={() => navigate("/pvc")}>Shop Now</button>
        </div>
      </dialog>
    </>
  );
}

export default Modal;
