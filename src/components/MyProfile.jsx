import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBell, FaKey, FaSignOutAlt } from 'react-icons/fa';
import profileImage from '../assets/profile.jpeg';

const MyProfile = () => {
  return (
    <div className="Profil w-96 h-auto relative bg-white p-4">
      {/* Icon dan Lingkaran Profile di Kiri */}
      <div className="Group73 w-16 h-16 left-[12px] top-[24px] absolute flex items-center justify-center">
        <div className="w-16 h-16 bg-[#D9D9D9] rounded-full flex items-center justify-center">
          <div className="w-[40px] h-[40px] bg-[#D9D9D9] rounded-full flex items-center justify-center">
            <div className="text-[#FF5050] text-4xl">&#x276E;</div> {/* Icon left arrow */}
          </div>
        </div>
      </div>

      {/* Tulisan My Profile */}
      <div className="MyProfile w-48 h-10 left-[94px] top-[40px] absolute text-black text-2xl font-medium font-['Inter']">
        My Profile
      </div>

      {/* Bagian Avatar dan Teks */}
      <div className="AvatarLabelGroup left-[279px] top-[132.38px] absolute flex items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={profileImage}
            alt="Profile"
          />
        </div>
        <div className="ml-4">
          <div className="text-4xl font-bold text-slate-700">Ardiansyah</div>
          <div className="text-2xl text-gray-500">ardi@gmail.com</div>
          <div className="text-xs font-bold text-neutral-800 capitalize">Birthday:</div>
        </div>
      </div>

      {/* Container untuk Pengaturan dan Lingkaran Icon */}
      <div className="SettingsContainer absolute left-[307px] top-[292px] space-y-8">
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

export default MyProfile;
