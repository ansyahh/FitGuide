import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../assets/logonew.png';
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from 'firebase/firestore';

const CustomNavbar = () => {
  const [active, setActive] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert('An error occured while fetching user data');
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/');
    fetchUserName();
  }, [user, loading]);

  const menuHandler = () => {
    setActive(!active);
  };

  return (
    <header className="fixed top-0 w-full h-16 bg-gray-800 text-white shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between h-full px-4">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-111">
            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
        </div>
        <nav className={`flex-1 ${active ? 'flex' : 'hidden'} md:flex items-center justify-end space-x-6`}>
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/about-us" className="hover:text-gray-400">
            About Us
          </Link>
          <Link to="/progress" className="hover:text-gray-400">
            Progress
          </Link>
          {/* nbutton login */}
          {user ? (
            <div>
              <span>{user.displayName}</span>
            </div>
          ) : (
            <button onClick={handleLogin}>Login</button>
          )}
        </nav>
        <div className="md:hidden flex items-center">
          <button onClick={menuHandler} className="focus:outline-none">
            <i className={`fas ${active ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>
      {active && <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={menuHandler}></div>}
    </header>
  );
};

const handleLogin = () => {
  window.location.href = '/login';
};

export default CustomNavbar;
