import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../layout/Navbar/Navbar";
const LandingPage = () => {
  return (
    <div className="bg-[#FFD666] min-h-screen p-10">
      <header className="flex justify-between items-center mb-10">
        {/* <div className="text-2xl font-bold">Sample</div> */}
        {/* <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Explore Universities
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Career Advisor
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Merit Trends
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Expert Consultation
              </a>
            </li>
            <li>
              <button className="bg-blue-500 text-white px-5 py-2 rounded">
                Sign Up
              </button>
            </li>
          </ul>
        </nav> */}

        <div className="bg-[#F1F0F4] p-4 px-10 shadow-md rounded-full flex justify-between items-center w-[95%] mx-auto">
          <span className="font-bold text-3xl">PaiSHA</span>

          <div className="flex gap-4">
            <button className="bg-black text-white rounded-full px-4 text-lg py-2 w-20 hover:bg-[#B2A1FE] hover:text-black">
              <Link to="/login">Login</Link>
            </button>
            <button className="bg-black text-white rounded-full px-4 text-lg py-2 w-20 hover:bg-[#B2A1FE] hover:text-black">
              <Link to="/signup">Signup</Link>
            </button>
          </div>
        </div>
      </header>

      <main className="text-center">
        <h1 className="text-4xl font-bold mb-6 w-2/3 mx-auto">
          Talk to our AI chat bot Sarah to know about the career that suits your
          personality
        </h1>
        {/* <p className="text-xl mb-8 w-3/5 mx-auto">
          Get deep analysis of your personality by talking to our chat bot and
          get to know about the best career that suits your personality. Our
          system is specifically designed to help you making a decision about
          your professional life.
        </p> */}
        <button className="bg-black hover:bg-[#F1F0F4] hover:text-black rounded-lg text-white px-10 py-3 rounded">
          Talk to Sarah
        </button>

        <section className="mt-20">
          <h2 className="text-4xl font-bold mx-auto mb-10 ">Our features</h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="p-6 bg-gray-700 text-white shadow rounded rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Explore Universities</h2>
              <p>
                Interact with our AI chatbot to explore and find the best
                universities tailored for you.
              </p>
            </div>
            <div className="p-6 bg-gray-700 text-white shadow rounded rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Career Recommendation</h2>
              <p>
                Get personalized career recommendations based on your interests,
                skills, and passions.
              </p>
            </div>
            <div className="p-6 bg-gray-700 text-white shadow rounded rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Expert Consultation</h2>
              <p>
                Connect with industry experts for professional guidance and
                insights.
              </p>
            </div>
            <div className="p-6 bg-gray-700 text-white shadow rounded rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Merit Calculation</h2>
              <p>
                Calculate your merit and understand your standing in university
                applications.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-20 text-center text-gray-700">
        © 2023 Sample. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
