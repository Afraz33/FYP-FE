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
  // return (
  //   <div className="bg-[#81cdc6] w-full shadow-md text-center py-10">
  //     <h1 className="text-5xl font-bold font-Onest">Experts</h1>
  //   </div>
  // );
};


const ProfileCard = ({ name, description, languages, reviews, profile,expertise, experience, hourlyRate }) => {
  const cardVariants = {
    offscreen: {
      opacity: 0,
      y: 50
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.03, // Scale the card to 103% of its size on hover
      transition: {
        duration: 0.2 // Transition duration for a smooth effect
      }
    }
  };
  

    const buttonStyle = {
    padding: '8px 16px',
    borderRadius: '4px',
    color: 'white',
    cursor: 'pointer',
    marginLeft: '8px',
  };

  const videoCallButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#38b2ac',
  };

  const viewTimingButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4299e1',
  };
  return (
    <motion.div
    className="bg-white shadow overflow-hidden rounded-lg font-Onest"
    variants={cardVariants}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true }}
    whileHover="hover"
  >
    <div className="bg-white shadow overflow-hidden rounded-lg font-Onest">
      <div className="px-4 py-5 sm:px-6 flex justify-between">
        <div className="flex items-center">
          <img className="h-12 w-12 rounded-full" src={defaultProfileImage} alt="" />
          <div className="ml-4">
            <h3 className="text-2xl leading-6 font-medium text-gray-900">{name}</h3>
            <p className="text-lg text-gray-500">{expertise}</p>
            <p className="text-lg text-gray-500">{description}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-right">
            <p className="text-xs text-gray-500">Reviews: {reviews}</p>
            <p className="text-xs text-gray-500">Languages: {languages}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-lg font-medium text-gray-500">Experience</dt>
            <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
              {profile.experience.join(', ')}
            </dd>
          </div>
          <div className="border-t border-gray-200">

          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-lg font-medium text-gray-500">Skills</dt>
            <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
              {profile.skills.join(', ')}
            </dd>
          </div>
          </div>
        </dl>
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px' }}>
        <button style={videoCallButtonStyle}>Video Call</button>
      </div>
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
          throw new Error('No Experts Found');
        }
  
        const expertsData = await response.json();
        const expertsWithReviews = await Promise.all(
          expertsData.map(async (expert) => {
            const reviewsResponse = await fetch(
              `http://localhost:5000/api/experts/reviews/${expert.email}`
            );
            if (!reviewsResponse.ok) {
              throw new Error('Failed to fetch reviews.');
            }
            const reviewsData = await reviewsResponse.json();
            return { ...expert, reviews: reviewsData };
          })
        );
  
        setExperts(expertsWithReviews);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
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
       <form onSubmit={handleSearch} className="flex justify-center mt-8 mb-12 ">
       <div className="flex items-left border-2 border-gray-300 w-96 rounded-full overflow-hidden">
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
          <motion.div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ rotate: 360, scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              repeat: Infinity,
              duration: 1
            }}
          >
            Loading...
          </motion.div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:gap-6">
          {experts.map((expert, index) => (
              <Link to={`/profile/${expert._id}`} key={index} className="text-decoration-none">
                <ProfileCard
                  name={expert.firstName}
                  description={expert.description}
                  reviews={expert.reviews?.length || 0}
                  expertise={expert.currentRole}
                  hourlyRate={expert.hourlyRate}
                  languages={expert.languages.join(', ')} // Assuming languages is an array of strings
                
                  profile={{
                    experience: expert.experience.map((exp) => exp),
                    skills: expert.skills.map((skill) => skill)
                  }}
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
