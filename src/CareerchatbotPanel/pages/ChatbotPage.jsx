import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ConversationFlow from "../components/conversationFlow/ConversationFlow";
import Career from "../components/career/Career";
import ChatbotModal from "../components/Modal/Modal";
function ChatbotPage() {
  const [Personality, setPersonality] = useState("");
  const [viewCareers, setViewCareers] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);
  console.log(Personality);
  const navigate = useNavigate();
  useEffect(() => {
    if (viewCareers) {
      navigate(`/personality/${encodeURIComponent(Personality)}`);
    }
  }, [viewCareers, Personality, navigate]);
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
              Personality={Personality}
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
