import { React, useState } from "react";
import { Link } from "react-router-dom";
// import Navbar from "../expertPanel/layout/Navbar/Navbar";
import Navbar from "./Components/Navbar";
import { FaUniversity } from "react-icons/fa";
import { FaRocketchat, FaChessKing, FaCircleInfo } from "react-icons/fa6";
import "./animations.css";
import { useInView } from "react-intersection-observer";
import expertImage from "../expertPanel/assets/images/expertNew.png";
import mission from "../expertPanel/assets/images/mission.jpg";
import MainHeader from "../LandingPage/assets/hero-section-main.png";

import header_bg from "../LandingPage/assets/header_bg.webp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const CourseCard = ({ title, content, icon }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Percentage of the element that needs to be visible
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col  p-6 rounded-2xl shadow-4xl bg-[#1ab69d] hover:bg-gray-200 cursor-pointer  space-y-4 border-black border-2
                  ${inView ? "animate-slideUp" : "opacity-0"}`}
    >
      <div className="flex items-center space-x-3">
        <div className="bg-gray-300 p-3 rounded-full">
          <span className="text-xl font-bold">{icon}</span>
        </div>
        <h2 className="text-xl font-bold text-black font-Onest hover:text-black">
          {title}
        </h2>
      </div>
      <p className="font-Onest text-black">{content}</p>
    </div>
  );
};

const LandingPage = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

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
      {/* <header className="flex justify-between items-center mb-10">
        <div className="bg-[#F1F0F4] p-4 px-10 shadow-md rounded-full flex justify-between items-center w-[95%] mx-auto">
          <span className="font-semibold text-3xl font-Onest">PaiSHA</span>

          <div className="flex gap-4">
            <button className="bg-black text-white rounded-full px-4 text-lg py-2 w-20 hover:bg-white hover:text-black font-Onest hover:border hover:border-black">
              <Link to="/login">Login</Link>
            </button>
            <button className="bg-black text-white rounded-full px-4 text-lg py-2 w-20 hover:bg-white hover:text-black font-Onest hover:border hover:border-black">
              <Link to="/signup">Signup</Link>
            </button>
          </div>
        </div>
      </header> */}
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
                Find your dream
                <span
                  className=" font-bold reveal-delay-1"
                  style={{ color: "#ee4a62" }}
                >
                  Careers
                </span>
                , suitable
                <span
                  className=" font-bold reveal-delay-2"
                  style={{ color: "#ee4a62" }}
                >
                  Universities
                </span>{" "}
                through our
                <span className="reveal-delay-3" style={{ color: "#1ab69d" }}>
                  Personalized Recommendations
                </span>
              </h1>

              <p className="text-xl text-left h-fit reveal-effect reveal-delay-1 font-Onest">
                At PaiSHA, we believe everyone deserves a personalized
                recommendation according to their needs and personality when it
                comes to choosing your academic life.
              </p>
              <div className="flex gap-x-4">
                <button className="bg-[#1ab69d] hover:bg-[#ee4a62] rounded-lg w-40 h-16 text-white px-4 py-0 font-Onest ">
                  Explore More
                  <ArrowForwardIcon
                    sx={{ color: "white", marginLeft: "6px" }}
                  />
                </button>
              </div>
            </div>
            <img className="mt-20" src={MainHeader} alt="mainImage"></img>
          </div>
        </div>
        <section className="Features py-8 ">
          <div className=" p-8  ">
            <h1 className="text-4xl font-bold font-Onest mb-10 w-[60%] mx-auto ">
              We offer various innovative features to help you make the right
              decision
            </h1>
            <div className="flex flex-wrap justify-center items-stretch gap-4">
              {cardData.map((card, index) => (
                <div className="w-full md:w-1/2" key={index}>
                  {" "}
                  {/* This ensures that on medium devices and larger, only two cards will be 50% width each, thus making two per row */}
                  <CourseCard
                    title={card.title}
                    content={card.content}
                    icon={card.icon}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="3rdSection  mt-10 ">
          <div className="flex flex-col items-center justify-center py-8  ">
            <h1 className="text-5xl font-bold mb-4 font-Onest">
              We believe <span className="text-purple-500">🌼💛</span> that
              everyone
            </h1>
            <h2 className="text-5xl font-bold mb-4  font-Onest">
              should take informed decision{" "}
              <span className="text-yellow-400">⭐</span>
            </h2>
            <h3 className="text-5xl font-bold font-Onest">
              for
              <span className="text-[#1ab69d]"> quality education </span>{" "}
              without any doubts.
            </h3>
          </div>
        </section>
        <section className="Expert">
          <div className="flex bg-[#1ab69d] p-12  mt-20 mb-20">
            <img
              src={expertImage}
              alt="Professional Guidance"
              className="w-1/2 rounded-xl mr-12 mt-10 mb-10"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 text-left font-Onest">
                Get guidance from working professionals
              </h2>
              <p className="text-lg mb-6 text-left font-Onest">
                PaiSHA is designed to be flexible and convenient. You can get
                university information from our AI chatbot Sarah. You can also
                get career recommendations based on your interests, skills, and
                passions. You can also connect with industry experts for
                professional guidance and insights.
              </p>
              <button className="bg-[#ee4a62] text-white font-semibold px-6 py-2 rounded-full w-40 hover:text-black hover:bg-gray-200 font-Onest hover:border-black hover:border">
                <Link to="/signup">Consult Now</Link>
              </button>
            </div>
          </div>
        </section>
        <section className="Expert">
          <div className="flex bg-white p-12 rounded-xl mt-20 mb-20">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4 text-left  font-Onest">
                Our Story
              </h2>
              <p className="text-lg mb-6 text-left font-Onest">
                PaiSHA is on a mission to help students make informed decisions.
                Many high school graduates in Pakistan are consult with their
                friends and Families for career advice. This is not the right
                way to make decisions about your professional life. We are here
                to help you make the right decision.
              </p>
              <p className="text-lg mb-6 text-left font-Onest">
                The system is being developed by a team of highly motivated
                students of FAST Islamabad, Pakistan. We are on a mission to
                help students make informed decisions so that Pakistan can have
                a better future.
              </p>
            </div>
            <img
              src={mission}
              alt="Professional Guidance"
              className="w-1/2 rounded-xl mr-10 mt-10 mb-10 ml-20 object-contain h-96 "
            />
          </div>
        </section>
        <section className="FAQ mt-10">
          <div className="p-8   mb-20">
            <h1 className="text-4xl  mb-6 font-bold font-Onest ">
              Frequently Asked Questions
            </h1>
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
            <div className="bg-gray-900 text-gray-400 p-10 ">
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

export default LandingPage;
