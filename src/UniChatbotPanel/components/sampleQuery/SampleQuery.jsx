import MessageIcon from "@mui/icons-material/Message";
import messageIcon from "../../assets/message.png";
function SampleQuery() {
  return (
    <div className="flex flex-row gap-1 bg-[#f0faf9] rounded-2xl p-3 font-Onest">
      <div className=" rounded-full  h-10 w-28 flex justify-center items-center bg-white">
        <img
          style={{ width: "79px", height: "60px" }}
          src={messageIcon}
          alt="messageIcon"
        ></img>
      </div>

      <p className="text-black ">
        "Give me a list of computer Science Universities that have merit higher
        than 40%".
      </p>
    </div>
  );
}

export default SampleQuery;
