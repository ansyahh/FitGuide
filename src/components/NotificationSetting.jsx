import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaUser, FaBell, FaKey, FaSignOutAlt } from 'react-icons/fa';

const NotificationSetting = () => {
  const [toggles, setToggles] = useState({
    generalNotification: true,
    sound: false,
    dontDisturbMode: true,
    vibrate: true,
    lockScreen: false,
    reminders: true,
  });

  const handleToggle = (toggle) => {
    setToggles((prev) => ({ ...prev, [toggle]: !prev[toggle] }));
  };

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
      <div
        className={`Component31 w-14 h-8 pl-0.5 pr-1 py-1 left-[922px] top-[133px] absolute rounded-full flex items-center cursor-pointer ${toggles.generalNotification ? 'bg-red-500' : 'bg-gray-300'}`}
        onClick={() => handleToggle('generalNotification')}
      >
        <div className={`Ellipse33 w-6 h-6 bg-white rounded-full transition-transform ${toggles.generalNotification ? 'translate-x-6' : 'translate-x-0'}`} />
      </div>
      <div
        className={`Component32 w-14 h-8 pl-1 pr-0.5 py-1 left-[923px] top-[221px] absolute rounded-full flex items-center cursor-pointer ${toggles.sound ? 'bg-red-500' : 'bg-gray-300'}`}
        onClick={() => handleToggle('sound')}
      >
        <div className={`Ellipse33 w-6 h-6 bg-white rounded-full transition-transform ${toggles.sound ? 'translate-x-6' : 'translate-x-0'}`} />
      </div>
      <div
        className={`Component33 w-14 h-8 pl-0.5 pr-1 py-1 left-[923px] top-[310px] absolute rounded-full flex items-center cursor-pointer ${toggles.dontDisturbMode ? 'bg-red-500' : 'bg-gray-300'}`}
        onClick={() => handleToggle('dontDisturbMode')}
      >
        <div className={`Ellipse33 w-6 h-6 bg-white rounded-full transition-transform ${toggles.dontDisturbMode ? 'translate-x-6' : 'translate-x-0'}`} />
      </div>
      <div
        className={`Component34 w-14 h-7 pl-0.5 pr-1 py-1 left-[923px] top-[398px] absolute rounded-full flex items-center cursor-pointer ${toggles.vibrate ? 'bg-red-500' : 'bg-gray-300'}`}
        onClick={() => handleToggle('vibrate')}
      >
        <div className={`Ellipse33 w-6 h-6 bg-white rounded-full transition-transform ${toggles.vibrate ? 'translate-x-6' : 'translate-x-0'}`} />
      </div>
      <div
        className={`Component35 w-14 h-7 pl-1 pr-0.5 py-1 left-[923px] top-[484px] absolute rounded-full flex items-center cursor-pointer ${toggles.lockScreen ? 'bg-red-500' : 'bg-gray-300'}`}
        onClick={() => handleToggle('lockScreen')}
      >
        <div className={`Ellipse33 w-6 h-6 bg-white rounded-full transition-transform ${toggles.lockScreen ? 'translate-x-6' : 'translate-x-0'}`} />
      </div>
      <div
        className={`Component36 w-14 h-7 pl-0.5 pr-1 py-1 left-[923px] top-[584px] absolute rounded-full flex items-center cursor-pointer ${toggles.reminders ? 'bg-red-500' : 'bg-gray-300'}`}
        onClick={() => handleToggle('reminders')}
      >
        <div className={`Ellipse33 w-6 h-6 bg-white rounded-full transition-transform ${toggles.reminders ? 'translate-x-6' : 'translate-x-0'}`} />
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
