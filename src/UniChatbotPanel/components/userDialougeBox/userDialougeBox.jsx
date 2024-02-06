import { IoSendSharp } from "react-icons/io5";
import { useState } from "react";

function UserDialougeBox({ handleUserAnswer }) {
  const [answer, setAnswer] = useState("");

  return (
    <div className="flex items-center w-[50%] fixed bottom-20 left-40 gap-4">
      <input
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="flex-grow max-w-full break-all text-black bg-[#fbfbfb] rounded-xl p-6 mx-auto h-12 border border-[#658f8b] focus:outline-none focus:ring focus:border-blue-300"
      />
      <IoSendSharp
        onClick={() => handleUserAnswer(answer)}
        style={{ fontSize: "25px", cursor: "pointer" }}
      />
    </div>
  );
}

export default UserDialougeBox;
