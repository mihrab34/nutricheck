import React from "react";
import AfricanMask from "../assets/images/AfricanMask.png";   
import AfricanMask1 from "../assets/images/AfricanMask1.png"; 

const RecipeSubscription = () => {
  return (
    <section className="relative bg-[#FFE1D6] py-20 px-4 text-center">
      {/* Top-left decorative mask */}
      <img
        src={AfricanMask}
        alt="Top left mask"
        className="absolute top-0 left-0 w-28 md:w-36 lg:w-44 -translate-x-2 -translate-y-1/4 z-20"
      />

      {/* Bottom-right decorative mask */}
      <img
        src={AfricanMask1}
        alt="Bottom right mask"
        className="absolute bottom-0 right-0 w-28 md:w-36 lg:w-44 -translate-x-2 translate-y-1/3 rotate-360 z-20"
      />

      {/* Text and form */}
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          <span className="text-[#2A2A2A]">Delicious Recipes</span> to your inbox
        </h2>

        <p className="text-gray-600 mt-4 text-base md:text-lg">
          Enjoy weekly hand picked recipes and recommendations
        </p>

        <form className="mt-8 max-w-xl mx-auto relative">
          <div className="relative [filter:drop-shadow(0_6px_10px_rgba(255,66,0,0.3))]">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full py-4 pl-6 pr-36 rounded-full focus:outline-none text-sm md:text-base bg-white"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition mr-1"
            >
              Get recipes
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RecipeSubscription;
