import { Route, Routes } from "react-router-dom";
import LandingPage from "../expertPanel/pages/LandingPage/LandingPage";
import SignUpPage from "../expertPanel/pages/signup/SignUpPage";
import Login from "../expertPanel/pages/login/LoginPage";
import ExpertRegistration from "../expertPanel/pages/Expert/ExpertRegistration";
function Routers() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/login" element={<Login />}></Route>

      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route path="/expert-registration" element={<ExpertRegistration />}></Route>
    </Routes>
  );
}

export default Routers;
