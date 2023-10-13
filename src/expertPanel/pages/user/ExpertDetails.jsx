import React from 'react';
import { useParams } from 'react-router-dom';
import profile from "../../assets/images/profile.jpg";

const ExpertDetails = () => {
    const { id } = useParams();

    return (
            <div className="p-10 bg-[#c4bcf8] h-screen items-center flex flex-col font-DelaGothicOne">
            {/* Navbar */}
            <div className="bg-white rounded-full border border-black w-full max-w-screen-xl px-4 py-2 mt-0 mb-2 flex items-center justify-between">
                <div className="text-xl font-bold">Sample</div>
                <div className="flex space-x-8">
                <button className="text-sm">Explore Universities</button>
                <button className="text-sm">Career Advisor</button>
                <button className="text-sm">University Ranking</button>
                <button className="text-sm">Merit Trends</button>
                <button className="text-sm">Expert Consultation</button>
                <button className=" text-black px-4 py-1 rounded-full border border-black">Umama</button>
                </div>
            </div>

            <div className=" p-10 rounded-xl flex space-x-10 shadow-md mx-auto mt-4 items-start">
            {/* Left Section */}
                <div className="bg-white flex-none rounded-2xl w-1/4 mt-4 border border-black p-4 flex flex-col items-center"> 
                    <img src={profile} alt="Ali" className="w-24 h-24 rounded-full mb-4" />
                    <div className="w-full text-center mb-2">Saad</div>
                    <div className="flex justify-between w-full mb-3">
                        <strong>City: </strong>
                        <span>Rawalpindi</span>
                    </div>
                    <div className="flex justify-between w-full mb-3">
                        <strong>Languages: </strong>
                        <span>English, Urdu</span>
                    </div>
                    <div className="flex justify-between w-full mb-3">
                        <strong>Email: </strong>
                        <span>ali.cs@gmail.com</span>
                    </div>
                    <div className="flex justify-between w-full mb-3">
                        <strong>Area of expertise: </strong>
                        <span>Computer Science</span>
                    </div>
                    <div className="flex justify-between w-full mb-3">
                        <strong>Education: </strong>
                        <span> BS Computer Science</span>
                    </div>
                    <div className="flex justify-between w-full mb-3">
                        <strong>Highest Qualification: </strong>
                        <span>MS Data Science</span>
                    </div>
                    <div className="flex justify-between w-full mb-3">
                        <strong>Current Role: </strong>
                        <span>Data Engineer</span>
                    </div>
                </div>


                 {/* Middle Section */}
                  <div className="flex-grow space-y-6">
                    {/* For each inner div, I've added p-4 to give space between text and the border */}
                    <div className="bg-white mt-4 rounded-2xl p-4 border border-black ">
                        <strong>Description:</strong>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                     {/* Skills and Certification Sections */}
                <div className="flex space-x-4 mt-4"> {/* Added flex container */}
                    {/* Certification Section */}
                    <div className="bg-white w-1/2 rounded-2xl p-4 border border-black">
                        <strong>Certification:</strong>
                        <p>App Development by Udemy</p>
                        <p>Web Development Methodologies by Coursera</p>
                        <p>Data Analytics by Data Camp</p>
                    </div>

                    {/* Skills Section */}
                    <div className="bg-white w-1/2 rounded-2xl p-4 border border-black">
                        <strong>Skills:</strong>
                        <ul>
                            <li>App Development</li>
                            <li>Web Development</li>
                            <li>Data Analytics</li>
                            <li>Software Engineering</li>
                        </ul>
                    </div>

                    <div className="bg-white w-1/2 rounded-2xl p-4 border border-black">
                        <strong>Experience:</strong>
                        <ul>
                            <li>1 year in Web Development</li>
                            <li>1 year in App Development</li>
                            <li>6 months in Data Analytics</li>
                        </ul>
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="bg-white mt-4 rounded-2xl p-4 border border-black">
                    <strong>Reviews(2):</strong>
                        <div>
                            <strong>Afraz:</strong> It was a great experience working with Saad, his commitment was excellent. His work was brilliant. Adios.
                        </div>
                        <div>
                            <strong>Umama:</strong> It was a great experience working with Saad, his commitment was excellent. His work was brilliant. Adios.
                        </div>
                    </div>
                    <button className="text-black bg-[#B2A1FE] px-4 py-1 rounded-full border border-black mt-2 transition duration-300 hover:bg-[#000000] hover:text-white">Book a Meeting</button>
                </div>
                
            </div>
        </div>
    );
}

export default ExpertDetails;
