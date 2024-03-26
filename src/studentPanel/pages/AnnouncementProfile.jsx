import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../components/Navbar";
// import defaultProfileImage from '../assets/download.png'; // Replace with the correct path
// import defaultProfileImage from '../assets/uniimg.jpeg'; // Replace with the correct path
// import defaultProfileImage from '../assets/image.png'; // Replace with the correct path
import defaultProfileImage from '../assets/uniimgg.png'; // Replace with the correct path

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  // return (
  //   <div className="w-full  text-center py-3">
  //     <h1 className="text-5xl font-bold font-Onest">Announcements</h1>
  //   </div>
  // );
};

// ProfileCard component
const ProfileCard = ({ name, announcements = [], onClick }) => {
  // Animation settings
  const cardVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-sm w-full md:w-96 font-Onest"
      style={{ minHeight: '25rem' }}
      variants={cardVariants}
      initial="initial"
      animate="enter"
      whileHover="hover"
      onClick={() => onClick(name)}
    >
      <div className="bg-[#1ab69d] p-4 relative" style={{ minHeight: '7rem' }}>
        <div className="absolute -bottom-12 left-0 right-0 flex justify-center">
          <img className="rounded-full border-4 border-white" src={defaultProfileImage} alt={name} style={{ width: '6rem', height: '6rem' }} />
        </div>
      </div>  
        <div className="pt-16 pb-4 px-4 text-center">
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          {announcements.length > 0 ? (
            announcements.map((announcement, index) => (
              <div key={index} className="border-t pt-2 mt-2">
                <h4 className="text-lg font-semibold">{announcement.title}</h4>
                {/* <p className="text-sm">{announcement.text}</p> */}
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">No announcements to display.</p>
          )}
        </div>
    </motion.div>
  );
};

const AnnouncementProfile = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/announcement/all-announcements', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setProfiles(response.data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };
    fetchProfiles();
  }, []);

  const handleCardClick = (universityName) => {
    navigate(`/all-annoucement?university=${encodeURIComponent(universityName)}`);
  };

  const getGroupedAnnouncements = () => {
    const grouped = {};
    profiles.forEach((profile) => {
      const uniName = profile.universityName.toUpperCase(); // Ensure uppercase is used
      if (!grouped[uniName]) {
        grouped[uniName] = [];
      }
      grouped[uniName].push(profile);
    });
    return grouped;
  };
  
  const filteredProfiles = Object.entries(getGroupedAnnouncements()).filter(([uniName]) =>
    !searchTerm || uniName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
        <div className="bg-gray-100 font-Onest min-h-screen"> {/* This will make the background of the entire screen #e5e7eb */}

      <Navbar />
      <HeroSection />
      <div className="container mx-auto p-4 font-Onest">
      <div className="flex justify-center items-center mb-4">
        <input
          type="text"
          placeholder="Search for announcements..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-4 pr-4 py-3 w-1/2 focus:outline-none border-2 rounded-lg text-lg" // Increased padding for height, adjusted width to 3/4 of parent, and rounded-lg for a more rounded look
        />
        <button className="ml-2 p-5"> {/* Increased padding for a larger button */}
          <svg
            className="h-6 w-6 text-gray-600" // Increased size of the SVG icon
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


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProfiles.map(([uniName, announcements]) => (
          <ProfileCard
            key={uniName} // University name as the key
            name={uniName}
            announcements={announcements}
            onClick={() => handleCardClick(uniName)}
          />
        ))}
      </div>
      </div>
      </div>
    </>
  );
}

export default AnnouncementProfile;
