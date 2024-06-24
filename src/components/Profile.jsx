import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.jpeg';
import { FaChevronLeft, FaUser, FaBell, FaKey, FaSignOutAlt } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="Profil w-96 h-840 relative bg-white p-4">
      {/* Icon dan Lingkaran Profile di Kiri */}
      <div className="Group73 w-16 h-16 left-[12px] top-[24px] absolute flex items-center justify-center">
        <Link to="/my-profile" className="w-16 h-16 bg-[#D9D9D9] rounded-full flex items-center justify-center">
          <div className="text-[#FF5050] text-2xl">
            <FaChevronLeft />
          </div>
        </Link>
      </div>

      {/* Judul My Profile */}
      <div className="MyProfile w-48 h-10 left-[94px] top-[40px] absolute text-black text-2xl font-medium font-['Inter']">
        My Profile
      </div>

      {/* Bagian Avatar dan Teks */}
      <div className="AvatarLabelGroup left-[371px] top-[62px] absolute flex items-center">
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

      {/* Form untuk Input Fields */}
      <form className="ProfileForm" style={{ marginTop: '110px' }}>
        <div className="FullName w-96 h-3.5 left-[499px] top-[182px] absolute text-red-500 text-lg font-normal font-['Poppins']" style={{ marginTop: '11px' }}>Full name</div>
        <input
          type="text"
          className="Rectangle192 w-96 h-11 left-[499px] top-[205px] absolute bg-white rounded-2xl border border-zinc-500"
          style={{ marginTop: '11px' }}
        />
        <div className="Email w-96 h-3.5 left-[499px] top-[264px] absolute text-red-500 text-lg font-normal font-['Poppins']" style={{ marginTop: '11px' }}>Email</div>
        <input
          type="text"
          className="Rectangle193 w-96 h-11 left-[499px] top-[287px] absolute bg-white rounded-2xl border border-zinc-500"
          style={{ marginTop: '11px' }}
        />
        <div className="MobileNumber w-96 h-3.5 left-[499px] top-[346px] absolute text-red-500 text-lg font-normal font-['Poppins']" style={{ marginTop: '11px' }}>Mobile Number</div>
        <input
          type="text"
          className="Rectangle194 w-96 h-11 left-[499px] top-[369px] absolute bg-white rounded-2xl border border-zinc-500"
          style={{ marginTop: '11px' }}
        />
        <div className="DateOfBirth w-56 h-3.5 left-[499px] top-[429px] absolute text-red-500 text-lg font-normal font-['Poppins']" style={{ marginTop: '11px' }}>Date of birth</div>
        <input
          type="text"
          className="Rectangle195 w-96 h-11 left-[499px] top-[452px] absolute bg-white rounded-2xl border border-zinc-500"
          style={{ marginTop: '11px' }}
        />
        <div className="Weight w-56 h-3.5 left-[499px] top-[512px] absolute text-red-500 text-lg font-normal font-['Poppins']" style={{ marginTop: '11px' }}>Weight</div>
        <input
          type="text"
          className="Rectangle196 w-96 h-11 left-[499px] top-[535px] absolute bg-white rounded-2xl border border-zinc-500"
          style={{ marginTop: '11px' }}
        />
        <div className="Height w-56 h-3.5 left-[499px] top-[595px] absolute text-red-500 text-lg font-normal font-['Poppins']" style={{ marginTop: '11px' }}>Height</div>
        <input
          type="text"
          className="Rectangle197 w-96 h-11 left-[499px] top-[618px] absolute bg-white rounded-2xl border border-zinc-500"
          style={{ marginTop: '11px' }}
        />

        {/* Tombol Update Profile */}
        <div className="MainButton w-60 px-3 py-2 left-[570px] top-[678px] absolute bg-red-500 rounded-full flex justify-center items-center gap-2.5" style={{ marginTop: '31px' }}>
          <div className="MainButton text-center text-white text-base font-normal font-['Poppins'] leading-tight">
            Update Profile
          </div>
        </div>
      </form>

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

export default Profile;
