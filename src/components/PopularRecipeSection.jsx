import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart, Clock, Users, SlidersVertical } from 'lucide-react';
import RecipeImage from '../assets/images/Recipe.png';

const PopularRecipesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedRecipes, setLikedRecipes] = useState(new Set());

  const recipes = [
    {
      id: 1,
      title: 'Rice with fried cheese',
      time: '20 min',
      difficulty: 'Easy',
      servings: '4',
      image: RecipeImage,
    },
    {
      id: 2,
      title: 'Pasta Carbonara',
      time: '25 min',
      difficulty: 'Medium',
      servings: '3',
      image: RecipeImage,
    },
    {
      id: 3,
      title: 'Grilled Salmon',
      time: '15 min',
      difficulty: 'Easy',
      servings: '2',
      image: RecipeImage,
    },
    {
      id: 4,
      title: 'Avocado Toast',
      time: '10 min',
      difficulty: 'Easy',
      servings: '1',
      image: RecipeImage,
    },
    {
      id: 5,
      title: 'Spicy Chicken Wrap',
      time: '30 min',
      difficulty: 'Hard',
      servings: '2',
      image: RecipeImage,
    },
  ];

  const toggleLike = (recipeId) => {
    const newLiked = new Set(likedRecipes);
    newLiked.has(recipeId) ? newLiked.delete(recipeId) : newLiked.add(recipeId);
    setLikedRecipes(newLiked);
  };

  // Get number of items per screen width
  const getItemsPerView = () => {
    if (window.innerWidth < 640) return 1;      // mobile
    if (window.innerWidth < 1024) return 2;     // tablet
    return 3;                                   // desktop
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = recipes.length - itemsPerView;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < maxIndex ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : maxIndex
    );
  };

  return (
    <div className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Recipes</h2>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${(100 / itemsPerView) * currentIndex}%)` }}
            >
              {recipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 px-2 relative group"
                >
                  <Link 
                    to={`/recipe/${recipe.id}`}
                    className="block"
                    onClick={(e) => {
                      // Prevent navigation if clicking on the heart icon
                      if (e.target.closest('button')) {
                        e.preventDefault();
                      }
                    }}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      {/* Image */}
                      <div className="relative h-100">
                        <img
                          src={recipe.image}
                          alt={recipe.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/400x300?text=Recipe+Image';
                          }}
                        />

                        {/* Heart Button */}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleLike(recipe.id);
                          }}
                          className="absolute top-4 right-4 p-2 bg-white/40 rounded-sm hover:bg-white/60 transition-colors shadow"
                        >
                          <Heart
                            className={`w-5 h-5 ${
                              likedRecipes.has(recipe.id)
                                ? 'text-white fill-white'
                                : 'text-gray-600'
                            }`}
                          />
                        </button>
                      </div>

                      {/* Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-white text-xl font-semibold mb-3">
                          {recipe.title}
                        </h3>
                        <div className="flex items-center gap-4 text-white/90 text-sm">
                          <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                            <Clock className="w-4 h-4" />
                            <span>{recipe.time}</span>
                          </div>
                          <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                            <SlidersVertical className="w-4 h-4" />
                            <span>{recipe.difficulty}</span>
                          </div>
                          <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                            <Users className="w-4 h-4" />
                            <span>{recipe.servings}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularRecipesSection;
