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

  emailInUse,
}) {
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = (e) => {
    // Prevent the form from submitting by default
    e.preventDefault();

    // Check if required fields are empty
    if (
      description.trim() === "" ||
      expertise.trim() === "" ||
      highestQualification.trim() === "" ||
      skills.some((skill) => skill.trim() === "") ||
      experience.some((exp) => exp.trim() === "") ||
      certifications.some((cert) => cert.trim() === "") ||
      city.trim() === "" ||
      languages.some((lang) => lang.trim() === "") ||
      hourlyRate.trim() === "" ||
      !currentRole
    ) {
      setErrorMessage(true);
      
    } else {
      
      registerExpert();
    }
  };
  return (
    <div className="min-h-screen  flex justify-center items-center bg-[#FFD666]  mt-0  ">
      <div className="p-6 bg-white w-full max-w-2xl mx-auto mt-8 mb-8 shadow-md rounded-3xl border-black border-2">
        <div className="flex justify-center items-center mb-2">
          
        </div>
        <h2 className="text-2xl  text-center mb-4 font-Onest font-semibold">
        Registration Details
        </h2>

        <div>
          <div className="mb-4">
            <label className="block text-sm font-Onest font-semibold mb-2">
              Description
            </label>
            <textarea
              required
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
              required
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
                required
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
                required
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
                required
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
              required
              type="text"
              value={highestQualification}
              onChange={(e) => {
                handleHighestQualificationChange(e);
              }}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        
        <div>
          <div className="mb-4">
            <label className="block text-sm font-Onest font-semibold mb-2">
              Current Role
            </label>
            <input
              required
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
              required
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
              required
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
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        {errorMessage && (
          <div className="text-red-500 mt-4 mx-auto w-fit">
            Please fill in all required fields.
          </div>
        )}
        {emailInUse && (
          <div className="text-red-500 mt-4 mx-auto w-fit">
            Email Already in use!
          </div>
        )}
      </div>
    </div>
  );
}
