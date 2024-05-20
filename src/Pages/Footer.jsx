import React from "react";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate=useNavigate()
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <hr className="h-1 bg-gray-400 mt-20 " />
      <div className="bg-slate-50 w-full">
        <div className="  py-20 flex justify-center items-center gap-8">
          <div onClick={()=>handleNavigation('/')} className="hover:scale-125 transition duration-500  rounded-full w-20 h-20  bg-yellow-500 shadow-xl items-center justify-center flex">
            <i className="fa-solid fa-house-chimney text-white text-5xl"></i>
          </div>
          <div className="hover:scale-125 transition duration-500 ">
            <h1 onClick={()=>handleNavigation('/')} className="cursor-pointer  text-4xl font-light">
              <span className="font-black">Real</span>Estate
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-yellow-500 w-full ">
        <div className="w-full flex justify-center items-center pt-16 gap-10">
          <i className="cursor-pointer hover:scale-125 transition duration-500 fa-brands fa-facebook-f text-xl"></i>
          <i className="cursor-pointer hover:scale-125 transition duration-500 fa-brands fa-instagram text-xl"></i>
          <i className="cursor-pointer hover:scale-125 transition duration-500 fa-brands fa-twitter text-xl"></i>
          <i className="cursor-pointer hover:scale-125 transition duration-500 fa-brands fa-youtube text-xl"></i>
        </div>
        <div className="w-full pt-10 flex flex-col justify-center items-center">
          <h1>© 2009 Real Estate Co. All rights reserved.</h1>
          <h1 className="text-sm w-5/6 text-center mt-5"> At Real Estate Co., we are dedicated to helping you find your dream home. With a commitment to excellence and customer-centricity, we offer a wide range of properties tailored to your needs. Whether you are buying, selling, or renting, our expert team is here to guide you through every step of the process. Trust us to turn your real estate dreams into reality.</h1>
        </div>
        <div className="flex gap-10 pb-16 justify-center mt-10">
            <p onClick={()=>navigate('/about_us')} className="underline cursor-pointer text-gray-700 hover:text-white">
              About Us
            </p>
            <p  onClick={()=>navigate('/terms&condition')} className="underline cursor-pointer text-gray-700 hover:text-white">
              Terms and Policy
            </p>
            <p onClick={()=>navigate('/contactus')} className="underline cursor-pointer text-gray-700 hover:text-white">
              Contact Us
            </p>
            
          </div>
      </div>
    </div>
  );
}

export default Footer;
