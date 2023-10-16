import React, { useState } from 'react';
import loginUser from "../../assets/images/loginUser.png";
import { Link, useNavigate } from 'react-router-dom'; // <- Add useNavigate here
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    console.log(`Email: ${email}, Password: ${password}`);
      
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
      if (response.data.token) {
        localStorage.setItem('jwt', response.data.token); // Store JWT token
        navigate('/userLandingPage'); // Navigate to the landing page
      } else {
        console.error(response.data.Message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  

  return (
    
    <div className="flex w-full items-center h-screen">
      <img src={loginUser} alt="expert img" width="800" height="800"></img>

      <div className="w-1/2 p-10 text-center">
      
        <h1 className="text-base font-bold mb-9 font-DelaGothicOne">
          {/* Many young students are waiting for you */}
        </h1>
      </div>
      <div className="w-full h-[500px] p-100 flex justify-center">
        <div className="bg-white p-8 rounded-3xl border-2 border-black text-center">
          <h1 className="text-xl font-bold mb-4 font-DelaGothicOne" >User Login </h1>
          <p className="text-sm mb-7 font-DelaGothicOne" > Enter your credentials </p>
          <input
            type="text"
            className="w-full p-2 rounded-full bg-white border border-black mb-4 font-DelaGothicOne"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            className="w-full p-2 rounded-full bg-white border border-black mb-4 font-DelaGothicOne"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <p className="text-sm font-DelaGothicOne mb-4 text-right" style={{ textDecoration: 'underline' }}>
          Forgot Password? 
          </p>
          <button
          className="bg-FFD666 text-black p-2 mb-7 w-full border-2 border-black rounded-full font-DelaGothicOne transition duration-300 hover:bg-black hover:text-white"
          onClick={handleLogin} >
          Login
        </button>
          <p className="text-sm  font-DelaGothicOne">
          Don't have an account? <Link to="/signup" style={{ textDecoration: 'underline' }}>Sign Up</Link>
        </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;