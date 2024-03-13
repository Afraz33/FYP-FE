import { useState } from "react";
import UserDialougeBox from "../userDialougeBox/userDialougeBox";
import ChatbotResponse from "../chatbotResponse/ChatbotResponse";
import UserAnswer from "../userAnswer/userAnswer";
import Styles from "./ConversationFlow.module.css";
import university from "../../assets/university.png";
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
  const overFlow = conversationFlow.length;
  return (
    <div className="w-[75%] h-[86vh] bg-[#ffffff] flex flex-col gap-y-12 content-between  rounded-3xl relative">
      <div
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
          </div>
        ))}
      </div>
      {conversationFlow.length === 0 && (
        <div className="  flex flex-row flex-wrap  w-[80%]   m-auto mb-40  justify-center gap-x-4 gap-y-2">
          <div className="bg-gray-100 rounded-lg p-2 w-[43%]  hover:bg-[#f0faf9] cursor-pointer h-20 text flex items-center justify-center  border border-black border-solid">
            <p className="font-Onest text-sm font-semibold text-center">
              Didn't try our personality assessment? Try now
            </p>
          </div>
          <div className="bg-gray-100 hover:bg-[#f0faf9] rounded-lg p-2 w-[43%] cursor-pointer h-20 text flex items-center justify-center border border-black border-solid">
            <p className="font-Onest font-semibold text-sm  text-center">
              Interested in talking to experts of your field? Book Consultation
              now
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-2 w-[43%] hover:bg-[#f0faf9] cursor-pointer h-20 text flex items-center justify-center border border-black border-solid">
            <p className="font-Onest font-semibold text-sm  text-center">
              Want to view university rankings? Click here
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-2 w-[43%] hover:bg-[#f0faf9] cursor-pointer h-20 text flex items-center justify-center border border-black border-solid">
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
