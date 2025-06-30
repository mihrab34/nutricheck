import React from "react";

const ApprovedDieticians = () => {
  return (
    <div className="bg-purple-100 rounded-lg p-6 w-full max-w-4xl mx-auto mt-12 mb-12">
      <div className="flex justify-between text-center">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="flex-1">
            <h2 className="text-7xl font-bold text-gray-800">55</h2>
            <p className="text-lg text-gray-700 mt-1">Approved<br />Dieticians</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApprovedDieticians;
