import { useState } from "react";
import ConversationFlow from "../components/conversationFlow/ConversationFlow";
import Career from "../components/career/Career";
import ChatbotModal from "../components/Modal/Modal";
function ChatbotPage() {
  const [Personality, setPersonality] = useState("");
  const [viewCareers, setViewCareers] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);
  console.log(Personality);
  return (
    <>
      <ChatbotModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      {!modalVisible && (
        <div className="bg-white min-h-screen max-h-fit p-8">
          {viewCareers === false ? (
            <ConversationFlow
              setPersonality={setPersonality}
              setViewCareers={setViewCareers}
            />
          ) : (
            <Career Personality={Personality} />
          )}
        </div>
      )}
    </>
  );
}

export default ChatbotPage;
