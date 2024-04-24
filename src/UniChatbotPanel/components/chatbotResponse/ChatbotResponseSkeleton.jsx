import { TbMessageChatbot } from "react-icons/tb";
import Styles from "./ChatbotResponse.module.css";
import chatIcon from "../../assets/profile.png";
import { Skeleton } from "@mui/material";
function ChatbotResponse({ size }) {
  if (size === 0) {
    return (
      <>
        <div className="self-start p-4 max-w-xl mx-auto bg-[#f0faf9] rounded-lg shadow flex flex-col">
          {/* <TbMessageChatbot size={70} /> Adjust the size as needed */}
          {/* <Skeleton width={"40px"} height={"60px"} /> */}
          <div className={Styles.blob1}></div>
          <Skeleton
            width={"500px"}
            height={"40px"}
            sx={{ backgroundColor: "#1ab69d" }}
          />
          <Skeleton
            width={"480px"}
            height={"40px"}
            sx={{ backgroundColor: "#1ab69d" }}
          />
          <Skeleton
            width={"420px"}
            height={"40px"}
            sx={{ backgroundColor: "#1ab69d" }}
          />
        </div>
      </>
    );
  } else if (size === 1) {
    return (
      <>
        <div className="self-start p-4 max-w-xl mx-auto bg-[#f0faf9] rounded-lg shadow flex flex-col">
          {/* <TbMessageChatbot size={70} /> Adjust the size as needed */}
          <div className={Styles.blob1}></div>
          {/* <Skeleton width={"40px"} height={"60px"} /> */}
          <Skeleton
            width={"500px"}
            height={"40px"}
            sx={{ backgroundColor: "#1ab69d" }}
          />
          <Skeleton
            width={"280px"}
            height={"40px"}
            sx={{ backgroundColor: "#1ab69d" }}
          />
        </div>
      </>
    );
  } else if (size === 2) {
    return (
      <>
        <div className="self-start p-4 max-w-xl mx-auto bg-[#f0faf9] rounded-lg shadow flex flex-col">
          {/* <TbMessageChatbot size={70} /> Adjust the size as needed */}
          {/* <Skeleton width={"40px"} height={"60px"} /> */}
          <div className={Styles.blob1}></div>
          <Skeleton
            width={"500px"}
            height={"40px"}
            sx={{ backgroundColor: "#1ab69d" }}
          />
          <Skeleton
            width={"500px"}
            height={"40px"}
            sx={{ backgroundColor: "#1ab69d" }}
          />
        </div>
      </>
    );
  }
}

export default ChatbotResponse;
