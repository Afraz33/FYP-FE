
// ProfileCard.jsx
import React from 'react';
import defaultProfileImage from '../../assets/images/imgg.jpg'; // The default image for all profiles

const ProfileCard = ({ name, title, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
      <div className="flex justify-center">
        <img className="rounded-full h-32 w-32 object-cover" src={defaultProfileImage} alt="Profile" />
      </div>
      <div className="text-center mt-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-xs text-gray-500 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
