import React, { useState } from "react";
import registeration from "../../assets/images/registeration.png";
function ProfileForm({ handleSignUpPageChange }) {
  const [description, setDescription] = useState("");
  const [expertise, setExpertise] = useState([]);
  const [highestQualification, setHighestQualification] = useState();

  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [currentRole, setCurrentRole] = useState("");
  const [certifications, setCertifications] = useState([]);
  const [city, setCity] = useState("");
  const [languages, setLanguages] = useState([]);
  const [hourlyRate, setHourlyRate] = useState("");
  // ... You can replicate the above for other array fields ...

  const addExpertise = () => {
    setExpertise([...expertise, ""]);
  };

  const addSkills = () => {
    setSkills([...skills, ""]);
  };
  const addExperience = () => {
    setExperience([...experience, ""]);
  };
  const addCertifications = () => {
    setCertifications([...certifications, ""]);
  };
  const addLanguage = () => {
    setLanguages([...languages, ""]);
  };
  const handleHighestQualificationChange = (e) =>
    setHighestQualification(e.target.value);
  const handleHourlyRateChange = (e) => setHourlyRate(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleCurrentRoleChange = (e) => setCurrentRole(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  return (
    <div className="min-h-screen  flex justify-center items-center bg-[#FFD666]  mt-0  ">
      <div className="p-6 bg-white w-full max-w-2xl mx-auto mt-8 mb-8 shadow-md rounded-md">
        <div className="flex justify-center items-center mb-2">
          <div className="bg-[#FFD666] w-20 h-20 rounded-full flex justify-center items-center">
            <img src={registeration} alt="registeration"></img>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">
          Registeration Details
        </h2>

        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
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
            <label className="block text-sm font-medium mb-2">
              Area of Expertise
            </label>
            {expertise.map((q, index) => (
              <input
                key={index}
                type="text"
                className="w-full p-2 border rounded mt-2"
                value={q}
                onChange={(e) => {
                  const newExpertise = [...expertise];
                  newExpertise[index] = e.target.value;
                  setExpertise(newExpertise);
                }}
              />
            ))}
            <button
              className="mt-2 p-1 w-10  bg-[#FFD666] hover:bg-black text-white rounded"
              onClick={addExpertise}
            >
              +
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Skills</label>
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
              className="mt-2 p-1 w-10  bg-[#FFD666] hover:bg-black text-white rounded"
              onClick={addSkills}
            >
              +
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Languages</label>
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
              className="mt-2 p-1 w-10  bg-[#FFD666] hover:bg-black text-white rounded"
              onClick={addLanguage}
            >
              +
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
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
              className="mt-2 p-1 w-10  bg-[#FFD666] hover:bg-black text-white rounded"
              onClick={addCertifications}
            >
              +
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Experience</label>
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
              className="mt-2 p-1 w-10  bg-[#FFD666] hover:bg-black text-white rounded"
              onClick={addExperience}
            >
              +
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
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
            <label className="block text-sm font-medium mb-2">
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
            <label className="block text-sm font-medium mb-2">City</label>
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
            <label className="block text-sm font-medium mb-2">
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
            className="p-2 w-20 bg-blue-500 text-white rounded"
          >
            Back
          </button>
          <button className="p-2 w-20  bg-blue-500 text-white rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;
