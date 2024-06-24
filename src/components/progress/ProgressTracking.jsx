import React, { useState } from 'react';

const ProgressTracking = () => {
  // Data untuk simulasi riwayat progress
  const progressData = [
    { month: 'Jan', steps: 5789, duration: '1hr20m' },
    { month: 'Feb', steps: 3679, duration: '1hr40m' },
    { month: 'Mar', steps: 1859, duration: '1hr10m' },
    { month: 'Apr', steps: 2390, duration: '1hr15m' },
    // Tambahkan data bulan lain jika diperlukan
  ];

  const weekDays = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

  const [date, setDate] = useState(new Date());

  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentDay = date.getDate();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const handlePreviousMonth = () => {
    setDate(new Date(currentYear, currentMonth - 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(currentYear, currentMonth + 1));
  };

  return (
    <section className="min-h-screen flex justify-center items-center overflow-auto pt-16 bg-zinc-800">
      <div className="container mx-auto px-4 relative z-20">
        <div className="relative p-6 sm:p-8 rounded-xl text-white">
          <h2 className="text-5xl sm:text-6xl font-normal font-poppins mb-6 sm:mb-8 z-10">Progress</h2>
          
          {/* Container untuk Latihan, Kalori, dan Menit */}
          <div className="bg-white rounded-lg p-2 sm:p-4 shadow-lg mb-6 sm:mb-10" style={{ height: '120px' }}>
            <div className="flex items-center justify-around h-full">
              <div className="flex flex-col items-center text-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 sm:h-8 w-6 sm:w-8 mb-1 sm:mb-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 0 1 .784.37l6 7a1 1 0 0 1 .104 1.053l-2 5a1 1 0 0 1-1.732.316L10 14.82l-2.156 4.92a1 1 0 0 1-1.732-.316l-2-5a1 1 0 0 1 .104-1.053l6-7A1 1 0 0 1 10 2zm0 4.34L7.13 9h5.74L10 6.34z" clipRule="evenodd" />
                </svg>
                <div className="text-xs sm:text-base">Latihan</div>
              </div>
              <div className="flex flex-col items-center text-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 sm:h-8 w-6 sm:w-8 mb-1 sm:mb-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm.5 2a1 1 0 0 0-1 1v2.8l-1.15-.69a1 1 0 0 0-1 1.73l2.5 1.5a1 1 0 0 0 1 0l2.5-1.5a1 1 0 1 0-1-1.73L10.5 7.1V4a1 1 0 0 0-1-1z" />
                </svg>
                <div className="text-xs sm:text-base">Kalori</div>
              </div>
              <div className="flex flex-col items-center text-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 sm:h-8 w-6 sm:w-8 mb-1 sm:mb-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 0 1 .784.37l6 7a1 1 0 0 1 .104 1.053l-2 5a1 1 0 0 1-1.732.316L10 14.82l-2.156 4.92a1 1 0 0 1-1.732-.316l-2-5a1 1 0 0 1 .104-1.053l6-7A1 1 0 0 1 10 2zm0 4.34L7.13 9h5.74L10 6.34z" clipRule="evenodd" />
                </svg>
                <div className="text-xs sm:text-base">Menit</div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6 sm:mb-10">
            <h3 className="text-3xl sm:text-4xl font-normal font-poppins">{`Riwayat ${date.toLocaleString('default', { month: 'long' })} ${currentYear}`}</h3>
            <div className="flex space-x-2">
              <button onClick={handlePreviousMonth} className="bg-gray-500 p-2 rounded">
                <span className="text-2xl">&#x276E;</span> {/* Icon left arrow */}
              </button>
              <button onClick={handleNextMonth} className="bg-gray-500 p-2 rounded">
                <span className="text-2xl">&#x276F;</span> {/* Icon right arrow */}
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg p-2 sm:p-4 shadow-lg mb-6 sm:mb-16">
            <div className="grid grid-cols-7 gap-2 sm:gap-4 mb-2 sm:mb-4">
              {weekDays.map((day) => (
                <div key={day} className="text-center text-black text-lg sm:text-2xl font-normal font-poppins">{day}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2 sm:gap-4">
              {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                <div key={index} className="rounded-lg p-2 sm:p-4 text-center"></div>
              ))}
              {Array.from({ length: daysInMonth }).map((_, index) => (
                <div
                  key={index}
                  className={`rounded-lg p-2 sm:p-4 text-center text-black text-lg sm:text-2xl font-bold font-poppins shadow ${currentYear === new Date().getFullYear() && currentMonth === new Date().getMonth() && index + 1 === currentDay ? 'bg-red-300' : 'bg-white'}`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Judul "Progres Tracking" */}
          <div className="text-4xl font-normal font-poppins mb-4 text-white">
            Progres Tracking
          </div>

          {/* Container untuk Progres Tracking */}
          <div className="bg-white rounded-lg p-2 sm:p-4 shadow-lg mb-6 sm:mb-16">
            {/* Konten Progres Tracking */}
            <div className="grid grid-cols-4 gap-4 p-4"> {/* Mengatur padding agar lebih terlihat */}
              <div className="Frame15 bg-white px-5 py-6 rounded-2xl border border-white flex-col justify-start items-start gap-2.5">
                <div className="Steps text-red-500 text-base font-medium font-poppins capitalize">Steps</div>
                <div className="Frame13 flex justify-start items-start gap-6">
                  <div className=" text-red-500 text-xs font-medium font-poppins capitalize">170</div>
                  <div className=" text-red-500 text-xs font-medium font-poppins capitalize">165</div>
                  <div className=" text-red-500 text-xs font-medium font-poppins capitalize">155</div>
                  <div className=" text-red-500 text-xs font-medium font-poppins capitalize">150</div>
                </div>
                <div className="Frame6 flex justify-center items-end gap-11">
                  <div className="Group267 w-4 h-36 relative">
                    <div className="Rectangle167 w-4 h-36 absolute bg-zinc-300 rounded-full" />
                    <div className="Rectangle169 w-4 h-16 absolute bg-red-500 rounded-bl-full rounded-br-full" />
                  </div>
                  <div className="Group266 w-4 h-36 relative">
                    <div className="Rectangle170 w-4 h-36 absolute bg-zinc-300 rounded-full" />
                    <div className="Rectangle171 w-4 h-28 absolute bg-red-500 rounded-bl-full rounded-br-full" />
                  </div>
                  <div className="Group265 w-4 h-36 relative">
                    <div className="Rectangle173 w-4 h-36 absolute bg-zinc-300 rounded-full" />
                    <div className="Rectangle174 w-4 h-14 absolute bg-red-500 rounded-bl-full rounded-br-full" />
                  </div>
                  <div className="Group264 w-4 h-36 relative">
                    <div className="Rectangle176 w-4 h-36 absolute bg-zinc-300 rounded-full" />
                    <div className="Rectangle177 w-4 h-14 absolute bg-red-500 rounded-bl-full rounded-br-full" />
                  </div>
                </div>
                <div className="Frame5 flex justify-end items-center gap-7">
                  <div className="Jan text-red-500 text-xs font-medium font-poppins capitalize">Jan</div>
                  <div className="Feb text-red-500 text-xs font-medium font-poppins capitalize">Feb</div>
                  <div className="Mar text-red-500 text-xs font-medium font-poppins capitalize">Mar</div>
                  <div className="Apr text-red-500 text-xs font-medium font-poppins capitalize">Apr</div>
                </div>
              </div>
              <div className="Frame11 bg-red-500 rounded-lg justify-center items-center gap-8">
                <div className="Frame9 flex flex-col justify-start items-center gap-0.5">
                  <div className="Wen text-white text-xs font-medium font-poppins capitalize leading-normal">Wen</div>
                  <div className=" text-white text-2xl font-medium font-poppins capitalize leading-normal">20</div>
                </div>
                <div className="Frame7 flex flex-col justify-start items-start gap-0.5">
                  <div className="Steps text-white text-xs font-medium font-poppins capitalize leading-normal">Steps</div>
                  <div className="789 text-white text-2xl font-medium font-poppins capitalize leading-normal">5,789</div>
                </div>
                <div className="Frame8 flex justify-start items-end gap-2">
                  <div className="Duration text-white text-xs font-medium font-poppins capitalize leading-normal">Duration</div>
                  <div className="Time w-5 h-5 relative" />
                  <div className="Hr20m text-white text-sm font-medium font-poppins capitalize leading-normal">1hr20m</div>
                </div>
              </div>
              <div className="Frame16 bg-red-500 rounded-lg justify-center items-center gap-8">
                <div className="Frame9 flex flex-col justify-start items-center gap-0.5">
                  <div className="Sat text-white text-xs font-medium font-poppins capitalize leading-normal">Sat</div>
                  <div className=" text-white text-2xl font-medium font-poppins capitalize leading-normal">22</div>
                </div>
                <div className="Frame7 flex flex-col justify-start items-start gap-0.5">
                  <div className="Steps text-white text-xs font-medium font-poppins capitalize leading-normal">Steps</div>
                  <div className="859 text-white text-2xl font-medium font-poppins capitalize leading-normal">1,859</div>
                </div>
                <div className="Frame8 flex justify-start items-end gap-2">
                  <div className="Duration text-white text-xs font-medium font-poppins capitalize leading-normal">Duration</div>
                  <div className="Time w-5 h-5 relative" />
                  <div className="Hr10m text-white text-sm font-medium font-poppins capitalize leading-normal">1hr10m</div>
                </div>
              </div>
              <div className="Frame12 bg-red-500 rounded-lg justify-center items-center gap-8">
                <div className="Frame9 flex flex-col justify-start items-center gap-0.5">
                  <div className="Thu text-white text-xs font-medium font-poppins capitalize leading-normal">Thu</div>
                  <div className=" text-white text-2xl font-medium font-poppins capitalize leading-normal">14</div>
                </div>
                <div className="Frame7 flex flex-col justify-start items-start gap-0.5">
                  <div className="Steps text-white text-xs font-medium font-poppins capitalize leading-normal">Steps</div>
                  <div className="679 text-white text-2xl font-medium font-poppins capitalize leading-normal">3,679</div>
                </div>
                <div className="Frame8 flex justify-start items-end gap-2">
                  <div className="Duration text-white text-xs font-medium font-poppins capitalize leading-normal">Duration</div>
                  <div className="Time w-5 h-5 relative" />
                  <div className="Hr40m text-white text-sm font-medium font-poppins capitalize leading-normal">1hr40m</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgressTracking;
