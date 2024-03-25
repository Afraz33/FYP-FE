import { Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "../expertPanel/pages/LandingPage/LandingPage";
import SignUpPage from "../expertPanel/pages/signup/SignUpPage";
import Login from "../expertPanel/pages/login/LoginPage";
import UserLandingPage from "../expertPanel/pages/LandingPage/UserLandingPage";
import SearchPage from "../expertPanel/pages/user/searchExperts";
import ReviewPage from "../expertPanel/pages/user/giveReview";
import ExpertDetails from "../expertPanel/pages/user/ExpertDetails";
import ExpertLandingPage from "../expertPanel/pages/ExpertLandingPage/ExpertLandingPage";
import Calendar from "../expertPanel/pages/CalendarPage/CalendarPage";
import LandingPage2 from "../LandingPage/LandingPage2";
import MeetingPage from "../expertPanel/pages/MeetingPage/MeetingPage";
import ChatbotPage from "../CareerchatbotPanel/pages/ChatbotPage";
import RecommendedUniversities from "../CareerchatbotPanel/pages/RecommendedUniversitiesPage";
import StudentLogin from "../studentPanel/pages/StudentLogin";

import AnnoucementPage from "../studentPanel/pages/Annoucement";
import ForgotPasswordForm from '../studentPanel/pages/ForgotPasswordForm';
import ResetPasswordForm from '../studentPanel/pages/ResetPasswordForm';



import StudentLandingPage from "../studentPanel/pages/StudentLandingPage";
import StudentSignUp from "../studentPanel/pages/StudentSignup";
import SearchExperts from "../studentPanel/pages/SearchExpert";
import PersonalityPage from "../CareerchatbotPanel/pages/PersonalityPage";
import UniChatbotPage from "../UniChatbotPanel/pages/UniChatbotPage";
import FocalPersonLogin from '../focalPersonPanel/pages/focalPersonLogin';
import FocalPersonSignUp from '../focalPersonPanel/pages/focalPersonSignUp';
import FocalPersonLandingPage from '../focalPersonPanel/pages/focalPersonLandingPage';
import FocalPersonAnnoucement from '../focalPersonPanel/pages/AnnoucementPage';
import UserProfile from "../studentPanel/pages/UserProfile";
import UniRanking from "../UniversityRankings/pages/UniRanking";

import FocalPersonProfile from '../focalPersonPanel/pages/UserProfile';
import AnnoucementCard from '../studentPanel/pages/AnnouncementProfile';
import FocalForgotPass from '../focalPersonPanel/pages/ForgetPassword';
import FocalResetPass from '../focalPersonPanel/pages/ResetPassword';


import MeritCalculator from "../studentPanel/pages/MeritCalculator";
import { useAuth } from "../AuthContext";

function Routers() {
  const { isLoggedIn } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<LandingPage2 />}></Route>
      <Route path="/student-login" element={<StudentLogin />}></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route path="/student-signup" element={<StudentSignUp />}></Route>
      <Route path="/forgot-password" element={<ForgotPasswordForm />} />
      <Route path="/reset-password/:token" element={<ResetPasswordForm />} />
      <Route path="/user-profile" element={<UserProfile />} />

      <Route
        path="/userLandingPage"
        element={isLoggedIn ? <StudentLandingPage /> : <Navigate to="/" />}
      />

      <Route
        path="/search"
        element={isLoggedIn ? <SearchPage /> : <Navigate to="/" />}
      />
      <Route
        path="/profile/:id"
        element={isLoggedIn ? <ExpertDetails /> : <Navigate to="/" />}
      />
      <Route
        path="/review/:expertEmail"
        element={isLoggedIn ? <ReviewPage /> : <Navigate to="/" />}
      />

      <Route
        path="/expert-panel"
        element={isLoggedIn ? <ExpertLandingPage /> : <Navigate to="/" />}
      />
      <Route
        path="/expert-panel/calendar"
        element={isLoggedIn ? <Calendar /> : <Navigate to="/" />}
      />
      <Route
        path="/meeting/:userName"
        element={isLoggedIn ? <MeetingPage /> : <Navigate to="/" />}
      />
      <Route
        path="/chatbot"
        element={isLoggedIn ? <ChatbotPage /> : <Navigate to="/" />}
      />
      <Route
        path="/recommendedUniversities/:career"
        element={isLoggedIn ? <RecommendedUniversities /> : <Navigate to="/" />}
      />
      <Route
        path="/personality/:Personality"
        element={isLoggedIn ? <PersonalityPage /> : <Navigate to="/" />}
      />

      <Route
        path="/search-experts"
        element={isLoggedIn ? <SearchExperts /> : <Navigate to="/" />}
      />
      <Route
        path="/university-chatbot"
        element={isLoggedIn ? <UniChatbotPage /> : <Navigate to="/" />}
      />
      <Route
        path="/university-rankings"
        element={isLoggedIn ? <UniRanking /> : <Navigate to="/" />}
      />
      <Route
        path="/merit-calculator"
        element={isLoggedIn ? <MeritCalculator /> : <Navigate to="/" />}
      />

      <Route path="/personality/:Personality" element={<PersonalityPage />} />
      <Route path="/student-signup" element={<StudentSignUp />}></Route>
      <Route path="/search-experts" element={<SearchExperts />}></Route>
      <Route path="university-chatbot" element={<UniChatbotPage />}></Route>
      <Route path="university-rankings" element={<UniRanking />}></Route>

      <Route path="/focalperson-login" element={<FocalPersonLogin />}></Route>
      <Route path="/focalperson-signup" element={<FocalPersonSignUp />}></Route>
      <Route path="/focalPersonLandingPage" element={<FocalPersonLandingPage />}></Route>
      <Route path="/focalperson-annoucement" element={<FocalPersonAnnoucement />}></Route>
      <Route path="/focal-profile" element={<FocalPersonProfile />}/>

      <Route path="/all-annoucement" element={<AnnoucementPage />}></Route>
      <Route path="/announcement-cards" element={<AnnoucementCard />}></Route>
      <Route path="/forgot-password-focal" element={<FocalForgotPass />} />
      <Route path="/reset-password-focal/:token" element={<FocalResetPass />} />


    </Routes>
  );
}

export default Routers;
