import React from "react";

function About() {
  return (
    <div className="flex justify-center my-16 items-center">
      <div className="flex flex-col  justify-center items-center">
        <p className="text-2xl font-semibold py-10">WE ARE THE BEST</p>
        <div className="flex flex-col justify-center items-center">
          <p className="md:text-5xl text-center sm:text-2xl text-6xl font-black tracking-medium-wide  text-yellow-400 font-righteous">
          
            REAL ESTATE AGENCY
          </p>
          <hr className="w-1/2 h-0.5 my-3 border-black bg-black" />
          <div className="mt-10  flex flex-col justify-center items-center text-balance text-center w-5/6">
            <p>
              Welcome to our RealEstate company, where your real estate dreams
              become reality. Established in 2009, our company has built a
              reputation for excellence, integrity, and personalized service in
              the real estate market. Whether you're buying your first home,
              selling a property, or investing in commercial real estate, our
              team of experienced professionals is here to guide you every step
              of the way.
            </p>
            <div className="hover:scale-110  transition duration-500  rounded-xl max-w-96 shadow-xl border bg-slate-50 min-h-48 mt-10">
              <h1 className="text-3xl  tracking-medium-wide font-bold text-yellow-400 mt-2">
                Our Mission
              </h1>

              <p className="text-sm mt-1 text-center leading-loose  ">
                <span className="text-2xl font-bold text-yellow-400">"</span>
                Our mission is to provide exceptional real estate services with
                integrity, professionalism, and personalized attention, helping
                our clients achieve their property goals seamlessly and
                confidently.
                <span className="text-2xl font-bold text-yellow-400">"</span>
              </p>
            </div>
            <div className=" mt-14 flex md:flex-col  w-full gap-3 justify-center items-center ">
              <div className="hover:scale-90  transition duration-500 bg-slate-50 h-44 w-1/3 md:w-3/4 rounded-lg shadow-md border-yellow-400 shadow-yellow-300 hover:shadow-yellow-300 hover:shadow-xl" >
              <h1 className="font-black tracking-medium-wide shadow  text-white text-xl bg-yellow-400 rounded">
                  INTEGRITY
                </h1>
                <div className="h-5/6  flex   justify-center items-center ">
                <p className="py-3 text-pretty "><span className="text-yellow-400 px-1 text-xl font-bold">
                  "
                </span>
                  We uphold the highest standards of honesty and transparency in
                  all our dealings. <span className="text-yellow-400 px-1 text-xl font-bold">
                  "
                </span>
                </p>
                  </div>
                
              </div>
              <div className="hover:scale-90  transition duration-500 bg-slate-50 h-44 w-1/3 md:w-3/4 rounded-lg shadow-md border-yellow-400 shadow-yellow-300 hover:shadow-yellow-300 hover:shadow-xl" >
              <h1 className="font-black tracking-medium-wide shadow  text-white text-xl bg-yellow-400 rounded">
                  CLIENT-CENTRIC
                </h1>
                <div className="h-5/6  flex  justify-center items-center ">
                <p className="py-3 text-pretty  "><span className="text-yellow-400 px-1 text-xl font-bold">
                  "
                </span>
                Our clients are at the heart of everything we do. We are committed to delivering exceptional service and building long-lasting relationships.
                <span className="text-yellow-400 px-1 text-xl font-bold">
                  "
                </span></p>
                  </div>
                
              </div>
              <div className="hover:scale-90  transition duration-500 bg-slate-50 h-44 w-1/3 md:w-3/4 rounded-lg shadow-md border-yellow-400 shadow-yellow-300 hover:shadow-yellow-300 hover:shadow-xl" >
              <h1 className="font-black tracking-medium-wide shadow  text-white text-xl bg-yellow-400 rounded">
                  EXCELLENCE
                </h1>
                <div className="h-5/6  flex justify-center items-center ">
                <p className="py-3 text-pretty  "><span className="text-yellow-400 px-1 text-xl font-bold">
                  "
                </span>
                We continuously strive for excellence, ensuring our clients receive top-quality service and the best possible outcomes.
                <span className="text-yellow-400 px-1 text-xl font-bold">
                  "
                </span></p>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
