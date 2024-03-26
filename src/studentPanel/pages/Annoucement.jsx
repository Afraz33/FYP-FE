import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useLocation } from 'react-router-dom';

function AnnouncementCard({ title, text, university, timestamp }) {
  const displayDate = new Date(timestamp).toLocaleDateString("en-US");

  return (
    <div className="bg-white shadow-md rounded-lg font-Onest p-6 mb-4 mx-auto border border-black w-2/3 lg:w-1/2">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <div className="flex items-center mb-2">
          <span className="bg-[#8bcfc4] text-white px-2 py-1 rounded-full">{university}</span>
        </div>
        <p>{text}</p>
      <p>{displayDate}</p> {/* Display the timestamp here */}
    </div>
  );
}

function Announcement() {
  const [announcements, setAnnouncements] = useState([]);
  const location = useLocation();
  
  const searchParams = new URLSearchParams(location.search);
  const universityQuery = searchParams.get('university');

  useEffect(() => {
    // Adjust the URL based on the universityQuery
    const url = universityQuery 
      ? `http://localhost:5000/api/announcement/announcement-card/${universityQuery}`
      : "http://localhost:5000/api/announcement/all-announcements";

    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(url);
        setAnnouncements(response.data);
      } catch (error) {
        console.error('Error fetching announcements:', error.message);
      }
    };

    fetchAnnouncements();
  }, [universityQuery]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 font-Onest flex flex-col items-center justify-start pt-6">
        <h1 className="text-5xl font-bold text-black mb-6">Announcements</h1>
        <div className="w-full flex flex-col items-center gap-4 px-4">
          {announcements.map((announcement, index) => (
            <AnnouncementCard
              key={index}
              title={announcement.title}
              text={announcement.text}
              university={announcement.universityName}
              timestamp={announcement.timestamp} // Make sure your backend sends this data
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Announcement;
