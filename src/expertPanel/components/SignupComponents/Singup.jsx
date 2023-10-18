import React from "react";
import { useState } from "react";
import profile_icon from "../../assets/images/profile_icon.png";
export default function SignUp({
  handleCalendlyLinkChange,
  handleSignUpPageChange,
  calendlyLink,
  firstName,
  lastName,
  userName,
  email,
  phone,
  gender,
  password,
  confirmPassword,
  handleFirstNameChange,
  handleLastNameChange,
  handleUserNameChange,
  handleEmailChange,
  handlePhoneChange,
  handleGenderChange,
  handlePasswordChange,
  handleConfirmPasswordChange,
}) {
  return (
    <div className="min-h-screen  flex justify-center items-center bg-[#FFD666]  mt-0 py-5">
      <div className="bg-white p-8  shadow-xl w-2/4 rounded-3xl border-black border">
        <div className="flex justify-center items-center mb-2">
          {/* <div className="bg-[#FFD666] w-20 h-20 rounded-full flex justify-center items-center">
            <img src={profile_icon} alt="profile_icon"></img>
          </div> */}
        </div>
        <h2 className="text-2xl font-bold text-center mb-4 font-Onest ">
          Your Profile
        </h2>

        <form>
          <div className="mb-4">
            <label
              className="block text-sm  mb-2 font-Onest font-semibold"
              htmlFor="first-name"
            >
              First Name 
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              id="first-name"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm  mb-2 font-Onest font-semibold"
              htmlFor="last-name"
            >
              Last Name 
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              id="last-name"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>

          <div className="mb-4">
            <label
              className=" font-Onest font-semibold block text-sm  mb-2"
              htmlFor="user-name"
            >
              User Name
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              id="user-name"
              value={userName}
              onChange={handleUserNameChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-Onest font-semibold mb-2" htmlFor="email">
              Email 
            </label>
            <input
              className="w-full p-2 border rounded"
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-Onest font-semibold mb-2" htmlFor="phone">
              Phone Number 
            </label>
            <input
              className="w-full p-2 border rounded"
              type="tel"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-Onest font-semibold mb-2" htmlFor="gender">
              Gender 
            </label>
            <div className="space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"} // Check if gender is "Male"
                  onChange={handleGenderChange}
                />
                <span className="ml-2 font-Onest font-medium">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"} // Check if gender is "Female"
                  onChange={handleGenderChange}
                />
                <span className="ml-2 font-Onest font-medium">Female</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="gender"
                  value="Other"
                  checked={gender === "Other"} // Check if gender is "Other"
                  onChange={handleGenderChange}
                />
                <span className="ml-2 font-Onest font-medium">Other</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-Onest font-semibold mb-2"
              htmlFor="last-name"
            >
              Calendly Link
            </label>
            <input
              required
              className="w-full p-2 border rounded"
              type="text"
              id="last-name"
              value={calendlyLink}
              onChange={handleCalendlyLinkChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-Onest font-semibold mb-2"
              htmlFor="password"
            >
              Password 
            </label>
            <input
              className="w-full p-2 border rounded"
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-Onest font-semibold mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password 
            </label>
            <input
              className="w-full p-2 border rounded"
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              className="bg-[#222222] text-white py-2 px-4 rounded-xl font-Onest hover:bg-white hover:text-black transition duration-300 ease-in-out hover:border-black border"
              type="submit"
              onClick={handleSignUpPageChange}
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
