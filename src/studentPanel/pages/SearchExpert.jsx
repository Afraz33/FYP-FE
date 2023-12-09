import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const SearchExperts = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 items-center min-h-screen flex flex-col ">
        {/* Centered content */}
        <div className="flex-grow flex flex-col items-center justify-center w-[53%] mx-auto">
          <div className="text-4xl font-bold text-center mb-6  font-Onest">
            Find the best experts for your consultation with just some clicks
          </div>

          <div className="relative  mb-6 w-[70%] ">
            <input
              className="border-2 border-black rounded-full w-full py-2 px-3 font-Onest"
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="absolute right-0 top-0 mt-2 mr-2"
              onClick={handleSearchClick}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-6a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex space-x-4">
            <button className=" text-black  text-base px-4 py-2 font-Onest">
              Popular
            </button>
            <button
              onClick={() => {
                setSearchQuery("Computer Science");
              }}
              className="bg-white hover:bg-[#1ab69d] text-black text-sm px-4 py-2 rounded-full  border-black border-2"
            >
              Computer Science
            </button>
            <button
              onClick={() => {
                setSearchQuery("Engineering");
              }}
              className="bg-white hover:bg-[#1ab69d] text-black text-sm px-4 py-2 rounded-full border-2 font-Onest border-black"
            >
              Engineering
            </button>
            <button
              onClick={() => {
                setSearchQuery("Medical");
              }}
              className="bg-white hover:bg-[#1ab69d] text-black text-sm px-4 py-2 rounded-full border-2 font-Onest border-black"
            >
              Medical
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchExperts;
