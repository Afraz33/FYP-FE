import React, { useState } from "react";
import ExpertSignUp from "./ExpertSignUp";
import NormalUserSignUp from "./NormalUserSignUp";
import FocalPersonSignUp from "./FocalPersonSignUp";

const SignUpPage = () => {
  const [selectedForm, setSelectedForm] = useState(null);
  const [activeButton, setActiveButton] = useState(null);

  const renderSelectedForm = () => {
    if (selectedForm === "expert") {
      return <ExpertSignUp />;
    } else if (selectedForm === "normal") {
      return <NormalUserSignUp />;
    } else if (selectedForm === "focal") {
      return <FocalPersonSignUp />;
    }
  };

  return (
    <>
      <div className="bg-[#FFD666] h-content flex flex-col items-center -mb-12">
        <div className="flex space-x-4 mt-6 mb-12">
          <button
            className={`${
              activeButton === "expert"
                ? "bg-white rounded-full border-black border"
                : ""
            } px-4 py-2 font-DelaGothicOne`}
            onClick={() => {
              setSelectedForm("expert");
              setActiveButton("expert");
            }}
          >
            Expert
          </button>
          <button
            className={`${
              activeButton === "normal"
                ? "bg-white rounded-full border-black border"
                : ""
            } px-4 py-2 font-DelaGothicOne`}
            onClick={() => {
              setSelectedForm("normal");
              setActiveButton("normal");
            }}
          >
            Normal User
          </button>
          <button
            className={`${
              activeButton === "focal"
                ? "bg-white rounded-full border-black border"
                : ""
            } px-4 py-2 font-DelaGothicOne`}
            onClick={() => {
              setSelectedForm("focal");
              setActiveButton("focal");
            }}
          >
            Focal Person
          </button>
        </div>
      </div>
      <div className=" mt-6">{renderSelectedForm()}</div>
    </>
  );
};

export default SignUpPage;
