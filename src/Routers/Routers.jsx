import { Route, Routes } from "react-router-dom";
import LandingPage from "../expertPanel/pages/LandingPage/LandingPage";
import SignUpPage from "../expertPanel/pages/signup/SignUpPage";
import Login from "../expertPanel/pages/login/LoginPage";
import UserLandingPage from "../expertPanel/pages/LandingPage/UserLandingPage";
import SearchPage from "../expertPanel/pages/user/searchExperts"; 
import ExpertDetails from "../expertPanel/pages/user/ExpertDetails"; 

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/login" element={<Login />}></Route>

      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route path="/userLandingPage" element={<UserLandingPage />} />

      <Route path="/search" element={<SearchPage />} />
      <Route path="/profile/:id" element={<ExpertDetails />} />

    </Routes>
  );
}

export default Routers;