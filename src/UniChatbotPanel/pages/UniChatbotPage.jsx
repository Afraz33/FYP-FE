import ConversationFlow from "../components/conversationFlow/ConversationFlow";
import SampleQuery from "../components/sampleQuery/SampleQuery";
function UniChatbotPage() {
  return (
    <div className="bg-white  min-h-screen max-h-fit py-8 px-20 ">
      <div className="bg-[#f2f2f2] h-full rounded-xl px-8 py-4 flex gap-5">
        <ConversationFlow />
        <div className="flex flex-col gap-4 w-[33%] ">
          <div className="h-2/3 bg-[#ffffff] rounded-3xl p-4 gap-5 flex flex-col">
            <SampleQuery />
            <SampleQuery />
            <SampleQuery />
          </div>
          <div className="bg-[#5ddf9b] rounded-3xl h-[30%]"></div>
        </div>
      </div>
    </div>
  );
}

export default UniChatbotPage;
