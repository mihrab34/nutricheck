import React from "react";
import { X } from 'lucide-react';
import "./MegaMenu.css"; // For custom pattern if needed
import { Link } from "react-router-dom";

const specialDiets = [
  "Less than 20mins",
  "Dairy Free",
  "Diabetes Friendly",
  "Gluten Free",
  "High Fibre",
  "Vegetarian",
  "Vegan",
];

const mealCategories = [
  "Breakfast", "Lunch", "Supper", "Desserts", "Meat", "Salad", "Brunch", "Dinner",
  "Baking", "Sandwiches", "Soup", "Seafood", "Meat", "Vegan", "Elevenses",
];

const MegaMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      {/* Mega Menu */}
      <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl z-50 font-sans">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 z-50 bg-white rounded-full p-2 shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X size={22} />
        </button>
        <div className="flex rounded-xl shadow-xl overflow-visible">
          {/* Left: Special Diets */}
          <div className="bg-[#2d3561] text-white p-8 w-1/3 flex flex-col rounded-l-xl">
            <h3 className="text-xl font-bold mb-6 font-sans">Special Diets</h3>
            <ul className="space-y-4 text-base font-medium">
              {specialDiets.map((diet) => (
                <li key={diet} className="hover:underline cursor-pointer">{diet}</li>
              ))}
            </ul>
          </div>
          {/* Middle: African Pattern Border */}
          <div className="relative flex-1 flex justify-center items-center bg-transparent">
            <div className="african-pattern rounded-r-xl flex items-center justify-center w-full h-full py-6 px-0">
              {/* White Card for Meal Categories */}
              <div className="bg-white rounded-xl shadow-lg p-10 w-[90%] mx-auto">
                <div className="grid grid-cols-3 gap-y-4 gap-x-8 text-gray-600 text-base font-medium">
                  {mealCategories.map((cat, i) => (
                    <div key={i} className="hover:text-purple-700 cursor-pointer">{cat}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu; 