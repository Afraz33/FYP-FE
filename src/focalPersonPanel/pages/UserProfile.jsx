import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../components/Navbar";
import header_bg from "../assets/bg.avif";

const UserProfile = () => {
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    password: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  const fetchUserProfile = async () => {
    try {
        const token = localStorage.getItem('token');
        console.log('Token:', token);
        
        if (!token) {
          console.error('Token is missing in localStorage');
          // Handle the missing token case, possibly redirect the user to the login page.
          return;
        }

      const response = await axios.get('http://localhost:5000/api/focalperson/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data);
    } catch (error) {
      if (error.response && error.response.status === 403) {
        // Handle 403 Forbidden error
        console.error('Access to user profile is forbidden.');
      } else {
        // Handle other errors
        console.error('Error fetching user profile:', error.message);
      }
    }
  };
  

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    fetchUserProfile(); // Reset the form to the original data
  };

  const handleSaveChanges = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put('http://localhost:5000/api/focalperson/profile', userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log('Response:', JSON.stringify(response, null, 2));
  
      if (response.status === 200) {
        setIsEditing(false);
        // Optionally, you can fetch the user profile again after saving changes
        // fetchUserProfile();
      } else {
        console.error('Error updating user profile. Status:', response.status);
      }
    } catch (error) {
      console.error('Error updating user profile:', error.message);
    }
  };
  
  
  

  const handleChange = (field, value) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [field]: value,
    }));
  };

  return (
    <div
    className="min-h-screen bg-cover"
    style={{ backgroundImage: `url(${header_bg})`, backgroundColor: 'transparent' }}
  >
    <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen font-Onest">
      <div className="container mx-auto mt-2" style={{ marginTop: '-1rem' }}>
        <h1 className="text-4xl font-semibold text-center mb-6">Edit Profile</h1>
        <div className="max-w-2xl mx-auto bg-white p-10 rounded-md shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">First Name:</label>
          <p className="mt-1 p-2 border rounded-md w-full">{userData.firstname}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Last Name:</label>
          <p className="mt-1 p-2 border rounded-md w-full">{userData.lastname}</p>
        </div>
       
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Password:</label>
          {
            isEditing ? (
                <input
                type="password"
                className="mt-1 p-2 border rounded-md w-full"
                value={userData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                />
            ) : (
                <p className="mt-1 p-2 border rounded-md w-full">********</p> // Masked password
            )
            }
        </div>
       
        <div className="flex justify-between">
          {isEditing ? (
            <>
              <button
                className="bg-[#1ab69d] text-white px-4 py-2 rounded-md hover:bg-[#8bcfc4]"
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              className="bg-[#1ab69d] text-white px-4 py-2 rounded-md hover:bg-[#9bcac3]"
              onClick={handleEdit}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default UserProfile;
