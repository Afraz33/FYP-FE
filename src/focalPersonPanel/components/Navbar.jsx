import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import axios from "axios";
import "antd/dist/reset.css"; // Make sure to import the Ant Design styles

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  // Fetch user profile
  const fetchUserProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if token is not found
      return;
    }

    try {
      const response = await axios.get(
        "http://localhost:5000/api/focalperson/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUserData(response.data);
      setUsername(response.data.lastname); // Assuming lastname is the username
    } catch (error) {
      console.error("Error fetching user profile:", error);
      navigate("/login"); // Redirect to login on error
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const menu = (
    <Menu>
      <Menu.Item key="profile" onClick={() => navigate("/focal-profile")}>
        Profile
      </Menu.Item>
      <Menu.Item key="logout" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-1 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center px-1 md:px-1 mx-auto">
        <Link to="/" className="flex items-center">
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
            PaiSHA
          </span>
        </Link>
        <div className="flex items-center space-x-3 md:space-x-10 rtl:space-x-reverse">
          <ul className="flex font-Onest font-semibold flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-1 border border-gray-100 rounded-lg bg-gray-300 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/focalPersonLandingPage">
                <a className="block py-2 px-3 md:p-0 rounded md:bg-transparent text-gray-900  md:hover:text-[#1ab69d] md:dark:hover:text-[#1ab69d]">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <a className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#1ab69d] md:dark:hover:text-[#1ab69d] dark:text-white dark:hover:bg-gray-700 dark:border-gray-700">
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <a className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#1ab69d] dark:text-white dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700">
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <Link to="/view-announcements">
                <a className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#1ab69d] dark:text-white dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"></a>
              </Link>
            </li>
            <li className="hidden md:block">&nbsp;</li> {/* Add an empty list item for spacing */}
          </ul>
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <div className="flex items-center justify-center h-8 px-2 font-semibold text-gray-900 bg-[#1ab69d] rounded-lg hover:text-[#1ab69d] hover:bg-transparent hover:underline dark:text-gray-400">
              {username}
            </div>
          </Dropdown>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
