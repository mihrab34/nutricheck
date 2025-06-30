import React, { useState } from 'react';
import { Heart, Clock,  Users, SlidersVertical } from 'lucide-react';
import Recipe from '../assets/images/Recipe.png';

const UsersAlsoViewed = () => {
  const [likedRecipes, setLikedRecipes] = useState(new Set());

  const recipes = [
    {
      id: 1,
      title: 'Rice with fried cheese',
      time: '20 min',
      difficulty: 'Easy',
      servings: '4',
      image: Recipe,
    },
    {
      id: 2,
      title: 'Pasta Carbonara',
      time: '25 min',
      difficulty: 'Medium',
      servings: '3',
      image: Recipe,
    },
    {
      id: 3,
      title: 'Vegetable Stir Fry',
      time: '20 min',
      difficulty: 'Easy',
      servings: '4',
      image: Recipe,
    },
  ];

  const toggleLike = (recipeId) => {
    const newLiked = new Set(likedRecipes);
    newLiked.has(recipeId) ? newLiked.delete(recipeId) : newLiked.add(recipeId);
    setLikedRecipes(newLiked);
  };

  return (
    <div className="w-full py-8 bg-white pb-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-2xl font-bold text-[#1C1C51] mb-6">Users also viewed</h2>

        {/* Recipe Cards - Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div 
              key={recipe.id} 
              className="h-96 rounded-2xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300 relative"
            >
              {/* Recipe Image */}
              <div className="absolute inset-0">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x500/f3f4f6/9ca3af?text=Recipe+Image';
                  }}
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                {/* Heart Icon */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(recipe.id);
                  }}
                  className="absolute top-4 right-4 p-2 bg-white/90 rounded-sm hover:bg-white transition-colors"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      likedRecipes.has(recipe.id)
                        ? 'text-white fill-white'
                        : 'text-gray-700'
                    }`}
                  />
                </button>

                {/* Recipe Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {recipe.title}
                  </h3>

                  {/* Recipe Meta Info */}
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-1 bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs text-white">
                      <Clock className="w-3 h-3" />
                      <span>{recipe.time}</span>
                    </div>

                    <div className="flex items-center gap-1 bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs text-white">
                      <SlidersVertical className="w-3 h-3" />
                      <span>{recipe.difficulty}</span>
                    </div>

                    <div className="flex items-center gap-1 bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs text-white">
                      <Users className="w-3 h-3" />
                      <span>{recipe.servings}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersAlsoViewed;
