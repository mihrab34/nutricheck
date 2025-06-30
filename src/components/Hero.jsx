import React from 'react';
import heroBgImage from '../assets/images/herobg.png';
import heroFoodImage from '../assets/images/HeroImg.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-100 pt-24 pb-24">
      {/* Background with #F3D2FF overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(243, 210, 255, 0.9), rgba(243, 210, 255, 0.9)), url(${heroBgImage})`,
          marginTop: '0',
          paddingTop: '4rem',
          minHeight: 'calc(100vh - 6rem)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center min-h-[calc(100vh-12rem)] px-6 py-12">
        <div className="w-full max-w-4xl mx-auto transform -translate-y-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#333356] mb-6 leading-tight">
            <span className="sm:whitespace-nowrap">Get nutritionally</span>
            <span className="sm:whitespace-nowrap"> approved meals,</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#333356] mb-12">
            Prepared by you - <span className="figma-hand">EAZY PEEZY</span>
          </p>

          {/* Search Input and Button */}
          <div className="w-full max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="what food do you want ?"
                className="w-full py-3 sm:py-4 pl-4 sm:pl-6 pr-28 sm:pr-36 rounded-full shadow-lg focus:outline-none text-gray-600 text-base sm:text-lg bg-white"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#8A2BE2] hover:bg-[#7B1FA2] text-white font-semibold px-3 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base rounded-full transition whitespace-nowrap mr-1">
                Get recipes
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom right image */}
      <div className="absolute right-0 bottom-0 w-full md:w-1/2 lg:w-2/5">
        <img
          src={heroFoodImage}
          alt="Delicious food"
          className="w-full h-auto rounded-tl-3xl"
        />
      </div>
    </section>
  );
};

export default Hero;