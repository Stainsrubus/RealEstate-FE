import React from 'react';

const HouseCard = ({ house }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4">
      <img src={house.img} alt={`House at ${house.location}`} className="w-full h-48 object-cover mb-4 rounded-t-lg" />
      <h3 className="text-xl font-bold mb-2">{house.location}</h3>
      <p className="text-lg mb-2">{house.price}</p>
      <p className="text-sm mb-2">{house.description}</p>
      <p className="text-sm font-italic mb-4">{house.luxuryType}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
        Purchase
      </button>
    </div>
  );
};

export default HouseCard;
