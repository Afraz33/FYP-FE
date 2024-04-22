import ChatbotResponse from "../chatbotResponse/ChatbotResponse";
import UserAnswer from "../userAnswer/userAnswer";
import UserDialougeBox from "../userDialougeBox/userDialougeBox";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useState, useEffect } from "react";
import Styles from "./ConversationFlow.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { json, useNavigate } from "react-router-dom";
import Steps from "../steps/steps";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#1ab69d",
  border: "2px solid bg-[#1ab69d]",
  borderRadius: 8,
  boxShadow: 24,
  p: 4,
};

const initialQuestions = [
  {
    Question:
      "How do you feel like testing the quality of parts before shipment? ",
    Tag: "R",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like laying brick or tile?",
    Tag: "R",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like working on an offshore oil-drilling rig?",
    Tag: "R",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like assembling electronic parts?",
    Tag: "R",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like operating a grinding machine in a factory?",
    Tag: "R",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like fixing a broken faucet?",
    Tag: "R",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like assembling products in a factory?",
    Tag: "R",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like installing flooring in houses?",
    Tag: "R",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like studying the structure of the human body?",
    Tag: "I",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like studying animal behavior?",
    Tag: "I",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like doing research on plants or animals?",
    Tag: "I",
    Score: 0,
    Answer: "",
  },
  {
    Question:
      "How do you feel like developing a new medical treatment or procedure?",
    Tag: "I",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like conducting biological research?",
    Tag: "I",
    Score: 0,
    Answer: "",
  },
  {
    Question:
      "How do you feel like studying whales and other types of marine life?",
    Tag: "I",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like working in a biology lab?",
    Tag: "I",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like making a map of the bottom of an ocean?",
    Tag: "I",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like conducting a musical choir?",
    Tag: "A",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like directing a play?",
    Tag: "A",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like designing artwork for magazines?",
    Tag: "A",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like writing a song?",
    Tag: "A",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like writing books or plays?",
    Tag: "A",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like playing a musical instrument?",
    Tag: "A",
    Score: 0,
    Answer: "",
  },
  {
    Question:
      "How do you feel like performing stunts for a movie or television show?",
    Tag: "A",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like designing sets for plays?",
    Tag: "A",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like giving career guidance to people?",
    Tag: "S",
    Score: 0,
    Answer: "",
  },
  {
    Question:
      "How do you feel like doing volunteer work at a non-profit organization?",
    Tag: "S",
    Score: 0,
    Answer: "",
  },
  {
    Question:
      "How do you feel like helping people who have problems with drugs or alcohol?",
    Tag: "S",
    Score: 0,
    Answer: "",
  },
  {
    Question:
      "How do you feel like teaching an individual an exercise routine?",
    Tag: "S",
    Score: 0,
    Answer: "",
  },
  {
    Question:
      "How do you feel like helping people with family-related problems?",
    Tag: "S",
    Score: 0,
    Answer: "",
  },
  {
    Question:
      "How do you feel like supervising the activities of children at a camp?",
    Tag: "S",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like teaching children how to read?",
    Tag: "S",
    Score: 0,
    Answer: "",
  },
  {
    Question:
      "How do you feel like helping elderly people with their daily activities?",
    Tag: "S",
    Score: 0,
    Answer: "",
  },
  {
    Question:
      "How do you feel like selling restaurant franchises to individuals?",
    Tag: "E",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like selling merchandise at a department store?",
    Tag: "E",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like managing the operations of a hotel?",
    Tag: "E",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like operating a beauty salon or barber shop?",
    Tag: "E",
    Score: 0,
    Answer: "",
  },
  {
    Question:
      "How do you feel like managing a department within a large company?",
    Tag: "E",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like managing a clothing store?",
    Tag: "E",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like selling houses?",
    Tag: "E",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like running a toy store?",
    Tag: "E",
    Score: 0,
    Answer: "",
  },
  {
    Question:
      "How do you feel like generating the monthly payroll checks for an office?",
    Tag: "C",
    Score: 0,
    Answer: "",
  },
  {
    Question:
      "How do you feel like inventorying supplies using a hand-held computer?",
    Tag: "C",
    Score: 0,
    Answer: "",
  },
  {
    Question:
      "How do you feel like using a computer program to generate customer bills?",
    Tag: "C",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like maintaining employee records?",
    Tag: "C",
    Score: 0,
    Answer: "",
  },
  {
    Question:
      "How do you feel like computing and recording statistical and other numerical data?",
    Tag: "C",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like operating a calculator?",
    Tag: "C",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like handling customers' bank transactions?",
    Tag: "C",
    Score: 0,
    Answer: "",
  },
  {
    Question: "How do you feel like keeping shipping and receiving records?",
    Tag: "C",
    Score: 0,
    Answer: "",
  },
];
function ConversationFlow({ setPersonality, setViewCareers, Personality }) {
  const [index, setIndex] = useState(0);

  const [responding, setResponding] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [processingMessage, setProcessingMessage] = useState("");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [studentPersonality, setStudentPersonality] = useState("");
  const navigate = useNavigate();
  // Array of messages to display
  const processingMessages = [
    "Analyzing Personality",
    "Calculating Results",
    "Finalizing Analysis",
    "Compiling Data",
    "Generating Insights",
    // Add more messages as needed
  ];

  // Recursive function to handle message display

  const displayNextMessage = (index) => {
    if (index < processingMessages.length) {
      setProcessingMessage(processingMessages[index]);
      setTimeout(() => displayNextMessage(index + 1), 2000); // Change delay as needed
    } else {
      setProcessing(false);
      setViewCareers(true);

      // Here you can proceed to show results or next steps
    }
  };

  const startProcessing = () => {
    setProcessing(true);
    setCurrentMessageIndex(0);
    displayNextMessage(0);
  };

  const getChatHistoryFromLocalStorage = () => {
    const storedChatHistory = JSON.parse(localStorage.getItem("chatHistory"));
    if (storedChatHistory) return storedChatHistory;
    else return null;
  };

  // Initial state using localStorage or a default value
  const [chatHistory, setChatHistory] = useState(
    getChatHistoryFromLocalStorage() || [
      {
        text: "How do you feel like testing the quality of parts before shipment? ",
        type: "question",
      },
    ]
  );
  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
  }, [chatHistory]);
  const [questions, setQuestions] = useState(initialQuestions);
  const [isFollowUp, setIsFollowUp] = useState(-1);
  console.log(questions);
  const handleUserAnswer = async (answer) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].Answer = answer;
    setChatHistory((currentHistory) => [
      ...currentHistory,
      {
        text: updatedQuestions[index].Answer,
        type: "answer",
      },
    ]);
    // localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
    const postData = {
      text: answer,
      sequence_number: index,
    };
    setResponding(true);
    try {
      const response = await fetch("http://localhost:5001/analyze_text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData.message);
      updatedQuestions[index].Score = responseData.score;

      // Add the chatbot's response if the answer is irrelevant
      if (responseData.message === "Not Relevant") {
        setChatHistory((currentHistory) => [
          ...currentHistory,
          {
            text: "I didn't understand that. Could you please rephrase?",
            type: "question",
          },
        ]);
        // localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
        setResponding(false);
        setIsFollowUp(index);
      } else {
        setQuestions(updatedQuestions);

        setIndex((prevIndex) => {
          // prevIndex is the correct value here
          console.log(prevIndex);
          if (prevIndex < 47) {
            setChatHistory((currentHistory) => [
              ...currentHistory,
              {
                text: updatedQuestions[prevIndex + 1].Question,
                type: "question",
              },
            ]);
          }
          setResponding(false);

          return prevIndex + 1; // Return the updated value for state
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(questions);
  console.log(chatHistory);
  return (
    <>
      <div className=" w-[60%] bg-[#f0faf9] mx-auto   overflow-auto h-[65vh]  flex  flex-col gap-y-12 content-between p-12 shadow-xl rounded-xl border border-1-[#1ab69d]">
        {/* Render chat history */}
        {chatHistory.map((item, idx) => (
          <div key={idx} className="flex w-full flex-col justify-between">
            {item.type === "question" && (
              <div className="self-start w-fit h-full">
                <ChatbotResponse
                  responding={responding}
                  index={index}
                  text={item.text}
                />
              </div>
            )}
            {item.type === "answer" && (
              <div className="self-end w-fit h-full">
                <UserAnswer text={item.text} />
              </div>
            )}
          </div>
        ))}

        {responding && (
          <div className="self-start w-fit h-full">
            <div className={Styles.dots_3}></div>{" "}
          </div>
        )}
        {/* Render the current question */}
        {/* {index < questions.length && isFollowUp !== index && (
          <div className="self-start w-fit h-full">
            <ChatbotResponse text={questions[index].Question} />
          </div>
        )} */}
      </div>

      {index < 48 ? (
        <UserDialougeBox handleUserAnswer={handleUserAnswer} />
      ) : (
        <SubmitButton
          setStudentPersonality={setStudentPersonality}
          setProcessing={setProcessing}
          setViewCareers={setViewCareers}
          setPersonality={setPersonality}
          startProcessing={startProcessing}
          questions={questions}
        >
          View Your Personality
        </SubmitButton>
      )}

      <div>
        <Modal
          open={processing}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={style}
            style={{
              display: "flex",
              gap: "2px",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyItems: "center",
                margin: "auto",
              }}
              id="modal-modal-title"
              variant="h5"
              component="h2"
            >
              <div className="font-Onest" style={{ color: "white" }}>
                {processingMessage}
              </div>

              <div style={{ marginLeft: "8px" }} class={Styles.spinner_2}></div>
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default ConversationFlow;
