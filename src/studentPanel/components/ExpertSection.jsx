import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import person1 from "../assets/person1.webp";
const TestimonialCard = ({ name, role, testimonial, rating }) => {
  // Assuming rating is a number from 1 to 5
  const stars = Array(rating).fill(0);
  return (
    <div className="bg-white p-6 rounded-3xl shadow-2xl text-left">
      <div
        style={{ borderRadius: "50%" }}
        className="h-32 w-32 border-4 border-[#1ab69d] mb-3"
      >
        <img style={{ borderRadius: "50%" }} src={person1} alt="person1"></img>
      </div>
      <div className="mt-4">
        <h5 className="text-xl font-bold">{name}</h5>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
      <p className="text-gray-600 mb-2 mt-3">{testimonial}</p>
      <div className="flex items-center">
        {stars.map((_, index) => (
          <span key={index} className="text-yellow-400 text-3xl">
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

const ExpertSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto flex flex-row gap-8 w-[80%]">
        <div className="text-left mb-8 w-[90%] ">
          <h2 className="text-4xl font-bold leading-10">
            View Experts on PaiSHA
          </h2>

          <div className="border-2 w-44  border-[#1ab69d] mt-5 mb-5 "></div>
          <p className="text-gray-600">
            Explore a vast array of experts across diverse fields, ready to
            offer valuable consultations tailored to your needs. Whether you
            seek guidance in technology, business, or other domains, browse
            through profiles to connect with seasoned professionals. Your
            solution is just a click away, with hundreds of experts available to
            provide immediate consultations.
          </p>
          <div className="flex gap-x-4 mt-10">
            <button className="bg-[#1ab69d] hover:bg-[#ee4a62] rounded-lg w-40 h-14 text-white px-4 py-0  ">
              View Experts
              <ArrowForwardIcon sx={{ color: "white", marginLeft: "6px" }} />
            </button>
          </div>
        </div>
        <div className="flex justify-center space-x-8 px-4 ">
          <TestimonialCard
            name="Amber Page"
            role="Developer"
            testimonial="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor enim minim veniam quis nostrud exercitation."
            rating={5}
          />
          <TestimonialCard
            name="Robert Tapp"
            role="Content Creator"
            testimonial="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor enim minim veniam quis nostrud exercitation."
            rating={5}
          />
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
