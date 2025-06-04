// import React from "react";

// function Details() {
//   return (
//     <>
//       <div>
//         <dialog id="my_modal_2" className="modal p-4 border rounded-lg w-1/2">
//           <div className="modal-box space-y-6">
//             <h3 className="font-bold text-lg justify-start">Basic Details</h3>
//             <input className="p-2 w-full border border-gray-400" type="text" placeholder="Enter Your Full Name"/>
//             <input className="p-2 w-full border border-gray-400" type="email" placeholder="Enter Your Email ID"/>
//             <input className="p-2 w-full border border-gray-400" type="text" placeholder="Enter Your Company Name"/>

//             <div className="modal-action text-end">
//               <form method="dialog">
//                 <button className="btn p-2 border rounded-lg bg-black text-white hover:text-black hover:bg-blue-100 duration-300">Save</button>
//               </form>
//             </div>
//           </div>
//         </dialog>
//       </div>
//     </>
//   );
// }

// export default Details;

import React, { useState } from "react";

function Details({ onSave }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const handleSave = () => {
    if (name && email && company) {
      onSave(name, email, company);
      document.getElementById("my_modal_2").close();
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div>
      <dialog id="my_modal_2" className="modal p-4 border rounded-lg w-1/2">
        <div className="modal-box space-y-6">
          <h3 className="font-bold text-lg justify-start">Basic Details</h3>
          <input
            className="p-2 w-full border border-gray-400"
            type="text"
            placeholder="Enter Your Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="p-2 w-full border border-gray-400"
            type="email"
            placeholder="Enter Your Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-2 w-full border border-gray-400"
            type="text"
            placeholder="Enter Your Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />

          <div className="modal-action text-end">
            <button
              type="button"
              onClick={handleSave}
              className="btn p-2 border rounded-lg bg-black text-white hover:text-black hover:bg-blue-100 hover:border-black duration-300"
            >
              Save
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Details;
