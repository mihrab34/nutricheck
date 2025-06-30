import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Undo2, Share2, Bookmark } from 'lucide-react';
import Image1 from '../assets/images/Recipe.png'; // Replace with your images
import { Link, useNavigate } from 'react-router-dom';

const images = [Image1, Image1, Image1]; // Example image list

const RecipeHero = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="max-w-7xl mx-auto p-4 pt-24">
      {/* Back Button */}
      <div className="mb-3">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded transition-colors"
        >
          <Undo2 size={18} /> Back
        </button>
      </div>

      {/* Title + Rating + Buttons */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Rice with Fried Cheese</h1>
          <div className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
            <Star className="text-yellow-500" size={18} />
            <span className="ml-1 font-medium">4.5</span>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded">
            <Share2 size={16} /> Share
          </button>
          <button className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded">
            <Bookmark size={16} /> Add to collection
          </button>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="relative mt-6 rounded-lg overflow-hidden shadow-lg">
        <img
          src={images[currentImage]}
          alt="Recipe"
          className="w-full h-72 md:h-96 object-cover transition-all duration-300"
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2"
        >
          <ChevronRight />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentImage ? 'bg-white' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeHero;
