import ExpertRegisteration from "../../components/SignupComponents/Registeration";
import SignUp from "../../components/SignupComponents/Singup";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function ExpertSignUp() {
  const [SignUpPage, setSignUpPage] = useState(true);
  const [description, setDescription] = useState("");
  const [expertise, setExpertise] = useState("");
  const [highestQualification, setHighestQualification] = useState();
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [currentRole, setCurrentRole] = useState("");
  const [certifications, setCertifications] = useState([]);
  const [city, setCity] = useState("");
  const [languages, setLanguages] = useState([]);
  const [hourlyRate, setHourlyRate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSignUpPageChange = () => {
    setSignUpPage((prevValue) => !prevValue);
  };

  // Create handler functions to update state when input values change
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleExpertiseChange = (event) => {
    setExpertise(event.target.value);
  };

  const addExpertise = () => {
    setExpertise([...expertise, ""]);
  };

  const addSkills = () => {
    setSkills([...skills, ""]);
  };
  const addExperience = () => {
    setExperience([...experience, ""]);
  };
  const addCertifications = () => {
    setCertifications([...certifications, ""]);
  };
  const addLanguage = () => {
    setLanguages([...languages, ""]);
  };
  const handleHighestQualificationChange = (e) =>
    setHighestQualification(e.target.value);
  const handleHourlyRateChange = (e) => setHourlyRate(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleCurrentRoleChange = (e) => setCurrentRole(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const registerExpert = async () => {
    const expertData = {
      firstName,
      lastName,
      userName,
      email,
      phone,
      gender,
      password,
      description,
      expertise,
      highestQualification,
      skills,
      experience,
      currentRole,
      certifications,
      city,
      languages,
      hourlyRate,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/experts/expertSignup",
        expertData
      );
      console.log(response.data);
      if (response.status === 200) {
        console.log("Yes");
        window.location.href = "/";
      }

      // Handle successful registration (e.g., redirect, show message, etc.)
    } catch (error) {
      console.error(
        "An error occurred while registering the expert:",
        error.response ? error.response.data : error.message
      );
      // Handle error (e.g., show error message to the user)
    }
  };

  return (
    <div>
      {SignUpPage ? (
        <SignUp
          handleSignUpPageChange={handleSignUpPageChange}
          // Pass the state variables and handler functions as props
          firstName={firstName}
          lastName={lastName}
          userName={userName}
          email={email}
          phone={phone}
          gender={gender}
          password={password}
          confirmPassword={confirmPassword}
          handleFirstNameChange={handleFirstNameChange}
          handleLastNameChange={handleLastNameChange}
          handleUserNameChange={handleUserNameChange}
          handleEmailChange={handleEmailChange}
          handlePhoneChange={handlePhoneChange}
          handleGenderChange={handleGenderChange}
          handlePasswordChange={handlePasswordChange}
          handleConfirmPasswordChange={handleConfirmPasswordChange}
        />
      ) : (
        <ExpertRegisteration
          description={description}
          expertise={expertise}
          highestQualification={highestQualification}
          skills={skills}
          experience={experience}
          currentRole={currentRole}
          certifications={certifications}
          city={city}
          languages={languages}
          hourlyRate={hourlyRate}
          // Pass the setter functions
          setDescription={setDescription}
          setExpertise={setExpertise}
          setHighestQualification={setHighestQualification}
          setSkills={setSkills}
          setExperience={setExperience}
          setCurrentRole={setCurrentRole}
          setCertifications={setCertifications}
          setCity={setCity}
          setLanguages={setLanguages}
          setHourlyRate={setHourlyRate}
          // Pass the handler functions
          handleHighestQualificationChange={handleHighestQualificationChange}
          handleHourlyRateChange={handleHourlyRateChange}
          handleCityChange={handleCityChange}
          handleCurrentRoleChange={handleCurrentRoleChange}
          handleDescriptionChange={handleDescriptionChange}
          addCertifications={addCertifications}
          addExperience={addExperience}
          addExpertise={addExpertise}
          addLanguage={addLanguage}
          addSkills={addSkills}
          registerExpert={registerExpert}
          handleExpertiseChange = {handleExpertiseChange}
        />
      )}
    </div>
  );
}

export default ExpertSignUp;
