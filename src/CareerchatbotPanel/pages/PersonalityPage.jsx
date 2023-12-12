import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
function PersonalityPage() {
  const Careers = [
    {
      type: "R",
      name: "Realistic",
      description:
        "These people are often good at mechanical or athletic jobs.",
      careers: [
        "Agriculture",
        "Health Assistant",
        "Computers",
        "Construction",
        "Mechanic/Machinist",
        "Engineering",
        "Food and Hospitality",
      ],
    },
    {
      type: "I",
      name: "Investigative",
      description:
        "These people like to watch, learn, analyze and solve problems.",
      careers: [
        "Marine Biology",
        "Engineering",
        "Chemistry",
        "Zoology",
        "Medicine/Surgery",
        "Consumer Economics",
        "Psychology",
      ],
    },
    {
      type: "A",
      name: "Artist",
      description:
        "These people like to work in unstructured situations where they can use their creativity.",
      careers: [
        "Communications",
        "Cosmetology",
        "Fine and Performing Arts",
        "Photography",
        "Radio and TV",
        "Interior Design",
        "Architecture",
      ],
    },
    {
      type: "S",
      name: "Social",
      description:
        "These people like to work with other people, rather than things.",
      careers: [
        "Counseling",
        "Nursing",
        "Physical Therapy",
        "Travel",
        "Advertising",
        "Public Relations",
        "Education",
      ],
    },
    {
      type: "E",
      name: "Enterprising",
      description:
        "These people like to work with others and enjoy persuading and performing.",
      careers: [
        "Fashion Merchandising",
        "Real Estate",
        "Marketing/Sales",
        "Law",
        "Political Science",
        "International Trade",
        "Banking/Finance",
      ],
    },
    {
      type: "C",
      name: "Conventional",
      description:
        "These people are very detail oriented, organized and like to work with data.",
      careers: [
        "Accounting",
        "Court Reporting",
        "Insurance",
        "Administration",
        "Medical Records",
        "Banking",
        "Data Processing",
      ],
    },
  ];

  const navigate = useNavigate();
  const { Personality } = useParams();
  const selectedCareer = Careers.find((career) => career.type === Personality);
  const { description, careers, name } = selectedCareer;

  const handleClick = (career) => {
    // Navigate to "/recommendedUniversities" and pass the selected career as a URL parameter
    navigate(`/recommendedUniversities/${encodeURIComponent(career)}`);
  };
  return (
    <div className="container mx-auto p-4 font-Onest">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-2xl mx-auto w-fit leading-6  text-gray-900 font-semibold">{`Personality Type: ${name}`}</h2>
          <p className="mt-1 mx-auto max-w-2xl text-sm w-fit text-gray-500">
            {description}
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 md:flex md:flex-col md:justify-center items-center sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <div>
                <dt className="text-2xl mx-auto  w-fit font-semibold text-gray-700">
                  Associated Careers
                </dt>
                <p className=" mx-auto max-w-2xl text-sm w-fit text-gray-500">
                  Click on a Career to view suitable universities
                </p>
              </div>
              <dd className="w-[80%] text-center mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ">
                <ul className=" w-[100%] border border-gray-200 rounded-md divide-y divide-gray-200 ">
                  {careers.map((career, index) => (
                    <li
                      onClick={() => handleClick(career)}
                      key={index}
                      className="mx-auto w-[50%] pl-3   pr-4 py-3 flex items-center justify-between text-sm hover:bg-gray-200 hover:cursor-pointer"
                    >
                      <label
                        for="job-1"
                        class="inline-flex  items-center bg-gray-600 justify-between w-full p-5 text-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
                      >
                        <div class="block">
                          <div class="w-full text-lg font-semibold">
                            {career}
                          </div>
                        </div>
                        <svg
                          class="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </label>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default PersonalityPage;
