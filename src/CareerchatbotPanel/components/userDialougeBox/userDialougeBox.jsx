import InputIcon from "@mui/icons-material/Input";
import { useState } from "react";
function UserDialougeBox({ handleUserAnswer }) {
  const [answer, setAnswer] = useState("");

  const handleInput = (answer) => {
    handleUserAnswer(answer);
    // setAnswer("");
  };
  return (
    <div className="flex flex-row w-[50%]  fixed bottom-12 left-80   gap-4">
      <input
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="max-w-full break-all bg-[white] text-black rounded-xl p-6 shadow w-[90%] mx-auto h-12    "
      ></input>
      <InputIcon
        onClick={() => handleInput(answer)}
        sx={{ fontSize: "44px", cursor: "pointer" }}
      />
    </div>
  );
}

export default UserDialougeBox;
