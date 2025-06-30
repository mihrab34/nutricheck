import React from 'react';

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

const IngredientsAndInstructions = () => {
  return (
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
  );
};

export default IngredientsAndInstructions;