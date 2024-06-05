import React from "react";

const PodCard = ({ title, price, vram, max,vcpu,high }) => {
  return (
    <div className="w-72 p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-200">
      <div className="flex justify-between mb-4">
        <span className="text-lg font-semibold">{title}</span>
        <h3 className="text-lg font-semibold">{price}</h3>
      </div>
      <div className="flex justify-between text-sm">
        <span>{vram}</span>
        <span>{max}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span>{vcpu}</span>
        <span className="text-green-500">{high}</span>
      </div>
    </div>
  );
};

export default PodCard;
