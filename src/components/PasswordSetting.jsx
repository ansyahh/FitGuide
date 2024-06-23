import React from 'react';
import { Link } from 'react-router-dom';

const PasswordSetting = () => {
  return (
    <div className="SettingsPw w-96 h-96 relative bg-white border border-white">
      <div className="Rectangle192 w-96 h-16 left-[422px] top-[532px] absolute bg-white rounded-xl shadow" />
      <div className="Rectangle191 w-96 h-16 left-[421px] top-[372px] absolute bg-white rounded-xl shadow" />
      <div className="Rectangle39 w-96 h-16 left-[422px] top-[181px] absolute bg-white rounded-xl shadow" />
      
      <div className="MainButton w-56 h-10 px-3 py-2 left-[601px] top-[659px] absolute bg-red-500 rounded-full flex justify-center items-center gap-2.5">
        <div className="MainButton text-center text-white text-lg font-normal font-['Poppins'] leading-tight">Change Password</div>
      </div>
      
      <div className="ForgotPassword w-52 h-8 left-[798px] top-[275px] absolute text-right text-black text-lg font-normal font-['Poppins'] capitalize">
        Forgot password?
      </div>
      
      <div className="ConfirmNewPassword w-96 h-5 left-[422px] top-[498px] absolute text-red-500 text-lg font-normal font-['Poppins']">
        Confirm New Password
      </div>
      
      <div className="CurrentPassword w-96 h-5 left-[422px] top-[148px] absolute text-red-500 text-lg font-normal font-['Poppins']">
        Current Password
      </div>
      
      <div className="NewPassword w-96 h-5 left-[421px] top-[338px] absolute text-red-500 text-lg font-normal font-['Poppins']">
        New Password
      </div>
      
      <div className="Group1000002610 w-72 h-9 left-[16px] top-[40px] absolute">
        <div className="PasswordSettings left-[65px] top-0 absolute text-black text-2xl font-bold font-['Poppins'] capitalize">Password Settings</div>
        <div className="Arrow w-7 h-5 left-0 top-[9px] absolute" />
      </div>
      
      <div className="Group73 w-16 h-16 left-[8px] top-[27px] absolute">
        <div className="Ellipse5 w-16 h-16 left-0 top-0 absolute bg-zinc-300/opacity-50 rounded-full" />
        <div className="IcChevronLeft24px1 w-14 h-14 left-[4px] top-[5px] absolute" />
      </div>
      
      <div className="NotificationSetting w-48 h-4 left-[117px] top-[270px] absolute text-black text-lg font-normal font-['Poppins']">
        <Link to="/notification-setting" className="text-black">Notification Setting</Link>
      </div>
      
      <div className="PasswordSetting w-44 h-4 left-[117px] top-[365px] absolute text-black text-lg font-normal font-['Poppins']">
        <Link to="/password-setting" className="text-black">Password Setting</Link>
      </div>
      
      <div className="Profile w-20 h-4 left-[123px] top-[168px] absolute text-black text-lg font-normal font-['Poppins']">
        <Link to="/profile" className="text-black">Profile</Link>
      </div>
      
      <div className="Component41 w-14 h-12 left-[31px] top-[148px] absolute">
        <div className="Ellipse1 w-14 h-12 left-0 top-0 absolute bg-red-500 rounded-full" />
      </div>
      
      <div className="Component42 w-14 h-12 left-[30px] top-[344px] absolute">
        <div className="Ellipse6 w-14 h-12 left-0 top-0 absolute bg-red-500 rounded-full border-2 border-red-500" />
      </div>
      
      <div className="Component43 w-14 h-12 left-[30px] top-[246px] absolute">
        <div className="Ellipse6 w-14 h-12 left-0 top-0 absolute bg-red-500 rounded-full border-2 border-red-500" />
        <div className="SilhouetteIcon w-7 h-8 left-[41.08px] top-[39.60px] absolute origin-top-left -rotate-180" />
      </div>
      
      <div className="Logout w-20 h-4 left-[116px] top-[458px] absolute text-black text-lg font-normal font-['Poppins']">
        Logout
      </div>
      
      <div className="Component47 w-14 h-12 left-[30px] top-[442px] absolute">
        <div className="Ellipse6 w-14 h-12 left-0 top-0 absolute bg-red-500 rounded-full border-2 border-red-500" />
      </div>
    </div>
  );
};

export default PasswordSetting;
