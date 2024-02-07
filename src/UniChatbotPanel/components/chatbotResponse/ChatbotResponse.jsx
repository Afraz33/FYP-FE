import { TbMessageChatbot } from "react-icons/tb";
import Styles from "./ChatbotResponse.module.css";
import chatIcon from "../../assets/profile.png";

function ChatbotResponse({ text, index, responding }) {
  return (
    <>
      <div className="self-start p-4 max-w-xl mx-auto bg-[#f0faf9] rounded-lg shadow flex">
        {/* <TbMessageChatbot size={70} /> Adjust the size as needed */}
        <img
          style={{ width: "45px", height: "45px" }}
          src={chatIcon}
          alt="chatIcon"
        ></img>
        <p className="text-black ml-2 font-Onest">{text}</p>
      </div>
    </>
  );
}

export default ChatbotResponse;
