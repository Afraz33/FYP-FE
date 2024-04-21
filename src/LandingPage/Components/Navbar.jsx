import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-2xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold font-Onest whitespace-nowrap dark:text-white">
            PaiSHA
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-10 rtl:space-x-reverse">
          {/* <Link
            to="/student-login"
            className="font-semibold text-white min-w-24 h-10 border-2 flex items-center justify-center bg-[#1ab69d] px-4 font-Onest hover:border-white rounded-lg hover:bg-[#ee4a62]"
          >
            Login
          </Link> */}
          <Link
            to="/focalperson-login"
            className="font-semibold text-white min-w-24 h-10 border-2 flex items-center justify-center bg-[#1ab69d] px-4 font-Onest hover:border-white rounded-lg hover:bg-[#ee4a62]"
          >
            Focal Person
          </Link>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex font-Onest font-semibold flex-col  p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-300 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 mb-0 ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0  rounded md:bg-transparent text-gray-900  md:hover:text-[#1ab69d] md:dark:hover:text-[#1ab69d]"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsOpen((prevIsOpen) => !prevIsOpen);
                }}
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:text-[#1ab69d] md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Student Module{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-[#1ab69d] dark:text-white dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {isOpen && (
        <div
          id="mega-menu-full-dropdown"
          className="mt-1 border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600"
        >
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
            <ul>
              <li>
                <a
                  href="student-login"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-Onest font-semibold">Login Sign Up</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-Onest">
                    Join us by creating an account and find experts to help you
                  </span>
                </a>
              </li>
              <li>
                <Link to="/chatbot">
                  <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="font-Onest font-semibold">
                      Personality Analysis
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-Onest">
                      Analyze your personality and find your interests with the
                      help of Artificial Intelligence
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="merit-calculator"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-Onest font-semibold">
                    Merit Calculation
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-Onest">
                    Calculate merit for top universities
                  </span>
                </a>
              </li>
              <li>
                <Link to="/university-chatbot">
                  <a
                    href="#"
                    className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <div className="font-Onest font-semibold">
                      University Information
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-Onest">
                      Find the answers to your questions about universities
                    </span>
                  </a>
                </Link>
              </li>
              </ul>
              <ul>
              <li>
                <Link to="/university-rankings">
                  <a
                    href="#"
                    className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <div className="font-Onest font-semibold">
                      University Ranking
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-Onest">
                      Find the best universities according to your interests
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
