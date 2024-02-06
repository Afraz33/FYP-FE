import SmartToyIcon from "@mui/icons-material/SmartToy";
import Styles from "./ChatbotResponse.module.css";
function ChatbotResponse({ text, index, responding }) {
  return (
    <>
      <div className="self-start p-4 max-w-xl mx-auto bg-[#f0faf9] rounded-lg shadow flex">
        <SmartToyIcon />
        <p className="text-black ml-2 font-Onest">
          Hi my name is PaiSha Chatbot Hi Hi my name is PaiSha Chatbot my name
          is PaiSha Chatbot Hi my name is PaiSha Chatbot Hi my name is PaiSha
          Chatbot Hi my name is PaiSha Chatbot Hi my name is PaiSha Chatbot
        </p>
      </div>
    </>
  );
}

export default ChatbotResponse;
