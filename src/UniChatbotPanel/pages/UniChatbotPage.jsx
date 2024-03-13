import { useState } from "react";
import ConversationFlow from "../components/conversationFlow/ConversationFlow";
import SampleQuery from "../components/sampleQuery/SampleQuery";
import Navbar from "../../studentPanel/components/Navbar";
import Footer from "../../studentPanel/components/Footer";
const questions = [
  "What degree programs does fast national university offer?",
  "What is the semester fee of fast national university?",
  "Name the departments of Rawalpindi Medical University.",
  "What entrance test does National University of Medical Sciences take?",
  "What's the semester fee of Lahore University of Management Sciences?",
  "I have an interest in architecture. Recommend me some universities that offer BS architecture.",
  "Is financial aid available in fast national university?",
  "I live in Rawalpindi so I want to join a university which is in Rawalpindi. So tell me those universities which are in Rawalpindi.",
  "I got admission in BS Computer Science in both fast national university and in National University of Science and Technology. Which university should I choose?",
  "I got admission in BS Computer Science in both fast national university and in National University of Science and Technology. Which university should I choose? I want a university in which financial aid is available and transportation is also available.",
  "Which university has a lower semester fee, Aga Khan University or Rawalpindi Medical University?",
  "I have an interest in zoology so recommend me those universities that have the department of zoology.",
];

function UniChatbotPage() {
  const [answer, setAnswer] = useState("");
  return (
    <>
      <Navbar />
      <div className="bg-white  min-h-screen max-h-fit py-8 px-20 ">
        <div className="bg-[#f2f2f2] h-full rounded-xl px-8 py-4 flex gap-5">
          <div className="flex flex-col gap-4 w-[33%]  h-[86vh] ">
            <div className="h-full bg-[#ffffff] rounded-3xl p-8  gap-6 flex flex-col overflow-y-auto">
              <p className="text-2xl font-Onest">Sample Queries</p>
              {questions.map((question, index) => (
                <SampleQuery question={question} setAnswer={setAnswer} />
              ))}
            </div>
          </div>
          <ConversationFlow answer={answer} setAnswer={setAnswer} />
        </div>
      </div>
    </>
  );
}

export default UniChatbotPage;
