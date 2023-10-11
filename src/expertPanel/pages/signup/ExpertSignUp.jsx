import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ExpertSignUp = () => {
  const [gender, setGender] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className="bg-white p-8 rounded-3xl border-black border text-center">
      <div>
        <h2 className="text-base font-bold mb-4 font-DelaGothicOne">
          Please enter your details to Sign up as an Expert
        </h2>
        <button className="text-gray-400 px-4 py-2 border rounded-lg font-DelaGothicOne">
          Sign up with Google
          {/* Will add the Google logo here */}
        </button>
        <hr className="my-4" />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First name"
            className="border-b p-2 font-DelaGothicOne"
          />
          <input
            type="text"
            placeholder="Last name"
            className="border-b p-2 font-DelaGothicOne"
          />
          <input
            type="text"
            placeholder="Username"
            className="border-b p-2 font-DelaGothicOne"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="border-b p-2 font-DelaGothicOne"
          />
          <select
            value={gender}
            onChange={handleGenderChange}
            className="border-b p-2 font-DelaGothicOne"
          >
            <option value="" disabled className="font-DelaGothicOne">
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="text"
            placeholder="Password"
            className="border-b p-2 font-DelaGothicOne"
          />
          <input
            type="text"
            placeholder="Email"
            className="border-b p-2 font-DelaGothicOne"
          />
        </div>

        <button className="bg-black text-white px-4 py-2 rounded-full my-4 font-DelaGothicOne">
          Sign up
        </button>

        <p className="font-DelaGothicOne text-sm">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ExpertSignUp;
