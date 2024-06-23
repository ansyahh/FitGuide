import React from 'react';
import { Link } from 'react-router-dom';

const NotificationSetting = () => {
  return (
    <div className="SettingsNotifikasi w-96 h-96 relative bg-white border border-white">
      <div className="NotificationSetting left-[79px] top-[37px] absolute text-black text-2xl font-bold font-['Poppins'] capitalize">
        Notification Setting
      </div>
      <div className="GeneralNotification w-80 h-7 left-[448px] top-[140px] absolute text-black text-lg font-normal font-['Poppins']">
        General Notification
      </div>
      <div className="Sound w-60 h-7 left-[448px] top-[218px] absolute text-black text-lg font-normal font-['Poppins']">
        Sound
      </div>
      <div className="DonTDisturbMode w-72 h-7 left-[448px] top-[307px] absolute text-black text-lg font-normal font-['Poppins']">
        Don’t Disturb Mode
      </div>
      <div className="Vibrate w-52 h-7 left-[448px] top-[397px] absolute text-black text-lg font-normal font-['Poppins']">
        Vibrate
      </div>
      <div className="LockScreen w-52 h-7 left-[448px] top-[484px] absolute text-black text-lg font-normal font-['Poppins']">
        Lock Screen
      </div>
      <div className="Reminders w-52 h-7 left-[448px] top-[580px] absolute text-black text-lg font-normal font-['Poppins']">
        Reminders
      </div>

      {/* Toggles */}
      <div className="Component31 w-14 h-8 pl-0.5 pr-1 py-1 left-[922px] top-[133px] absolute bg-red-500 rounded-full flex items-center">
        <div className="Ellipse33 w-3 h-3 bg-white rounded-full" />
      </div>
      <div className="Component32 w-14 h-8 pl-1 pr-0.5 py-1 left-[923px] top-[221px] absolute bg-black rounded-full flex items-center justify-end">
        <div className="Ellipse33 w-3 h-3 bg-white rounded-full" />
      </div>
      <div className="Component33 w-14 h-8 pl-0.5 pr-1 py-1 left-[923px] top-[310px] absolute bg-red-500 rounded-full flex items-center">
        <div className="Ellipse33 w-3 h-3 bg-white rounded-full" />
      </div>
      <div className="Component34 w-14 h-7 pl-0.5 pr-1 py-1 left-[923px] top-[398px] absolute bg-red-500 rounded-full flex items-center">
        <div className="Ellipse33 w-3 h-3 bg-white rounded-full" />
      </div>
      <div className="Component35 w-14 h-7 pl-1 pr-0.5 py-1 left-[923px] top-[484px] absolute bg-black rounded-full flex items-center justify-end">
        <div className="Ellipse33 w-3 h-3 bg-white rounded-full" />
      </div>
      <div className="Component36 w-14 h-7 pl-0.5 pr-1 py-1 left-[923px] top-[584px] absolute bg-red-500 rounded-full flex items-center">
        <div className="Ellipse33 w-3 h-3 bg-white rounded-full" />
      </div>

      {/* Navigasi Menu */}
      <div className="Group73 w-16 h-16 left-[7px] top-[24px] absolute">
        <div className="Ellipse5 w-16 h-16 left-0 top-0 absolute bg-zinc-300/opacity-50 rounded-full" />
        <div className="IcChevronLeft24px1 w-14 h-14 left-[4px] top-[5px] absolute" />
      </div>
      <div className="NotificationSetting w-48 h-4 left-[124px] top-[255px] absolute text-black text-lg font-normal font-['Poppins']">
        <Link to="/notification-setting" className="text-black">Notification Setting</Link>
      </div>
      <div className="PasswordSetting w-44 h-4 left-[124px] top-[350px] absolute text-black text-lg font-normal font-['Poppins']">
        <Link to="/password-setting" className="text-black">Password Setting</Link>
      </div>
      <div className="Profile w-20 h-4 left-[130px] top-[153px] absolute text-black text-lg font-normal font-['Poppins']">
        <Link to="/profile" className="text-black">Profile</Link>
      </div>
      <div className="Component41 w-14 h-12 left-[38px] top-[133px] absolute">
        <div className="Ellipse1 w-14 h-12 left-0 top-0 absolute bg-red-500 rounded-full" />
      </div>
      <div className="Component42 w-14 h-12 left-[37px] top-[329px] absolute">
        <div className="Ellipse6 w-14 h-12 left-0 top-0 absolute bg-red-500 rounded-full border-2 border-red-500" />
      </div>
      <div className="Component43 w-14 h-12 left-[37px] top-[231px] absolute">
        <div className="Ellipse6 w-14 h-12 left-0 top-0 absolute bg-red-500 rounded-full border-2 border-red-500" />
        <div className="SilhouetteIcon w-7 h-8 left-[41.08px] top-[39.60px] absolute origin-top-left -rotate-180" />
      </div>
      <div className="Logout w-20 h-4 left-[123px] top-[443px] absolute text-black text-lg font-normal font-['Poppins']">
        Logout
      </div>
      <div className="Component47 w-14 h-12 left-[37px] top-[427px] absolute">
        <div className="Ellipse6 w-14 h-12 left-0 top-0 absolute bg-red-500 rounded-full border-2 border-red-500" />
      </div>
    </div>
  );
};

export default NotificationSetting;
