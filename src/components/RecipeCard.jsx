import React, { useState } from 'react';
import { Heart, Clock, Users, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(recipe.isFavorite);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link to={`/recipe/${recipe.slug}`} className="block group h-full">
      <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Favorite Button */}
        <button 
          onClick={toggleFavorite}
          className="absolute top-4 right-4 p-2 bg-white/40 rounded-sm hover:bg-white/60 transition-colors z-10"
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorite ? 'text-white fill-white' : 'text-gray-600'
            }`}
          />
        </button>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col justify-end p-6 h-full">
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 line-clamp-2">
            {recipe.title}
          </h3>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-2 mt-auto">
            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs sm:text-sm text-white">
              <Clock className="w-4 h-4" />
              <span>{recipe.time}</span>
            </div>

            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs sm:text-sm text-white">
              <SlidersHorizontal className="w-4 h-4" />
              <span>{recipe.difficulty}</span>
            </div>

            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs sm:text-sm text-white">
              <Users className="w-4 h-4" />
              <span>{recipe.servings}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
