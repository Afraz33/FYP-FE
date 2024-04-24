import { IoSendSharp } from "react-icons/io5";
import { useCallback, useState, useEffect } from "react";

function UserDialougeBox({ handleUserAnswer, answer, setAnswer }) {
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
    <div className="flex items-center w-[70%] absolute bottom-2 right-32 gap-4">
      <input
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="flex-grow max-w-full break-all text-black bg-[#fbfbfb] rounded-xl p-6 mx-auto h-12 border border-[#658f8b] focus:outline-none focus:ring focus:border-blue-300"
      ></input>
      <div className=" hover:bg-slate-300 bg-slate-100 p-2 px-4 rounded-xl">
        <IoSendSharp
          onClick={() => handleInput(answer)}
          style={{ fontSize: "25px", cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default UserDialougeBox;
