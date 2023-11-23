import { useParams } from "react-router-dom";

import UniversityInfo from "../assets/data/UniversityInfo.json";
import UniCard from "../components/UniCard/UniCard";

function RecommendedUniversities() {
  const { career } = useParams();
  const trimmedUniversityInfo = UniversityInfo.map((university) => ({
    ...university,
    Careers: university.Careers.map((c) => c.trim()),
  }));

  // Filter universities based on the provided career
  const filteredUniversities = trimmedUniversityInfo.filter((university) =>
    university.Careers.includes(career.trim())
  );

  return (
    <div className="bg-[#eeebe7] min-h-screen max-h-fit container mx-auto p-8">
      <h2 className="text-2xl font-semibold w-fit mx-auto mb-10">
        Universities Related to
        <span className="text-3xl italic text-gray-700 ">"{career}"</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 justify-center items-center gap-y-8 ">
        {filteredUniversities.map((university, index) => (
          <button key={index}>
            <UniCard university={university} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default RecommendedUniversities;
