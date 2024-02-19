import React, { useState } from 'react';
import axios from 'axios';

function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error during forgot password:', error);
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
<div className="flex flex-col items-center justify-center min-h-screen font-Onest bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded shadow-md">
        <h1 className="text-3xl text-center font-bold mb-4">Forgot Password</h1>
        <p className="mb-4 text-center">Enter your email to reset your password</p>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border-b-2 border-[#1ab69d] outline-none"
        />
      <div className="text-center">
        <button
          onClick={handleForgotPassword}
          className="bg-[#1ab69d] text-black py-2 px-4 rounded-full hover:bg-white hover:text-[#1ab69d] transition duration-300 ease-in-out mx-auto"
        >
          Reset Password
        </button>
      </div>

        <p className="mt-4">{message}</p>
      </div>
    </div>
  );
}

export default ForgotPasswordForm;
