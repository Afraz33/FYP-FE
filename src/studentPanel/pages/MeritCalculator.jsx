import { useState } from "react";
import Navbar from "../components/Navbar";
import MeritTabsandForm from "../../MeritCalculator/components/MeritTabsandForm/MeritTabsandForm";
function MeritCalculator() {
  const [selectedTest, setSelectedTest] = useState("FAST Computer Science");
  const [ssc1Marks, setSSC1Marks] = useState({ obtained: 0, total: 100 });
  const [ssc2Marks, setSSC2Marks] = useState({ obtained: 0, total: 100 });
  const [hssc1Marks, setHSSC1Marks] = useState({ obtained: 0, total: 100 });
  const [hssc2Marks, setHSSC2Marks] = useState({ obtained: 0, total: 100 });
  const [entranceTestMarks, setEntranceTestMarks] = useState({
    obtained: 0,
    total: 100,
  });
  const [meritScore, setMeritScore] = useState(0);

  const calculateMerit = () => {
    let totalMerit = 0;
    let sscTotal = ssc1Marks.total + ssc2Marks.total;
    let hsscTotal = hssc1Marks.total + hssc2Marks.total;

    switch (selectedTest) {
      case "FAST Computer Science":
        totalMerit =
          (entranceTestMarks.obtained / entranceTestMarks.total) * 50 +
          (sscTotal / 200) * 10 +
          (hsscTotal / 200) * 40;
        break;
      case "FAST Engineering":
        totalMerit =
          (entranceTestMarks.obtained / entranceTestMarks.total) * 33 +
          (sscTotal / 200) * 17 +
          (hsscTotal / 200) * 50;
        break;
      case "FAST Business":
        totalMerit =
          (entranceTestMarks.obtained / entranceTestMarks.total) * 50 +
          (sscTotal / 200) * 10 +
          (hsscTotal / 200) * 40;
        break;
      // Add cases for other entrance tests
      default:
        break;
    }

    setMeritScore(totalMerit);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col h-full w-screen ">
        <MeritTabsandForm />
      </div>
    </>
  );
}

export default MeritCalculator;
