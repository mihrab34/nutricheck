// import React from 'react';
// import breakfast from'../assets/images/breakfast.png';
// import Dessert from '../assets/images/Dessert.png';
// import Dinner from '../assets/images/Dinner.png';
// import Meat from '../assets/images/Meat.png';
// import Vegan from '../assets/images/Vegan.png';
// import Lunch from '../assets/images/Lunch.png';

// const FoodCategories = () => {
//   const categories = [
//     { 
//       id: 1, 
//       name: 'Breakfast', 
//       count: 20, 
//       bgColor: 'bg-pink-100',
//       image: breakfast // Placeholder image
//     },
//     { 
//       id: 2, 
//       name: 'Lunch', 
//       count: 9, 
//       bgColor: 'bg-purple-100',
//       image: Dessert// Placeholder image
//     },
//     { 
//       id: 3, 
//       name: 'Dinner', 
//       count: 9, 
//       bgColor: 'bg-blue-100',
//       image: Dinner // Placeholder image
//     },
//     { 
//       id: 4, 
//       name: 'Meat', 
//       count: 9, 
//       bgColor: 'bg-purple-100',
//       image: Meat // Placeholder image
//     },
//     { 
//       id: 5, 
//       name: 'Vegan', 
//       count: 23, 
//       bgColor: 'bg-green-100',
//       image:Vegan // Placeholder image
//     },
//     { 
//       id: 6, 
//       name: 'Dessert', 
//       count: 23, 
//       bgColor: 'bg-yellow-100',
//       image: Lunch // Placeholder image
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {categories.map((category) => (
//           <div 
//             key={category.id}
//             className={`${category.bgColor} rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden`}
//           >
//             <div className="flex flex-col items-center text-center">
//               <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
//                 <img 
//                   src={category.image} 
//                   alt={category.name}
//                   className="w-full h-full object-cover"
//                   onError={(e) => {
//                     // Fallback in case the image fails to load
//                     e.target.onerror = null;
//                     e.target.src = 'https://via.placeholder.com/200';
//                   }}
//                 />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-1">{category.name}</h3>
//               <p className="text-sm text-gray-500">{category.count} items</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FoodCategories;
