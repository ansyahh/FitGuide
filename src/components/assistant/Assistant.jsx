// Assistant.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Assistant = () => {
  return (
    <div className="Profil w-96 h-96 relative bg-white">
      <div className="MdiReportBoxOutline w-6 h-6 left-0 top-0 absolute" />
      <div className="MyProfile w-48 h-10 left-[94px] top-[40px] absolute text-black text-2xl font-medium font-['Inter']">
        My profile
      </div>
      <div className="AvatarLabelGroup w-96 h-36 left-[279px] top-[116px] absolute justify-start items-center gap-3 inline-flex">
        <div className="MaskGroup w-32 h-28 relative">
          <div className="Ellipse36 w-32 h-28 left-0 top-0 absolute bg-zinc-300 rounded-full" />
          <img
            className="Image1 w-44 h-40 left-[-18.60px] top-0 absolute"
            src="https://via.placeholder.com/177x161"
            alt="Profile"
          />
        </div>
        <div className="TextAndSupportingText flex-col justify-start items-start inline-flex">
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
      <div className="NotificationSetting w-48 h-4 left-[393px] top-[414px] absolute text-black text-lg font-normal font-['Poppins']">
        Notification Setting
      </div>
      <div className="PasswordSetting w-44 h-4 left-[393px] top-[509px] absolute text-black text-lg font-normal font-['Poppins']">
        Password Setting
      </div>
      <div className="Profile w-20 h-4 left-[399px] top-[312px] absolute text-black text-lg font-normal font-['Poppins']">
        Profile
      </div>
      <div className="Component41 w-14 h-12 left-[307px] top-[292px] absolute">
        <div className="Ellipse1 w-14 h-12 left-0 top-0 absolute bg-red-500 rounded-full" />
      </div>
      <div className="Component42 w-14 h-12 left-[306px] top-[488px] absolute">
        <div className="Ellipse6 w-14 h-12 left-0 top-0 absolute bg-red-500 rounded-full border-2 border-red-500" />
      </div>
      <div className="Component43 w-14 h-12 left-[306px] top-[390px] absolute">
        <div className="Ellipse6 w-14 h-12 left-0 top-0 absolute bg-red-500 rounded-full border-2 border-red-500" />
        <div className="SilhouetteIcon w-7 h-8 left-[41.08px] top-[39.60px] absolute origin-top-left -rotate-180" />
      </div>
      <div className="Logout w-20 h-4 left-[392px] top-[602px] absolute text-black text-lg font-normal font-['Poppins']">
        Logout
      </div>
      <div className="Component47 w-14 h-12 left-[306px] top-[586px] absolute">
        <div className="Ellipse6 w-14 h-12 left-0 top-0 absolute bg-red-500 rounded-full border-2 border-red-500" />
      </div>
      <div className="Group73 w-16 h-16 left-[12px] top-[24px] absolute">
        <div className="Ellipse5 w-16 h-16 left-0 top-0 absolute bg-zinc-300/opacity-50 rounded-full" />
        <div className="IcChevronLeft24px1 w-14 h-14 left-[4px] top-[5px] absolute" />
      </div>
    </div>
  );
};

export default Assistant;
