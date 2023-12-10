import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
function UserAnswer({ text }) {
  return (
    <div className="p-4 max-w-xl mx-auto bg-gray-200 rounded-lg shadow flex">
      <p className="text-gray-800 mr-2 font-Onest">{text}</p>
      <PersonOutlineIcon />
    </div>
  );
}

export default UserAnswer;
