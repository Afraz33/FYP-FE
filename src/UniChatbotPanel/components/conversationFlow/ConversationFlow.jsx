import { useState, useRef, useEffect } from "react";
import UserDialougeBox from "../userDialougeBox/userDialougeBox";
import ChatbotResponse from "../chatbotResponse/ChatbotResponse";
import UserAnswer from "../userAnswer/userAnswer";
import Styles from "./ConversationFlow.module.css";
import university from "../../assets/university.png";
import { useNavigate } from "react-router-dom";
import ChatbotResponseSkeleton from "../chatbotResponse/ChatbotResponseSkeleton";
function ConversationFlow({ answer, setAnswer }) {
  // Define conversation flow as an array of objects
  const [conversationFlow, setConversationFlow] = useState([]);
  const [responding, setResponding] = useState(true);
  const navigate = useNavigate();

  const handleUserAnswer = (answer) => {
    const updatedFlow = [
      ...conversationFlow,
      { text: answer, type: "userQuery" },
    ];

    setConversationFlow(updatedFlow);
    setResponding(true);
    fetch("http://localhost:5001/university_chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: answer }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Push chatbot's response to the conversation flow
        const chatbotResponse = {
          text: data.answer,
          type: "chatbotResponse",
        };

        const updatedFlowWithResponse = [...updatedFlow, chatbotResponse];
        setConversationFlow(updatedFlowWithResponse);
        setResponding(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const overFlow = conversationFlow.length;
  function getRandomSize() {
    return Math.floor(Math.random() * 3); // Generates random number between 0 and 2
  }

  const containerRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom when conversationFlow or responding changes
    scrollToBottom();
  }, [conversationFlow, responding]);

  const scrollToBottom = () => {
    if (containerRef.current) {
      const scrollHeight = containerRef.current.scrollHeight;
      const scrollTop = containerRef.current.scrollTop;
      const clientHeight = containerRef.current.clientHeight;
      const scrollDifference = scrollHeight - scrollTop - clientHeight;
      const scrollStep = Math.ceil(scrollDifference / 20); // Adjust the divisor to control the speed

      if (scrollDifference > 0 && scrollDifference < clientHeight) {
        // Only auto-scroll if the user is near the bottom
        const animateScroll = () => {
          if (containerRef.current.scrollTop < scrollHeight - clientHeight) {
            containerRef.current.scrollTop += scrollStep;
            setTimeout(animateScroll, 20); // Adjust the interval for smoother or faster scrolling
          } else {
            containerRef.current.scrollTop = scrollHeight - clientHeight;
          }
        };

        animateScroll();
      }
    }
  };

  return (
    <div className="w-[75%] h-[86vh] bg-[#ffffff] flex flex-col gap-y-12 content-between  rounded-3xl relative border-2 border-gray-300  shadow-2xl ring-blue-500 ring-opacity-100">
      <div
        ref={containerRef}
        className={`flex w-full h-max-[86vh] flex-col justify-between gap-10 px-20 ${
          overFlow !== 0 ? "overflow-y-auto" : ""
        } py-16 pb-20`}
      >
        {conversationFlow.length === 0 && (
          <div className="flex gap-4 h-20 w-[100%] mt-24 ">
            <img className="w-14 h-14" src={university} alt="university"></img>
            <p className="text-black font-Onest text-2xl font-bold">
              Get started with your university hunt with over 70+ universities
              data
            </p>
          </div>
        )}
        {conversationFlow.map((item, index) => (
          <div className="self-start w-fit h-full " key={index}>
            {item.type === "userQuery" ? (
              <UserAnswer text={item.text} />
            ) : (
              <>
                <ChatbotResponse text={item.text} />
              </>
            )}
            {responding && index === conversationFlow.length - 1 && (
              <ChatbotResponseSkeleton size={getRandomSize()} />
            )}
          </div>
        ))}
      </div>
      {conversationFlow.length === 0 && (
        <div className="  flex flex-row flex-wrap  w-[80%]   m-auto mb-96  justify-center gap-x-4 gap-y-2">
          <div
            onClick={() => {
              navigate("/chatbot");
            }}
            className="bg-gray-300 rounded-lg p-2 w-[43%]  hover:bg-[#f0faf9] cursor-pointer h-20 text flex items-center justify-center  border border-black border-solid"
          >
            <p className="font-Onest text-sm font-semibold  text-center ">
              Didn't try our personality assessment? Try now
            </p>
          </div>
          <div
            onClick={() => {
              navigate("/search-experts");
            }}
            className="bg-gray-300 hover:bg-[#f0faf9] rounded-lg p-2 w-[43%] cursor-pointer h-20 text flex items-center justify-center border border-black border-solid"
          >
            <p className="font-Onest font-semibold text-sm  text-center">
              Interested in talking to experts of your field? Book Consultation
              now
            </p>
          </div>

          <div
            onClick={() => {
              navigate("/university-rankings");
            }}
            className="bg-gray-300 rounded-lg p-2 w-[43%] hover:bg-[#f0faf9] cursor-pointer h-20 text flex items-center justify-center border border-black border-solid"
          >
            <p className="font-Onest font-semibold text-sm  text-center">
              Want to view university rankings? Click here
            </p>
          </div>
          <div
            onClick={() => {
              navigate("/merit-calculator");
            }}
            className="bg-gray-300 rounded-lg p-2 w-[43%] hover:bg-[#f0faf9] cursor-pointer h-20 text flex items-center justify-center border border-black border-solid"
          >
            <p className="font-Onest font-semibold text-sm  text-center">
              Find out what your merit is? Calculate now !
            </p>
          </div>
        </div>
      )}
      <UserDialougeBox
        handleUserAnswer={handleUserAnswer}
        answer={answer}
        setAnswer={setAnswer}
      />
    </div>
  );
}

export default ConversationFlow;
