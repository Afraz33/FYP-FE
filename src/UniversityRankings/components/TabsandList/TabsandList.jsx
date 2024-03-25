import React, { useState } from "react";
import "./TabsandList.css"; // Import your CSS file for styling
// Import your icons from "@mui/icons-material";

import agriculture from "../../assets/data/agriculture_rankings.json";
import arts from "../../assets/data/arts_rankings.json";
import business from "../../assets/data/business_rankings.json";
import CS from "../../assets/data/CS_rankings.json";
import engineering from "../../assets/data/engineering_rankings.json";
import medical from "../../assets/data/medical_rankings.json";

const UniversityList = ({ universities }) => (
  <div className="university-list">
    <div className="headings">
      <h2 className="list-heading font-Onest font-semibold">Ranking</h2>
      <h2 className="list-heading font-Onest font-semibold">University</h2>
    </div>
    {universities.length > 0 ? (
      universities.map((university, index) => (
        <div key={index} className="university-item">
          <span>{index + 1}</span>
          <span>{university.University}</span>
        </div>
      ))
    ) : (
      <div className="university-item">
        <span>No universities found.</span>
      </div>
    )}
  </div>
);

const TabsandList = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const categories = [
    { title: "Agriculture", data: agriculture },
    { title: "Arts and Design", data: arts },
    { title: "Business", data: business },
    { title: "Computer Science", data: CS },
    { title: "Engineering", data: engineering },
    { title: "Medicine", data: medical },
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUniversities = categories[activeTab].data.filter(university =>
    university.University.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="tab-component flex flex-col justify-center items-center p-10">
      <div className="search-bar">
      <div className="search-container ">
        <input
          type="text"
          placeholder="Search universities..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input font-Onest"
        />
      </div>
      <div className="tabs font-Onest font-semibold mt-10">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveTab(index);
              setSearchTerm(''); // Reset search term on tab change
            }}
            className={index === activeTab ? "active" : ""}
          >
            {category.title}
          </button>
        ))}
      </div>
      </div>
      <div className="tab-content font-Onest">
        <UniversityList universities={filteredUniversities} />
      </div>
    </div>
  );
};

export default TabsandList;
