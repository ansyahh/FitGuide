import React from 'react';
import { Link } from 'react-router-dom';

const ProgressTracking = () => {
  return (
    <section className="min-h-screen flex justify-center items-center bg-zinc-800 overflow-auto pt-16"> {/* Penambahan padding-top */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="relative bg-zinc-800 p-8 rounded-xl text-white">
          <h2 className="text-6xl font-normal font-poppins mb-8 z-10">Progress</h2>
          <div className="absolute left-12 top-32">
            <div className="bg-zinc-300/50 rounded-full p-4">
              <Link to="/">
                <span className="text-4xl">&#x276E;</span> {/* Icon left arrow */}
              </Link>
            </div>
          </div>

          <div className="text-center mb-10">
            <h3 className="text-4xl font-normal font-poppins">Riwayat</h3>
          </div>

          <div className="grid grid-cols-7 gap-4 mb-16">
            <div className="text-center text-black text-2xl font-normal font-poppins">Min</div>
            <div className="text-center text-black text-2xl font-normal font-poppins">Sen</div>
            <div className="text-center text-black text-2xl font-normal font-poppins">Sel</div>
            <div className="text-center text-black text-2xl font-normal font-poppins">Rab</div>
            <div className="text-center text-black text-2xl font-normal font-poppins">Kam</div>
            <div className="text-center text-black text-2xl font-normal font-poppins">Jum</div>
            <div className="text-center text-black text-2xl font-normal font-poppins">Sab</div>
          </div>

          <div className="grid grid-cols-7 gap-4 mb-8">
            {Array.from({ length: 30 }).map((_, index) => (
              <div key={index} className="bg-zinc-300 rounded-2xl p-4 shadow text-center text-black text-2xl font-bold font-poppins">
                {index + 1}
              </div>
            ))}
          </div>

          <div className="text-center mb-10">
            <h3 className="text-4xl font-normal font-poppins">Progres Tracking</h3>
          </div>

          <div className="bg-zinc-300 rounded-3xl p-8 mb-16">
            <div className="text-red-500 text-base font-medium font-poppins capitalize mb-4">Steps</div>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-zinc-300 w-4 h-36 rounded-full relative">
                  <div className="bg-red-500 w-4 h-16 absolute bottom-0 rounded-bl-full rounded-br-full"></div>
                </div>
                <div className="text-red-500 text-xs font-medium font-poppins capitalize">Jan</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-zinc-300 w-4 h-36 rounded-full relative">
                  <div className="bg-red-500 w-4 h-28 absolute bottom-0 rounded-bl-full rounded-br-full"></div>
                </div>
                <div className="text-red-500 text-xs font-medium font-poppins capitalize">Feb</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-zinc-300 w-4 h-36 rounded-full relative">
                  <div className="bg-red-500 w-4 h-14 absolute bottom-0 rounded-bl-full rounded-br-full"></div>
                </div>
                <div className="text-red-500 text-xs font-medium font-poppins capitalize">Mar</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-zinc-300 w-4 h-36 rounded-full relative">
                  <div className="bg-red-500 w-4 h-14 absolute bottom-0 rounded-bl-full rounded-br-full"></div>
                </div>
                <div className="text-red-500 text-xs font-medium font-poppins capitalize">Apr</div>
              </div>
            </div>
          </div>

          <div className="bg-red-500 rounded-lg p-4 mb-8 flex justify-between items-center text-white">
            <div className="flex flex-col items-center">
              <div className="text-xs font-medium font-poppins capitalize leading-normal">Wed</div>
              <div className="text-2xl font-medium font-poppins capitalize leading-normal">20</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xs font-medium font-poppins capitalize leading-normal">Steps</div>
              <div className="text-2xl font-medium font-poppins capitalize leading-normal">5,789</div>
            </div>
            <div className="flex items-end gap-2">
              <div className="text-xs font-medium font-poppins capitalize leading-normal">Duration</div>
              <div className="w-5 h-5"></div>
              <div className="text-sm font-medium font-poppins capitalize leading-normal">1hr20m</div>
            </div>
          </div>

          <div className="bg-red-500 rounded-lg p-4 mb-8 flex justify-between items-center text-white">
            <div className="flex flex-col items-center">
              <div className="text-xs font-medium font-poppins capitalize leading-normal">Thu</div>
              <div className="text-2xl font-medium font-poppins capitalize leading-normal">14</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xs font-medium font-poppins capitalize">Steps</div>
              <div className="text-2xl font-medium font-poppins capitalize leading-normal">3,679</div>
            </div>
            <div className="flex items-end gap-2">
              <div className="text-xs font-medium font-poppins capitalize leading-normal">Duration</div>
              <div className="w-5 h-5"></div>
              <div className="text-sm font-medium font-poppins capitalize leading-normal">1hr40m</div>
            </div>
          </div>

          <div className="bg-red-500 rounded-lg p-4 mb-8 flex justify-between items-center text-white">
            <div className="flex flex-col items-center">
              <div className="text-xs font-medium font-poppins capitalize leading-normal">Sat</div>
              <div className="text-2xl font-medium font-poppins capitalize leading-normal">22</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xs font-medium font-poppins capitalize leading-normal">Steps</div>
              <div className="text-2xl font-medium font-poppins capitalize leading-normal">1,859</div>
            </div>
            <div className="flex items-end gap-2">
              <div className="text-xs font-medium font-poppins capitalize leading-normal">Duration</div>
              <div className="w-5 h-5"></div>
              <div className="text-sm font-medium font-poppins capitalize leading-normal">1hr10m</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgressTracking;
