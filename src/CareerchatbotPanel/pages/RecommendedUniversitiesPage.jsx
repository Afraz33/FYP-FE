import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import UniversityInfo from '../assets/data/UniversityInfo.json';
import UniCard from '../components/UniCard/UniCard';
import Navbar from '../../studentPanel/components/Navbar';

function RecommendedUniversities() {
  const { career } = useParams();
  const [selectedCities, setSelectedCities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const trimmedUniversityInfo = UniversityInfo.map((university) => ({
    ...university,
    Careers: university.Careers.map((c) => c.trim()),
  }));

  const handleCheckboxChange = (city) => {
    setSelectedCities(prevCities =>
      prevCities.includes(city) ? prevCities.filter(c => c !== city) : [...prevCities, city]
    );
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredUniversities = trimmedUniversityInfo.filter(university =>
    university.Careers.includes(career.trim()) &&
    (selectedCities.length === 0 || selectedCities.some(city => university.UniversityCampusName.includes(city))) &&
    (university.UniversityCampusName.toLowerCase().includes(searchQuery) || university.UniversityDepartment.toLowerCase().includes(searchQuery))
  );

  const cities = ['Islamabad', 'Rawalpindi', 'Lahore', 'Karachi', 'Peshawar'];

  return (
<>
  <Navbar />
  <div className="bg-white h-screen w-full overflow-auto mx-auto p-8 font-Onest">
    <div className="flex flex-col md:flex-row">
      <aside className="md:w-1/4 p-4">
        <h3 className="font-semibold text-xl mb-4 text-center md:text-left">Filter by Location</h3>
        <div className="space-y-2 flex flex-col items-center md:items-start">
          {cities.map((city) => (
            <div key={city} className="flex items-center">
              <input
                type="checkbox"
                id={`checkbox-${city}`}
                name={city}
                value={city}
                checked={selectedCities.includes(city)}
                onChange={() => handleCheckboxChange(city)}
                className="accent-[#1ab69d] h-4 w-4"
              />
              <label htmlFor={`checkbox-${city}`} className="ml-2 text-lg">{city}</label>
            </div>
          ))}
        </div>
      </aside>
      <div className="flex-grow flex flex-col items-center">
        <div className="self-center w-full md:w-1/2 lg:w-1/3">
          <input
            type="text"
            placeholder="Search by university or department"
            value={searchQuery}
            onChange={handleSearchChange}
            className="mb-4 p-2 w-full text-lg border-2 border-gray-300 rounded-md"
          />
        </div>
        <h2 className="text-3xl font-semibold w-fit my-4">
          Universities Related to <span className="text-3xl text-[#1ab69d]">"{career}"</span>
        </h2>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredUniversities.length > 0 ? filteredUniversities.map((university, index) => (
              <button key={index} className="w-full">
                <UniCard university={university} />
              </button>
            )) : <p className="text-lg text-gray-700">No universities found.</p>}
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  );
}

export default RecommendedUniversities;
