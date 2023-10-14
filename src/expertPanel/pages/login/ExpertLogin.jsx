import React from "react";
import axios from "axios";
import { useState } from "react";
export default function ExpertLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    axios
      .post("http://localhost:5000/api/experts/expert-Login", {
        email: email,
        password: password,
      })
      .then((response) => {
        // Handle successful login (e.g., redirect to a new page)

        if (response.status === 200) {
          localStorage.setItem("email", response.data.user.email);
          console.log(localStorage.getItem("email"));
        }
      })
      .catch((error) => {
        // Handle login error (e.g., display an error message)
        console.error("Login failed:", error);
      });
  };
  return (
    <div className="h-screen w-screen flex justify-center mt-20 bg-[#B2A1FE] ">
      <div className="bg-white w-96 h-2/3 rounded-xl shadow-xl flex flex-col items-center justify-center p-8">
        {/* Icon */}
        <div className="bg-red-500 w-20 h-20 rounded-full mb-6 flex items-center justify-center">
          <div className="bg-[#B2A1FE] w-14 h-14 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-semibold">👤</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-6">Welcome!</h2>

        {/* Username Input */}
        <div className="mb-4 w-full flex items-center border rounded-md border-gray-300 p-2">
          <span className="text-gray-400 mr-2">👤</span>
          <input
            type="text"
            placeholder="Username/email"
            value={email}
            onChange={handleEmailChange}
            className="flex-grow outline-none"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4 w-full flex items-center border rounded-md border-gray-300 p-2">
          <span className="text-gray-400 mr-2">🔐</span>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            className="flex-grow outline-none"
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="bg-[#B2A1FE] hover:bg-black text-white rounded-md px-6 py-2 mb-4 border border-red-500"
        >
          LOGIN
        </button>

        {/* Forgot Password */}
        <a href="#" className="text-sm text-gray-400 underline">
          Forgot my password?
        </a>
      </div>
    </div>
  );
}
