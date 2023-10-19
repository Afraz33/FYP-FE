//   useEffect(() => {
//     const apiUrl = `http://localhost:5000/api/experts/${expertId}`;
//     console.log("API URL:", apiUrl);
//     // Make an API call to fetch expert data
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         // Set the fetched expert data to the state
//         setExpert(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching expert data:', error);
//       });
//   }, [expertId]);

//   if (!expert) {
//     return <p>Loading expert data...</p>;
//   }
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ExpertDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [expert, setExpert] = useState(null);

  useEffect(() => {
    console.log(id);
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
      console.log("Extracted expertId:", id);

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
    // Add the logic for booking a meeting with the expert
  };

  if (!expert) {
    return <p>Loading expert data...</p>;
  }

  return (
    <div className="p-10 bg-white h-screen items-center flex flex-col font-DelaGothicOne">
      {/* Navbar */}
      <div className="bg-white rounded-full border-2 border-black w-full max-w-screen-xl px-4 py-2 mt-0 mb-2 flex items-center justify-between">
        <div className="text-xl font-bold font-Onest">PaiSHA</div>
        {/* <div className="flex space-x-8">
          <button className="text-sm">Explore Universities</button>
          <button className="text-sm">Career Advisor</button>
          <button className="text-sm">University Ranking</button>
          <button className="text-sm">Merit Trends</button>
          <button className="text-sm">Expert Consultation</button>
          <button className="text-black px-4 py-1 rounded-full border border-black">
            Umama
          </button>
        </div> */}
      </div>

      <div className=" bg-[#B2A1FE] p-10 rounded-xl flex space-x-10 shadow-md mx-auto mt-4 items-start border-2 border-black">
        {/* Left Section */}
        <div className="bg-white flex-none rounded-2xl w-1/4 mt-4 border-2 border-black p-4 flex flex-col items-center">
          <div className="w-full text-center mb-2 font-Onest font-extrabold">{expert.firstName}</div>
          {/* Display other expert details here using the same format */}
          <div className="flex justify-between w-full mb-3">
            <strong className="font-Onest">City:</strong>
            <span className="font-Onest">{expert.city}</span>
          </div>
          <div className="flex justify-between w-full mb-3">
            <strong className="font-Onest">Languages:</strong>
            <span className="font-Onest">{expert.languages.join(", ")}</span>
          </div>
          <div className="flex justify-between w-full mb-3">
            <strong className="font-Onest">Email:</strong>
            <span className="font-Onest">{expert.email}</span>
          </div>
          <div className="flex justify-between w-full mb-3">
            <strong className="font-Onest">Area of expertise:</strong>
            <span className="font-Onest">{expert.expertise}</span>
          </div>
          <div className="flex justify-between w-full mb-3">
            <strong className="font-Onest">Highest Qualification:</strong>
            <span className="font-Onest">{expert.highestQualification}</span>
          </div>
          <div className="flex justify-between w-full mb-3">
            <strong className="font-Onest">Current Role:</strong>
            <span className="font-Onest">{expert.currentRole}</span>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex-grow space-y-6">
          <div className="bg-white mt-4 rounded-2xl p-4 border-2 border-black">
            <strong className="font-Onest">Description:</strong>
            <p className="font-Onest">{expert.description}</p>
          </div>
          <div className="flex space-x-4 mt-4">
            {/* Certification Section */}
            <div className="bg-white w-1/2 rounded-2xl p-4 border-2 border-black">
              <strong className="font-Onest">Certification:</strong>
              {expert.certifications.map((certification, index) => (
                <p className="font-Onest" key={index}>{certification}</p>
              ))}
            </div>
            {/* Skills Section */}
            <div className="bg-white w-1/2 rounded-2xl p-4 border-2 border-black">
              <strong className="font-Onest">Skills:</strong>
              <ul className="font-Onest">
                {expert.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Experience Section */}
          <div className="bg-white mt-4 rounded-2xl p-4 border-2 border-black">
            <strong className="font-Onest">Experience:</strong>
            <ul className="font-Onest">
              {expert.experience.map((experience, index) => (
                <li key={index}>{experience}</li>
              ))}
            </ul>
          </div>
          {/* Reviews Section */}
          <div className="bg-white mt-4 rounded-2xl p-4 border-2 border-black">
            <strong className="font-Onest">Reviews:</strong>
            {Array.isArray(expert.reviews) && expert.reviews.length > 0 ? (
              expert.reviews.map((review, index) => (
                <div className="font-Onest" key={index}>
                  <strong className="font-Onest">{review.userEmail}:</strong> {review.comment}
                </div>
              ))
            ) : (
              <p>No reviews available.</p>
            )}
          </div>
          <button
            className="text-white bg-black px-4 py-1 rounded-full border border-black mt-2 transition duration-300 hover:bg-white hover:text-black hover:border-black font-Onest hover:border-2"
            onClick={() =>
              navigate(`/meeting/${expert.userName}`, {
                state: { calendlyLink: expert.calendlyLink },
              })
            }
          >
            Book a Meeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpertDetails;
