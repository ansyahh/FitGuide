import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithGoogle } from "../../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import googleIcon from '../../assets/google-20.svg';
import peopleImage from '../../assets/people-2599796_1280.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate('/home');
  }, [user, loading]);

  return (
    <section className="min-h-screen flex justify-center items-center bg-gray-100 overflow-hidden">
      <div className="flex flex-1 h-full w-full">
        <div className="w-1/2 flex justify-center items-center">
          <div className="p-8 bg-white rounded-xl w-full flex flex-col justify-center h-full">
            <h4 className="text-4xl font-bold mb-5 text-center font-poppins">Login</h4>
            <form className="w-full max-w-md mx-auto">
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1 font-poppins" style={{ fontSize: '16px' }}>
                  Email
                </label>
                <input
                  type="email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder=""
                  style={{ width: '100%', height: '77px', borderRadius: '50px' }}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block mb-1 font-poppins" style={{ fontSize: '16px' }}>
                  Password
                </label>
                <input
                  type="password"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  style={{ width: '100%', height: '77px', borderRadius: '50px' }}
                />
              </div>
              <div className="mb-4 flex items-center">
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe" className="font-poppins" style={{ fontSize: '14px' }}>
                  Remember me
                </label>
                <Link to="/forgot-password" className="ml-auto font-poppins underline" style={{ fontSize: '14px' }}>
                  Forgot password?
                </Link>
              </div>
              <div className="mb-4">
                <button
                  // onClick={() => signInWithEmailAndPassword(email, password)}
                  className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none font-poppins"
                  style={{ fontSize: '20px', width: '100%', height: '77px', borderRadius: '50px' }}
                >
                  Login
                </button>
              </div>
              <div className="mt-4 mb-2 flex items-center">
                <hr className="flex-1 mr-4 border border-gray-300" />
                <span className="text-gray-500" style={{ fontSize: '14px' }}>
                  OR
                </span>
                <hr className="flex-1 ml-4 border border-gray-300" />
              </div>
              <div className="mb-4">
                <button
                  onClick={signInWithGoogle}
                  className="w-full py-2 flex items-center justify-center bg-white text-black rounded hover:bg-gray-100 focus:outline-none font-poppins border border-gray-300"
                  style={{ fontSize: '18px', width: '100%', height: '77px', borderRadius: '50px', marginTop: '2rem' }}
                >
                  <img src={googleIcon} alt="Google" className="w-5 h-5 mr-2" />
                  Continue with Google
                </button>
              </div>
              <div>
                <p className="text-center mb-4 mt-4">
                  Didn’t have account yet?{' '}
                  <Link to="/signup" className="text-black font-poppins font-bold" style={{ fontSize: '14px' }}>
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center overflow-hidden relative">
          <img src={peopleImage} alt="People" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Login;