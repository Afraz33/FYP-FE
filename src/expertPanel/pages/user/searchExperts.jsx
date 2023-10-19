// const expertsResponse = await fetch(
//   "http://localhost:5000/api/experts/"
// );
// const expertsData = await expertsResponse.json();

import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import profile from "../../assets/images/profile.jpg";
import { useLocation } from "react-router-dom";
import Loader from "../../components/loader/Loader";
const SearchExperts = () => {
  const navigate = useNavigate();
  const [experts, setExperts] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("query");
  const [noExperts, setNoExperts] = useState(false);
  useEffect(() => {
    const fetchExpertsAndReviews = async () => {
      try {
        // Fetch experts sorted by 'sentimentScore'
        const expertsResponse = await fetch(
          `http://localhost:5000/api/experts/sort-by-sentiment/${searchQuery}`
        );
        if (expertsResponse.ok) {
          const expertsData = await expertsResponse.json();

          // Fetch reviews for each expert and update the expert's data
          const expertsWithReviews = await Promise.all(
            expertsData?.map(async (expert) => {
              const reviewsResponse = await fetch(
                `http://localhost:5000/api/experts/reviews/${expert.email}`
              );
              const reviewsData = await reviewsResponse.json();
              expert.reviews = reviewsData;
              return expert;
            })
          );

          setExperts(expertsWithReviews);
        } else if (expertsResponse.status === 404) {
          setNoExperts(true);
          console.log("Afraz");
        } else {
          // Handle non-OK response (e.g., 404 or 500 error)
          console.error("API request failed:", expertsResponse.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchExpertsAndReviews();
  }, []);

  return (
    <div className="bg-[#B2A1FE] items-center min-h-screen flex flex-col font-DelaGothicOne">
      {/* Navbar */}
      <div className="bg-white rounded-full border border-black w-full max-w-screen-xl px-4 py-2 mt-5 mb-2 flex items-center justify-between">
        <div className="text-xl font-bold">PaiSHA</div>
        <div className="flex space-x-8">
          <button className="text-sm">Explore Universities</button>
          <button className="text-sm">Career Advisor</button>
          <button className="text-sm">University Ranking</button>
          <button className="text-sm">Merit Trends</button>
          <button className="text-sm">Expert Consultation</button>
          <button className=" text-black px-4 py-1 rounded-full border border-black">
            Umama
          </button>
        </div>
      </div>
      {!noExperts ? (
        <div>
          {/* <div className="text-3xl font-semibold mt-9 mb-12 ml-1 flex align-center">
            Search Results for {searchQuery}
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {experts.length > 0 ? (
              experts.map((expert) => (
                <Link
                  to={`/profile/${expert._id}`}
                  className="text-decoration-none"
                  key={expert._id}
                >
                  <div className="bg-[#efecfd] border border-black rounded-3xl shadow-md p-4 w-80 mb-6 hover:bg-[#c4bcf8] transition duration-300 hover:text-white">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={profile}
                        alt="Expert"
                        className="h-16 w-16 rounded-full"
                      />
                      <div className="text-xl font-semibold">
                        {expert.firstName}
                      </div>
                    </div>
                    <div className="text-gray-600 mb-2">
                      <div className="text-sm">{expert.description}</div>
                    </div>
                    <div className="text-gray-600 mb-2">
                      <div className="font-bold">Reviews :</div>
                      {expert.reviews ? expert.reviews.length : 0}
                    </div>
                    <div className="text-gray-600">
                      <div className="font-bold">Hourly Rate:</div>
                      {expert.hourlyRate}
                    </div>
                    <button className="text-black bg-[#B2A1FE] px-4 py-1 rounded-full border border-black mt-2 transition duration-300 hover-bg-[#000000] hover:text-white">
                      Book a Meeting
                    </button>
                  </div>
                </Link>
              ))
            ) : (
              <div className="mx-auto" style={{ marginTop: "100px" }}>
                <Loader />
              </div>
            )}
          </div>
        </div>
      ) : (
        <p>No Results Found</p>
      )}
    </div>
  );
};

export default SearchExperts;
