import React from 'react';
import { useNavigate } from "react-router-dom";

const UserLandingPage = () => {
    const navigate = useNavigate();

    const handleSearchClick = () => {
      navigate("/search"); // Redirects to the SearchPage
    };
  return (
    <div className="bg-[#B2A1FE] items-center min-h-screen flex flex-col font-DelaGothicOne">
      {/* Navbar */}
      <div className="bg-white rounded-full border border-black w-full max-w-screen-xl px-4 py-2 mt-6 mb-2 flex items-center justify-between">
        <div className="text-xl font-bold">Sample</div>
        <div className="flex space-x-8">
          <button className="text-sm">Explore Universities</button>
          <button className="text-sm">Career Advisor</button>
          <button className="text-sm">University Ranking</button>
          <button className="text-sm">Merit Trends</button>
          <button className="text-sm">Expert Consultation</button>
          <button className=" text-black px-4 py-1 rounded-full border border-black">Umama</button>
        </div>
      </div>

      {/* Centered content */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="text-3xl font-bold mb-9">Find the best experts for your consultation</div>
        <div className="text-xl mb-8">with just some clicks</div>
        <div className="relative w-full mb-6">
            <input className="border border-black rounded-full w-full py-2 px-3" type="text" placeholder=" Search..." />
            <button className="absolute right-0 top-0 mt-2 mr-2" onClick={handleSearchClick}>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-6a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </button>
         </div>
        <div className="flex space-x-4">
          <button className=" text-black text-base px-4 py-2 ">Popular</button>
          <button className="bg-white text-black text-sm px-4 py-2 rounded-full border border-black">Computer Science</button>
          <button className="bg-white text-black text-sm px-4 py-2 rounded-full border border-black">Engineering</button>
          <button className="bg-white text-black text-sm px-4 py-2 rounded-full border border-black">Medical</button>
        </div>
      </div>
    </div>
  );
}

export default UserLandingPage;
