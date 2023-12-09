import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  //   return (
  //     <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 font-Onest">
  //       <div className="flex flex-wrap justify-between  items-center mx-auto max-w-screen-xl p-4">
  //         <a
  //           href="https://flowbite.com"
  //           className="flex items-center space-x-3 rtl:space-x-reverse"
  //         >
  //           <img
  //             src="https://flowbite.com/docs/images/logo.svg"
  //             className="h-8"
  //             alt="Flowbite Logo"
  //           ></img>
  //           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
  //             PaiSHA
  //           </span>
  //         </a>
  //         <button
  //           data-collapse-toggle="mega-menu-full"
  //           type="button"
  //           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  //           aria-controls="mega-menu-full"
  //           aria-expanded="false"
  //         >
  //           <span className="sr-only">Open main menu</span>
  //           <svg
  //             className="w-5 h-5"
  //             aria-hidden="true"
  //             xmlns="http://www.w3.org/2000/svg"
  //             fill="none"
  //             viewBox="0 0 17 14"
  //           >
  //             <path
  //               stroke="currentColor"
  //               stroke-linecap="round"
  //               stroke-linejoin="round"
  //               stroke-width="2"
  //               d="M1 1h15M1 7h15M1 13h15"
  //             />
  //           </svg>
  //         </button>

  //         <div
  //           id="mega-menu-full"
  //           className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1"
  //         >
  //           <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
  //             <li>
  //               <a
  //                 href="#"
  //                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
  //                 aria-current="page"
  //               >
  //                 Home
  //               </a>
  //             </li>
  //             <li>
  //               <button
  //                 onClick={() => {
  //                   setIsOpen((prevIsOpen) => !prevIsOpen);
  //                 }}
  //                 id="mega-menu-full-dropdown-button"
  //                 data-collapse-toggle="mega-menu-full-dropdown"
  //                 className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
  //               >
  //                 Student Module{" "}
  //                 <svg
  //                   className="w-2.5 h-2.5 ms-2.5"
  //                   aria-hidden="true"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="none"
  //                   viewBox="0 0 10 6"
  //                 >
  //                   <path
  //                     stroke="currentColor"
  //                     stroke-linecap="round"
  //                     stroke-linejoin="round"
  //                     stroke-width="2"
  //                     d="m1 1 4 4 4-4"
  //                   />
  //                 </svg>
  //               </button>
  //             </li>
  //             <li>
  //               <a
  //                 href="#"
  //                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
  //               >
  //                 Privacy Policy
  //               </a>
  //             </li>
  //             <li>
  //               <a
  //                 href="#"
  //                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
  //               >
  //                 Aimbition
  //               </a>
  //             </li>
  //             <li>
  //               <a
  //                 href="#"
  //                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
  //               >
  //                 Contact
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //       {isOpen && (
  //         <div
  //           id="mega-menu-full-dropdown"
  //           className="mt-1 border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600"
  //         >
  //           <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
  //             <ul>
  //               <li>
  //                 <a
  //                   href="afraz"
  //                   className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
  //                 >
  //                   <div className="font-semibold">Online Stores</div>
  //                   <span className="text-sm text-gray-500 dark:text-gray-400">
  //                     Connect with third-party tools that you're already using.
  //                   </span>
  //                 </a>
  //               </li>
  //               <li>
  //                 <a
  //                   href="#"
  //                   className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
  //                 >
  //                   <div className="font-semibold">Segmentation</div>
  //                   <span className="text-sm text-gray-500 dark:text-gray-400">
  //                     Connect with third-party tools that you're already using.
  //                   </span>
  //                 </a>
  //               </li>
  //               <li>
  //                 <a
  //                   href="#"
  //                   className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
  //                 >
  //                   <div className="font-semibold">Marketing CRM</div>
  //                   <span className="text-sm text-gray-500 dark:text-gray-400">
  //                     Connect with third-party tools that you're already using.
  //                   </span>
  //                 </a>
  //               </li>
  //             </ul>
  //             <ul>
  //               <li>
  //                 <a
  //                   href="#"
  //                   className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
  //                 >
  //                   <div className="font-semibold">Online Stores</div>
  //                   <span className="text-sm text-gray-500 dark:text-gray-400">
  //                     Connect with third-party tools that you're already using.
  //                   </span>
  //                 </a>
  //               </li>
  //               <li>
  //                 <a
  //                   href="#"
  //                   className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
  //                 >
  //                   <div className="font-semibold">Segmentation</div>
  //                   <span className="text-sm text-gray-500 dark:text-gray-400">
  //                     Connect with third-party tools that you're already using.
  //                   </span>
  //                 </a>
  //               </li>
  //               <li>
  //                 <a
  //                   href="#"
  //                   className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
  //                 >
  //                   <div className="font-semibold">Marketing CRM</div>
  //                   <span className="text-sm text-gray-500 dark:text-gray-400">
  //                     Connect with third-party tools that you're already using.
  //                   </span>
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //       )}
  //     </nav>
  //   );

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-2xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          // href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          /> */}
          <span className="self-center text-2xl font-semibold font-Onest whitespace-nowrap dark:text-white">
            PaiSHA
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-10 rtl:space-x-reverse ">
          <Link
            to="/"
            className=" font-semibold text-white w-24 h-10  border-2 flex items-center justify-center bg-[#1ab69d] px-4 font-Onest hover:border-white  rounded-lg hover:bg-[#ee4a62]"
          >
            Logout 
          </Link>
          {/* <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Provide Consultation
          </button> */}

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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex font-Onest font-semibold flex-col  p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-300 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:[bg-gray-100] md:hover:bg-transparent md:hover:text-[#1ab69d] md:dark:hover:text-[#1ab69d] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
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
                  href="afraz"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-Onest font-semibold">Login Sign Up</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-Onest">
                    Join us by creating an account and find experts to help you
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-Onest font-semibold">Personality Analysis</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-Onest">
                    Analyze your personality and find your interests with the help of Artificial Intelligence
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-Onest font-semibold">Career Prediction</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-Onest">
                    Get to know what career best suits you
                  </span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-Onest font-semibold">Universities for you</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-Onest">
                    Get universities in Pakistan that match your interests
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-Onest font-semibold">University Information</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-Onest">
                    Find the answers to your questions about universities
                  </span>
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-Onest font-semibold"></div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-Onest">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
