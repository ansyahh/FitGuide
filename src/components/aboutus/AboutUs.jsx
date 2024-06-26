import React from 'react';
import aboutImage from '../../assets/about.jpg';
import teamImage from '../../assets/team.jpg';
import goalsImage from '../../assets/goals.jpg'; 

const AboutUs = () => {
  return (
    <div className="w-full relative">
      {/* Hero Image */}
      <div className="relative w-full h-screen">
        <img className="object-cover w-full h-full" src={aboutImage} alt="About Us" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold text-center">
            <span>About Us</span>
          </h1>
        </div>
      </div>

      {/* Konten About Us */}
      <div className="w-full bg-zinc-800">
        <div className="container mx-auto py-16">
          <div className="relative w-full h-auto bg-white">
            <div className="w-full max-w-[1300px] bg-white mx-auto flex flex-col lg:flex-row items-center">
              {/* Bagian About */}
              <div className="p-8 w-full lg:w-2/3">
                <div className="text-center mb-8 relative">
                  <h2 className="text-black text-4xl font-light mb-4 inline-block bg-white px-4 relative z-10">
                    About
                  </h2>
                  <hr className="absolute w-52 mt-2 border-t-4 border-orange-500 left-1/2 transform -translate-x-1/2" />
                </div>
                <p className="text-black text-xl font-normal leading-loose mb-8">
                  Pada website FitGuide, Anda akan menemukan sumber daya yang kaya tentang kebugaran, kesehatan, dan gaya hidup aktif. Kami menyajikan informasi tentang berbagai program latihan, tips nutrisi, artikel kesehatan, serta panduan untuk mencapai tujuan kebugaran Anda. Selain itu, anda dapat mempelajari lebih lanjut tentang komunitas FitGuide. Dengan informasi yang lengkap dan terkini, kami bertujuan untuk membantu Anda membangun gaya hidup sehat dan energik.
                </p>
                <img className="w-full lg:hidden mb-4" src={teamImage} alt="Team" />
              </div>
              <div className="hidden lg:flex lg:w-1/3 lg:ml-4 lg:border lg:border-white lg:p-4">
                <img className="w-full" style={{ maxWidth: '100%' }} src={teamImage} alt="Team" />
              </div>
            </div>

            {/* Bagian Goal */}
            <div className="w-full max-w-[1300px] bg-white mx-auto flex flex-col lg:flex-row items-center mt-4">
              <div className="p-8 w-full lg:w-2/3 lg:order-1">
                <div className="text-center mb-8 relative">
                  <h2 className="text-black text-4xl font-light mb-4 inline-block bg-white px-4 relative z-10">
                    Goal
                  </h2>
                  <hr className="absolute w-52 mt-2 border-t-4 border-orange-500 left-1/2 transform -translate-x-1/2" />
                </div>
                <p className="text-black text-xl font-normal leading-loose mb-8">
                  Kami hadir untuk menginspirasi Anda dalam perjalanan kebugaran Anda, membantu Anda mencapai tujuan yang Anda impikan, dan menciptakan gaya hidup yang sehat dan berenergi.
                </p>
                <img className="w-full lg:hidden" src={goalsImage} alt="Goals" />
              </div>
              <div className="hidden lg:flex lg:w-1/3 lg:ml-8 mb-8 lg:border lg:border-white">
                <img className="w-full" src={goalsImage} alt="Goals" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
