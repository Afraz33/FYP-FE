import React, { useState } from "react";
import registeration from "../../assets/images/registeration.png";
export default function Registeration({
  description,
  expertise,
  highestQualification,
  skills,
  experience,
  currentRole,
  certifications,
  city,
  languages,
  hourlyRate,
  // Destructure the setter functions
  setDescription,
  setExpertise,
  setHighestQualification,
  setSkills,
  setExperience,
  setCurrentRole,
  setCertifications,
  setCity,
  setLanguages,
  setHourlyRate,
  // Destructure the handler functions
  handleSignUpPageChange,
  handleHighestQualificationChange,
  handleHourlyRateChange,
  handleCityChange,
  handleCurrentRoleChange,
  handleDescriptionChange,
  handleExpertiseChange,
  addCertifications,
  addExperience,
  addExpertise,
  addLanguage,
  addSkills,

  //Register Function
  registerExpert,
}) {
  return (
    <div className="min-h-screen  flex justify-center items-center bg-[#FFD666]  mt-0  ">
      <div className="p-6 bg-white w-full max-w-2xl mx-auto mt-8 mb-8 shadow-md rounded-3xl border-black border">
        <div className="flex justify-center items-center mb-2">
          {/* <div className="bg-[#FFD666] w-20 h-20 rounded-full flex justify-center items-center">
            <img src={registeration} alt="registeration"></img>
          </div> */}
        </div>
        <h2 className="text-2xl  text-center mb-4 font-Onest font-semibold">
          Registeration Details
        </h2>

        <div>
          <div className="mb-4">
            <label className="block text-sm font-Onest font-semibold mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => {
                handleDescriptionChange(e);
              }}
              className="w-full p-2 border rounded"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-Onest font-semibold mb-2">
              Area of Expertise
            </label>
            <input
              type="text"
              value={expertise}
              onChange={(e) => {
                handleExpertiseChange(e);
              }}
              className="w-full p-2 border rounded"
            />
            
          </div>
          <div className="mb-4">
            <label className="block text-sm font-Onest font-semibold mb-2">Skills</label>
            {skills.map((q, index) => (
              <input
                key={index}
                type="text"
                className="w-full p-2 border rounded mt-2"
                value={q}
                onChange={(e) => {
                  const newSkills = [...skills];
                  newSkills[index] = e.target.value;
                  setSkills(newSkills);
                }}
              />
            ))}
            <button
              className="mt-2 p-1 w-10  bg-[#222222] hover:bg-white text-white hover:text-black rounded hover:border-black border"
              onClick={addSkills}
            >
              +
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-Onest font-semibold mb-2">Languages</label>
            {languages.map((q, index) => (
              <input
                key={index}
                type="text"
                className="w-full p-2 border rounded mt-2"
                value={q}
                onChange={(e) => {
                  const newLanguages = [...languages];
                  newLanguages[index] = e.target.value;
                  setLanguages(newLanguages);
                }}
              />
            ))}
            <button
              className="mt-2 p-1 w-10  bg-[#222222] hover:bg-white text-white hover:text-black rounded hover:border-black border"
              onClick={addLanguage}
            >
              +
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-Onest font-semibold mb-2">
              Certifications
            </label>
            {certifications.map((q, index) => (
              <input
                key={index}
                type="text"
                className="w-full p-2 border rounded mt-2"
                value={q}
                onChange={(e) => {
                  const newCertifications = [...certifications];
                  newCertifications[index] = e.target.value;
                  setCertifications(newCertifications);
                }}
              />
            ))}
            <button
              className="mt-2 p-1 w-10  bg-[#222222] hover:bg-white text-white hover:text-black rounded hover:border-black border"
              onClick={addCertifications}
            >
              +
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-Onest font-semibold mb-2">Experience</label>
            {experience.map((q, index) => (
              <input
                key={index}
                type="text"
                className="w-full p-2 border rounded mt-2"
                value={q}
                onChange={(e) => {
                  const newExperience = [...experience];
                  newExperience[index] = e.target.value;
                  setExperience(newExperience);
                }}
              />
            ))}
            <button
              className="mt-2 p-1 w-10  bg-[#222222] hover:bg-white text-white hover:text-black rounded hover:border-black border"
              onClick={addExperience}
            >
              +
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-Onest font-semibold mb-2">
              Highest Qualification
            </label>
            <input
              type="text"
              value={highestQualification}
              onChange={(e) => {
                handleHighestQualificationChange(e);
              }}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        {/* You can replicate the above structure for 'Education', 'Skills', 'Experience', 'Certification', 'Languages' array fields. */}
        <div>
          <div className="mb-4">
            <label className="block text-sm font-Onest font-semibold mb-2">
              Current Role
            </label>
            <input
              type="text"
              value={currentRole}
              onChange={(e) => {
                handleCurrentRoleChange(e);
              }}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-Onest font-semibold mb-2">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => {
                handleCityChange(e);
              }}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-Onest font-semibold mb-2">
              Hourly Rate
            </label>
            <input
              type="text"
              value={hourlyRate}
              onChange={(e) => {
                handleHourlyRateChange(e);
              }}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="flex justify-between px-10">
          <button
            onClick={handleSignUpPageChange}
            className="bg-[#222222] text-white py-2 px-4 rounded-xl font-Onest hover:bg-white hover:text-black transition duration-300 ease-in-out hover:border-black border"
          >
            Back
          </button>
          <button
            className="bg-[#222222] text-white py-2 px-4 rounded-xl font-Onest hover:bg-white hover:text-black transition duration-300 ease-in-out hover:border-black border"
            onClick={registerExpert}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
