import React from 'react';
import { FaChevronLeft, FaUser, FaBell, FaKey, FaSignOutAlt } from 'react-icons/fa';
import profileImage from '../assets/profile.jpeg';
const DetailProfile = () => {
  return (
    <div className="DetailProfile w-96 h-96 relative bg-white">
      {/* Tombol Kembali */}
      <div className="Group73 w-16 h-16 left-[12px] top-[24px] absolute flex items-center justify-center">
        <div className="w-16 h-16 bg-zinc-300/opacity-50 rounded-full">
          <FaChevronLeft className="text-gray-700" />
        </div>
      </div>

      {/* Judul My Profile */}
      <div className="MyProfile w-48 h-10 left-[94px] top-[40px] absolute text-black text-2xl font-medium font-['Inter']">
        My Profile
      </div>

      {/* Avatar dan Label Group */}
      <div className="AvatarLabelGroup w-96 h-36 left-[353px] top-[80px] absolute flex items-center gap-3">
        <div className="MaskGroup w-32 h-28 relative">
          <div className="Ellipse36 w-32 h-28 absolute bg-zinc-300 rounded-full" />
          <img
            className="Image1 w-44 h-40 absolute left-[-18.60px] top-0 rounded-full object-cover"
            src={profileImage}
            alt="Profile"
          />
        </div>
        <div className="TextAndSupportingText flex flex-col items-start">
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

      {/* Tombol Update Profile */}
      <div className="MainButton w-60 px-3 py-2 left-[633px] top-[743px] absolute bg-red-500 rounded-full flex items-center justify-center gap-2.5">
        <div className="text-white text-base font-normal font-['Poppins'] leading-tight">Update Profile</div>
      </div>

      {/* Form Input */}
      <div className="FormInputs">
        <div className="Rectangle189 w-96 h-11 left-[485px] top-[506px] absolute bg-white rounded-2xl border border-zinc-500" />
        <div className="Rectangle190 w-96 h-11 left-[485px] top-[588px] absolute bg-white rounded-2xl border border-zinc-500" />
        <div className="Rectangle191 w-96 h-11 left-[485px] top-[670px] absolute bg-white rounded-2xl border border-zinc-500" />
        <div className="FullName w-96 h-3.5 left-[485px] top-[237px] absolute text-red-500 text-lg font-normal font-['Poppins']">
          Full name
        </div>
        <div className="Rectangle192 w-96 h-11 left-[485px] top-[260px] absolute bg-white rounded-2xl border border-zinc-500" />
        <div className="Email w-96 h-3.5 left-[485px] top-[319px] absolute text-red-500 text-lg font-normal font-['Poppins']">
          Email
        </div>
        <div className="Rectangle193 w-96 h-11 left-[485px] top-[342px] absolute bg-white rounded-2xl border border-zinc-500" />
        <div className="MobileNumber w-96 h-3.5 left-[485px] top-[402px] absolute text-red-500 text-lg font-normal font-['Poppins']">
          Mobile Number
        </div>
        <div className="Rectangle194 w-96 h-11 left-[485px] top-[424px] absolute bg-white rounded-2xl border border-zinc-500" />
        <div className="DateOfBirth w-56 h-3.5 left-[485px] top-[484px] absolute text-red-500 text-lg font-normal font-['Poppins']">
          Date of birth
        </div>
        <div className="Weight w-56 h-3.5 left-[485px] top-[566px] absolute text-red-500 text-lg font-normal font-['Poppins']">
          Weight
        </div>
        <div className="Height w-56 h-3.5 left-[490px] top-[648px] absolute text-red-500 text-lg font-normal font-['Poppins']">
          Height
        </div>
      </div>

      {/* Menu Notification Setting */}
      <div className="NotificationSetting w-48 h-4 left-[121px] top-[256px] absolute text-black text-lg font-normal font-['Poppins']">
        Notification Setting
      </div>
      <div className="IconCircle w-[53px] h-[48px] left-[34px] top-[232px] absolute flex items-center justify-center">
        <div className="w-[53px] h-[48px] bg-red-500 rounded-full flex items-center justify-center">
          <FaBell className="text-white" />
        </div>
      </div>

      {/* Menu Password Setting */}
      <div className="PasswordSetting w-44 h-4 left-[121px] top-[351px] absolute text-black text-lg font-normal font-['Poppins']">
        Password Setting
      </div>
      <div className="IconCircle w-[53px] h-[48px] left-[34px] top-[330px] absolute flex items-center justify-center">
        <div className="w-[53px] h-[48px] bg-red-500 rounded-full flex items-center justify-center">
          <FaKey className="text-white" />
        </div>
      </div>

      {/* Menu Logout */}
      <div className="Logout w-20 h-4 left-[120px] top-[444px] absolute text-black text-lg font-normal font-['Poppins']">
        Logout
      </div>
      <div className="IconCircle w-[53px] h-[48px] left-[34px] top-[428px] absolute flex items-center justify-center">
        <div className="w-[53px] h-[48px] bg-red-500 rounded-full flex items-center justify-center">
          <FaSignOutAlt className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default DetailProfile;
