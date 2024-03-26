import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function ResetPasswordForm() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleResetPassword = async () => {
    try {
      console.log("New Password (from state):", password); // Log the password

      const response = await axios.post(
        "http://localhost:5000/api/users/reset-password",
        { token, newPassword: password }
      );

      setMessage(response.data.message);
      if (response.status === 200) {
        navigate("/student-login");
      }
    } catch (error) {
      console.error("Error during password reset:", error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-Onest bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4">Reset Password</h1>
        <p className="mb-4 text-center">Enter your new password</p>
        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border-b-2 border-[#1ab69d] outline-none"
        />
        <div className="text-center">
          <button
            onClick={handleResetPassword}
            className="bg-[#1ab69d] text-white py-2 px-4 rounded-full hover:bg-white hover:text-[#1ab69d] transition duration-300 ease-in-out text-center"
          >
            Set New Password
          </button>
        </div>
        <div className="text-center mt-4">
          <Link to="/student-login" className="text-[#1ab69d] hover:underline">
            Go to Login
          </Link>
        </div>
        <p className="mt-4">{message}</p>
      </div>
    </div>
  );
}

export default ResetPasswordForm;
