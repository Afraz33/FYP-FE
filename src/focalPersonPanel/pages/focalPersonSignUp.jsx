 import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "antd";

const FocalPersonSignUp = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [universityEmail, setuniversityEmail] = useState("");
  const [universityName, setuniversityName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const universities = [
    "Fast NUCES",
    "Comsats",
    "NUST",
    "PIEAS",
    "LUMS",
    "Air University",
    "Bahria Univeristy",
    "IIUI",
    "UET Taxilla",
    "NUTECH",
    "IBA",
    "University of Punjab",
  ];
 // In your frontend code
 const handleSignup = async (e) => {
  e.preventDefault(); // Prevent default form submission

  const userData = {
    firstname: firstname,
    lastname: lastname,
    universityEmail: universityEmail,
    universityName: universityName,
    password: password,
  };

  try {
    const signupResponse = await axios.post(
      "http://localhost:5000/api/focalperson/register-focalperson",
      userData
    );

    if (signupResponse.data.token) {
      localStorage.setItem("jwt", signupResponse.data.token);
      navigate("/focalperson-login");
    } else {
      // Handle case where signup was not successful
      console.log("Backend Message:", signupResponse.data.error || signupResponse.data.Message);
    }
  } catch (error) {
    // Handle error response from the server
    if (error.response && error.response.data && error.response.data.error) {
      alert(error.response.data.error); // Alert or display the error message on the form
    } else {
      console.error("Error in frontend:", error);
    }
  }
};

  return(
    <div className="bg-gray-200 h-screen flex justify-center items-center font-Onest">
    <div className="bg-white p-10 rounded-lg border-2 border-[#052e16] shadow-2xl w-full max-w-md">
      <div className="text-center mb-10">
        <h1 className="font-bold text-3xl text-slate-900">Sign Up</h1>
        <p>Get registered today, and introduce your univeristy to the world.</p>
      </div>

      <form onSubmit={handleSignup} className="space-y-6">
        <input
          id="firstName"
          required
          className="block w-full border border-gray-300 rounded-lg py-2 px-3 mb-3 leading-tight focus:outline-none"
          type="text"
          placeholder="First Name"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          id="lastName"
          required
          className="block w-full border border-gray-300 rounded-lg py-2 px-3 mb-3 leading-tight focus:outline-none"
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />

        <select
          id="universityName"
          required
          className="block w-full border border-gray-300 rounded-lg py-2 px-3 leading-tight focus:outline-none"
          value={universityName}
          onChange={(e) => setuniversityName(e.target.value)}
        >
          <option value="">Select University</option>
          {universities.map((uni, index) => (
            <option key={index} value={uni}>
              {uni}
            </option>
          ))}
        </select>

        <input
          id="universityEmail"
          required
          className="block w-full border border-gray-300 rounded-lg py-2 px-3 leading-tight focus:outline-none"
          type="email"
          placeholder="University Email"
          value={universityEmail}
          onChange={(e) => setuniversityEmail(e.target.value)}
        />

        <input
          id="password"
          required
          className="block w-full border border-gray-300 rounded-lg py-2 px-3 leading-tight focus:outline-none"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex justify-between">
          <button type="button" className="py-2 px-4 border rounded-lg">
            Cancel
          </button>
          <button
            type="submit"
            disabled={!firstname || !lastname || !universityEmail || !universityName || !password}
            className={`py-2 px-4 border rounded-lg ${!firstname || !lastname || !universityEmail || !universityName || !password ? 'bg-gray-200 text-gray-500' : 'bg-[#1ab69d] text-white'}`}
          >
            Sign Up
          </button>
        </div>

        <div className="text-center">
          <Link to="/focalperson-login" className="text-[#1ab69d] hover:underline">
            Already have an account? Log in
          </Link>
        </div>
      </form>
    </div>
  </div>
);
};
export default FocalPersonSignUp;