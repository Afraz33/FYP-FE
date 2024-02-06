import UserDialougeBox from "../userDialougeBox/userDialougeBox";
import ChatbotResponse from "../chatbotResponse/ChatbotResponse";
import UserAnswer from "../userAnswer/userAnswer";
function ConversationFlow() {
  return (
    <div className="w-[75%] h-[86vh] bg-[#ffffff] flex flex-col gap-y-12 content-between  rounded-3xl">
      <div className="flex w-full h-max-[86vh] flex-col justify-between gap-10 px-20 overflow-y-auto py-16">
        <div className="self-start w-fit h-full ">
          <ChatbotResponse />
        </div>
        <div className="self-start w-fit h-full">
          <UserAnswer />
        </div>
        <div className="self-start w-fit h-full ">
          <ChatbotResponse />
        </div>
        <div className="self-start w-fit h-full">
          <UserAnswer />
        </div>
        <div className="self-start w-fit h-full ">
          <ChatbotResponse />
        </div>
        <div className="self-start w-fit h-full">
          <UserAnswer />
        </div>
      </div>

      <UserDialougeBox />
    </div>
  );
}

export default ConversationFlow;
