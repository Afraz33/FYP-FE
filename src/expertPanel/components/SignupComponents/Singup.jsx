import React from "react";
import profile_icon from "../../assets/images/profile_icon.png";
export default function ProfileForm({ handleSignUpPageChange }) {
  return (
    <div className="min-h-screen  flex justify-center items-center bg-[#FFD666]  mt-0 py-5">
      <div className="bg-white p-8 rounded shadow-xl w-2/4">
        <div className="flex justify-center items-center mb-2">
          <div className="bg-[#FFD666] w-20 h-20 rounded-full flex justify-center items-center">
            <img src={profile_icon} alt="profile_icon"></img>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">
          Your Profile
        </h2>

        <form>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="first-name"
            >
              First Name *
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              id="first-name"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="last-name"
            >
              Last Name *
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              id="last-name"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="user-name"
            >
              User Name*
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              id="user-name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email *
            </label>
            <input
              className="w-full p-2 border rounded"
              type="email"
              id="email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="phone">
              Phone Number *
            </label>
            <input
              className="w-full p-2 border rounded"
              type="tel"
              id="phone"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="gender">
              Gender *
            </label>
            <div className="space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="gender"
                  value="Male"
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="gender"
                  value="Female"
                />
                <span className="ml-2">Female</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="gender"
                  value="Other"
                />
                <span className="ml-2">Other</span>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password *
            </label>
            <input
              className="w-full p-2 border rounded"
              type="password"
              id="password"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password *
            </label>
            <input
              className="w-full p-2 border rounded"
              type="password"
              id="confirm-password"
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
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
