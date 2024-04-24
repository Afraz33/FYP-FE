import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ConversationFlow from "../components/conversationFlow/ConversationFlow";
import Career from "../components/career/Career";
import ChatbotModal from "../components/Modal/Modal";
import Navbar from "../../studentPanel/components/Navbar";
import Footer from "../../studentPanel/components/Footer";
import BasicTimeline from "../components/progressBar/ProgressBar";
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
      <div>
        <Navbar />
      </div>

      <ChatbotModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      {/* <div className="fixed  w-[25%] bg-[white] p-4 ">
        <BasicTimeline />
      </div> */}
      {!modalVisible && (
        <div className="bg-white min-h-[90vh] max-h-fit ">
          {viewCareers === false ? (
            <div className="bg-[#f0faf9] min-h-[90vh] h-max py-6">
              <h2 className=" font-Onest text-4xl text-bold mx-auto w-fit">
                {" "}
                Analyse Your Personality
              </h2>
              <ConversationFlow
                Personality={Personality}
                setPersonality={setPersonality}
                setViewCareers={setViewCareers}
              />
            </div>
          ) : (
            <Career Personality={Personality} />
          )}
        </div>
      )}
    </>
  );
}

export default ChatbotPage;
