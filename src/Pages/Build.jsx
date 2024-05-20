import React, { useState } from 'react';
import Carousel from '../Components/Carousel';
import { useNavigate } from 'react-router-dom';
function Build() {
    const navigate=useNavigate()
  const [formData, setFormData] = useState({
    plotDimensions: '',
    plotLocation: '',
    houseType: '',
    houseModelImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, houseModelImage: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return <>
  
  <div className='w-full flex flex-col justify-center items-center '>
  <div className='flex w-full items-start px-2 -mt-80 absolute '>
        <div className='bg-yellow-400 shadow  hover:scale-110 duration-300 transition cursor-pointer rounded-full h-10 w-10 flex justify-center items-center'>
<p className='text-3xl text-white font-bold' onClick={()=>navigate('/')}>← </p>
        </div>
        </div>
    <Carousel />
  </div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Enquire About Building a Home</h1>
      <form className="bg-white p-6 rounded shadow-md w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Dimensions of the Plot:</label>
          <input
            type="text"
            name="plotDimensions"
            value={formData.plotDimensions}
            onChange={handleChange}
            className="mt-1 p-2 border w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Location of the Plot:</label>
          <input
            type="text"
            name="plotLocation"
            value={formData.plotLocation}
            onChange={handleChange}
            className="mt-1 p-2 border w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Type of House:</label>
          <input
            type="text"
            name="houseType"
            value={formData.houseType}
            onChange={handleChange}
            className="mt-1 p-2 border w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Upload House Model Image:</label>
          <input
            type="file"
            name="houseModelImage"
            onChange={handleFileChange}
            className="mt-1 p-2 border w-full rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">Submit</button>
      </form>
    </div>
  </>;
}

export default Build;