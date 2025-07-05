import React, { useState } from 'react';
import { Heart, Clock, Users, SlidersHorizontal } from 'lucide-react';
import Recipe from '../assets/images/Recipe.png';
import { Link } from 'react-router-dom';
import recipes from '../data/recipes';

const LatestRecipesSection = () => {
  const [likedRecipes, setLikedRecipes] = useState(new Set());

  const toggleLike = (recipeId) => {
    const newLiked = new Set(likedRecipes);
    newLiked.has(recipeId) ? newLiked.delete(recipeId) : newLiked.add(recipeId);
    setLikedRecipes(newLiked);
  };

  return (
    <div className="w-full py-12 bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Latest Recipes</h2>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <Link key={recipe.id} to={`/recipe/${recipe.slug}`} className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-96 block">
              {/* Recipe Image */}
              <div className="absolute inset-0">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x300/f3f4f6/9ca3af?text=Recipe+Image';
                  }}
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                {/* Heart Icon */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(recipe.id);
                  }}
                  className="absolute top-4 right-4 p-2 bg-white/40 rounded-sm hover:bg-white/60 transition-colors"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      likedRecipes.has(recipe.id)
                        ? 'text-white fill-white'
                        : 'text-gray-600'
                    }`}
                  />
                </button>

                {/* Recipe Details */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {recipe.title}
                  </h3>

                  {/* Recipe Meta Info */}
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-1 bg-black/30 px-3 py-1.5 rounded-full text-sm text-white bg-white/20">
                      <Clock className="w-4 h-4" />
                      <span>{recipe.time}</span>
                    </div>

                    <div className="flex items-center gap-1 bg-black/30 px-3 py-1.5 rounded-full text-sm text-white bg-white/20">
                      <SlidersHorizontal className="w-4 h-4" />
                      <span>{recipe.difficulty}</span>
                    </div>

                    <div className="flex items-center gap-1 bg-black/30 px-3 py-1.5 rounded-full text-sm text-white bg-white/20">
                      <Users className="w-4 h-4" />
                      <span>{recipe.servings}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestRecipesSection;