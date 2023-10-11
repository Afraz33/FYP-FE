import React, { useState } from "react";

const ApplicationForm = () => {
  const [educationText, setEducationText] = useState("");
  const [educationItems, setEducationItems] = useState([]);
  const [city, setCity] = useState("");
  const [highestQualification, setHighestQualification] = useState("");
  const [language, setLanguage] = useState("");
  const [languageItem, setLanguageItem] = useState([]);
  const [skills, setSkills] = useState("");
  const [skillsItem, setSkillsItem] = useState([]);
  const [experience, setExperience] = useState("");
  const [experienceItem, setExperienceItem] = useState([]);
  const [currentRole, setCurrentRole] = useState("");
  const [aboutYourself, setAboutYourself] = useState("");
  const [aboutExpertise, setAboutExpertise] = useState("");
  const [certification, setCertification] = useState("");
  const [certificationItem, setCertificationItem] = useState([]);

  const addEducationItem = () => {
    if (educationText) {
      setEducationItems([...educationItems, educationText]);
      setEducationText("");
    }
  };
  const addSkillsItem = () => {
    if (skills) {
      setSkillsItem([...skillsItem, skills]);
      setSkills("");
    }
  };

  const addExperienceItem = () => {
    if (experience) {
      setExperienceItem([...experienceItem, experience]);
      setExperience("");
    }
  };

  const addCertificationItem = () => {
    if (certification) {
      setCertificationItem([...certificationItem, certification]);
      setCertification("");
    }
  };

  const addLanguageItem = () => {
    if (language) {
      setLanguageItem([...languageItem, language]);
      setLanguage("");
    }
  };

  return (
    <div className="bg-[#B2A1FE] h-full ">
    <div className="flex justify-center">
      <div className="w-2/3 bg-white p-6 rounded-lg shadow-lg mt-20 mb-20">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-base mb-2 font-DelaGothicOne  mx-10">Education</h3>
            <div className="flex items-center">
              <input
                type="text"
                className="border-b border-black w-2/5 mx-10"
                value={educationText}
                onChange={(e) => setEducationText(e.target.value)}
              />
              <button
                onClick={addEducationItem}
                className="ml-2 p-3 bg-[#B2A1FE] text-white rounded-full hover:bg-black hover:shadow-md"
              >
                +
              </button>
            </div>
            <ul>
              {educationItems.map((item, index) => (
                <li key={index} className="mt-2">
                  <div className="rounded-xl p-2 border border-black inline-flex items-center mx-10">
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base mb-2 font-DelaGothicOne mx-10">City</h3>
            <input
              type="text"
              className="border-b border-black w-2/5 mx-10"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div>
            <h3 className="text-base mb-2 font-DelaGothicOne mx-10">
              Highest Qualification
            </h3>
            <input
              type="text"
              className="border-b border-black w-2/5 mx-10"
              value={highestQualification}
              onChange={(e) => setHighestQualification(e.target.value)}
            />
          </div>

          <div>
            <h3 className="text-base mb-2 font-DelaGothicOne mx-10">Language</h3>
            <div className="flex items-center">
              <input
                type="text"
                className="border-b border-black w-2/5 mx-10"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              />
              <button
                onClick={addLanguageItem}
                className="ml-2 p-3 bg-[#B2A1FE] text-white rounded-full hover:bg-black hover:shadow-md"
              >
                +
              </button>
            </div>
            <ul>
              {languageItem.map((item, index) => (
                <li key={index} className="mt-2">
                  <div className="rounded-xl p-2 border border-black inline-flex items-center mx-10">
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base mb-2 font-DelaGothicOne mx-10">Skills</h3>
            <div className="flex items-center">
              <input
                type="text"
                className="border-b border-black w-2/5 mx-10"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
              <button
                onClick={addSkillsItem}
                className="ml-2 p-3 bg-[#B2A1FE] text-white rounded-full hover:bg-black hover:shadow-md"
              >
                +
              </button>
            </div>
            <ul>
              {skillsItem.map((item, index) => (
                <li key={index} className="mt-2">
                  <div className="rounded-xl p-2 border border-black inline-flex items-center mx-10">
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base mb-2 font-DelaGothicOne mx-10">
              Experience
            </h3>
            <div className="flex items-center">
              <input
                type="text"
                className="border-b border-black w-2/5 mx-10"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
              <button
                onClick={addExperienceItem}
                className="ml-2 p-3 bg-[#B2A1FE] text-white rounded-full hover:bg-black hover:shadow-md"
              >
                +
              </button>
            </div>
            <ul>
              {experienceItem.map((item, index) => (
                <li key={index} className="mt-2">
                  <div className="rounded-xl p-2 border border-black inline-flex items-center mx-10">
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base mb-2 font-DelaGothicOne mx-10">
              Current Role
            </h3>
            <input
              type="text"
              className="border-b border-black w-2/5 mx-10"
              value={currentRole}
              onChange={(e) => setCurrentRole(e.target.value)}
            />
          </div>

          <div>
            <h3 className="text-base mb-2 font-DelaGothicOne mx-10">
              Tell us about yourself
            </h3>
            <textarea
              className="border border-black w-4/5 p-1 mx-10 rounded-xl"
              value={aboutYourself}
              onChange={(e) => setAboutYourself(e.target.value)}
            />
          </div>

          <div>
            <h3 className="text-base mb-2 font-DelaGothicOne mx-10">
              Certifications
            </h3>
            <div className="flex items-center">
              <input
                type="text"
                className="border-b border-black w-2/5 mx-10"
                value={certification}
                onChange={(e) => setCertification(e.target.value)}
              />
              <button
                onClick={addCertificationItem}
                className="ml-2 p-3 bg-[#B2A1FE] text-white rounded-full hover:bg-black hover:shadow-md"
              >
                +
              </button>
            </div>
            <ul>
              {certificationItem.map((item, index) => (
                <li key={index} className="mt-2">
                  <div className="rounded-xl p-2 border border-black inline-flex items-center mx-10">
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base mb-2 font-DelaGothicOne mx-10">
              Tell us about your expertise
            </h3>
            <textarea
              className="border border-black w-4/5 p-1 mx-10 rounded-xl"
              value={aboutExpertise}
              onChange={(e) => setAboutExpertise(e.target.value)}
            />
          </div>

          <div className="col-span-2 flex justify-center mt-4">
            <button className="bg-white text-black py-2 px-4 rounded-full font-DelaGothicOne border border-black hover:bg-black hover:text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ApplicationForm;
