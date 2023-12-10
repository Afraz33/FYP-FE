import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import defaultProfileImage from '../../assets/images/imgg.jpg'; // The default image for all profiles
import { motion } from 'framer-motion';
import Navbar from '../../../studentPanel/components/Navbar'; 

const Header = () => {
  return (
    <header className="bg-white text-white font-Onest">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo and navigation items */}
        <div>EduBlink</div>
        <ul className="flex items-center space-x-4">
          <li>Category</li>
          <li>Home</li>
          {/* Add other navigation items */}
        </ul>
        {/* Search and other icons */}
        <div className="flex items-center space-x-4">
          <div>Search Icon</div>
          <div>Cart Icon</div>
          <button className="bg-green-500 px-4 py-2 rounded">Log out</button>
        </div>
      </nav>
    </header>
  );
};

const HeroSection = () => {
  return (
    <div className="bg-[#81cdc6] w-full shadow-md text-center py-10">
      <h1 className="text-5xl font-bold font-Onest">Experts</h1>
    </div>
  );
};


// ProfileCard component
const ProfileCard = ({ name, description, reviews, expertise, hourlyRate }) => {
  // Animation settings
  const cardVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md w-96"
      style={{ height: '20rem' }}
      variants={cardVariants}
      initial="initial"
      animate="enter"
      whileHover="hover"
    >
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration- items-center transform hover:scale-105 w-96 " style={{ height: '20rem' }}>
      {/* Header with pattern */}
      <div className="bg-teal-500 p-4 relative w-96" style={{ height: '7rem' }}> 
        {/* Include the background pattern here */}
        {/* Profile image */}
        <div className="absolute -bottom-12 left-0 right-0 flex justify-center w-96">
          <img className="rounded-full border-4 border-white bg-white h-24 w-24" src={defaultProfileImage} alt={name} />
        </div>
      </div>
      
      {/* Text content */}
      <div className="pt-16 pb-4 px-4 text-center"> {/* Add padding top here to push the content down */}
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-1">{expertise}</p>
        <p className="text-xs text-gray-500 mb-1">{description}</p>
        <p className="text-xs text-gray-500 mb-1">{`Reviews: ${reviews}`}</p>
        <p className="text-xs text-gray-500">{`Hourly Rate: ${hourlyRate}/hr`}</p>
      </div>
    </div>
    </motion.div>
  );
};


function Profile() {
  const navigate = useNavigate();
  const location = useLocation();

  const [experts, setExperts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExperts = async () => {
      setIsLoading(true);
      const query = new URLSearchParams(location.search).get('query');
      setSearchTerm(query || '');
      try {
        const response = await fetch(
          `http://localhost:5000/api/experts${query ? `/sort-by-sentiment/${query}` : ''}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch experts.');
        }
        const data = await response.json();
        setExperts(data);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    fetchExperts();
  }, [location.search]);

    const handleSearch = (e) => {
    e.preventDefault();
    navigate(searchTerm ? `?query=${searchTerm}` : '');
  };

  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="container mx-auto p-4 font-Onest">
       <form onSubmit={handleSearch} className="flex justify-center mb-6">
       <div className="flex items-center border-2 border-gray-300 rounded-full overflow-hidden">
         <input
          type="text"
          placeholder="Search experts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-4 pr-4 py-2 w-full rounded-full focus:outline-none"
        />
        <button type="submit" className="flex items-center justify-center px-4 border-l">
         {/* <img src={searchIcon} alt="Search" className="h-4 w-4" /> */}
          {/* Replace with search icon component or use an image */}
          <svg
            className="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.5 14.5L19 18M8.5 4a6.5 6.5 0 100 13 6.5 6.5 0 000-13z"
            />
          </svg>
        </button>
      </div>
    </form>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {experts.map((expert, index) => (
              <Link to={`/profile/${expert._id}`} key={index} className="text-decoration-none">
                <ProfileCard
                  name={expert.firstName}
                  description={expert.description}
                  reviews={expert.reviews?.length || 0}
                  expertise={expert.currentRole}
                  hourlyRate={expert.hourlyRate}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default Profile;
