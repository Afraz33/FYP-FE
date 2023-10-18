import React, { useState } from 'react';
import axios from 'axios';
import { Link , useNavigate} from 'react-router-dom';

const NormalUserSignUp = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);


    const handleSignup = async () => {
        const userData = {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            phoneNo: phoneNo,
            gender: gender,
            password: password,
            email: email
        };

        try {
            const response = await axios.post('http://localhost:5000/api/users/signup', userData);
            if (response.data.token) {
                localStorage.setItem('jwt', response.data.token); 
                navigate('/userLandingPage'); // Navigate to the landing page
            } else {
                console.log(response.data.Message);
            }
        } // In your axios catch block
        catch (error) {
          console.error('Error:', error.response.data);
          setError(error.response.data.Message); // Set the error state with the error message from the backend
        }
        
        // In your JSX
        {error && (
          <p className="text-red-500">{error}</p>
        )}

        };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} className='bg-[#FFD666]'>
    <div className="bg-white p-8 rounded-3xl border-black border text-center">
        <div>
            <h2 className="text-base font-bold mb-4 font-Onest">
                Please enter your details to Sign up as a User
            </h2>
           
            <hr className="my-4" />

            <div className="grid grid-cols-2 gap-4">
                <input
                    type="text"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    placeholder="First name"
                    className="border-b p-2 font-DelaGothicOne"
                />
                <input
                    type="text"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    placeholder="Last name"
                    className="border-b p-2 font-DelaGothicOne"
                />
                <input
                    type="text"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    placeholder="Username"
                    className="border-b p-2 font-DelaGothicOne"
                />
                <input
                    type="text"
                    value={phoneNo}
                    onChange={e => setPhoneNo(e.target.value)}
                    placeholder="Phone number"
                    className="border-b p-2 font-DelaGothicOne"
                />
                <select
                    value={gender}
                    onChange={handleGenderChange}
                    className="border-b p-2 font-DelaGothicOne"
                >
                    <option value="" disabled className="font-DelaGothicOne">
                        Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    className="border-b p-2 font-DelaGothicOne"
                />
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    className="border-b p-2 font-DelaGothicOne"
                />
            </div>

            <button onClick={handleSignup} className="bg-black text-white px-4 py-2 rounded-full my-4 font-DelaGothicOne">
                Sign up
            </button>

            <p className="font-DelaGothicOne text-sm">
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    </div>
    </div>
    )
}

export default NormalUserSignUp;
      
