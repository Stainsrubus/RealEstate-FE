// PropertyDetails.js
import React, { useState, useEffect } from "react";
import AxiosService from "../utils/ApiService";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function PropertyDetails() {
  const [property, setProperty] = useState(null);
  const { id } = useParams();
const navigate=useNavigate()
  useEffect(() => {
    const fetchPropertyById = async () => {
      try {
        const res = await AxiosService.get(`/houses/${id}`);
        if (res.status === 200) {
          setProperty(res.data.house);
        }
      } catch (error) {
        console.error("Failed to fetch property details:", error);
      }
    };
    fetchPropertyById();
  }, [id]);

  if (!property) {
    return <div className="text-center pt-56">Loading...</div>;
  }

  return (
    <div className="container mx-auto pt-32">
        <div className='bg-yellow-400 ml-5 mb-5 shadow  hover:scale-110 duration-300 transition cursor-pointer rounded-full h-10 w-10 flex justify-center items-center'>
<p className='text-3xl text-white font-bold' onClick={()=>navigate('/')}>← </p>
        </div>
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex flex-col shadow-xl justify-center items-center">
          <div className="flex  w-full justify-center">
            <img
              className="h-1/3  rounded-xl shadow-xl mb-10   w-full object-cover "
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
      </div>
    </div>
  );
}

export default PropertyDetails;
