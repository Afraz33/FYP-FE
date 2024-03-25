import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../components/Navbar";
import defaultProfileImage from '../assets/university.png'; // Replace with the correct path
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="w-full  text-center py-5">
      <h1 className="text-5xl font-bold font-Onest">Announcements</h1>
    </div>
  );
};

// ProfileCard component
const ProfileCard = ({ name, announcements, onClick }) => {
  // Animation settings
  const cardVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-md w-full md:w-96 font-Onest"
      style={{ minHeight: '25rem' }}
      variants={cardVariants}
      initial="initial"
      animate="enter"
      whileHover="hover"
      onClick={() => onClick(name)}
    >
      <div className="bg-teal-500 p-4 relative" style={{ minHeight: '7rem' }}>
        <div className="absolute -bottom-12 left-0 right-0 flex justify-center">
          <img className="rounded-full border-4 border-white" src={defaultProfileImage} alt={name} style={{ width: '6rem', height: '6rem' }} />
        </div>
      </div>
      <div className="pt-16 pb-4 px-4 text-center">
        <h3 className="text-5xl font-semibold mb-2">{name}</h3>
        <div className="overflow-y-auto" style={{ maxHeight: '15rem' }}>
          {announcements.map((announcement, index) => (
            <div key={index} className="border-t border-gray-300 pt-2 mt-2">
              <h4 className="text-xl font-semibold">{announcement.title}</h4>
              <p className="text-gray-600">{announcement.text}</p>
            </div>
          ))}
        </div>
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

  const groupedProfiles = profiles.reduce((acc, profile) => {
    if (!acc[profile.universityName]) {
      acc[profile.universityName] = [];
    }
    acc[profile.universityName].push(profile);
    return acc;
  }, {});

  const filteredProfiles = searchTerm
    ? profiles.filter(profile =>
        profile.universityName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : profiles;

  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="container mx-auto p-4">
      <div className="flex justify-center items-center h-32"> {/* Adjust the height as needed */}
        <div className="flex justify-center items-center border border-gray-300 rounded-full overflow-hidden bg-white shadow-sm max-w-xs">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-4 pr-4 py-2 w-full focus:outline-none"
          />
          <button className="p-2">
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
      </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(groupedProfiles).map(([name, announcements]) => (
            <ProfileCard
              key={name}
              name={name}
              announcements={announcements}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default AnnouncementProfile;
