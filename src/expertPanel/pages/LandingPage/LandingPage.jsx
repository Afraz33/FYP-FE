import { Link } from "react-router-dom";
import testing from "../../assets/images/testing.png";
function LandingPage() {
  return (
    <div className="text-2xl green">
      {" "}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <img src={testing} alt="testing"></img>
      <button className="bg-yellow">
        {" "}
        <Link className="text-3xl text-green mr-10" to="/login">
          Go to Login Page
        </Link>
      </button>
      <button className="bg-purple">
        {" "}
        <Link to="/signup">Go to Signup Page</Link>
      </button>
    </div>
  );
}

export default LandingPage;
