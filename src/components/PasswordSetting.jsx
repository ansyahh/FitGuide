import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaUser, FaBell, FaKey, FaSignOutAlt } from 'react-icons/fa';

const PasswordSetting = () => {
  return (
    <div className="SettingsPw w-96 h-96 relative bg-white border border-white">

      {/* Icon dan Lingkaran Profile di Kiri */}
      <div className="Group73 w-16 h-16 left-[12px] top-[24px] absolute flex items-center justify-center">
        <Link to="/my-profile" className="w-16 h-16 bg-[#D9D9D9] rounded-full flex items-center justify-center">
          <div className="text-[#FF5050] text-2xl">
            <FaChevronLeft />
          </div>
        </Link>
      </div>

      {/* Password Setting */}
      <div className="w-full flex justify-center">
        <div className="MyProfile h-10 absolute left-[94px] top-[40px] text-black text-2xl font-medium font-['Inter']">
          Password Setting
        </div>
      </div>

      <div className="Rectangle192 w-[589px] h-[66px] left-[422px] top-[532px] absolute bg-white rounded-xl shadow-lg" />
      <div className="Rectangle191 w-[589px] h-[66px] left-[421px] top-[372px] absolute bg-white rounded-xl shadow-lg" />
      <div className="Rectangle39 w-[589px] h-[66px] left-[422px] top-[181px] absolute bg-white rounded-xl shadow-lg" />
      
      <div className="MainButton w-56 h-10 px-3 py-2 left-[601px] top-[659px] absolute bg-red-500 rounded-full flex justify-center items-center gap-2.5">
        <div className="MainButton text-center text-white text-lg font-normal font-['Poppins'] leading-tight">Change Password</div>
      </div>
      
      <div className="ForgotPassword w-52 h-8 left-[798px] top-[275px] absolute text-right text-black text-lg font-normal font-['Poppins'] capitalize">
        Forgot password?
      </div>
      
      <div className="ConfirmNewPassword w-[589px] h-5 left-[422px] top-[498px] absolute text-red-500 text-lg font-normal font-['Poppins']">
        Confirm New Password
      </div>
      
      <div className="CurrentPassword w-[589px] h-5 left-[422px] top-[148px] absolute text-red-500 text-lg font-normal font-['Poppins']">
        Current Password
      </div>
      
      <div className="NewPassword w-[589px] h-5 left-[421px] top-[338px] absolute text-red-500 text-lg font-normal font-['Poppins']">
        New Password
      </div>
      
      {/* Container untuk Pengaturan dan Lingkaran Icon */}
      <div className="SettingsContainer absolute left-[41px] top-[141px] space-y-8">
        {/* Pengaturan dan Lingkaran Icon */}
        <div className="ProfileSection flex items-center">
          <div className="IconCircle w-[53px] h-[53px] bg-red-500 rounded-full flex items-center justify-center mr-4">
            <FaUser className="text-white" /> {/* Icon user */}
          </div>
          <Link
            to="/profile"
            className="Profile text-black text-lg font-normal font-['Poppins'] whitespace-nowrap"
          >
            Profile
          </Link>
        </div>

        <div className="NotificationSetting flex items-center">
          <div className="IconCircle w-[53px] h-[53px] bg-red-500 rounded-full flex items-center justify-center mr-4">
            <FaBell className="text-white" /> {/* Icon bell */}
          </div>
          <Link
            to="/notification-setting"
            className="text-black text-lg font-normal font-['Poppins'] whitespace-nowrap"
          >
            Notification Setting
          </Link>
        </div>

        <div className="PasswordSetting flex items-center">
          <div className="IconCircle w-[53px] h-[53px] bg-red-500 rounded-full flex items-center justify-center mr-4">
            <FaKey className="text-white" /> {/* Icon key */}
          </div>
          <Link
            to="/password-setting"
            className="text-black text-lg font-normal font-['Poppins'] whitespace-nowrap"
          >
            Password Setting
          </Link>
        </div>

        {/* Logout */}
        <div className="Logout flex items-center">
          <div className="IconCircle w-[53px] h-[53px] bg-red-500 rounded-full flex items-center justify-center mr-4">
            <FaSignOutAlt className="text-white" /> {/* Icon logout */}
          </div>
          <div className="text-black text-lg font-normal font-['Poppins'] whitespace-nowrap">
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordSetting;
