import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaUser, FaBell, FaKey, FaSignOutAlt } from 'react-icons/fa';

const NotificationSetting = () => {
  return (
    <div className="SettingsNotifikasi w-96 h-96 relative bg-white border border-white">
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
          Notification Setting
        </div>
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

export default NotificationSetting;
