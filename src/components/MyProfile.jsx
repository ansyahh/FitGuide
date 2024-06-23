import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBell, FaKey, FaSignOutAlt } from 'react-icons/fa';
import profileImage from '../assets/profile.jpeg'; // Pastikan path ke gambar sesuai

const MyProfile = () => {
  return (
    <div className="Profil w-96 h-96 relative bg-white">
      {/* Icon dan Lingkaran Profile di Kiri */}
      <div className="Group73 w-16 h-16 left-[12px] top-[24px] absolute flex items-center justify-center">
        <div className="w-16 h-16 bg-[#D9D9D9] rounded-full flex items-center justify-center">
          <div className="w-8 h-8 text-[#FF5050]">&#x276E;</div> {/* Icon left arrow */}
        </div>
      </div>

      {/* Tulisan My Profile */}
      <div className="MyProfile w-48 h-10 left-[94px] top-[40px] absolute text-black text-2xl font-medium font-['Inter']">
        My Profile
      </div>

      {/* Bagian Avatar dan Teks */}
      <div className="AvatarLabelGroup w-96 h-36 left-[94px] top-[116px] absolute flex gap-3 items-center">
        <div className="MaskGroup w-[124px] h-[115.25px] relative rounded-full overflow-hidden">
          <img
            className="w-[124px] h-[115.25px] rounded-full object-cover"
            src={profileImage}
            alt="Profile"
          />
        </div>
        <div className="TextAndSupportingText flex-col justify-start items-start">
          <div className="Text w-72 text-slate-700 text-4xl font-bold font-['Poppins']">
            Ardiansyah
          </div>
          <div className="SupportingText w-60 text-gray-500 text-2xl font-normal font-['Poppins']">
            ardi@gmail.com
          </div>
          <div className="Birthday text-neutral-800 text-xs font-bold font-['Poppins'] capitalize">
            Birthday:
          </div>
        </div>
      </div>

      {/* Pengaturan dan Lingkaran Icon */}
      <div className="ProfileSection">
        <Link to="/profile" className="Profile w-20 h-4 left-[399px] top-[312px] absolute text-black text-lg font-normal font-['Poppins']">
          Profile
        </Link>
        <div className="IconCircle w-[53px] h-[48px] left-[307px] top-[292px] absolute flex items-center justify-center">
          <div className="w-[53px] h-[48px] bg-red-500 rounded-full flex items-center justify-center">
            <FaUser className="text-white" /> {/* Icon user */}
          </div>
        </div>
      </div>

      <div className="NotificationSetting">
        <Link to="/notification-setting" className="w-48 h-4 left-[393px] top-[414px] absolute text-black text-lg font-normal font-['Poppins']">
          Notification Setting
        </Link>
        <div className="IconCircle w-[53px] h-[48px] left-[307px] top-[390px] absolute flex items-center justify-center">
          <div className="w-[53px] h-[48px] bg-red-500 rounded-full flex items-center justify-center">
            <FaBell className="text-white" /> {/* Icon bell */}
          </div>
        </div>
      </div>

      <div className="PasswordSetting">
        <Link to="/password-setting" className="w-44 h-4 left-[393px] top-[509px] absolute text-black text-lg font-normal font-['Poppins']">
          Password Setting
        </Link>
        <div className="IconCircle w-[53px] h-[48px] left-[307px] top-[488px] absolute flex items-center justify-center">
          <div className="w-[53px] h-[48px] bg-red-500 rounded-full flex items-center justify-center">
            <FaKey className="text-white" /> {/* Icon key */}
          </div>
        </div>
      </div>

      {/* Logout */}
      <div className="Logout">
        <div className="w-20 h-4 left-[392px] top-[602px] absolute text-black text-lg font-normal font-['Poppins']">
          Logout
        </div>
        <div className="IconCircle w-[53px] h-[48px] left-[307px] top-[586px] absolute flex items-center justify-center">
          <div className="w-[53px] h-[48px] bg-red-500 rounded-full flex items-center justify-center">
            <FaSignOutAlt className="text-white" /> {/* Icon logout */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
