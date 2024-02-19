// import React, { useState } from "react";
// import ExpertLogin from "./ExpertLogin";
// import NormalUserLogin from "./NormalUserLogin";
// import FocalPersonLogin from "./FocalPersonLogin";

// const LoginPage = () => {
//   const [selectedForm, setSelectedForm] = useState(null);
//   const [activeButton, setActiveButton] = useState(null);

//   const renderSelectedForm = () => {
//     if (selectedForm === "expert") {
//       return <ExpertLogin />;
//     } else if (selectedForm === "normal") {
//       return <NormalUserLogin />;
//     } else if (selectedForm === "focal") {
//       return <FocalPersonLogin />;
//     }
//   };

//   return (
//     <div className="bg-[#B2A1FE] h-screen flex flex-col items-center">
//       <div className="flex space-x-4 mt-6">
//         <button
//           className={`${
//             activeButton === "expert"
//               ? "bg-white rounded-full border-black border"
//               : ""
//           } px-4 py-2 font-DelaGothicOne`}
//           onClick={() => {
//             setSelectedForm("expert");
//             setActiveButton("expert");
//           }}
//         >
//           Expert
//         </button>
//         <button
//           className={`${
//             activeButton === "normal"
//               ? "bg-white rounded-full border-black border"
//               : ""
//           } px-4 py-2 font-DelaGothicOne`}
//           onClick={() => {
//             setSelectedForm("normal");
//             setActiveButton("normal");
//           }}
//         >
//           Normal User
//         </button>
//         <button
//           className={`${
//             activeButton === "focal"
//               ? "bg-white rounded-full border-black border"
//               : ""
//           } px-4 py-2 font-DelaGothicOne`}
//           onClick={() => {
//             setSelectedForm("focal");
//             setActiveButton("focal");
//           }}
//         >
//           Focal Person
//         </button>
//       </div>

//       <div className="flex flex-col items-center">{renderSelectedForm()}</div>
//     </div>
//   );
// };

// export default LoginPage;
