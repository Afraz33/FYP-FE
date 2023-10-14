import React from "react";

function Cards() {
  const svgStyles = {
    isolation: "auto",
    mixBlendMode: "normal",
  };
  return (
    <div className="flex flex-col  p-10">
      <h1 className="text-3xl font-semibold mb-2 mt-6 w-fit mx-auto">
        Hello Afraz, Welcome to PaiSha!
      </h1>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
          <img
            src="/path-to-calendar-image.svg"
            alt="Calendar"
            className="w-24 h-24"
          />
          <h2 className="text-xl font-semibold">Calendar Setting</h2>
        </div>

       
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
          <img
            src="/path-to-booked-meetings-image.svg"
            alt="Booked Meetings"
            className="w-24 h-24"
          />
          <h2 className="text-xl font-semibold">View Booked Meetings</h2>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
          <img
            src="/path-to-profile-image.svg"
            alt="Profile Management"
            className="w-24 h-24"
          />
          <h2 className="text-xl font-semibold">Profile Management</h2>
        </div>
      </div> */}

      <div class="w-[80%] mx-auto grid grid-cols-3 gap-7 mt-10 ">
        <div
          id="view-jobs"
          class="transition ease-in-out delay-150 hover:text-green-400 hover:-translate-y-1 hover:scale-110 hover:bg-slate-700 duration-300 bg-slate-900 items-center text-white cursor-pointer flex flex-col gap-2 py-8 shadow-xl ... rounded-lg ..."
        >
          <div class="ml-3 h-20 w-20">
            <svg
              class="h-full w-full"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
              id="employee"
            >
              <circle
                cx="37.045"
                cy="28.409"
                r="12.5"
                fill="#50b748"
                fill-rule="evenodd"
                transform="matrix(1.92 0 0 1.92 -47.127 -30.545)"
              ></circle>
              <g transform="translate(8 -1012.362)">
                <path
                  fill="#f0f4f7"
                  style={svgStyles}
                  d="M26 1026.394v22.969H7v-27.004h14.844"
                  color="#000"
                  overflow="visible"
                ></path>
                <path
                  fill="#d2dce9"
                  fill-rule="evenodd"
                  d="M22 1022.362v4h4z"
                ></path>
                <path
                  fill="#f0f4f7"
                  d="M26 1026.394v22.969H7v-27.004h14.844"
                  color="#000"
                  overflow="visible"
                  style={svgStyles}
                ></path>
                <path
                  fill="#d2dce9"
                  fill-rule="evenodd"
                  d="M22 1022.362v4h4z"
                ></path>
                <path
                  fill="#f9b536"
                  d="M15 1038.362h2v4.986h-2zm4-3.002h2v7.988h-2z"
                ></path>
                <rect
                  width="2"
                  height="6.988"
                  x="23"
                  y="1036.361"
                  fill="#f9b536"
                  rx="0"
                  ry="0"
                ></rect>
                <path fill="#f9b536" d="M27 1033.36h2v9.988h-2z"></path>
                <path
                  fill="none"
                  stroke="#8fb6d7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.5 1024.862h1m-1 2h1m2.015-2h3.977m-3.977 2h3.977m.009 18.007h10.995"
                ></path>
                <path
                  fill="none"
                  stroke="#2dbca4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m15.5 1035.87 4.998-3.556 4.006 1.555 4.359-4.5"
                ></path>
                <path
                  fill="none"
                  stroke="#2dbca4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M27.51 1029.27h1.494v1.492"
                ></path>
                <path
                  fill="none"
                  stroke="#0c5286"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 1029.87v13h17"
                ></path>
                <path
                  fill="#78c8f0"
                  fill-rule="evenodd"
                  d="M8.15 1036.045v1.547l2.895 1.654c.59.337.955.966.955 1.646v2.47H1v-2.417c0-.713.382-1.372 1.001-1.725l2.849-1.628v-1.547"
                ></path>
                <path
                  fill="#f8b84e"
                  d="M4.85 1035.882h3.3v2.513l-1.65 1.126-1.65-1.126z"
                ></path>
                <path
                  fill="#fcd062"
                  d="M5.522 1030.854c-.678 0-1.223.552-1.223 1.237v.963l.001.014v1.499a2.21 2.21 0 0 0 2.2 2.228 2.21 2.21 0 0 0 2.2-2.228V1030.802c0-.463-.143-.46-.503-.177-.18.14-.406.229-.719.229H6.5z"
                ></path>
                <path
                  fill="#f05542"
                  fill-rule="evenodd"
                  d="M8.843 1030.232c-.09-.025-.233.056-.436.215-.202.159-.455.257-.807.257H5.4c-.762 0-1.375.622-1.375 1.393v1.406c0 .228.18.21.278.154.458-.281 1.21-.997 1.27-1.215.765 1.327 2.3.539 3.146 1.165.068.068.256.085.256-.132v-2.828c0-.26-.04-.39-.132-.415z"
                ></path>
                <path
                  fill="none"
                  stroke="#27b2e7"
                  d="M3.201 1043.357v-1.795m6.61 1.795v-1.795"
                ></path>
                <circle cx="7.6" cy="1041.167" r=".275" fill="#34485c"></circle>
                <circle cx="7.6" cy="1042.267" r=".275" fill="#34485c"></circle>
                <path
                  fill="#4bbfeb"
                  fill-rule="evenodd"
                  d="M5.95 1039.512h1.1v3.85h-1.1z"
                ></path>
                <path
                  fill="#27b2e7"
                  fill-rule="evenodd"
                  d="m6.479 1039.512 2.207.55v-2.75l-.516-.567s-.224 1.117-.57 1.667c-.348.55-1.121 1.1-1.121 1.1z"
                ></path>
                <path
                  fill="#27b2e7"
                  fill-rule="evenodd"
                  d="m6.52 1039.512-2.209.55v-2.75l.518-.567s.224 1.117.571 1.667 1.12 1.1 1.12 1.1z"
                ></path>
              </g>
            </svg>
          </div>
          <div class="ml-3">
            <h1 class="text-2xl font-semibold mt-4">Set Calendar</h1>
          </div>
          <div class="font-normal text-base mt-2 px-5">
            <p className="text-center">
              Adjust your calendar to have 1-1 meetings with users, who are
              eager to benefit from your experience.
            </p>
          </div>
        </div>
        <div
          id="view-dev"
          class="items-center transition ease-in-out delay-150 hover:text-green-400 hover:-translate-y-1 hover:scale-110 hover:bg-slate-700 duration-300 bg-slate-900 text-white cursor-pointer flex flex-col gap-2 py-8 shadow-xl ... rounded-lg ..."
        >
          <div class="h-20 w-20">
            <svg
              class="h-full w-full"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
              id="employee"
            >
              <circle
                cx="37.045"
                cy="28.409"
                r="12.5"
                fill="#50b748"
                fill-rule="evenodd"
                transform="matrix(1.92 0 0 1.92 -47.127 -30.545)"
              ></circle>
              <g transform="translate(8 -1012.362)">
                <path
                  fill="#f0f4f7"
                  style={svgStyles}
                  d="M26 1026.394v22.969H7v-27.004h14.844"
                  color="#000"
                  overflow="visible"
                ></path>
                <path
                  fill="#d2dce9"
                  fill-rule="evenodd"
                  d="M22 1022.362v4h4z"
                ></path>
                <path
                  fill="#f0f4f7"
                  d="M26 1026.394v22.969H7v-27.004h14.844"
                  color="#000"
                  overflow="visible"
                  style={svgStyles}
                ></path>
                <path
                  fill="#d2dce9"
                  fill-rule="evenodd"
                  d="M22 1022.362v4h4z"
                ></path>
                <path
                  fill="#f9b536"
                  d="M15 1038.362h2v4.986h-2zm4-3.002h2v7.988h-2z"
                ></path>
                <rect
                  width="2"
                  height="6.988"
                  x="23"
                  y="1036.361"
                  fill="#f9b536"
                  rx="0"
                  ry="0"
                ></rect>
                <path fill="#f9b536" d="M27 1033.36h2v9.988h-2z"></path>
                <path
                  fill="none"
                  stroke="#8fb6d7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.5 1024.862h1m-1 2h1m2.015-2h3.977m-3.977 2h3.977m.009 18.007h10.995"
                ></path>
                <path
                  fill="none"
                  stroke="#2dbca4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m15.5 1035.87 4.998-3.556 4.006 1.555 4.359-4.5"
                ></path>
                <path
                  fill="none"
                  stroke="#2dbca4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M27.51 1029.27h1.494v1.492"
                ></path>
                <path
                  fill="none"
                  stroke="#0c5286"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 1029.87v13h17"
                ></path>
                <path
                  fill="#78c8f0"
                  fill-rule="evenodd"
                  d="M8.15 1036.045v1.547l2.895 1.654c.59.337.955.966.955 1.646v2.47H1v-2.417c0-.713.382-1.372 1.001-1.725l2.849-1.628v-1.547"
                ></path>
                <path
                  fill="#f8b84e"
                  d="M4.85 1035.882h3.3v2.513l-1.65 1.126-1.65-1.126z"
                ></path>
                <path
                  fill="#fcd062"
                  d="M5.522 1030.854c-.678 0-1.223.552-1.223 1.237v.963l.001.014v1.499a2.21 2.21 0 0 0 2.2 2.228 2.21 2.21 0 0 0 2.2-2.228V1030.802c0-.463-.143-.46-.503-.177-.18.14-.406.229-.719.229H6.5z"
                ></path>
                <path
                  fill="#f05542"
                  fill-rule="evenodd"
                  d="M8.843 1030.232c-.09-.025-.233.056-.436.215-.202.159-.455.257-.807.257H5.4c-.762 0-1.375.622-1.375 1.393v1.406c0 .228.18.21.278.154.458-.281 1.21-.997 1.27-1.215.765 1.327 2.3.539 3.146 1.165.068.068.256.085.256-.132v-2.828c0-.26-.04-.39-.132-.415z"
                ></path>
                <path
                  fill="none"
                  stroke="#27b2e7"
                  d="M3.201 1043.357v-1.795m6.61 1.795v-1.795"
                ></path>
                <circle cx="7.6" cy="1041.167" r=".275" fill="#34485c"></circle>
                <circle cx="7.6" cy="1042.267" r=".275" fill="#34485c"></circle>
                <path
                  fill="#4bbfeb"
                  fill-rule="evenodd"
                  d="M5.95 1039.512h1.1v3.85h-1.1z"
                ></path>
                <path
                  fill="#27b2e7"
                  fill-rule="evenodd"
                  d="m6.479 1039.512 2.207.55v-2.75l-.516-.567s-.224 1.117-.57 1.667c-.348.55-1.121 1.1-1.121 1.1z"
                ></path>
                <path
                  fill="#27b2e7"
                  fill-rule="evenodd"
                  d="m6.52 1039.512-2.209.55v-2.75l.518-.567s.224 1.117.571 1.667 1.12 1.1 1.12 1.1z"
                ></path>
              </g>
            </svg>
          </div>
          <div class="ml-3">
            <h1 class="text-2xl font-semibold mt-4">View Booked Meetings</h1>
          </div>
          <div class="font-normal text-base mt-2 px-5">
            <p class="text-center">
              View all the people that have requested to have a meeting with
              you, and discuss your availability and much more.
            </p>
          </div>
        </div>

        <div
          id="view-applicants"
          class="items-center transition ease-in-out delay-150 hover:text-green-400 hover:-translate-y-1 hover:scale-110 hover:bg-slate-700 duration-300 bg-slate-900 text-white cursor-pointer flex flex-col gap-2 py-8 shadow-xl ... rounded-lg ..."
        >
          <div class="ml-3 h-20 w-20">
            <svg
              class="h-full w-full"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
              id="employee"
            >
              <circle
                cx="37.045"
                cy="28.409"
                r="12.5"
                fill="#50b748"
                fill-rule="evenodd"
                transform="matrix(1.92 0 0 1.92 -47.127 -30.545)"
              ></circle>
              <g transform="translate(8 -1012.362)">
                <path
                  fill="#f0f4f7"
                  style={svgStyles}
                  d="M26 1026.394v22.969H7v-27.004h14.844"
                  color="#000"
                  overflow="visible"
                ></path>
                <path
                  fill="#d2dce9"
                  fill-rule="evenodd"
                  d="M22 1022.362v4h4z"
                ></path>
                <path
                  fill="#f0f4f7"
                  d="M26 1026.394v22.969H7v-27.004h14.844"
                  color="#000"
                  overflow="visible"
                  style={svgStyles}
                ></path>
                <path
                  fill="#d2dce9"
                  fill-rule="evenodd"
                  d="M22 1022.362v4h4z"
                ></path>
                <path
                  fill="#f9b536"
                  d="M15 1038.362h2v4.986h-2zm4-3.002h2v7.988h-2z"
                ></path>
                <rect
                  width="2"
                  height="6.988"
                  x="23"
                  y="1036.361"
                  fill="#f9b536"
                  rx="0"
                  ry="0"
                ></rect>
                <path fill="#f9b536" d="M27 1033.36h2v9.988h-2z"></path>
                <path
                  fill="none"
                  stroke="#8fb6d7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.5 1024.862h1m-1 2h1m2.015-2h3.977m-3.977 2h3.977m.009 18.007h10.995"
                ></path>
                <path
                  fill="none"
                  stroke="#2dbca4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m15.5 1035.87 4.998-3.556 4.006 1.555 4.359-4.5"
                ></path>
                <path
                  fill="none"
                  stroke="#2dbca4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M27.51 1029.27h1.494v1.492"
                ></path>
                <path
                  fill="none"
                  stroke="#0c5286"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 1029.87v13h17"
                ></path>
                <path
                  fill="#78c8f0"
                  fill-rule="evenodd"
                  d="M8.15 1036.045v1.547l2.895 1.654c.59.337.955.966.955 1.646v2.47H1v-2.417c0-.713.382-1.372 1.001-1.725l2.849-1.628v-1.547"
                ></path>
                <path
                  fill="#f8b84e"
                  d="M4.85 1035.882h3.3v2.513l-1.65 1.126-1.65-1.126z"
                ></path>
                <path
                  fill="#fcd062"
                  d="M5.522 1030.854c-.678 0-1.223.552-1.223 1.237v.963l.001.014v1.499a2.21 2.21 0 0 0 2.2 2.228 2.21 2.21 0 0 0 2.2-2.228V1030.802c0-.463-.143-.46-.503-.177-.18.14-.406.229-.719.229H6.5z"
                ></path>
                <path
                  fill="#f05542"
                  fill-rule="evenodd"
                  d="M8.843 1030.232c-.09-.025-.233.056-.436.215-.202.159-.455.257-.807.257H5.4c-.762 0-1.375.622-1.375 1.393v1.406c0 .228.18.21.278.154.458-.281 1.21-.997 1.27-1.215.765 1.327 2.3.539 3.146 1.165.068.068.256.085.256-.132v-2.828c0-.26-.04-.39-.132-.415z"
                ></path>
                <path
                  fill="none"
                  stroke="#27b2e7"
                  d="M3.201 1043.357v-1.795m6.61 1.795v-1.795"
                ></path>
                <circle cx="7.6" cy="1041.167" r=".275" fill="#34485c"></circle>
                <circle cx="7.6" cy="1042.267" r=".275" fill="#34485c"></circle>
                <path
                  fill="#4bbfeb"
                  fill-rule="evenodd"
                  d="M5.95 1039.512h1.1v3.85h-1.1z"
                ></path>
                <path
                  fill="#27b2e7"
                  fill-rule="evenodd"
                  d="m6.479 1039.512 2.207.55v-2.75l-.516-.567s-.224 1.117-.57 1.667c-.348.55-1.121 1.1-1.121 1.1z"
                ></path>
                <path
                  fill="#27b2e7"
                  fill-rule="evenodd"
                  d="m6.52 1039.512-2.209.55v-2.75l.518-.567s.224 1.117.571 1.667 1.12 1.1 1.12 1.1z"
                ></path>
              </g>
            </svg>
          </div>
          <div class="ml-3">
            <h1 class="text-2xl font-semibold mt-4">Edit Profile</h1>
          </div>
          <div class="px-5 font-normal text-base mt-2">
            <p class="text-center">
              Edit your profile, add expertise, skills, experiences or adjust
              hourly rates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
