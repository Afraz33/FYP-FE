import ChatbotResponse from "../chatbotResponse/ChatbotResponse";
import UserAnswer from "../userAnswer/userAnswer";
import UserDialougeBox from "../userDialougeBox/userDialougeBox";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useState } from "react";

function ConversationFlow({ setPersonality, setViewCareers }) {
  const initialQuestions = [
    {
      Question:
        "How do you feel like testing the quality of parts before shipment? ",
      Tag: "R",
      Score: 10,
      Answer: "",
    },
    {
      Question: "How do you feel like laying brick or tile?",
      Tag: "R",
      Score: 0,
      Answer: "No",
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
      Question:
        "How do you feel like operating a grinding machine in a factory?",
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
      Question:
        "How do you feel like studying the structure of the human body?",
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
      Question:
        "How do you feel like selling merchandise at a department store?",
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
  const [index, setIndex] = useState(47);
  const [questions, setQuestions] = useState(initialQuestions);

  console.log(questions);
  const handleUserAnswer = async (answer) => {
    // Update the answer for the current index
    const updatedQuestions = [...questions];
    updatedQuestions[index].Answer = answer;

    // Prepare the data to be sent in the POST request
    const postData = {
      review: answer,
    };

    try {
      // Make the POST request to the server
      const response = await fetch(
        "http://localhost:5001/predict_sentiment_for_personality",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();

      // Update the score attribute of the current question
      updatedQuestions[index].Score = responseData.score;
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    // Set the updated questions array
    setQuestions(updatedQuestions);

    // Increment the index
    setIndex(index + 1);
  };

  return (
    <>
      <div className="w-2/3 mx-auto h-fit flex flex-col gap-y-12 content-between py-24">
        {/* Render all previous questions and their answers */}
        {index <= 47 && (
          <>
            {questions.slice(0, index).map((prevQuestion, prevIndex) => (
              <>
                <div className="self-start w-fit h-full">
                  <ChatbotResponse key={index} text={prevQuestion.Question} />
                </div>
                {prevQuestion.Answer !== "" && (
                  <div className="self-end w-fit h-full">
                    <UserAnswer key={index} text={prevQuestion.Answer} />
                  </div>
                )}
              </>
            ))}
          </>
        )}

        {/* Render the current question */}
        {index < questions.length && (
          <div className="self-start w-fit h-full">
            <ChatbotResponse
              key={index}
              text={questions[index].Question}
              index={index}
            />
          </div>
        )}
      </div>
      {index <= 47 ? (
        <UserDialougeBox key={index} handleUserAnswer={handleUserAnswer} />
      ) : (
        <SubmitButton
          setViewCareers={setViewCareers}
          setPersonality={setPersonality}
          questions={questions}
        >
          View Your Personality
        </SubmitButton>
      )}
    </>
  );
}

export default ConversationFlow;
