import React, { useState, useEffect } from 'react';
import HouseCard from '../Components/HouseCard';
import { useNavigate } from 'react-router-dom';

const Purchase = () => {
  const [houseData, setHouseData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHouseData = async () => {
      try {
        const response = await fetch('http://localhost:8000/houses');
        if (!response.ok) {
          throw new Error('Failed to fetch house data');
        }
        const data = await response.json();
        setHouseData(data.houses);
      } catch (error) {
        console.error('Error fetching house data:', error);
      }
    };

    fetchHouseData();
  }, []);

  return (
    <div className="container mx-auto pt-28">
      <div className="bg-yellow-400 shadow ml-5 hover:scale-110 duration-300 transition cursor-pointer rounded-full h-10 w-10 flex justify-center items-center">
        <p className="text-3xl text-white font-bold" onClick={() => navigate('/')}>
          ←
        </p>
      </div>
      <h2 className="text-3xl font-bold mb-6 text-center">Available Houses</h2>
      <div className="grid grid-cols-3 sm:grid-cols-1 gap-6">
        {houseData.map((house) => (
          <HouseCard key={house._id} house={house} />
        ))}
      </div>
    </div>
  );
};

export default Purchase;
