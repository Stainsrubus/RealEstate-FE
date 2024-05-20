import React from "react";
import AxiosService from "../utils/ApiService";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
function NewProps() {
  const navigate=useNavigate();
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchLastFourHouses = async () => {
      try {
        const res = await AxiosService.get("/lasthouses");
        if (res.status === 200) {
          const houseData = res.data.houses;
          setHouses(houseData);
        }
      } catch (error) {
        console.error("Failed to fetch last four houses:", error);
      }
    };

    fetchLastFourHouses();
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center px-10">
      <div className="flex pt-20 flex-col w-5/6 justify-center items-center">
        <h1 className="text-4xl md:text-2xl font-bold tracking-medium-wide">
          NEW PROPERTIES
        </h1>
        <hr className="w-1/4 h-0.5 my-3 border-black bg-black" />
      </div>
      <div className="w-full mt-10 grid md:grid-cols-2 grid-cols-3 gap-10 h-auto sm:flex sm:flex-col">
        {houses.map((house) => (
          <div key={house._id} className="w-full rounded-lg shadow-lg">
            <div className="flex justify-end">
              <div className="bg-yellow-400 absolute z-50 px-5 py-3 rounded flex justify-center items-center">
                <p>{house.price}</p>
              </div>
              <div className="w-full h-1/2 rounded shadow-lg">
                <img
                  className="w-full h-56 rounded shadow-lg"
                  src={house.img}
                  alt="House"
                />
              </div>
            </div>
  
            <div>
              <h1 className="text-xl font-bold py-8 px-3">{house.location}</h1>
              <p className="text-md text-pretty px-3 py-5">{house.description}</p>
              <button onClick={()=>navigate(`/properties/${house._id}`)} className=" cursor-pointer px-3 py-3 flex justify-center items-center text-center gap-2">
                Read more <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default NewProps;
