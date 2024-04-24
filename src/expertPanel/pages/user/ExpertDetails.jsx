import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import defaultProfileImage from '../../assets/images/imgg.jpg';
import Navbar from '../../../studentPanel/components/Navbar'; 
import { motion } from 'framer-motion';

const ExpertDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [expert, setExpert] = useState(null);


 // add a className for section dividers
 const sectionClassName = "mb-8"; // margin-bottom to each section

 // add a className for title
 const titleClassName = "text-2xl font-semibold mt-2 mb-4 text-gray-800";

 // add a className for content
 const contentClassName = "text-lg text-gray-600 mb-6";

 const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

  useEffect(() => {
    const fetchExpertAndReviews = async () => {
      try {
        const expertData = await fetchExpertData();
        const reviewsData = await fetchReviewsData(expertData.email);
        const expertWithReviews = { ...expertData, reviews: reviewsData };
        setExpert(expertWithReviews);
      } catch (error) {
        console.error("Error fetching expert and reviews:", error);
      }
    };

    const fetchExpertData = async () => {
      const expertResponse = await fetch(
        `http://localhost:5000/api/experts/${id}`
      );

      if (!expertResponse.ok) {
        throw new Error("Network response for expert was not ok");
      }
      return expertResponse.json();
    };

    const fetchReviewsData = async (email) => {
      const reviewsResponse = await fetch(
        `http://localhost:5000/api/experts/reviews/${email}`
      );
      if (!reviewsResponse.ok) {
        throw new Error("Network response for reviews was not ok");
      }
      return reviewsResponse.json();
    };

    fetchExpertAndReviews();
  }, [id]);

  if (!expert) {
    return (
      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
        className="flex justify-center items-center h-screen"
      >
        <p>Loading expert data...</p>
      </motion.div>
    );
  }

  const handleBookMeeting = () => {
    navigate(`/meeting/${expert.userName}`, {
      state: { calendlyLink: expert.calendlyLink },
    });
  };

  const handleGiveReview = () => {
    navigate(`/review/${expert.email}`);
  };

  return (
    <div className="font-Onest">
      <Navbar />

      {/* Hero section
      <div className="bg-teal-500 text-white text-center py-10">
        <h1 className="text-5xl font-bold">Expert Details</h1>
      </div> */}

      {/* Profile Section */}
      <div className="container mx-auto p-12 flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-6">

        {/* Profile Image & Contact Information */}
        <div className="w-full md:w-1/2 lg:w-1/3"> {/* Full width on mobile, 1/2 on medium screens, and 1/3 on large screens */}
        <img
          src={defaultProfileImage} 
          alt="Expert"
          className="rounded-full border-4 border-white mb-4 mx-auto lg:mx-0 w-64 h-64"
          />
            <div className={sectionClassName}>
            <div className={titleClassName}>Contact Me</div>
            <p className={contentClassName}>Email: {expert.email}</p>
            <p className={contentClassName}>Phone: {expert.phone}</p>
            <p className={contentClassName}>Hourly Rate: ${expert.hourlyRate}/hr</p>
            <div className={titleClassName}>Languages</div>
            {expert.languages.map((language, index) => (
              <p key={index} className={contentClassName}>{language}</p>
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4">{expert.firstName} {expert.lastName}</h2>
          <p className="text-md text-gray-600 mb-6">{expert.expertise}</p>
          
          <div className={sectionClassName}>
            <div className={titleClassName}>About Me</div>
            <p className={contentClassName}>{expert.description}</p>
          </div>

          <div className={sectionClassName}>
            <div className={titleClassName}>Skills</div>
            <ul className="list-disc list-inside mb-6">
              {expert.skills.map((skill, index) => (
                <li key={index} className="text-gray-600">{skill}</li>
              ))}
            </ul>
          </div>

          <div className={sectionClassName}>
            <div className={titleClassName}>Experience</div>
            <ul className="list-disc list-inside">
              {expert.experience.map((experience, index) => (
                <li key={index} className="text-gray-600">{experience}</li>
              ))}
            </ul>
          </div>

          <div className={sectionClassName}>
            <div className={titleClassName}>Highest Qualification</div>
            <p className={contentClassName}>{expert.highestQualification}</p>
          </div>

          <div className={sectionClassName}>
            <div className={titleClassName}>Reviews</div>
            {Array.isArray(expert.reviews) && expert.reviews.length > 0 ? (
              <ul className="list-disc list-inside">
              {expert.reviews.map((review, index) => {
                // Split the email by the '@' symbol and take the first part
                const emailPrefix = review.userEmail.split('@')[0];
                return (
                  <li key={index}>
                    <strong>{emailPrefix}:</strong> {review.comment}
                  </li>
                );
              })}
            </ul>
            ) : (
              <p>No reviews available.</p>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="text-center my-8">
        <button
          className="text-white bg-black px-4 py-2 rounded-full border border-black mr-4 transition duration-300 hover:bg-white hover:text-black"
          onClick={handleBookMeeting}
        >
          Book a Meeting
        </button>
        <button
          className="text-teal-600 underline px-4 py-2 transition duration-300 hover:text-black"
          onClick={handleGiveReview}
        >
          Give Review
        </button>
      </div>
    </div>
  );
};

export default ExpertDetails;
