import React from 'react';
import breakfast from '../assets/images/breakfast.png';
import lunch from '../assets/images/Lunch.png';
import meat from '../assets/images/Meat.png';
import vegan from '../assets/images/Vegan.png';
import dessert from '../assets/images/Dessert.png';
import dinner from '../assets/images/Dinner.png';

const FavoriteFoodSection = () => {
  const favoriteFoods = [
    {
      id: 1,
      name: 'Breakfast',
      items: '20 items',
      bgColor: 'bg-orange-100',
      image: breakfast// Update with your image path
    },
    {
      id: 2,
      name: 'Lunch',
      items: '9 items',
      bgColor: 'bg-purple-100',
      image: lunch // Update with your image path
    },
    {
      id: 3,
      name: 'Dinner',
      items: '9 items',
      bgColor: 'bg-blue-100',
      image: dinner // Update with your image path
    },
    {
      id: 4,
      name: 'Meat',
      items: '9 items',
      bgColor: 'bg-purple-200',
      image: meat// Update with your image path
    },
    {
      id: 5,
      name: 'Vegan',
      items: '23 items',
      bgColor: 'bg-green-100',
      image: vegan // Update with your image path
    },
    {
      id: 6,
      name: 'Dessert',
      items: '23 items',
      bgColor: 'bg-yellow-100',
      image: dessert // Update with your image path
    }
  ];

  return (
    <div className="relative -mt-28 z-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
          {favoriteFoods.map((food) => (
            <div 
              key={food.id} 
              className={`rounded-2xl p-8 ${food.bgColor} shadow-sm hover:shadow-md transition-all duration-200`}
            >
              <div className="w-full aspect-square rounded-2xl overflow-hidden flex items-center justify-center">
                <img 
                  src={food.image} 
                  alt={food.name}
                  className="w-26 h-26 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/100?text=${food.name.charAt(0)}`;
                  }}
                />
              </div>
              <h3 className="font-semibold text-gray-800 text-center text-sm sm:text-base">
                {food.name}
              </h3>
              <p className="text-xs text-gray-600 text-center">
                {food.items}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteFoodSection;