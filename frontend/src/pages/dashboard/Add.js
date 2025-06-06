import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Details from "./Details";
import { MdEdit } from "react-icons/md";
import axios from "axios";
import { useForm } from "react-hook-form";

function Add() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="px-4 md:px-10 max-w-screen-2xl container mx-auto">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[250px] mt-12 md:mt-24 space-y-4 order-2 md:order-1 mb-20">
          <div>
            <div className="photo w-20 h-24">
              <img src="" alt="photo" />
            </div>
            <input type="file" className="p-2 w-full border rounded-md" />
          </div>
          <h1 className="text-2xl font-bold ml-2">Welcome, {} 👋</h1>
          <h1 className="text-md text-gray-600 ml-2">{}</h1>
          <h1 className="text-md text-gray-600 ml-2">{}</h1>

          <ul className="space-y-3 space-x-2 w-full">
            <p className="ml-2">Add Details and Save</p>
            <button
              onClick={() => document.getElementById("my_modal_2").showModal()}
              className="bg-black text-white px-6 py-2 rounded border hover:bg-blue-100 hover:text-black hover:border-black duration-300 w-[200px]"
            >
              Add Profile Details
            </button>
            <button
              onClick={() => {
                localStorage.removeItem("Contactus");
                alert("Logged Out Successfully");
                navigate("/");
              }}
              className="bg-red-600 text-white px-6 py-2 rounded border hover:bg-red-800 duration-300 w-[200px]"
            >
              Logout
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Add;