import { Route, Routes } from "react-router-dom";
import LandingPage from "../expertPanel/pages/LandingPage/LandingPage";
import SignUpPage from "../expertPanel/pages/signup/SignUpPage";
import Login from "../expertPanel/pages/login/LoginPage";
import ExpertLandingPage from "../expertPanel/pages/ExpertLandingPage/ExpertLandingPage";
function Routers() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/login" element={<Login />}></Route>

      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route path="/expert-panel" element={<ExpertLandingPage />}></Route>
    </Routes>
  );
}

export default Routers;
