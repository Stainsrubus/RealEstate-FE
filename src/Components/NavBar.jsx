import React, { useState, useEffect } from 'react';
import { FaHome } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const [navBackground, setNavBackground] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };
  const navigate=useNavigate()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={` px-10 w-full z-50 flex fixed justify-between items-center transition duration-500 ${navBackground ? 'bg-white shadow-2xl border h-16 transition duration-500' : 'bg-transparent shadow-xl h-20'}`}>
      <div onClick={()=>navigate('/')} className='flex items-center gap-3 hover:scale-105 transition duration-1000 cursor-pointer'>
        <div className='rounded-full w-8 h-8 bg-yellow-500 shadow-xl items-center justify-center flex'>
          <FaHome className="text-white" /> 
        </div>
        <div>
          <p className='text-xl font-light'><span className='font-extrabold'>Real</span>Estate</p>
        </div>
      </div>
      <div className='flex gap-5 mr-5 items-center'>
      <Link to="/search" className='text-lg font-bold hover:scale-125 cursor-pointer transition duration-500'>FIND</Link>
        <hr className='h-10 w-0.5 bg-yellow-400' />
        <Link to="/build" className='text-lg font-bold hover:scale-125  cursor-pointer  transition duration-500'>BUILD</Link>
        <hr className='h-10 w-0.5 bg-yellow-400' />
        <Link to="/purchase" className='text-lg font-bold hover:scale-125  cursor-pointer  transition duration-500'>PURCHASE</Link>
      </div>
    </div>
  );
}

export default NavBar;
