import React from "react";

function Navbar() {
  return (
    <div className="bg-[#F1F0F4] p-4 px-10 shadow-md rounded-full flex justify-between items-center w-[95%] mx-auto">
      <span className="font-bold text-3xl">PaiSHA</span>
      <button className="bg-black text-white rounded-full px-4 text-lg py-2 w-20 hover:bg-[#B2A1FE] hover:text-black">
        Logout
      </button>
    </div>
  );
}

export default Navbar;
