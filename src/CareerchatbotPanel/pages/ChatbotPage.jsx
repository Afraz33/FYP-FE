import { useState } from "react";
import ConversationFlow from "../components/conversationFlow/ConversationFlow";
import Career from "../components/career/Career";
function ChatbotPage() {
  const [Personality, setPersonality] = useState("");
  const [viewCareers, setViewCareers] = useState(false);

  console.log(Personality);
  return (
    <div className="bg-[#eeebe7] min-h-screen max-h-fit p-8">
      {viewCareers === false ? (
        <ConversationFlow
          setPersonality={setPersonality}
          setViewCareers={setViewCareers}
        />
      ) : (
        <Career Personality={Personality} />
      )}
    </div>
  );
}

export default ChatbotPage;
