import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white p-7 px-20  fixed bottom-0 w-full">
      {/* Copyright and Additional Links */}
      <div className="text-center  flex mx-auto w-fit">
        &copy; {new Date().getFullYear}PaiSHA. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
