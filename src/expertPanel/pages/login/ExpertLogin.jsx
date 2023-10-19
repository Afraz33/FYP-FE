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
          window.location.href = "/expert-panel";
        }
      })
      .catch((error) => {
        // Handle login error (e.g., display an error message)
        console.error("Login failed:", error);
      });
  };
  return (
    <div className="h-screen w-screen flex justify-center mt-20 bg-[#B2A1FE] ">
      <div className="bg-white w-96 h-2/3  shadow-xl flex flex-col items-center justify-center p-8 rounded-3xl border-2 border-black">
        {/* Icon */}
       

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-6 font-Onest">Welcome!</h2>

        {/* Username Input */}
        <div className="mb-4 w-full flex items-center border rounded-md border-gray-300 p-2">
          <span className="text-gray-400 mr-2">👤</span>
          <input
            type="text"
            placeholder="Username/email"
            value={email}
            onChange={handleEmailChange}
            className="flex-grow outline-none font-Onest"
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
            className="flex-grow outline-none font-Onest"
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="bg-black text-white px-4 py-2 rounded-2xl my-4 font-Onest hover:bg-white hover:text-black transition duration-300 ease-in-out hover:border-black border"
        >
          LOGIN
        </button>

        {/* Forgot Password */}
        <a href="#" className="text-sm text-gray-400 underline font-Onest">
          Forgot my password?
        </a>
      </div>
    </div>
  );
}
