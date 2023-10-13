import React, { useState } from 'react';
import expert from "../../assets/images/expert.png";
import { Link } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    
    <div className="flex w-full items-center h-screen">
      <img src={expert} alt="expert img" width="850" height="850"></img>

      <div className="w-1/2 p-10 text-center">
      
        <h1 className="text-base font-bold mb-9 font-DelaGothicOne">
          {/* Many young students are waiting for you */}
        </h1>
      </div>
      <div className="w-full h-[500px] p-100 flex justify-center">
        <div className="bg-white p-8 rounded-3xl border-black border text-center">
          <h1 className="text-xl font-bold mb-4 font-DelaGothicOne" >Expert Login </h1>
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