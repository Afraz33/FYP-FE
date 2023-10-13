import React from 'react';
import profile from "../../assets/images/profile.jpg";
import { useNavigate } from 'react-router-dom';

const SearchExperts = () => {
  const navigate = useNavigate();

  const handleExpertClick = (id) => {
    navigate(`/profile/${id}`);
  };
  
  const experts = [
    { name: 'Ali', reviews: 10, rate: 'Rs 1000' },
    { name: 'Alina', reviews: 10, rate: 'Rs 1000' },
    { name: 'Jamal', reviews: 10, rate: 'Rs 1000' },
    { name: 'Afzal', reviews: 10, rate: 'Rs 1000' },
    { name: 'Naseem', reviews: 10, rate: 'Rs 1000' },
    { name: 'Akhtar', reviews: 10, rate: 'Rs 1000' }
  ]

  return (
    <div className="bg-[#B2A1FE] items-center min-h-screen flex flex-col font-DelaGothicOne">
      {/* Navbar */}
      <div className="bg-white rounded-full border border-black w-full max-w-screen-xl px-4 py-2 mt-6 mb-2 flex items-center justify-between">
        <div className="text-xl font-bold">Sample</div>

        <div className="flex space-x-5 items-center">
          <button className="text-sm">Explore Universities</button>
          <button className="text-sm">Career Advisor</button>
          <button className="text-sm">University Ranking</button>
          <button className="text-sm">Merit Trends</button>
          <button className="text-sm">Expert Consultation</button>

          {/* Search Bar */}
          <div className="relative ml-6">
            <input className="border border-black rounded-full w-53 py-2 px-3" type="text" placeholder="Search..." />
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-3">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-6a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
          <button className="text-black px-4 py-1 rounded-full border border-black ml-6">Umama</button>
        </div>
      </div>

      {/* Expert Cards */}
      <div className="text-3xl font-semibold mt-9 mb-12 ml-1 flex align-center">
        Search Results for
        <h2 className="text-xl mt-6 ml-1">Computer Science</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
        {experts.map((expert, index) => (
          <div key={index} className="bg-[#efecfd] border border-black rounded-3xl shadow-md p-4 w-80 mb-6 hover:bg-[#c4bcf8] transition duration-300 hover:text-white" >
            <a href="#" onClick={() => handleExpertClick(expert.id)}>
              <div className="flex items-center space-x-4 mb-4">
                <img src={profile} alt="Expert" className="h-16 w-16 rounded-full" />
                <div className="text-xl font-semibold ">{expert.name}</div>
              </div>
              <div className="text-gray-600 mb-2"> {/* Smaller description font */}
                {/* <div>Description :</div> */}
                <div className="text-sm">I am a Software Engineer by profession and I am working in a xyz company for the last ...</div>
              </div>
              <div className="text-gray-600 mb-2">
                <div className="font-bold">Reviews:</div>
                {expert.reviews}
              </div>
              <div className="text-gray-600">
                <div className="font-bold">Hourly Rate:</div>
                {expert.rate}
              </div>
              <button className="text-black bg-[#B2A1FE] px-4 py-1 rounded-full border border-black mt-2 transition duration-300 hover:bg-[#000000] hover:text-white">Book a Meeting</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchExperts;
