import { CgProfile } from "react-icons/cg";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

function UserAnswer({ text }) {
  return (
    <div className="p-4 max-w-xl mx-auto bg-white flex gap-4  ">
      {/* <PersonOutlineIcon /> */}
      <CgProfile size={40} /> {/* Adjust the size as needed */}
      <p className="text-black mr-2 font-Onest">{text}</p>
    </div>
  );
}

export default UserAnswer;
