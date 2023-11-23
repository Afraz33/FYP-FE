function UniCard({ university }) {
  console.log(university.UniversityCampusName);
  return (
    <div className="bg-gray-300 max-w-sm mx-auto h-32 flex flex-col items-center justify-center rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {university.UniversityCampusName}
        </div>
        <p className="text-gray-700  text-base">
          {university.UniversityDepartment}
        </p>
      </div>
    </div>
  );
}

export default UniCard;
