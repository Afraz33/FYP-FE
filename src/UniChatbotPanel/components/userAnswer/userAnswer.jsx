import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import userIcon from "../../assets/boy.png";
function UserAnswer({ text }) {
  return (
    <div className="p-4 max-w-xl mx-auto bg-white flex gap-4  ">
      {/* <PersonOutlineIcon /> */}
      <img
        style={{ width: "60px", height: "60px" }}
        src={userIcon}
        alt="userIcon"
      ></img>
      <p className="text-black mr-2 font-Onest">{text}</p>
    </div>
  );
}

export default UserAnswer;
