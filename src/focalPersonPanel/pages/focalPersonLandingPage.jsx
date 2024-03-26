import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
 import Navbar from "../components/Navbar";


const UpdateCard = ({ update, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(update.title);
  const [editedText, setEditedText] = useState(update.text);

  const handleEdit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/announcement/edit-announcements/${update._id}`,
        { title: editedTitle, text: editedText },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      onUpdate({ ...update, title: editedTitle, text: editedText });
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update announcement:", error);
    }
  };

  return (
    <div className="flex flex-col items-center mb-8 font-Onest">
      <div className="w-full max-w-md bg-white p-6 shadow rounded-lg">
        {isEditing ? (
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
              onClick={handleEdit}
            >
              Save
            </button>
            <button
              className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="flex justify-between">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{update.title}</h3>
              <p className="text-gray-600">{update.universityName}</p>
              <p className="mt-2 text-gray-700">{update.text}</p>
            </div>
            <div className="flex flex-col justify-between">
              <div className="text-right text-sm text-gray-500">
                <p>{update.date}</p>
                <p>{update.time}</p>
              </div>
              <div className="flex justify-end">
              <button
                className="bg-[#36a895] text-white py-2 px-4 rounded-lg mr-2 hover:bg-[#55c4b1] focus:outline-none focus:ring-2 focus:ring-[#4cc7b2] focus:ring-opacity-50 transition duration-300"
                onClick={() => setIsEditing(true)}
              >
                <svg 
    className="w-4 h-4 mr-2 fill-current" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 20 20" 
  >
    <path d="M17.414 2.586a2 2 0 00-2.828 0L7.125 9.047l-.71.71-1.768 1.768a1 1 0 000 1.414l4.243 4.243a1 1 0 001.414 0l1.768-1.768.71-.71 7.461-7.461a2 2 0 000-2.828L17.414 2.586zM16 5.414L14.586 4 9 9.586 10.414 11 16 5.414z" />
  </svg>
                {/* Edit */}
              </button>
{/* <button
  className="bg-[#4A4A4A] text-white py-1 px-3 rounded-lg hover:bg-[#333333] focus:outline-none focus:ring-2 focus:ring-[#555555] focus:ring-opacity-50 transition duration-300 flex items-center"
  onClick={() => setIsEditing(true)}
>
  <svg 
    className="w-4 h-4 mr-2 fill-current" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 20 20" 
  >
    <path d="M17.414 2.586a2 2 0 00-2.828 0L7.125 9.047l-.71.71-1.768 1.768a1 1 0 000 1.414l4.243 4.243a1 1 0 001.414 0l1.768-1.768.71-.71 7.461-7.461a2 2 0 000-2.828L17.414 2.586zM16 5.414L14.586 4 9 9.586 10.414 11 16 5.414z" />
  </svg>
  Rename
</button> */}

                {/* <button
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300"
                  onClick={() => onDelete(update._id)}
                >
                  Delete
                </button> */}
            <button
              className="flex items-center bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300"
              onClick={() => onDelete(update._id)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.5 3a1 1 0 00-1 1v.5H5a1 1 0 00-1 1V6h12v-.5a1 1 0 00-1-1h-.5V4a1 1 0 00-1-1h-3zm8 3H5v10a2 2 0 001.85 1.995L7 18h6a2 2 0 001.995-1.85L15 16V6zm-2 2a.5.5 0 01.09.992L13 9v6a.5.5 0 01-.992.09L12 15V9a.5.5 0 01.5-.5zM8 9a.5.5 0 01.09.992L8 10v6a.5.5 0 01-.992.09L7 16V10a.5.5 0 01.5-.5z" clipRule="evenodd" />
              </svg>
              {/* Delete */}
            </button>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const AnnouncementList = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [updates, setUpdates] = useState([]);

  const handleUpdate = (updatedData) => {
    const updatedUpdates = updates.map((update) =>
      update._id === updatedData._id ? updatedData : update
    );
    setUpdates(updatedUpdates);
  };

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }

        const response = await axios.get('http://localhost:5000/api/announcement/fetch-announcements', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAnnouncements(response.data);
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    };
    fetchAnnouncements();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/announcement/delete-announcements/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      // Optimistically remove the announcement from the state
      handleDeleteUpdate(id);
    } catch (error) {
      console.error("Failed to delete announcement:", error);
    }
  };

  const handleDeleteUpdate = (id) => {
    setAnnouncements(announcements.filter(announcement => announcement._id !== id));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {announcements.map((announcement) => (
// Pass handleUpdate to the UpdateCard component
    <UpdateCard
      key={announcement._id}
      update={announcement}
      onUpdate={handleUpdate} // <-- Here's the new prop
      onDelete={handleDelete}
    />      ))}
    </div>
  );
};

const LandingPage = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [focalPersonName, setFocalPersonName] = useState('');


  useEffect(() => {
    const fetchFocalPersonData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }

        const response = await axios.get('http://localhost:5000/api/focalperson/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Assuming the response contains the first name and last name in data.firstname and data.lastname
        setFocalPersonName(response.data.firstname);
      } catch (error) {
        console.error('Error fetching focal person data', error);
      }
    };

    fetchFocalPersonData();
  }, []);

  return (
    <>
    <Navbar />
    <div className="bg-gray-100 min-h-screen font-Onest">
    <header className="text-center p-8">
      <h1 className="text-4xl font-bold">Welcome, {focalPersonName || 'Focal Person'}</h1>
    </header>

      <main className="container mx-auto px-4 font-Onest">
        <section className="mb-8 w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Announcements</h2>
            <Link to="/focalperson-annoucement">
            <button className="bg-[#1ab69d] text-white px-4 py-2 rounded hover:bg-[#74d3c3] hover:text-black transition duration-300">Create Announcement</button>
            </Link>
          </div>
        </section>

        <AnnouncementList />
      </main>

      {/* Placeholder for modal or form to create a new announcement */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl m-4">
            <button
              onClick={() => setShowCreateModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4">Create a New Announcement</h3>
            {/* The form or additional content for creating an announcement would go here */}
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default LandingPage;