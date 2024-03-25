import React, { useState } from 'react';
import axios from 'axios';
import Navbar from "../components/Navbar";

function AnnouncementPage() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      // Assuming universityName can be retrieved from localStorage or context
      const universityName = localStorage.getItem('universityName'); // Adjust this line based on where you can get the universityName from
      const response = await axios.post(
        'http://localhost:5000/api/announcement/create-announcement',
        {
          title,
          text,
          universityName, // Added universityName here
        },
        { 
          headers: { Authorization: `Bearer ${token}` } 
        }
      );
      if (response.status === 201) {
        setSuccessMessage('Announcement created successfully');
        setTitle('');
        setText('');
        // If using a form field for universityName, reset it here as well
      }
    } catch (error) {
      setError('Failed to create announcement');
      console.error('Error creating announcement:', error);
    }
  };
  
  const inputStyles = {
    maxWidth: '500px', // Set the max-width as you prefer
    width: '100%' // Use 100% to make it responsive within the max-width
  };

  const inputStyles2 = {
    maxWidth: '200px', // Set the max-width as you prefer
    width: '100%' // Use 100% to make it responsive within the max-width
  };
  return (
    <>
    <div className="min-h-screen" style={{ backgroundColor: '#fdfdf9' }}> {/* Set the background color for the whole page here */}
      <Navbar />
      
      <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md font-Onest" style={{ maxWidth: '768px' }}>
        <h2 className="text-2xl font-semibold mb-4">Create Announcement</h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-gray-800 font-semibold">Title:</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={inputStyles}
              className="block border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-[#1ab69d]"
            />
          </div>
          <div>
            <label htmlFor="text" className="block text-gray-800 font-semibold">Text:</label>
            <textarea
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
              style={inputStyles}
              className="block border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-[#1ab69d]"
              rows="4"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          <button
            type="submit"
            style={inputStyles2}
            className="block bg-[#1ab69d] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#369988] focus:outline-none focus:bg-[#369988]"
          >
            Create Announcement
          </button>
        </form>
      </div>
      </div>
    </>
  );
}


export default AnnouncementPage;
