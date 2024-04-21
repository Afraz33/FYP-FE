import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Navbar from "../expertPanel/layout/Navbar/Navbar";
import Navbar from "../components/Navbar";
import { FaUniversity } from "react-icons/fa";
import { FaRocketchat, FaChessKing, FaCircleInfo } from "react-icons/fa6";
import ExpertSection from "../components/ExpertSection";
import { useInView } from "react-intersection-observer";

import header_bg from "../assets/header_bg.webp";
import MainHeader from "../assets/student-hero.png";
import student from "../assets/student.png";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const CourseCard = ({ title, content, icon }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Percentage of the element that needs to be visible
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col bg-white p-6 rounded-2xl shadow-md space-y-4 border-black border-2
                  ${inView ? "animate-slideUp" : "opacity-0"}`}
    >
      <div className="flex items-center space-x-3">
        <div className="bg-gray-300 p-3 rounded-full">
          <span className="text-xl font-bold">{icon}</span>
        </div>
        <h2 className="text-xl font-bold font-Onest">{title}</h2>
      </div>
      <p className="font-Onest">{content}</p>
    </div>
  );
};

const StudentLandingPage = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const navigate = useNavigate();
  const cardData = [
    {
      title: "Explore Universities",
      content:
        "Interact with our AI chatbot to explore and find the best universities tailored for you.",
      icon: <FaUniversity />,
    },
    {
      title: "Career Recommendation",
      content:
        "Get personalized career recommendations based on your interests, skills, and passions.",
      icon: <FaRocketchat />,
    },
    {
      title: "Expert Consultation",
      content:
        "Connect with industry experts for professional guidance and insights.",
      icon: <FaChessKing />,
    },
    {
      title: "Latest Information",
      content:
        "Get all latest information about universities and their admission criteria.",
      icon: <FaCircleInfo />,
    },
  ];

  const questions = [
    {
      question: "How to book meeting with the experts?",
      answer:
        "You have to login. After this select a expert of your choice and book a meeting with him/her.",
    },
    {
      question: "How to get university information?",
      answer:
        "Our chatbot Sarah will help you in this regard. Sarah contains all the information regarding universities. You can ask multiple questions for Sarah for example fee of a university, admission criteria, etc.",
    },
    {
      question: "How to find a suitable career?",
      answer:
        "For this you have to answer some questions honestly. We will analyse your personality and will suggest you suitable careers based on your personality and universities offering those degrees.",
    },
    {
      question: "How is PaiSHA helpful for Pakistani students?",
      answer:
        "We have stored all inofrmation of Pakistani universities and career recommendation for high school graduates so that they can take informed decision based on their personality",
    },
  ];

  return (
    <div className=" min-h-screen ">

      <Navbar />

      <main className="text-center">
       
        <div
          className="bg-gray-200"
          style={{ backgroundImage: `url(${header_bg})` }}
        >
          <div className="flex  w-[80%]   mx-auto   ">
            <div className="flex flex-col gap-y-9">
              <h1
                className="mt-40 font-semibold text-left font-Onest h-fit reveal-effect"
                style={{ fontSize: "50px", lineHeight: "55px" }}
              >
                Find your dream {""}
                <span
                  className=" font-bold reveal-delay-1"
                  style={{ color: "#ee4a62" }}
                >
                  Careers
                </span>
                , suitable {""}
                <span
                  className=" font-bold reveal-delay-2"
                  style={{ color: "#ee4a62" }}
                >
                  Universities
                </span>{" "}
                through our {""}
                <span className="reveal-delay-3" style={{ color: "#1ab69d" }}>
                  Personalized Recommendations
                </span>
              </h1>

              <p className="text-xl text-left h-fit reveal-effect reveal-delay-1 font-Onest">
                At PaiSHA, we believe everyone deserves a personalized
                recommendation according to their needs and personality when it
                comes to choosing your academic life.
              </p>
              {/* <div className="flex gap-x-4">
                <button className="bg-[#1ab69d] hover:bg-[#ee4a62] rounded-lg w-40 h-16 text-white px-4 py-0 font-Onest ">
                <Link to="/student-login">
                  Explore More
                  </Link>
                  <ArrowForwardIcon
                    sx={{ color: "white", marginLeft: "6px" }}
                  />
                </button>
              </div> */}
            </div>
            <img className="mt-20" src={MainHeader} alt="mainImage"></img>
          </div>
        </div>

        <div className="flex flex-col items-center font-Onest bg-gray-100 px-4 py-12">
          <div className=" p-8 rounded-lg  text-center  w-[70%] mx-auto">
            <h1 className="text-5xl leading-tight font-bold mb-4 w-[80%] mx-auto">
              Talk to our AI chat bot Sarah to know about the career that suits
              your personality
            </h1>
            <p className="mb-4 leading-6 w-[62%] mx-auto py-10 text-xl">
              Get deep analysis of your personality by talking to our chat bot
              and get to know about the best career that suits your personality.
              Our system is specifically designed to help you making a decision
              about your professional life.
            </p>
            <button
              onClick={() => {
                navigate("/chatbot");
              }}
              className="bg-[#1ab69d] hover:bg-[#ee4a62] rounded-lg w-40 h-14 text-white px-4 py-0  "
            >
              Talk to Sarah
              <ArrowForwardIcon sx={{ color: "white", marginLeft: "6px" }} />
            </button>
          </div>
        </div>
        <ExpertSection></ExpertSection>

        <section className="flex flex-wrap justify-center items-center bg-white p-8 font-Onest mt-24 ">
      <div className="w-full md:w-1/2 p-4 flex justify-center">
        <img
          src={student}
          alt="Learning"
          className="rounded-lg shadow-lg"
        />
        {/* Placeholder for video thumbnail or player */}
        {/* <div className="absolute w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center -mt-20 ml-20">
          <span className="text-2xl font-bold">Play</span>
        </div> */}
      </div>
      <div className="w-full md:w-1/2 p-4">
        <div className="mb-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Learn & Grow Your Skills
          </h2>
          <p className="text-gray-600 text-lg">
            Grow tour skills by learning from the experts and by getting to know about your personality.
            See your personality and career recommendations in your profile and suitable universities for you.
          </p>
        </div>
        <ul className="list-none space-y-4">
          <li className="flex items-center">
            <span className="text-[#1ab69d] mr-2">✓</span> Expert Consultancy
          </li>
          <li className="flex items-center">
            <span className="text-[#1ab69d] mr-2">✓</span> Career Recommendation
          </li>
          <li className="flex items-center">
            <span className="text-[#1ab69d] mr-2">✓</span> University Information
          </li>
        </ul>
        <div className="mt-6">
          {/* <div className="inline-block text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-full shadow-sm">
            29+ Wonderful Awards
          </div> */}
        </div>
      </div>
    </section>

        <section className="FAQ">
          <div className="p-8  mt-10 mb-20">
            <h1 className="text-4xl mb-6 font-Onest ">FAQ</h1>
            <div className=" p-6 rounded-lg shadow-md font-Onest font-semibold">
              {questions.map((item, index) => (
                <div key={index} className="mb-4">
                  <button
                    onClick={() =>
                      setOpenQuestion(openQuestion === index ? null : index)
                    }
                    className="flex justify-between items-center w-full bg-[#1ab69d] p-4 rounded-2xl"
                  >
                    {item.question}
                    <span>{openQuestion === index ? "−" : "+"}</span>
                  </button>
                  {openQuestion === index && (
                    <div className="mt-2 bg-gray-200 p-4  rounded-2xl">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <footer>
            <div className="bg-[#222222] text-gray-400 p-10">
              <div className="max-w-screen-xl mx-auto flex justify-between">
                <div className="text-white text-xl font-bold mb-4 font-Onest">
                  PaiSHA
                </div>

                <div className="space-y-2 font-Onest">
                  <h2 className="text-white font-semibold mb-2 ">Features</h2>
                  <ul>
                    <li>University Information</li>
                    <li>Career Recommendation</li>
                    <li>Expert Consultancy</li>
                  </ul>
                </div>
                <div className="space-y-2 font-Onest">
                  <h2 className="text-white font-semibold mb-2">Info</h2>
                  <ul>
                    <li>About Us</li>
                    <li>Expert Information</li>
                    <li>FAQs</li>
                  </ul>
                </div>
                <div className="space-y-2 font-Onest">
                  <h2 className="text-white font-semibold mb-2">Legal</h2>
                  <ul>
                    <li>Terms & Conditions</li>

                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>

              <div className="mt-10 text-center text-white font-Onest">
                © PaiSHA 2023
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default StudentLandingPage;
