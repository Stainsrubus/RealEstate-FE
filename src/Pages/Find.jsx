import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AxiosService from '../utils/ApiService';

function Find() {
  const [location, setLocation] = useState('');
  const [luxuryType, setLuxuryType] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const locationParam = params.get('location');
    if (locationParam) {
      setLocation(locationParam);
    }
  }, [search]);

  useEffect(() => {
    const fetchHouseData = async () => {
      try {
        const response = await AxiosService.get('/houses');
        if (!response.ok) {
          throw new Error('Failed to fetch house data');
        }
        const data = await response.json();
        const locations = data.houses.map((house) => house.location);
        setSuggestions(locations);
      } catch (error) {
        console.error('Error fetching house data:', error);
      }
    };

    fetchHouseData();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await AxiosService.get(`/findByLocation?location=${location}`);
      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }
      const data = await response.json();
      console.log(data);
      setSearchResults(data.houses);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
  
  

  const handleSuggestionClick = (value) => {
    setLocation(value);
    setSuggestions([]);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setLocation(value);
    const filteredSuggestions = suggestions.filter((location) =>
      location.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  return (
    <div className="container px-10 pt-28">
       <div className='flex w-full items-start absolute '>
        <div className='bg-yellow-400 shadow  hover:scale-110 duration-300 transition cursor-pointer rounded-full h-10 w-10 flex justify-center items-center'>
<p className='text-3xl text-white font-bold' onClick={()=>navigate('/')}>← </p>
        </div>
        </div>
      <h1 className="text-3xl font-bold mb-5 mt-20 ">Search Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            value={location}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          />
          {suggestions.length > 0 && (
            <div className="suggestions">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="suggestion"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Luxury Type</label>
          <select
            value={luxuryType}
            onChange={(e) => setLuxuryType(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          >
            <option value="">Select Type</option>
            <option value="basic">Basic</option>
            <option value="luxury">Luxury</option>
            <option value="premium">Premium</option>
          </select>
        </div>
      </div>
      <button
        onClick={handleSearch}
        className="mt-5 px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700"
      >
        Search
      </button>


    <div className="max-w-3xl mt-20 mx-auto bg-white shadow-md rounded-lg overflow-hidden">
  {searchResults.map((property) => (
    <div key={property.id} className="flex flex-col shadow-xl justify-center items-center">
      <div className="flex w-full justify-center">
        <img
          className="h-1/3 rounded-xl shadow-xl mb-10 w-full object-cover"
          src={property.img}
          alt="House"
        />
      </div>
      <div className="p-8 text-center">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {property.luxuryType}
        </div>
        <h2 className="text-gray-800 text-3xl font-semibold">{property.location}</h2>
        <p className="mt-2 text-gray-600">{property.description}</p>
        <div className="mt-4">
          <span className="text-gray-700">Price:</span>{" "}
          <span className="text-gray-900 font-semibold">${property.price}</span>
        </div>
        <div className="mt-2">
          <span className="text-gray-700">Bedrooms:</span>{" "}
          <span className="text-gray-900 font-semibold">{property.bedrooms}</span>
        </div>
        <div className="mt-2">
          <span className="text-gray-700">Bathrooms:</span>{" "}
          <span className="text-gray-900 font-semibold">{property.bathrooms}</span>
        </div>
        <div className="mt-2">
          <span className="text-gray-700">Area:</span>{" "}
          <span className="text-gray-900 font-semibold">{property.area} sqft</span>
        </div>
        <div className="mt-2">
          <span className="text-gray-700">Year Built:</span>{" "}
          <span className="text-gray-900 font-semibold">{property.yearBuilt}</span>
        </div>
      </div>
    </div>
  ))}
</div>


    </div>
  );
}

export default Find;
