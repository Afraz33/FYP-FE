import React, { useState } from "react";

const ChatbotModal = ({ modalVisible, setModalVisible }) => {
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      {/* Modal toggle */}

      {/* Main modal */}
      {modalVisible && (
        <div
          id="static-modal"
          data-modal-backdrop="static"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center h-screen bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl font-Onest">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow border-4 border-[#1ab69d]">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                <h3 className="text-2xl  font-semibold text-gray-900 ">
                  Some General Guidelines before talking with Sarah
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={closeModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <ol className="list-decimal p-4 px-11  space-y-4 ">
                <li className="text-base leading-relaxed text-gray-700 ">
                  Sarah encapsulates a cognitive assessment designed to
                  understand various aspects of your thinking process. This test
                  will help evaluate your cognitive strengths and areas that may
                  benefit from improvement.
                </li>
                <li className="text-base leading-relaxed text-gray-700 ">
                  To get the most accurate results, please provide clear and
                  detailed answers to the questions presented. The more
                  information you share, the better the Sarah can assess your
                  cognitive abilities.
                </li>
                <li className="text-base leading-relaxed text-gray-700 ">
                  Honesty is crucial. Provide answers that genuinely reflect
                  your thoughts and abilities. The goal is to understand your
                  cognitive processes, and accurate results depend on truthful
                  responses.
                </li>
              </ol>
              {/* Modal footer */}
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="static-modal"
                  type="button"
                  className="mx-auto text-white bg-[#1ab69d] hover:bg-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  onClick={closeModal}
                >
                  Initiate Chat with Sarah
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotModal;
