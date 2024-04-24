import InputIcon from "@mui/icons-material/Input";
import { useState, useEffect } from "react";
import { IoSendSharp } from "react-icons/io5";
function UserDialougeBox({ handleUserAnswer }) {
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter" && answer.trim() !== "") {
        handleInput();
      }
    };

    // Add event listener when component mounts
    window.addEventListener("keypress", handleKeyPress);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [answer]); // Depend on answer and handleInput function

  const handleInput = () => {
    if (answer.trim() !== "") {
      handleUserAnswer(answer);
      setAnswer("");
    }
  };
  return (
    <div className="flex flex-row w-[50%]  fixed bottom-5 left-96   gap-4">
      <input
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="max-w-full break-all bg-[#f0faf9] text-black rounded-xl p-6 shadow w-[90%] mx-auto h-12 border border-black  "
      ></input>
      <div className=" hover:bg-slate-300 bg-slate-200 py-2 px-4 rounded-xl">
        <IoSendSharp
          onClick={() => handleInput(answer)}
          style={{ fontSize: "25px", cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default UserDialougeBox;
