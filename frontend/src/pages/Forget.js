import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Forget() {
  // const { token } = useParams();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleReset = async () => {
    if (!email || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("https://api.neftap.com/update/update", {
        email,
        password,
      });

      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      console.error("Reset error:", err);
      alert("Failed to reset password");
    }
  };

  return (
    <div className="p-2 md:p-32 ml-4 md:ml-44 mt-28 md:mt-0">
      <div className="w-full flex">
        <div className="block border shadow-2xl w-full md:w-3/4 space-y-8 rounded-lg p-8">
          <h1 className="text-xl md:text-2xl font-bold">Reset Your Password</h1>

          <div className="grid">
            <label className="text-sm font-semibold">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Registered Email"
              className="border border-black p-2 w-[300px] rounded-md"
              type="email"
            />
          </div>

          <div className="grid">
            <label className="text-sm font-semibold">New Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new Strong Password"
              className="border border-black p-2 w-[300px] rounded-md"
              type="password"
            />
          </div>

          <div className="grid">
            <label className="text-sm font-semibold">Confirm Password</label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter Password"
              className="border border-black p-2 w-[300px] rounded-md"
              type="password"
            />
          </div>

          <button
            onClick={handleReset}
            className="p-2 border rounded-md bg-blue-500 text-white font-bold hover:bg-blue-800"
          >
            Confirm Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default Forget;
