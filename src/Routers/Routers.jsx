import { Route, Routes } from "react-router-dom";
import LandingPage from "../expertPanel/pages/LandingPage/LandingPage";
import Signup from "../expertPanel/pages/signup/signup";
import Login from "../expertPanel/pages/login/login";
function Routers() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/login" element={<Login />}></Route>

      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  );
}

export default Routers;
