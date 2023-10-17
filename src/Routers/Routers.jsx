import { Route, Routes } from "react-router-dom";
import LandingPage from "../expertPanel/pages/LandingPage/LandingPage";
import SignUpPage from "../expertPanel/pages/signup/SignUpPage";
import Login from "../expertPanel/pages/login/LoginPage";
import UserLandingPage from "../expertPanel/pages/LandingPage/UserLandingPage";
import SearchPage from "../expertPanel/pages/user/searchExperts";
import ExpertDetails from "../expertPanel/pages/user/ExpertDetails";
import ExpertLandingPage from "../expertPanel/pages/ExpertLandingPage/ExpertLandingPage";
import Calendar from "../expertPanel/pages/CalendarPage/CalendarPage";
import LandingPage2 from "../expertPanel/pages/LandingPage/LandingPage2";
import MeetingPage from "../expertPanel/pages/MeetingPage/MeetingPage";
function Routers() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage2 />}></Route>
      <Route path="/login" element={<Login />}></Route>

      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route path="/userLandingPage" element={<UserLandingPage />} />

      <Route path="/search" element={<SearchPage />} />
      <Route path="/profile/:id" element={<ExpertDetails />} />

      <Route path="/expert-panel" element={<ExpertLandingPage />}></Route>
      <Route path="/expert-panel/calendar" element={<Calendar />}></Route>
      <Route path="/meeting/:userName" element={<MeetingPage />} />
    </Routes>
  );
}

export default Routers;
