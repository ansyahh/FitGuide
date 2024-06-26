import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logonew.png';
import profile from '../assets/profile.jpeg';

const CustomNavbar = () => {
  const [active, setActive] = useState(false);

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
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about-us" className="hover:text-gray-400">About Us</Link>
          <Link to="/progress" className="hover:text-gray-400">Progress</Link>
          <Link to="/my-profile" className="flex items-center">
            <img src={profile} alt="Profile" className="w-12 h-12 rounded-full object-cover" />
          </Link>
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

export default CustomNavbar;
