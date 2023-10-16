import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ExpertDetails = () => {
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const parts = pathname.split('/');
  const expertId = parts[parts.length - 1]; // The last part of the URL
  const [expert, setExpert] = useState(null);

  useEffect(() => {
    const apiUrl = `http://localhost:5000/api/experts/${expertId}`;
    console.log("API URL:", apiUrl);
    // Make an API call to fetch expert data
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Set the fetched expert data to the state
        setExpert(data);
      })
      .catch((error) => {
        console.error('Error fetching expert data:', error);
      });
  }, [expertId]);

  if (!expert) {
    return <p>Loading expert data...</p>;
  }

  const handleBookMeeting = () => {
    // Add the logic for booking a meeting with the expert
  };

    return (
            <div className="p-10 bg-[#c4bcf8] h-screen items-center flex flex-col font-DelaGothicOne">
            {/* Navbar */}
            <div className="bg-white rounded-full border border-black w-full max-w-screen-xl px-4 py-2 mt-0 mb-2 flex items-center justify-between">
                <div className="text-xl font-bold">Sample</div>
                <div className="flex space-x-8">
                <button className="text-sm">Explore Universities</button>
                <button className="text-sm">Career Advisor</button>
                <button className="text-sm">University Ranking</button>
                <button className="text-sm">Merit Trends</button>
                <button className="text-sm">Expert Consultation</button>
                <button className=" text-black px-4 py-1 rounded-full border border-black">Umama</button>
                </div>
            </div>

            <div className=" p-10 rounded-xl flex space-x-10 shadow-md mx-auto mt-4 items-start">
           
   
                    {/* Left Section */}
                    <div className="bg-white flex-none rounded-2xl w-1/4 mt-4 border border-black p-4 flex flex-col items-center">
                        <div className="w-full text-center mb-2">{expert.firstName}</div>

                        {/* Display other expert details here using the same format */}
                        <div className="flex justify-between w-full mb-3">
                            <strong>City: </strong>
                            <span>{expert.city}</span>
                        </div>
                        <div className="flex justify-between w-full mb-3">
                            <strong>Languages: </strong>
                            <span>{expert.languages.join(', ')}</span>
                        </div>
                        <div className="flex justify-between w-full mb-3">
                            <strong>Email: </strong>
                            <span>{expert.email}</span>
                        </div>
                        <div className="flex justify-between w-full mb-3">
                            <strong>Area of expertise: </strong>
                            <span>{expert.areaOfExpertise}</span>
                        </div>
                        <div className="flex justify-between w-full mb-3">
                            <strong>Education: </strong>
                            <span>{expert.education}</span>
                        </div>
                        <div className="flex justify-between w-full mb-3">
                            <strong>Highest Qualification: </strong>
                            <span>{expert.highestQualification}</span>
                        </div>
                        <div className="flex justify-between w-full mb-3">
                            <strong>Current Role: </strong>
                            <span>{expert.currentRole}</span>
                        </div>
                        </div>


                            {/* Middle Section */}
                    <div className="flex-grow space-y-6">
                    <div className="bg-white mt-4 rounded-2xl p-4 border border-black">
                        <strong>Description:</strong>
                        <p>{expert.description}</p>
                    </div>
                    <div className="flex space-x-4 mt-4">
                        {/* Certification Section */}
                        <div className="bg-white w-1/2 rounded-2xl p-4 border border-black">
                        <strong>Certification:</strong>
                        {expert.certifications.map((certification, index) => (
                            <p key={index}>{certification}</p>
                        ))}
                        </div>

                        {/* Skills Section */}
                        <div className="bg-white w-1/2 rounded-2xl p-4 border border-black">
                        <strong>Skills:</strong>
                        <ul>
                            {expert.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                            ))}
                        </ul>
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className="bg-white mt-4 rounded-2xl p-4 border border-black">
                        <strong>Experience:</strong>
                        <ul>
                        {expert.experience.map((experience, index) => (
                            <li key={index}>{experience}</li>
                        ))}
                        </ul>
                    </div>

                    {/* Reviews Section */}
                    <div className="bg-white mt-4 rounded-2xl p-4 border border-black">
                        <strong>Reviews:</strong>
                        {Array.isArray(expert.reviews) && expert.reviews.length > 0 ? (
                            expert.reviews.map((review, index) => (
                            <div key={index}>
                                <strong>{review.reviewer}:</strong> {review.comment}
                            </div>
                            ))
                        ) : (
                            <p>No reviews available.</p>
                        )}
                        </div>

                    <button
                        className="text-black bg-[#B2A1FE] px-4 py-1 rounded-full border border-black mt-2 transition duration-300 hover:bg-[#000000] hover:text-white"
                        onClick={handleBookMeeting}
                    >
                        Book a Meeting
                    </button>
                    </div>
                </div>
                </div>
            );
            }

export default ExpertDetails;