import React from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'; // Import ikon dari Font Awesome
import logo from '../assets/logonew.png'; // Import gambar logo

const Footer = () => {
  return (
    <div className="relative h-[315px] bg-[#354C2F] bg-opacity-76.08% px-8 py-4">
      <div className="flex justify-around mt-8 items-start">
        <div className="text-white text-center flex flex-col items-center">
          <img src={logo} alt="Logo" width="150" height="125" className="mb-4" /> {/* Atur ukuran logo */}
          <div className="flex justify-center gap-4">
            <FaFacebook size={21} color="black" />
            <FaTwitter size={21} color="black" />
            <FaInstagram size={21} color="black" />
          </div>
        </div>
        
        <div className="text-white flex flex-col items-start">
          <h2 className="text-xl font-bold font-poppins mb-2">Contact Us</h2>
          <div className="flex items-center mb-2">
            <FaPhone size={18} color="white" className="mr-2" />
            <span className="text-sm font-normal font-poppins">+997656345347</span>
          </div>
          <div className="flex items-center mb-2">
            <FaEnvelope size={18} color="white" className="mr-2" />
            <span className="text-sm font-normal font-poppins">Fitguide00@gmail.com</span>
          </div>
        </div>
        
        <div className="text-white flex flex-col items-start">
          <h2 className="text-xl font-bold font-poppins mb-2">Quick Links</h2>
          <div className="text-sm font-normal font-poppins mb-2">Privacy Policy</div>
          <div className="text-sm font-normal font-poppins">Terms and Conditions</div>
        </div>
        
        <div className="text-white flex flex-col items-start">
          <h2 className="text-xl font-bold font-poppins mb-2">Location</h2>
          <div className="flex items-center text-sm font-normal font-poppins">
            <FaMapMarkerAlt size={18} color="white" className="mr-2" />
            <span>Simeulue</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 right-4 text-white text-base font-bold font-inter flex items-center">
        <span className="text-sm mr-1">©</span>2024 Tekno Nusantara
      </div>
    </div>
  );
};

export default Footer;
