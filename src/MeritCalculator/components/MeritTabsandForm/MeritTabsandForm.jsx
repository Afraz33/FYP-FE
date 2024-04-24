import React, { useState, useEffect, useCallback } from "react";
import "./meritcalc.css";
import MeritModal from "../MeritModal/MeritModal";
import { Alert } from "antd";
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
const TabsandList = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const [activeTab, setActiveTab] = useState(0);
 

  const [ssc1Obtained, setSsc1Obtained] = useState();
  const [ssc1Total, setSsc1Total] = useState();
  const [ssc2Obtained, setSsc2Obtained] = useState();
  const [ssc2Total, setSsc2Total] = useState();
  const [hssc1Obtained, setHssc1Obtained] = useState();
  const [hssc1Total, setHssc1Total] = useState();
  const [hssc2Obtained, setHssc2Obtained] = useState();
  const [hssc2Total, setHssc2Total] = useState();
  const [testObtained, setTestObtained] = useState();
  const [testTotal, setTestTotal] = useState();
  const [totalMerit, setTotalMerit] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleMeritCalculation = useCallback(() => {
    setErrorMessage("");
    if (
      !ssc1Obtained ||
      !ssc1Total ||
      !hssc1Obtained ||
      !hssc1Total ||
      !ssc2Obtained ||
      !ssc2Total ||
      
      !testTotal ||
      !testObtained
    ) {
      setErrorMessage("Please fill in all fields with valid numbers!");

      handleOpen();
    }

    if (parseFloat(ssc1Obtained) > parseFloat(ssc1Total)) {
      setErrorMessage(
        "Your SSC part 1 obtained marks cannot be greater than total marks!"
      );

      handleOpen();
    }
    if (parseFloat(ssc2Obtained) > parseFloat(ssc2Total)) {
      setErrorMessage(
        "Your SSC part 2 obtained marks cannot be greater than total marks!"
      );

      handleOpen();
    }
    if (parseFloat(hssc1Obtained) > parseFloat(hssc1Total)) {
      setErrorMessage(
        "Your HSSC part 1 obtained marks cannot be greater than total marks!"
      );

      handleOpen();
    }
    if (parseFloat(hssc2Obtained) > parseFloat(hssc2Total)) {
      setErrorMessage(
        "Your HSSC part 2 obtained marks cannot be greater than total marks!"
      );

      handleOpen();
    }
    if (parseFloat(testObtained) > parseFloat(testTotal)) {
      setErrorMessage(
        "Your Entrance test obtained marks cannot be greater than total marks!"
      );

      handleOpen();
    }
    const sscTotalMarks = parseFloat(ssc1Total) + parseFloat(ssc2Total);
    const sscObtainedMarks =
      parseFloat(ssc1Obtained) + parseFloat(ssc2Obtained);
    const HsscObtainedMarks = hssc2Obtained?
      parseFloat(hssc1Obtained) + parseFloat(hssc2Obtained) : parseFloat(hssc1Obtained);
    const hsscTotalMarks = hssc2Total? parseFloat(hssc1Total) + parseFloat(hssc2Total):  parseFloat(hssc1Total);
    const testTotalMarks = parseFloat(testTotal);

    switch (categories[activeTab].title) {
      case "FAST-CompSci":
        setTotalMerit(
          (parseFloat(testObtained) / testTotalMarks) * 50 +
            (sscObtainedMarks / sscTotalMarks) * 10 +
            (HsscObtainedMarks / hsscTotalMarks) * 40
        );

        break;
      case "FAST-Eng":
        setTotalMerit(
          (parseFloat(testObtained) / testTotalMarks) * 33 +
            (sscObtainedMarks / sscTotalMarks) * 17 +
            (HsscObtainedMarks / hsscTotalMarks) * 50
        );

        break;
      case "FAST-Business":
        setTotalMerit(
          (parseFloat(testObtained) / testTotalMarks) * 50 +
            (sscObtainedMarks / sscTotalMarks) * 10 +
            (HsscObtainedMarks / hsscTotalMarks) * 40
        );
        break;
      case "COMSATS":
        setTotalMerit(
          (parseFloat(testObtained) / testTotalMarks) * 50 +
            (sscObtainedMarks / sscTotalMarks) * 10 +
            (HsscObtainedMarks / hsscTotalMarks) * 40
        );
        break;
      case "NUST":
        setTotalMerit(
          (parseFloat(testObtained) / testTotalMarks) * 75 +
            (sscObtainedMarks / sscTotalMarks) * 10 +
            (HsscObtainedMarks / hsscTotalMarks) * 15
        );
        break;
      case "UET":
        setTotalMerit(
          (parseFloat(testObtained) / testTotalMarks) * 33 +
            (sscObtainedMarks / sscTotalMarks) * 17 +
            (HsscObtainedMarks / hsscTotalMarks) * 50
        );
        break;
      case "AIR":
        setTotalMerit(
          (parseFloat(testObtained) / testTotalMarks) * 40 +
            (sscObtainedMarks / sscTotalMarks) * 10 +
            (HsscObtainedMarks / hsscTotalMarks) * 50
        );
        break;
      case "GIKI":
        setTotalMerit(
          (parseFloat(testObtained) / testTotalMarks) * 85 +
            (sscObtainedMarks / sscTotalMarks) * 5 +
            (HsscObtainedMarks / hsscTotalMarks) * 10
        );
        break;
      case "MDCAT":
        setTotalMerit(
          (parseFloat(testObtained) / testTotalMarks) * 50 +
            (sscTotalMarks / sscTotalMarks) * 10 +
            (HsscObtainedMarks / hsscTotalMarks) * 40
        );
        break;
      default:
        console.log("Invalid University Selection");
        break;
    }
    handleOpen();
  }, [
    activeTab,
    
    ssc1Obtained,
    ssc1Total,
    ssc2Obtained,
    ssc2Total,
    hssc1Obtained,
    hssc1Total,
    hssc2Obtained,
    hssc2Total,
    testObtained,
    testTotal,
  ]);

  const handleInputChange = (setValue, value) => {
    // Validate input to allow only positive numbers that do not start with zero
    const isValidInput = /^(?!0)\d*\.?\d*$/.test(value);
    if (isValidInput) {
      setValue(value);
    }
  };
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        handleMeritCalculation();
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [handleMeritCalculation]);
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
      <div className=" mt-15 rounded-xl flex flex-col gap-10  justify-center items-center w-[100%] m-auto border border-[#1ab69d] p-3">
        <div className="flex flex-row gap-24">
          <div className="flex flex-row gap-5">
            <div className="flex flex-col gap-1 items-center">
              <h2 className="w-fit font-Onest text-2xl">SSC Part 1</h2>
              <div className="flex flex-row gap-4">
                <input
                  type="text"
                  placeholder="SSC1 Obtained Marks"
                  className="input-field border border-black  p-4 px-8 rounded-lg"
                  value={ssc1Obtained}
                  onChange={(e) =>
                    handleInputChange(setSsc1Obtained, e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="SSC 1 Total Marks"
                  className="input-field border border-black  p-4 px-8 rounded-lg "
                  value={ssc1Total}
                  onChange={(e) =>
                    handleInputChange(setSsc1Total, e.target.value)
                  }
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
                  className="input-field border border-black  p-4 px-8 rounded-lg"
                  value={ssc2Obtained}
                  onChange={(e) =>
                    handleInputChange(setSsc2Obtained, e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="SSC 2 Total Marks"
                  className="input-field border border-black  p-4 px-8 rounded-lg"
                  value={ssc2Total}
                  onChange={(e) =>
                    handleInputChange(setSsc2Total, e.target.value)
                  }
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
                  className="input-field border border-black  p-4 px-8 rounded-lg "
                  value={hssc1Obtained}
                  onChange={(e) =>
                    handleInputChange(setHssc1Obtained, e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="HSSC1 Total Marks"
                  className="input-field border border-black  p-4 px-8 rounded-lg"
                  value={hssc1Total}
                  onChange={(e) =>
                    handleInputChange(setHssc1Total, e.target.value)
                  }
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
                  className="input-field border border-black  p-4 px-8 rounded-lg"
                  value={hssc2Obtained}
                  onChange={(e) =>
                    handleInputChange(setHssc2Obtained, e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="HSSC 2 Total Marks"
                  className="input-field border border-black  p-4 px-8 rounded-lg"
                  value={hssc2Total}
                  onChange={(e) =>
                    handleInputChange(setHssc2Total, e.target.value)
                  }
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
              className="input-field border border-black  p-4 px-8 rounded-lg"
              value={testObtained}
              onChange={(e) =>
                handleInputChange(setTestObtained, e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Entrance Test Total Marks"
              className="input-field border border-black  p-4 px-8 rounded-lg"
              value={testTotal}
              onChange={(e) => handleInputChange(setTestTotal, e.target.value)}
            />
          </div>
        </div>
        <button
          onClick={handleMeritCalculation}
          className="mt-0 bg-[#1ab69d] hover:bg-[#f2f2f2] hover:text-black border hover:border-black text-white font-bold  py-2 px-4 rounded-xl font-Onest"
        >
          Calculate Merit
        </button>
      </div>
      <MeritModal
        open={openModal}
        handleClose={handleClose}
        totalMerit={totalMerit}
        university={categories[activeTab].title}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default TabsandList;
