import React, { useState } from "react";
import "./TabsandList.css"; // Import your CSS file for styling
import {
  Agriculture,
  School,
  Business,
  Code,
  Engineering,
  MedicalServices,
} from "@mui/icons-material";
import agriculture from "../../assets/data/agriculture_rankings.json";
import arts from "../../assets/data/arts_rankings.json";
import business from "../../assets/data/business_rankings.json";
import CS from "../../assets/data/CS_rankings.json";
import engineering from "../../assets/data/engineering_rankings.json";
import medical from "../../assets/data/medical_rankings.json";

const UniversityList = ({ universities }) => (
  <div className="university-list">
    <div className="headings">
      <h2 className="list-heading">Ranking</h2>
      <h2 className="list-heading">University</h2>
    </div>
    {universities.map((university, index) => (
      <div key={index} className="university-item">
        <span>{index + 1}</span>
        <span>{university.University}</span>
      </div>
    ))}
  </div>
);

const TabsandList = () => {
  const [activeTab, setActiveTab] = useState(0);
  const categories = [
    { title: "Agriculture", data: agriculture },
    { title: "Arts and Design", data: arts },
    { title: "Business", data: business },
    { title: "Computer Science", data: CS },
    { title: "Engineering", data: engineering },
    { title: "Medicine", data: medical },
  ];

  return (
    <div className="tab-component flex flex-col justify-center items-center p-10">
      <div className="tabs">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={index === activeTab ? "active" : ""}
          >
            {category.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <UniversityList universities={categories[activeTab].data} />
      </div>
    </div>
  );
};

export default TabsandList;
