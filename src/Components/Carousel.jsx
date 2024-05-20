import React,{useEffect,useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
const [recentProjects, setRecentProjects] = useState([]);

useEffect(() => {
  const fetchProjects = async () => {
    try {
      const response = await fetch('http://localhost:8000/houses');
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      const data = await response.json();
      if (Array.isArray(data.houses)) {
        setRecentProjects(data.houses);
      } else {
        console.error('Invalid data format:', data);
      }
    } catch (err) {
      console.error('Error fetching projects:', err);
    }
  };

  fetchProjects();
}, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-5/6 rounded shadow-lg mt-24">
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-500">
        Our Recent Projects
      </h2>
      <Slider {...settings}>
        {recentProjects.map((project, index) => (
          <div key={index} className="p-4 w-full  flex flex-row">
            <div className="w-full">
              <img
                src={project.img}
                alt={`Project ${index + 1}`}
                className="w-full h-[300px] rounded-lg"
              />
            </div>
            <div className="w-full justify-center items-center flex flex-col">
              <h3 className="text-xl font-bold">{project.location}</h3>
              <p className="text-lg">{project.price}</p>
              <p className="text-sm">{project.description}</p>
              <p className="text-sm font-italic">{project.luxuryType}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
