import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logonew.png';
import profile from '../assets/profile.jpeg';
import vidBg from '../assets/video/vid1.mp4';
import { oldCategory } from '../utils/data';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

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
          <Link to="/myprofile" className="w-12 h-12 rounded-full overflow-hidden">
            <img src={profile} alt="Profile" className="w-48 h-48 object-cover" />
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

const Hero = () => {
  return (
    <section className="home flex relative" id="home">
      <div className=" md:w-1/2 w-full float-left mx-auto md:mx-0  px-4 py-32 md:px-20 flex lg:h-screen lg:items-center ">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Move
            <strong className="block font-extrabold text-rose-700">& get stronger</strong>
          </h1>
          <p className="mt-4 text-white max-w-lg text-xl">Achieve your ideal body dreams with an exercise program designed especially for you.</p>
          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a href="#card" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-white rounded-full shadow-md group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-white group-hover:-translate-x-0 ease">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Go!</span>
              <span className="relative invisible">Button Text</span>
            </a>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 md:flex hidden overflow-hidden">
        <div className="relative top-1/3 left-28 flex flex-col gap-6">
          <div className="flex w-72 items-start space-x-2 rounded-lg border-gray-200 bg-white px-2 py-3 text-gray-900 shadow-2xl">
            <div className="flex-initial">
              <div className="bg-gradient-tl inline-flex items-center justify-center rounded-lg bg-green-300 from-green-400 via-green-400">
                <div className="p-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M11.0005 15.9995L15.0005 11.9995M15.0005 11.9995L11.0005 7.99951M15.0005 11.9995H3.00049M11.0005 2.99951H17.7997C18.9198 2.99951 19.4799 2.99951 19.9077 3.2175C20.284 3.40925 20.59 3.71521 20.7817 4.09153C20.9997 4.51935 20.9997 5.07941 20.9997 6.19951V17.7995C20.9997 18.9196 20.9997 19.4797 20.7817 19.9075C20.59 20.2838 20.284 20.5898 19.9077 20.7815C19.4799 20.9995 18.9198 20.9995 17.7997 20.9995H11.0005"
                        stroke="#ffff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{' '}
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-1 items-start justify-between">
              <div>
                <h2 className="text-xs font-semibold tracking-tight text-black">Input Your Information</h2>
                <p className="text-xs font-light text-gray-500">Provide the necessary details to get started</p>
              </div>
            </div>
          </div>
          <div className="flex w-72 items-start space-x-2 rounded-lg border-gray-200 bg-white px-2 py-3 text-gray-900 shadow-2xl">
            <div className="flex-initial">
              <div className="bg-gradient-tl inline-flex items-center justify-center rounded-lg bg-green-300 from-green-400 via-green-400">
                <div className="p-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M12 3L13.4302 8.31181C13.6047 8.96 13.692 9.28409 13.8642 9.54905C14.0166 9.78349 14.2165 9.98336 14.451 10.1358C14.7159 10.308 15.04 10.3953 15.6882 10.5698L21 12L15.6882 13.4302C15.04 13.6047 14.7159 13.692 14.451 13.8642C14.2165 14.0166 14.0166 14.2165 13.8642 14.451C13.692 14.7159 13.6047 15.04 13.4302 15.6882L12 21L10.5698 15.6882C10.3953 15.04 10.308 14.7159 10.1358 14.451C9.98336 14.2165 9.78349 14.0166 9.54905 13.8642C9.28409 13.692 8.96 13.6047 8.31181 13.4302L3 12L8.31181 10.5698C8.96 10.3953 9.28409 10.308 9.54905 10.1358C9.78349 9.98336 9.98336 9.78349 10.1358 9.54905C10.308 9.28409 10.3953 8.96 10.5698 8.31181L12 3Z"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-1 items-start justify-between">
              <div>
                <h2 className="text-xs font-semibold tracking-tight text-black">Begin Training</h2>
                <p className="text-xs font-light text-gray-500">Start training for the body of your dreams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CardSection = () => {
  return (
    <section className="bg-gray-100 px-4 py-20 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900">Our Programs</h2>
          <p className="mt-2 text-lg text-gray-600">Choose from a variety of programs tailored to your fitness goals.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {oldCategory.map((category) => (
            <div key={category.id} className="flex flex-col rounded-lg shadow-xl overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-56 w-full object-cover" src={category.image} alt={category.title} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">{category.category}</p>
                  <Link to="/history" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{category.title}</p>
                    <p className="mt-3 text-base text-gray-500">{category.description}</p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="#ok" className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
          <div className="space-y-4">
            <img src={logo} alt="Logo" className="w-24 h-24 object-contain" />
            <p className="text-gray-400">We strive to provide the best service to our customers. Reach out to us if you need any assistance.</p>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-gray-400" />
                <span>Jl. Raya Serang KM 24, Jatake, Tangerang, Banten</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-gray-400" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-gray-400" />
                <span>info@yourwebsite.com</span>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <div className="text-sm text-gray-500 text-center">
          <p>&copy; 2024 Your Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const Index = () => {
  return (
    <>
      <CustomNavbar />
      <Hero />
      <CardSection />
      <Footer />
    </>
  );
};

export default Index;
