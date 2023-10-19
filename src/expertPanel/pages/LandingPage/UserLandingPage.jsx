import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const UserLandingPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <div className="bg-[#B2A1FE] items-center min-h-screen flex flex-col ">
      {/* Navbar */}
      <div className="bg-white rounded-full border-2 border-black w-full max-w-screen-xl px-4 py-2 mt-6 mb-2 flex items-center justify-between">
        <div className="text-xl font-bold font-Onest">PaiSHA</div>
        {/* <div className="flex space-x-8">
          <button className="text-sm">Explore Universities</button>
          <button className="text-sm">Career Advisor</button>
          <button className="text-sm">University Ranking</button>
          <button className="text-sm">Merit Trends</button>
          <button className="text-sm">Expert Consultation</button>
          <button className=" text-black px-4 py-1 rounded-full border border-black">Umama</button>
        </div> */}
      </div>

      {/* Centered content */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="text-3xl  mb-3 font-DelaGothicOne">Find the best experts for your consultation</div>
        <div className="text-3xl mb-8 font-DelaGothicOne">with just some clicks</div>
        <div className="relative w-full mb-6 ">
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
          <button className=" text-black text-base px-4 py-2 font-Onest">Popular</button>
          <button className="bg-white text-black text-sm px-4 py-2 rounded-full  border-black border-2">Computer Science</button>
          <button className="bg-white text-black text-sm px-4 py-2 rounded-full border-2 font-Onest border-black">Engineering</button>
          <button className="bg-white text-black text-sm px-4 py-2 rounded-full border-2 font-Onest border-black">Medical</button>
        </div>
      </div>
    </div>
  );
};

export default UserLandingPage;
