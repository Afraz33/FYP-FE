import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
function UserAnswer({ text }) {
  return (
    <div className="p-4 max-w-xl mx-auto bg-[#e7ecfd] rounded-lg shadow flex">
      <p className="text-gray-800 mr-2">{text}</p>
      <PersonOutlineIcon />
    </div>
  );
}

export default UserAnswer;
