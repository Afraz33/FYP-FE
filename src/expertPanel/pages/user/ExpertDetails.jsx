import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import defaultProfileImage from '../../assets/images/imgg.jpg';
import Navbar from '../../../studentPanel/components/Navbar'; 

const ExpertDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [expert, setExpert] = useState(null);

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
    return <p>Loading expert data...</p>;
  }

  //   useEffect(() => {
  //     const fetchExpertAndReviews = async () => {
  //       try {
  //         const apiUrl = `http://localhost:5000/api/experts/${expertId}`;
  //         const expertResponse = await fetch(apiUrl);

  //         if (!expertResponse.ok) {
  //           throw new Error('Network response was not ok');
  //         }

  //         const expertData = await expertResponse.json();

  //         const reviewsResponse = await fetch(`http://localhost:5000/api/experts/reviews/${expertId}`);

  //         if (!reviewsResponse.ok) {
  //           throw new Error('Network response for reviews was not ok');
  //         }

  //         const reviewsData = await reviewsResponse.json();

  //         expertData.reviews = reviewsData;
  //         setExpert(expertData);
  //       } catch (error) {
  //         console.error('Error fetching expert and reviews:', error);
  //       }
  //     };

  //     fetchExpertAndReviews();
  //   }, [expertId]);

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
      {/* Hero section */}
      <div className="bg-teal-500 text-white text-center py-10">
        <h1 className="text-5xl font-bold">Expert Details</h1>
      </div>

      {/* Profile Section */}
      <div className="container mx-auto p-12 flex flex-wrap items-start">
        {/* Profile Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <img
            src={defaultProfileImage} 
            alt="Expert"
            className="rounded-full border-4 border-white h-96 w-96" // Increased size
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-2/3 md:pl-8">
          <h2 className="text-5xl font-bold mb-4">{expert.firstName} {expert.lastName}</h2>
          <p className="text-md text-gray-600 mb-1">{expert.expertise}</p>

          {/* Grid container */}
          <div className="md:grid md:grid-cols-2 md:gap-8">
            
            {/* First Column */}
            <div>
              {/* About Me */}
              <div className="text-xl font-semibold mb-2">About Me</div>
              <p className="text-lg text-gray-600 mb-4">{expert.description}</p>

              {/* Skills */}
              <div className="text-xl font-semibold mb-2">Skills</div>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {expert.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>

              {/* Experience */}
              <div className="text-xl font-semibold mb-2">Experience</div>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {expert.experience.map((experience, index) => (
                  <li key={index}>{experience}</li>
                ))}
              </ul>

              {/* Highest Qualification */}
              <div className="text-xl font-semibold mb-2">Highest Qualification</div>
              <p className="text-gray-600 mb-4">{expert.highestQualification}</p>

            <div className="text-xl font-semibold mb-2 w-full">Reviews</div>
            {Array.isArray(expert.reviews) && expert.reviews.length > 0 ? (
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {expert.reviews.map((review, index) => (
                  <li key={index} className="font-Onest">
                    <strong className="font-Onest">{review.userEmail}:</strong> {review.comment}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-Onest">No reviews available.</p>
            )}


            </div>

            {/* Second Column */}
            <div>
              {/* Contact Me */}
              <div className="text-xl font-semibold mb-2">Contact Me</div>
              <p className="text-lg text-gray-600 mb-4">Email: {expert.email}</p>
              <p className="text-lg text-gray-600 mb-4">Phone: {expert.phone}</p>

              {/* Hourly Rate */}
              <div className="text-xl font-semibold mb-2">Hourly Rate</div>
              <p className="text-lg text-gray-600 mb-4">${expert.hourlyRate}/hr</p>

             {/* Language */}
          <div className="text-xl font-semibold mb-2">Languages</div>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            {expert.languages.map((language, index) => (
              <li key={index} className="text-lg">{language}</li>
            ))}
          </ul>

          </div>

          {/* Action Buttons */}
          <div className="text-center mt-8">
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
        </div>
      </div>
    </div>
  );
};

export default ExpertDetails;
 