import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Users, ChevronDown, ChevronUp, SlidersVertical, ChevronLeft, ChevronRight, Star, Undo2, Share2, Bookmark } from 'lucide-react';
import CommentsSection from '../../components/Comments';
import UsersAlsoViewed from '../../components/UsersAlsoViewed';
import RecipeSubscription from '../../components/RecipeSubscription';

const SpicyChickenWrap = () => {
  const navigate = useNavigate();
  const [isNutritionalOpen, setIsNutritionalOpen] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);

  const toggleNutritionalPanel = () => setIsNutritionalOpen(!isNutritionalOpen);
  
  const images = [
    '/src/assets/images/Recipe.png',
    '/src/assets/images/Recipe.png',
    '/src/assets/images/Recipe.png'
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const pillColors = [
    { bg: 'bg-red-600', text: 'Protein' },
    { bg: 'bg-yellow-400', text: 'Protein' },
    { bg: 'bg-green-500', text: 'Protein' },
    { bg: 'bg-orange-400', text: 'Protein' },
    { bg: 'bg-black', text: 'Protein' },
    { bg: 'bg-blue-500', text: 'Protein' },
    { bg: 'bg-purple-700', text: 'Protein' },
  ];

  const ingredients = [
    { name: 'Rice', amount: '225g', image: '/images/rice.png' },
    { name: 'Olive Oil', amount: '60g', image: '/images/oil.png' },
    { name: 'Cheese', amount: '300g', image: '/images/cheese.png', note: 'Grated' },
    { name: 'Salt', amount: '1/2 tsp', image: '/images/salt.png' },
    { name: 'Onion', amount: '4 Pieces', image: '/images/onion.png', note: 'Sliced' },
    { name: 'Tomato', amount: '3 Pieces', image: '/images/tomato.png' },
    { name: 'Red Pepper', amount: '1/2 tsp', image: '/images/pepper.png' },
  ];

  const instructions = [
    'Preheat oven to 200°C. Spray a 6–cup capacity (1.5l) ovenproof dish with oil. Steam potato slices in boiling water for about 10 minutes until just tender. Layer in dish with raw pumpkin and onion then pour milk over.',
    'Preheat oven to 200°C. Spray a 6–cup capacity (1.5l) ovenproof dish with oil. Steam potato slices in boiling water for about 10 minutes until just tender. Layer in dish with raw pumpkin and onion then pour milk over.',
    'Preheat oven to 200°C. Spray a 6–cup capacity (1.5l) ovenproof dish with oil. Steam potato slices in boiling water for about 10 minutes until just tender. Layer in dish with raw pumpkin and onion then pour milk over.',
    'Preheat oven to 200°C. Spray a 6–cup capacity (1.5l) ovenproof dish with oil. Steam potato slices in boiling water for about 10 minutes until just tender. Layer in dish with raw pumpkin and onion then pour milk over.',
    'Preheat oven to 200°C. Spray a 6–cup capacity (1.5l) ovenproof dish with oil. Steam potato slices in boiling water for about 10 minutes until just tender. Layer in dish with raw pumpkin and onion then pour milk over.',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Recipe Hero Section */}
      <section className="max-w-7xl mx-auto p-4 pt-24">
        {/* Back Button */}
        <div className="mb-3">
          <button
            onClick={handleGoBack}
            className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded transition-colors"
          >
            <Undo2 size={18} /> Back
          </button>
        </div>

        {/* Title + Rating + Buttons */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Spicy Chicken Wrap</h1>
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

      {/* Nutritional Info Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 py-6 w-full">
          <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-start gap-6 w-full">
            {/* Prep Info */}
            <div className="flex items-center justify-center gap-6 text-gray-700 flex-wrap">
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <div className="text-sm">
                  <p className="text-gray-500">Prep time</p>
                  <p className="font-semibold">20 min</p>
                </div>
              </div>

              <div className="border-l h-8 mx-3" />

              <div className="flex items-center gap-2">
                <Users size={18} />
                <div className="text-sm">
                  <p className="text-gray-500">Servings</p>
                  <p className="font-semibold">4</p>
                </div>
              </div>

              <div className="border-l h-8 mx-3" />

              <div className="flex items-center gap-2">
                <SlidersVertical size={18} />
                <div className="text-sm">
                  <p className="text-gray-500">Level</p>
                  <p className="font-semibold">Easy</p>
                </div>
              </div>
            </div>

            {/* Nutritional Info Panel */}
            <div className="bg-purple-100 rounded-md p-4 w-full max-w-xl shadow-sm">
              <div className="flex justify-between items-center cursor-pointer" onClick={toggleNutritionalPanel}>
                <h3 className="font-semibold text-gray-800">Nutritional Info</h3>
                {isNutritionalOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>

              {isNutritionalOpen && (
                <>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {pillColors.map((pill, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-1 text-white px-3 py-1 rounded-full ${pill.bg}`}
                      >
                        <span>{pill.text}</span>
                        <span className="bg-white text-black text-xs rounded-full px-2 py-0.5 font-bold">9g</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Facts about nutritional benefits are lorem ipsum text is a dummy text blaa blaa blaa
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients and Instructions Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Ingredients */}
            <div className="space-y-6">
              {/* Ingredients Card */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Ingredients</h2>
                  <div className="relative">
                    <select className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-8 py-1.5 text-sm focus:outline-none">
                      <option>g</option>
                      <option>oz</option>
                      <option>cups</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <ul className="divide-y divide-gray-200">
                  {ingredients.map((item, idx) => (
                    <li key={idx} className="py-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-6 h-6 object-contain"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `https://via.placeholder.com/24/cccccc/ffffff?text=${item.name.charAt(0)}`;
                              }}
                            />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{item.name}</p>
                            {item.note && (
                              <p className="text-xs text-gray-500">{item.note}</p>
                            )}
                          </div>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{item.amount}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Feedback Card */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 mb-3">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Already tried this Recipe?</h3>
                  <p className="text-sm text-gray-500 mb-4">Share your feedback with us!</p>
                  <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Share your Feedback
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Instructions */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Instructions</h2>
                <ol className="space-y-6">
                  {instructions.map((step, idx) => (
                    <li key={idx} className="flex">
                      <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white text-sm font-medium mr-4">
                        {idx + 1}
                      </span>
                      <p className="text-gray-700">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CommentsSection />
      <UsersAlsoViewed />
      <RecipeSubscription />
    </div>
  );
};

export default SpicyChickenWrap;