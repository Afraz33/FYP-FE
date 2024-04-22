import SmartToyIcon from "@mui/icons-material/SmartToy";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import Styles from "./ChatbotResponse.module.css";
function ChatbotResponse({ text, index, responding }) {
  return (
    <>
      <div className="self-start p-4 max-w-xl mx-auto bg-[#1ab69d] rounded-lg shadow flex justify-center items-center">
        <BubbleChartIcon sx={{ color: "white", fontSize: "34px" }} />
        <p className="text-white ml-2 font-Onest my-auto">{text}</p>
      </div>
    </>
  );
}

export default ChatbotResponse;
