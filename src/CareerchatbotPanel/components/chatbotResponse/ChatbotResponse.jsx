import SmartToyIcon from "@mui/icons-material/SmartToy";
import Styles from "./ChatbotResponse.module.css";
function ChatbotResponse({ text, index, responding }) {
  return (
    <>
      <div className="self-start p-4 max-w-xl mx-auto bg-gray-100 rounded-lg shadow flex">
        <SmartToyIcon />
        <p className="text-gray-800 ml-2">{text}</p>
      </div>
    </>
  );
}

export default ChatbotResponse;
