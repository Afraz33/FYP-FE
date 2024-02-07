import { IoSendSharp } from "react-icons/io5";
import { useState } from "react";

function UserDialougeBox({ handleUserAnswer }) {
  const [answer, setAnswer] = useState("");

  const handleInput = (answer) => {
    handleUserAnswer(answer);

    setAnswer("");
  };
  return (
    <div className="flex items-center w-[50%] fixed bottom-20 left-40 gap-4">
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
