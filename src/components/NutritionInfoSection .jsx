// import React, { useState } from 'react';
// import { Clock, Users, ChevronDown, ChevronUp, SlidersVertical } from 'lucide-react';

import React, { useState } from 'react';
import { Clock, Users, ChevronDown, ChevronUp, SlidersVertical } from 'lucide-react';

const NutritionalInfoSection = () => {
  const [isOpen, setIsOpen] = useState(true);

  const togglePanel = () => setIsOpen(!isOpen);

  const pillColors = [
    { bg: 'bg-red-600', text: 'Protein' },
    { bg: 'bg-yellow-400', text: 'Protein' },
    { bg: 'bg-green-500', text: 'Protein' },
    { bg: 'bg-orange-400', text: 'Protein' },
    { bg: 'bg-black', text: 'Protein' },
    { bg: 'bg-blue-500', text: 'Protein' },
    { bg: 'bg-purple-700', text: 'Protein' },
  ];

  return (
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
          <div className="flex justify-between items-center cursor-pointer" onClick={togglePanel}>
            <h3 className="font-semibold text-gray-800">Nutritional Info</h3>
            {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>

          {isOpen && (
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
  );
};

export default NutritionalInfoSection;
