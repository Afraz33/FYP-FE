import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useLocation } from 'react-router-dom';

function AnnouncementCard({ title, text, university, timestamp }) {
  const displayDate = new Date(timestamp).toLocaleDateString("en-US");

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full border border-black">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <div className="flex items-center mb-2">
          {/* <span className="text-[#8bcfc4] font-semibold text-sm mr-2">University:</span> */}
          <span className="bg-[#8bcfc4] text-white px-2 py-1 rounded-full">{university}</span>
        </div>
        <p>{text}</p>
      <p>{displayDate}</p> {/* Display the timestamp here */}
    </div>
    );
  }

  function Annoucement() {
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

  const filteredAnnouncements = announcements.filter((announcement) => {
    return universityQuery ? announcement.universityName === universityQuery : true;
  });

  return (
    <>
      <Navbar />
      <div className="bg-[#fdfbf8] font-Onest">
        <h1 className="text-5xl text-center font-bold text-black pt-6 pb-2">Announcements</h1>
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col items-center gap-4">
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
      </div>
    </>
  );
}

export default Annoucement;

// import React from 'react';

// const Announcement = () => {
//   return (
//     <div className=" bg-yellow-50 " >
//     <div className="App container mx-auto my-10">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="col-span-1">
//           <UserProfile />
//         </div>
//         <div className="col-span-2">
//           <PostInput />
//           <Post title="Similoluwa Keripe" time="18 hours ago" body="I need to get a full scholarship to study in USA but I don't know what to do.." />
//           <Post title="Beta Decay" time="3 days ago" body="What extracurricular activity do i need for foreign admission as an indian" />
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// const UserProfile = () => {
//   return (
//     <div className="bg-white shadow rounded p-4">
//       <div className="flex items-center space-x-3">
//         <div className="rounded-full bg-gray-200 text-lg text-gray-700 font-semibold flex items-center justify-center w-12 h-12">U</div>
//         <div>
//           <div className="font-bold">Umama Qasim</div>
//           <div className="text-sm text-gray-500">Fall 2024</div>
//         </div>
//       </div>
//       <div className="mt-4">
//         <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//           <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "33%" }}></div>
//         </div>
//         <div className="text-sm text-gray-500 mt-2">Profile completion</div>
//       </div>
//     </div>
//   );
// };

// const PostInput = () => {
//   return (
//     <div className="bg-white shadow rounded p-4 mb-4">
//       <input
//         type="text"
//         className="w-full border border-gray-300 p-2 rounded"
//         placeholder="Ask anything about studying abroad, Umama"
//       />
//     </div>
//   );
// };

// const Post = ({ title, time, body }) => {
//   return (
//     <div className="bg-white shadow rounded p-4 mb-4">
//       <div className="flex items-center justify-between mb-2">
//         <div className="flex items-center space-x-2">
//           <div className="rounded-full bg-gray-200 text-lg text-gray-700 font-semibold flex items-center justify-center w-10 h-10">
//             {title[0]}
//           </div>
//           <div>
//             <div className="font-bold">{title}</div>
//             <div className="text-xs text-gray-500">{time}</div>
//           </div>
//         </div>
//         <div className="text-gray-500 text-sm cursor-pointer">...</div>
//       </div>
//       <div className="text-gray-800">{body}</div>
//       <div className="flex items-center justify-between mt-4">
       
//       </div>
//     </div>
//   );
// };

// export default Announcement;
