import { useState } from "react";
import UserDialougeBox from "../userDialougeBox/userDialougeBox";
import ChatbotResponse from "../chatbotResponse/ChatbotResponse";
import UserAnswer from "../userAnswer/userAnswer";
import Styles from "./ConversationFlow.module.css";

function ConversationFlow({ answer, setAnswer }) {
  // Define conversation flow as an array of objects
  const [conversationFlow, setConversationFlow] = useState([]);
  const [responding, setResponding] = useState(false);

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
        setResponding(false);
        const updatedFlowWithResponse = [...updatedFlow, chatbotResponse];
        setConversationFlow(updatedFlowWithResponse);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="w-[75%] h-[86vh] bg-[#ffffff] flex flex-col gap-y-12 content-between  rounded-3xl">
      <div className="flex w-full h-max-[86vh] flex-col justify-between gap-10 px-20 overflow-y-auto py-16 pb-20">
        {conversationFlow.map((item, index) => (
          <div className="self-start w-fit h-full " key={index}>
            {item.type === "userQuery" ? (
              <UserAnswer text={item.text} />
            ) : (
              <>
                <ChatbotResponse text={item.text} />
              </>
            )}
          </div>
        ))}
      </div>
      <UserDialougeBox
        handleUserAnswer={handleUserAnswer}
        answer={answer}
        setAnswer={setAnswer}
      />
    </div>
  );
}

export default ConversationFlow;
