import React, { useState } from "react";
import "./meritcalc.css";

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
    { title: "FAST-CompSci" },
    { title: "FAST-Eng" },
    { title: "FAST-Business" },
    { title: "COMSATS" },
    { title: "NUST" },
    { title: "UET" },
    { title: "AIR" },
    { title: "GIKI" },
    { title: "MDCAT" },
  ];

  const [ssc1Obtained, setSsc1Obtained] = useState("");
  const [ssc1Total, setSsc1Total] = useState("");
  const [ssc2Obtained, setSsc2Obtained] = useState("");
  const [ssc2Total, setSsc2Total] = useState("");
  const [hssc1Obtained, setHssc1Obtained] = useState("");
  const [hssc1Total, setHssc1Total] = useState("");
  const [hssc2Obtained, setHssc2Obtained] = useState("");
  const [hssc2Total, setHssc2Total] = useState("");
  const [testObtained, setTestObtained] = useState("");
  const [testTotal, setTestTotal] = useState("");

  const handleMeritCalculation = () => {
    const sscTotalMarks = parseFloat(ssc1Total) + parseFloat(ssc2Total);
    const sscObtainedMarks =
      parseFloat(ssc1Obtained) + parseFloat(ssc2Obtained);
    const HsscObtainedMarks =
      parseFloat(hssc1Obtained) + parseFloat(hssc2Obtained);
    const hsscTotalMarks = parseFloat(hssc1Total) + parseFloat(hssc2Total);
    const testTotalMarks = parseFloat(testTotal);

    let totalMerit = 0;

    switch (categories[activeTab].title) {
      case "FAST-CompSci":
        totalMerit =
          (parseFloat(testObtained) / testTotalMarks) * 50 +
          (sscObtainedMarks / sscTotalMarks) * 10 +
          (HsscObtainedMarks / hsscTotalMarks) * 40;

        break;
      case "FAST-Eng":
        totalMerit =
          (parseFloat(testObtained) / testTotalMarks) * 33 +
          (sscObtainedMarks / sscTotalMarks) * 17 +
          (HsscObtainedMarks / hsscTotalMarks) * 50;

        break;
      case "FAST-Business":
        totalMerit =
          (parseFloat(testObtained) / testTotalMarks) * 50 +
          (sscObtainedMarks / sscTotalMarks) * 10 +
          (HsscObtainedMarks / hsscTotalMarks) * 40;
        break;
      case "COMSATS":
        totalMerit =
          (parseFloat(testObtained) / testTotalMarks) * 50 +
          (sscObtainedMarks / sscTotalMarks) * 10 +
          (HsscObtainedMarks / hsscTotalMarks) * 40;
        break;
      case "NUST":
        totalMerit =
          (parseFloat(testObtained) / testTotalMarks) * 75 +
          (sscObtainedMarks / sscTotalMarks) * 10 +
          (HsscObtainedMarks / hsscTotalMarks) * 15;
        break;
      case "UET":
        totalMerit =
          (parseFloat(testObtained) / testTotalMarks) * 33 +
          (sscObtainedMarks / sscTotalMarks) * 17 +
          (HsscObtainedMarks / hsscTotalMarks) * 50;
        break;
      case "AIR":
        totalMerit =
          (parseFloat(testObtained) / testTotalMarks) * 40 +
          (sscObtainedMarks / sscTotalMarks) * 10 +
          (HsscObtainedMarks / hsscTotalMarks) * 50;
        break;
      case "GIKI":
        totalMerit =
          (parseFloat(testObtained) / testTotalMarks) * 85 +
          (sscObtainedMarks / sscTotalMarks) * 5 +
          (HsscObtainedMarks / hsscTotalMarks) * 10;
        break;
      case "MDCAT":
        totalMerit =
          (parseFloat(testObtained) / testTotalMarks) * 50 +
          (sscTotalMarks / sscTotalMarks) * 10 +
          (HsscObtainedMarks / hsscTotalMarks) * 40;
        break;
      default:
        console.log("Invalid University Selection");
        break;
    }

    console.log("Total Merit:", totalMerit);
  };

  return (
    <div className="merit-tab-component flex flex-col justify-center items-center p-9 p-y-10 w-[100%]">
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
      <div className=" mt-5 rounded-xl flex flex-col gap-10  justify-center items-center w-[90%] m-auto border border-[#1ab69d] p-3">
        <div className="flex flex-row gap-24">
          <div className="flex flex-row gap-5">
            <div className="flex flex-col gap-1 items-center">
              <h2 className="w-fit font-Onest text-2xl">SSC Part 1</h2>
              <div className="flex flex-row gap-4">
                <input
                  type="text"
                  placeholder="SSC1 Obtained Marks"
                  className="input-field border border-black  p-4 px-8 "
                  value={ssc1Obtained}
                  onChange={(e) => setSsc1Obtained(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="SSC 1 Total Marks"
                  className="input-field border border-black  p-4 px-8 "
                  value={ssc1Total}
                  onChange={(e) => setSsc1Total(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col gap-1 items-center">
              <h2 className="w-fit font-Onest text-2xl">SSC Part 2</h2>
              <div className="flex flex-row gap-4">
                <input
                  type="text"
                  placeholder="SSC2 Obtained Marks"
                  className="input-field border border-black  p-4 px-8 "
                  value={ssc2Obtained}
                  onChange={(e) => setSsc2Obtained(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="SSC 2 Total Marks"
                  className="input-field border border-black  p-4 px-8 "
                  value={ssc2Total}
                  onChange={(e) => setSsc2Total(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-24">
          <div className="flex flex-row gap-5">
            <div className="flex flex-col gap-1 items-center">
              <h2 className="w-fit font-Onest text-2xl">HSC Part 1</h2>
              <div className="flex flex-row gap-4">
                <input
                  type="text"
                  placeholder="HSSC1 Obtained Marks"
                  className="input-field border border-black  p-4 px-8 "
                  value={hssc1Obtained}
                  onChange={(e) => setHssc1Obtained(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="HSSC1 Total Marks"
                  className="input-field border border-black  p-4 px-8 "
                  value={hssc1Total}
                  onChange={(e) => setHssc1Total(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col gap-1 items-center">
              <h2 className="w-fit font-Onest text-2xl">HSSC Part 2</h2>
              <div className="flex flex-row gap-4">
                <input
                  type="text"
                  placeholder="HSSC2 Obtained Marks"
                  className="input-field border border-black  p-4 px-8 "
                  value={hssc2Obtained}
                  onChange={(e) => setHssc2Obtained(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="HSSC 2 Total Marks"
                  className="input-field border border-black  p-4 px-8 "
                  value={hssc2Total}
                  onChange={(e) => setHssc2Total(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 items-center ">
          <h2 className="w-fit font-Onest text-2xl">Entrance Test </h2>
          <div className="flex flex-row gap-4">
            <input
              type="text"
              placeholder="Entrance Test Obtained Marks"
              className="input-field border border-black  p-4 px-8 "
              value={testObtained}
              onChange={(e) => setTestObtained(e.target.value)}
            />
            <input
              type="text"
              placeholder="Entrance Test Total Marks"
              className="input-field border border-black  p-4 px-8 "
              value={testTotal}
              onChange={(e) => setTestTotal(e.target.value)}
            />
          </div>
        </div>
        <button
          onClick={handleMeritCalculation}
          className="mt-0 bg-[#1ab69d] hover:bg-[#f2f2f2] hover:text-black border hover:border-black text-white font-bold  py-2 px-4 rounded-xl "
        >
          Calculate Merit
        </button>
      </div>
    </div>
  );
};

export default TabsandList;
