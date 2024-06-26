import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "antd";
const StudentSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState(""); 
  const navigate = useNavigate();


 // In your frontend code
 const handleSignup = async () => {
  const userData = {
    firstName: firstName,
    lastName: lastName,
    userName: userName,
    phoneNo: phoneNo,
    gender: gender,
    password: password,
    email: email,
  };

  console.log("Sending data to backend:", userData);
  try {
    // Check if email already exists
    const emailExistsResponse = await axios.post(
      "http://localhost:5000/api/users/check-email",
      { email: email }
    );

    if (emailExistsResponse.data.exists) {
      setEmailError("Email already registered.");
      setUsernameError(""); // Clear username error
      return;
    } else {
      setEmailError(""); // Clear previous email error if any
    }

    // Check if username already exists
    const usernameExistsResponse = await axios.post(
      "http://localhost:5000/api/users/check-username",
      { username: userName }
    );

    if (usernameExistsResponse.data.exists) {
      setUsernameError("Username already exists. ");
      setEmailError(""); // Clear email error
      return;
    } else {
      setUsernameError(""); // Clear previous username error if any
    }

    // If email and username are unique, proceed with signup

    const signupResponse = await axios.post(
      "http://localhost:5000/api/users/signup",
      userData
    );

    if (signupResponse.data.token) {
      localStorage.setItem("jwt", signupResponse.data.token);
      navigate("/student-login");
    } else {
      navigate("/student-login");
      console.log("Backend Message:", signupResponse.data.Message);
    }
  } catch (error) {
    // Handle other errors
    console.error("Error in frontend:", error);

    if (error.response && error.response.status === 500) {
      setError("Internal Server Error. Please try again later.");
    } else {
      setError("An error occurred during signup. Please try again.");
    }
  }
};


return (
  <div className={`bg-gray-200 font-Onest ${error ? 'error-height' : ''}`}>
    <div className="bg-gray-200 font-Onest">
      <header className="flex h-screen">
        <div className="mt-10 my-auto w-[50%] h-[90%] mx-auto bg-white flex flex-row rounded-lg shadow-2xl shadow-green-950">
          <div className="flex flex-col gap-4 bg-slate-900 w-[40%] justify-center">
            <div className="ml-4 h-40 w-40 self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full"
                viewBox="0 0 50 50"
                id="gps"
              >
                <g transform="translate(0 -1004.362)">
                  <circle
                    cx="37.045"
                    cy="28.409"
                    r="12.5"
                    fill="#1ab69d"
                    fillRule="evenodd"
                    transform="matrix(1.92 0 0 1.92 -47.127 973.817)"
                  ></circle>
                  <path
                    style={{
                      lineHeight: "normal",
                      textIndent: 0,
                      textAlign: "start",
                      textDecorationLine: "none",
                      textDecorationStyle: "solid",
                      textDecorationColor: "#000",
                      textTransform: "none",
                      blockProgression: "tb",
                      isolation: "auto",
                      mixBlendMode: "normal",
                    }}
                    fill="#1ab69d"
                    d="M18.547 47.342a24 24 0 0 0 1.373.308 24 24 0 0 0 2.383.29A24 24 0 0 0 24 48a24 24 0 0 0 2.396-.12 24 24 0 0 0 2.372-.359 24 24 0 0 0 2.324-.593 24 24 0 0 0 2.254-.823 24 24 0 0 0 2.16-1.042 24 24 0 0 0 2.045-1.254 24 24 0 0 0 1.91-1.454 24 24 0 0 0 1.756-1.634 24 24 0 0 0 1.584-1.803 24 24 0 0 0 1.394-1.951 24 24 0 0 0 1.194-2.08 24 24 0 0 0 .98-2.19 24 24 0 0 0 .756-2.277 24 24 0 0 0 .525-2.34 24 24 0 0 0 .02-.158L28.682 8.934c-.02-.02-.043-.037-.063-.057-.03-.03-.063-.055-.094-.084a6.601 6.601 0 0 0-.662-.545 6.657 6.657 0 0 0-.488-.318c-.059-.035-.116-.073-.176-.106a6.642 6.642 0 0 0-.681-.33c-.032-.013-.064-.023-.096-.035a6.538 6.538 0 0 0-.647-.217c-.064-.018-.128-.033-.193-.049a6.398 6.398 0 0 0-.553-.109c-.08-.013-.16-.028-.242-.037a6.247 6.247 0 0 0-.76-.045h-.002V7c-3.006-.052-5.78 2.166-6.412 5.1-.065.27-.11.543-.138.818v.002a6.408 6.408 0 0 0-.032.826c.002.056.013.11.016.166.012.22.027.44.06.658.042.27.1.535.174.797.058.204.134.402.211.6.024.06.04.122.065.181a6.593 6.593 0 0 0 .367.732c.073.126.161.242.242.362.075.112.143.228.225.334.037.049.084.091.123.139.133.163.265.325.414.474l.014.014c1.086 1.276 2.233 2.492 3.285 3.74a.5.5 0 0 0 .013.02c.248.268.51.581.793.887.058.062.102.12.162.181l.096.094 1.121 1.123c-.109-.027-.217-.058-.328-.074a3.51 3.51 0 0 0-.715-.033h-.002v-.002a3.288 3.288 0 0 0-1.99.804c-.624.495-.995 1.176-1.164 1.899a4.317 4.317 0 0 0-.094 1.113c.002.06-.008.12-.004.18l-.002-.002c.015.777-.002 1.585.022 2.406l-2.24-2.24a2.741 2.741 0 0 0-1.942-.809v.006c-1.554 0-2.469 1.182-2.695 2.3a2.754 2.754 0 0 0-.057.464v2.39c0 .608.319 1.072.639 1.49v.022c-.405.202-1.639.814-2.602 1.338-.549.299-.964.579-1.267.912-.23.252-.384.551-.447.865-.02.102-.034.204-.034.307v.895c0 .03.012.053.016.082.006.042.007.087.021.123.023.06.06.108.1.15.013.013.023.026.037.037l8.47 8.47zm5.394-24.088a.5.5 0 0 0 .008 0l1.031 1.031-.007-.002-1.032-1.03z"
                    color="#000"
                    fontFamily="sans-serif"
                    fontWeight="400"
                    transform="translate(0 1004.362)"
                  ></path>
                  <path
                    style={{
                      lineHeight: "normal",
                      textIndent: 0,
                      textAlign: "start",
                      textDecorationLine: "none",
                      textDecorationStyle: "solid",
                      textDecorationColor: "#000",
                      textTransform: "none",
                      blockProgression: "tb",
                      isolation: "auto",
                      mixBlendMode: "normal",
                    }}
                    fill="#fff"
                    d="M16.025.002c-3.006-.052-5.78 2.165-6.412 5.1-.52 2.17.161 4.533 1.74 6.103 1.087 1.275 2.234 2.492 3.286 3.74a.5.5 0 0 0 .013.018c.324.35.65.78 1.051 1.162a.5.5 0 0 0 .717-.025c1.3-1.44 2.543-2.903 3.824-4.34a.5.5 0 0 0 .014-.016c.191-.233.511-.537.738-.869 1.86-2.092 2.144-5.328.652-7.703-1.166-1.948-3.347-3.188-5.623-3.17zm-.01.996V1a.5.5 0 0 0 .014 0c1.906-.017 3.788 1.052 4.766 2.69a.5.5 0 0 0 .006.01c1.246 1.98.997 4.788-.565 6.529a.5.5 0 0 0-.047.06c-.098.152-.442.5-.705.82-1.163 1.305-2.287 2.616-3.44 3.905a51.827 51.827 0 0 0-.642-.713l-.007-.01c-.003 0-.006 0-.008-.01-1.072-1.27-2.212-2.482-3.272-3.726a.5.5 0 0 0-.031-.034c-1.342-1.314-1.938-3.367-1.498-5.193a.5.5 0 0 0 .004-.012c.523-2.442 2.927-4.364 5.426-4.318zm.004 2.711a2.855 2.855 0 0 0-2.519 1.5c-.87 1.498-.101 3.52 1.533 4.078 1.61.64 3.498-.418 3.807-2.117.41-1.746-1.028-3.512-2.82-3.461zm0 .996v.002a.5.5 0 0 0 .022 0c1.099-.036 2.086 1.173 1.828 2.242a.5.5 0 0 0-.008.03c-.182 1.046-1.48 1.776-2.467 1.378a.5.5 0 0 0-.029-.011c-1.007-.336-1.536-1.725-1-2.643a.5.5 0 0 0 .01-.017 1.907 1.907 0 0 1 1.645-.98zm-.24 12.436a3.29 3.29 0 0 0-1.99.804c-.998.792-1.347 2.059-1.262 3.215l-.002-.027c.019.984-.039 2.008.04 3.058-.002.535.272.925.474 1.21.162.227.222.36.264.486a2.423 2.423 0 0 1-.301.181c-.297.155-.676.312-.992.494-1.184.665-2.63 1.17-3.76 2.278-.425.405-.574.933-.61 1.39-.035.46.011.883-.005 1.215a.5.5 0 1 0 .998.051c.022-.444-.02-.856.006-1.187.025-.332.09-.55.3-.748a.5.5 0 0 0 .006-.01c.926-.908 2.272-1.399 3.56-2.123a.5.5 0 0 0 .005 0c.22-.128.604-.292.955-.475.175-.092.346-.189.502-.312.156-.124.324-.277.388-.555a.5.5 0 0 0 .012-.149c-.035-.51-.321-.849-.512-1.117-.19-.268-.294-.45-.293-.629a.5.5 0 0 0-.002-.04c-.075-.974-.015-1.992-.035-3.04a.5.5 0 0 0-.002-.027c-.067-.91.213-1.834.893-2.367a.5.5 0 0 0 .023-.02c1.025-.907 2.87-.633 3.596.526a.5.5 0 0 0 .02.029c.529.728.38 1.745.412 2.885-.054 1.032.116 1.923-.254 2.58-.279.368-.626.882-.492 1.543a.5.5 0 0 0 .255.342c1.683.895 3.4 1.658 4.952 2.632.277.234.406.522.472.91.067.395.05.868.047 1.342a.5.5 0 1 0 1 .012c.004-.45.03-.979-.062-1.518-.092-.538-.322-1.11-.828-1.527a.5.5 0 0 0-.051-.037c-1.54-.973-3.175-1.707-4.733-2.518.015-.182.049-.33.262-.609a.5.5 0 0 0 .035-.053c.618-1.065.35-2.2.395-3.05a.5.5 0 0 0 0-.042c-.031-1 .218-2.327-.596-3.462-.538-.849-1.427-1.37-2.373-1.508a3.54 3.54 0 0 0-.717-.033zm7.856 3.345a2.769 2.769 0 0 0-2.754 2.766v2.383c0 .102.018.195.035.289.442.222.887.447 1.385.713-.252-.305-.42-.637-.42-1v-2.383c0-.98.784-1.766 1.754-1.766s1.752.786 1.752 1.764v2.383c0 .41-.206.8-.506 1.123a.5.5 0 0 0-.133.34v.365a.5.5 0 0 0 .275.447c.212.106 1.817.901 2.848 1.463.5.272.828.513 1.006.709.178.196.22.316.22.498v.887c-.009.676 1.01.676 1 0v-.887c0-.424-.176-.839-.48-1.172-.303-.333-.718-.613-1.267-.912-.963-.524-2.197-1.136-2.602-1.338v-.031c.32-.419.639-.882.639-1.49v-2.383c-.036-1.227-.98-2.764-2.752-2.764v-.004zm-15.27.008v.004c-1.772 0-2.716 1.537-2.752 2.764v2.383c0 .607.319 1.071.639 1.49v.031c-.405.202-1.639.814-2.602 1.338-.549.299-.964.579-1.267.912-.304.333-.48.748-.48 1.172v.887c-.01.676 1.009.676 1 0v-.887c0-.182.042-.303.22-.498.178-.196.507-.437 1.006-.71 1.031-.56 2.636-1.356 2.848-1.462a.5.5 0 0 0 .275-.447v-.366a.5.5 0 0 0-.133-.34c-.3-.322-.506-.711-.506-1.122V23.26c0-.978.783-1.764 1.752-1.764.97 0 1.755.786 1.754 1.766v2.383c0 .363-.168.695-.42 1 .498-.266.943-.491 1.385-.713.017-.094.035-.187.035-.29V23.26c0-1.52-1.24-2.766-2.754-2.766z"
                    color="#000"
                    fontFamily="sans-serif"
                    fontWeight="400"
                    overflow="visible"
                    transform="translate(8 1011.361)"
                  ></path>
                </g>
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white ml-4">Sign Up</h1>
            </div>
            <hr className="w-[50%] ml-4  border-4 border-[#1ab69d] rounded-lg" />
            <div className="pb-10">
              <p className="text-xl font-normal ml-4 text-white">
                Get registered today, and get personalized recommendations for
                your career, and univerisity programs.
              </p>
            </div>
          </div>
          <div className="w-[60%] flex flex-col gap-2">
          <form
          onSubmit={(e)=>{
            e.preventDefault();
            handleSignup()
          }
            
            }>
            <div className="pt-5 flex flex-col items-center justify-center w-full max-w-lg">
              <div className="w-[70%] mx-auto flex flex-col justify-center">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  required
                  className="appearance-none border border-black rounded-lg py-2 px-3 mb-3 leading-tight focus:outline-none focus:border-green-600"
                  type="text"
                  placeholder="John"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="w-[70%] mx-auto flex flex-col justify-center">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  required
                  className="appearance-none border border-black rounded-lg py-2 px-3 mb-3 leading-tight focus:outline-none focus:border-green-600"
                  type="text"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="w-[70%] mx-auto flex flex-col justify-center">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="userName"
                >
                  User Name
                </label>
                <input
                  id="userName"
                  required
                  className="appearance-none border border-black rounded-lg py-2 px-3 leading-tight focus:outline-none focus:border-green-600"
                  type="text"
                  placeholder="john_doe"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  pattern="^\S+$"  // Ensures no spaces in the username
                  title="Username cannot have spaces"
                />
                  {usernameError && (
              <span style={{ color: 'red', marginTop: '0.25rem', fontSize: '0.875rem' }}>
                {usernameError}
              </span>
                  )}
              </div>

              <div className="w-[70%] mx-auto flex flex-col justify-center">
                <label
                  className="block text-gray-700 font-bold mb-2 mt-2"
                  htmlFor="phoneNo"
                >
                  Phone Number
                </label>
                <input
                  id="phoneNo"
                  required
                  className="appearance-none border border-black rounded-lg py-2 px-3 leading-tight focus:outline-none focus:border-green-600"
                  type="tel"
                  placeholder="030083428"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  pattern="^03\d{9}$"
                  title="Phone number must be in the format 030xxxxxxxxx"
                />

              </div>

              {/* Gender */}
              <div className="w-[70%] mx-auto flex flex-col justify-center">
                <label
                  className="block text-gray-700 font-bold mb-2 mt-2"
                  htmlFor="gender"
                >
                  Gender
                </label>
               
                <input
                  id="gender"
                  required
                  className="appearance-none border border-black rounded-lg py-2 px-3 leading-tight focus:outline-none focus:border-green-600"
                  type="text"
                  placeholder="Male/Female/Other"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  pattern="^(Male|Female|Other)$"  // Matches only specified genders
                  title="Gender can only be Male, Female, or Other"
                />
              </div>

              {/* Email */}
              <div className="w-[70%] mx-auto flex flex-col justify-center">
                <label
                  className="block text-gray-700 font-bold mb-2 mt-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  required
                  className="appearance-none border border-black rounded-lg py-2 px-3 leading-tight focus:outline-none focus:border-green-600"
                  type="email"
                  placeholder="john.doe@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"  // Simple email pattern
                  title="Email needs to be in the correct format (e.g., john.doe@example.com)"
                />
                  {emailError && (
              <span style={{ color: 'red', marginTop: '0.25rem', fontSize: '0.875rem' }}>
                {emailError}
              </span>
            )}
          </div>
              {/* Password */}
              <div className="w-[70%] mx-auto flex flex-col justify-center">
                <label
                  className="block text-gray-700 font-bold mb-2 mt-2"
                  htmlFor="password"
                >
                  Password
                </label>
                  <input
                  id="password"
                  required
                  className="appearance-none border border-black rounded-lg py-2 px-3 leading-tight focus:outline-none focus:border-green-600"
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength="8" // Minimum length of 8 characters
                  title="Password needs to be at least 8 characters"
                />
              </div>

              <div className="flex items-center justify-between mt-4">
                <button
                  type="button"
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-70"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-4 hover:bg-white bg-[#1ab69d] text-white hover:text-green-600 font-semibold py-2 px-4 border border-[#1ab69d] rounded shadow w-70"
                >
                  Sign Up
                </button>
              </div>
              <button className="mt-4 underline underline-offset-2 ... inline-block mx-auto  hover:text-[#1ab69d] text-black  hover:bg-white">
                <Link to="/student-login">Already have an account? Log in</Link>
                
            </button>
            </div>
          </form>
        </div>
        </div>
        </header>
      </div>
    </div>
    
  );
};

export default StudentSignUp;