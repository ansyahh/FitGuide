import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.jpeg'; // Pastikan path ke gambar sesuai

const Profile = () => {
  return (
    <div className="Profil w-96 h-96 relative bg-white">
      {/* Icon di Kiri Atas */}
      <div className="MdiReportBoxOutline w-6 h-6 left-0 top-0 absolute" />

      {/* Judul My Profile */}
      <div className="MyProfile w-48 h-10 left-[94px] top-[40px] absolute text-black text-2xl font-medium font-['Inter']">
        My Profile
      </div>

      {/* Bagian Avatar dan Teks */}
      <div className="AvatarLabelGroup w-96 h-36 left-[353px] top-[80px] absolute flex justify-start items-center gap-3">
        <div className="MaskGroup w-32 h-28 relative">
          <div className="Ellipse36 w-32 h-28 left-0 top-0 absolute bg-zinc-300 rounded-full" />
          <img className="Image1 w-44 h-40 left-[-18.60px] top-0 absolute" src={profileImage} alt="Profile" />
        </div>
        <div className="TextAndSupportingText flex-col justify-start items-start inline-flex">
          <div className="Text w-72 text-slate-700 text-4xl font-bold font-['Poppins']">Ardiansyah</div>
          <div className="SupportingText w-60 text-gray-500 text-2xl font-normal font-['Poppins']">ardi@gmail.com</div>
          <div className="Birthday text-neutral-800 text-xs font-bold font-['Poppins'] capitalize">Birthday: </div>
        </div>
      </div>

      {/* Tombol Update Profile */}
      <div className="MainButton w-60 px-3 py-2 left-[633px] top-[743px] absolute bg-red-500 rounded-full flex justify-center items-center gap-2.5">
        <div className="MainButton text-center text-white text-base font-normal font-['Poppins'] leading-tight">
          Update Profile
        </div>
      </div>

      {/* Input Fields */}
      <div className="Rectangle189 w-96 h-11 left-[485px] top-[506px] absolute bg-white rounded-2xl border border-zinc-500" />
      <div className="Rectangle190 w-96 h-11 left-[485px] top-[588px] absolute bg-white rounded-2xl border border-zinc-500" />
      <div className="Rectangle191 w-96 h-11 left-[485px] top-[670px] absolute bg-white rounded-2xl border border-zinc-500" />
      <div className="FullName w-96 h-3.5 left-[485px] top-[237px] absolute text-red-500 text-lg font-normal font-['Poppins']">Full name</div>
      <div className="Rectangle192 w-96 h-11 left-[485px] top-[260px] absolute bg-white rounded-2xl border border-zinc-500" />
      <div className="Email w-96 h-3.5 left-[485px] top-[319px] absolute text-red-500 text-lg font-normal font-['Poppins']">Email</div>
      <div className="Rectangle193 w-96 h-11 left-[485px] top-[342px] absolute bg-white rounded-2xl border border-zinc-500" />
      <div className="MobileNumber w-96 h-3.5 left-[485px] top-[402px] absolute text-red-500 text-lg font-normal font-['Poppins']">Mobile Number</div>
      <div className="Rectangle194 w-96 h-11 left-[485px] top-[424px] absolute bg-white rounded-2xl border border-zinc-500" />
      <div className="DateOfBirth w-56 h-3.5 left-[485px] top-[484px] absolute text-red-500 text-lg font-normal font-['Poppins']">Date of birth</div>
      <div className="Weight w-56 h-3.5 left-[485px] top-[566px] absolute text-red-500 text-lg font-normal font-['Poppins']">Weight</div>
      <div className="Height w-56 h-3.5 left-[490px] top-[648px] absolute text-red-500 text-lg font-normal font-['Poppins']">Height</div>

      {/* Navigasi Menu */}
      <div className="Group73 w-16 h-16 left-[12px] top-[24px] absolute">
        <div className="Ellipse5 w-16 h-16 left-0 top-0 absolute bg-zinc-300/opacity-50 rounded-full" />
        <div className="IcChevronLeft24px1 w-14 h-14 left-[4px] top-[5px] absolute" />
      </div>
      <div className="NotificationSetting w-48 h-4 left-[121px] top-[256px] absolute text-black text-lg font-normal font-['Poppins']">
        <Link to="/notification-setting" className="text-black">Notification Setting</Link>
      </div>
      <div className="PasswordSetting w-44 h-4 left-[121px] top-[351px] absolute text-black text-lg font-normal font-['Poppins']">
        <Link to="/password-setting" className="text-black">Password Setting</Link>
      </div>
      <div className="Profile w-20 h-4 left-[127px] top-[154px] absolute text-black text-lg font-normal font-['Poppins']">
        <Link to="/profile" className="text-black">Profile</Link>
      </div>
      <div className="Component48 w-14 h-12 left-[35px] top-[134px] absolute">
        <div className="Ellipse1 w-14 h-12 left-0 top-0 absolute bg-red-500 rounded-full" />
      </div>
      <div className="Component49 w-14 h-12 left-[34px] top-[330px] absolute">
        <div className="Ellipse6 w-14 h-12 left-0 top-0 absolute bg-red-500 rounded-full border-2 border-red-500" />
      </div>
      <div className="Component50 w-14 h-12 left-[34px] top-[232px] absolute">
        <div className="Ellipse6 w-14 h-12 left-0 top-0 absolute bg-red-500 rounded-full border-2 border-red-500" />
        <div className="SilhouetteIcon w-7 h-8 left-[41.08px] top-[39.60px] absolute origin-top-left -rotate-180" />
      </div>
      <div className="Logout w-20 h-4 left-[120px] top-[444px] absolute text-black text-lg font-normal font-['Poppins']">
        Logout
      </div>
      <div className="Component51 w-14 h-12 left-[34px] top-[428px] absolute">
        <div className="Ellipse6 w-14 h-12 left-0 top-0 absolute bg-red-500 rounded-full border-2 border-red-500" />
      </div>
    </div>
  );
};

export default Profile;
