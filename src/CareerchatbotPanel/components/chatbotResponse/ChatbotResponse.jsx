import SmartToyIcon from "@mui/icons-material/SmartToy";
import Styles from "./ChatbotResponse.module.css";
function ChatbotResponse({ text, index, responding }) {
  return (
    <>
      <div className="self-start p-4 max-w-xl mx-auto bg-[#1ab69d] rounded-lg shadow flex">
        <SmartToyIcon />
        <p className="text-white ml-2 font-Onest">{text}</p>
      </div>
    </>
  );
}

export default ChatbotResponse;
