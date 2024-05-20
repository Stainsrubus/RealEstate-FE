import React from 'react'
import search from '../assets/search.png'
import build from '../assets/crane.png'
import appartment from '../assets/building.png'
import { useNavigate } from 'react-router-dom'
function Services() {
  const navigate=useNavigate()
  return (
    <div className='bg-yellow-500 shadow-md border-yellow-200 rounded h-[64vh] flex justify-center items-start'>
     <div className='flex pt-20 flex-col w-5/6 justify-center items-center '>
<h1 className='text-4xl md:text-2xl font-bold tracking-medium-wide'>OUR MAIN SERVICES</h1>
<hr className="w-1/4 h-0.5 my-3 border-yellow-600 bg-yellow-600" />
<div className='flex gap-5 flex-row w-full items-center justify-center'>
  <div className='w-1/3 h-96 gap-5 items-center justify-center flex flex-col'>
    <div className='bg-black/25 w-24 h-24 rounded-full flex justify-center items-center '>
    <img src={search} alt="search" className='w-14 h-14' />
    </div>
    <div className='flex flex-col justify-center items-center text-center'>
      <h1 className='font-bold my-5 tracking-medium-wide'>
        FIND HOME
      </h1>
      <p className='text-pretty'>
      Let us help you find a home that perfectly matches your dreams and lifestyle
      </p>
      <button onClick={ ()=>navigate('/search')} className='bg-gray-800 px-3 rounded text-white mt-5'>Learn More</button>
    </div>
  </div>
  <div className='w-1/3  h-96 gap-5 items-center justify-center flex flex-col'>
    <div className='bg-black/25 w-24 h-24 rounded-full flex justify-center items-center '>
    <img src={build} alt="search" className='w-14 h-14' />
    </div>
    <div className='flex flex-col justify-center items-center text-center'>
      <h1 className='font-bold my-5 tracking-medium-wide'>
        BUILD HOME
      </h1>
      <p className='text-pretty'>
      Trust us to build a home where your family can create everlasting memories.
      </p>
      <button onClick={ ()=>navigate('/build')} className='bg-gray-800 px-3 rounded text-white mt-5'>Learn More</button>
    </div>
  </div>
  <div className='w-1/3 h-96 gap-5 items-center justify-center flex flex-col'>
    <div className='bg-black/25 w-24 h-24 rounded-full flex justify-center items-center '>
    <img src={appartment} alt="search" className='w-14 h-14' />
    </div>
    <div className='flex flex-col justify-center items-center text-center'>
      <h1 className='font-bold my-5 tracking-medium-wide'>
        BUY PROPERTY
      </h1>
      <p className='text-pretty'>
      Partner with us to buy property that aligns with your investment goals and aspirations.
      </p>
      <button onClick={ ()=>navigate('/purchase')} className='bg-gray-800 px-3 rounded text-white mt-5'>Learn More</button>
    </div>
  </div>
</div>
     </div>
    </div>
  )
}

export default Services
