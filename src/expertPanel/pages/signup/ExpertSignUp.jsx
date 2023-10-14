import ExpertRegisteration from "../../components/SignupComponents/Registeration";
import SignUp from "../../components/SignupComponents/Singup";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function ExpertSignUp() {
  const [SignUpPage, setSignUpPage] = useState(true);

  const handleSignUpPageChange = () => {
    setSignUpPage((prevValue) => !prevValue);
  };
  return (
    <div>
      {SignUpPage ? (
        <SignUp handleSignUpPageChange={handleSignUpPageChange} />
      ) : (
        <ExpertRegisteration handleSignUpPageChange={handleSignUpPageChange} />
      )}
    </div>
  );
}

export default ExpertSignUp;
