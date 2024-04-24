import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
function UserAnswer({ text }) {
  return (
    <div className="p-4 max-w-xl mx-auto bg-white rounded-lg shadow flex">
      <p className="text-gray-800 mr-2 font-Onest my-auto">{text}</p>
      <PersonOutlineIcon sx={{ fontSize: "25px" }} />
    </div>
  );
}

export default UserAnswer;
