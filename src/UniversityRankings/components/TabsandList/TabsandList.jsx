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
  <ul className="university-list">
    {universities.map((university, index) => (
      <li key={index}>{university.University}</li>
    ))}
  </ul>
);

const TabsandList = () => {
  const [activeTab, setActiveTab] = useState(0);
  const categories = [
    { title: "Agriculture", data: agriculture },
    { title: "Arts", data: arts },
    { title: "Business", data: business },
    { title: "Computer Science", data: CS },
    { title: "Engineering", data: engineering },
    { title: "Medical", data: medical },
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
