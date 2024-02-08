import MessageIcon from "@mui/icons-material/Message";
import messageIcon from "../../assets/message.png";
function SampleQuery({ question, setAnswer }) {
  return (
    <div
      onClick={() => {
        setAnswer(question);
      }}
      className="flex flex-row gap-1 bg-[#f0faf9] hover:bg-slate-200 hover:cursor-pointer rounded-2xl p-3 font-Onest"
    >
      <div className=" rounded-full  h-10 w-[20%] flex justify-center items-center bg-white">
        <img
          style={{ width: "79px", height: "60px" }}
          src={messageIcon}
          alt="messageIcon"
        ></img>
      </div>

      <p className="text-black w-[100%] ">{question}</p>
    </div>
  );
}

export default SampleQuery;
