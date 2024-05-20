import React from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from "../assets/star.png";

function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    ltr: true, 
  };

  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <div className="flex pt-20 flex-col w-5/6 justify-center items-center ">
        <h1 className="text-4xl md:text-2xl font-bold tracking-medium-wide">
          OUR HAPPY CLIENTS
        </h1>
        <hr className="w-1/4 h-0.5 my-3 border-black bg-black" />
      </div>
      <div className="w-full mt-10 px-10 items-center overflow">
        <Slider {...settings}>
          <div className="w-full shadow-lg h-68 p-5">
            <div className="flex flex-row justify-center gap-10 py-5 items-center">
              <div className="bg-gray-300 rounded-full ">
                <img className="rounded-full h-20 w-20" src="https://static1.squarespace.com/static/656f4e4dababbd7c042c4946/657236350931ee4538eea52c/65baf15103d8ad2826032a8a/1707422532886/how-to-stop-being-a-people-pleaser-1_1.jpg?format=1500w" alt="image" />
              </div>
              <div className="w-1/2">
                <h1 className="">Your Name</h1>
                <p className="">Address</p>
                <div className="flex gap-2">
                  <img className="my-3 w-5 h-5" src={star} alt="star" />
                  <img className="my-3 w-5 h-5" src={star} alt="star" />
                  <img className="my-3 w-5 h-5" src={star} alt="star" />
                  <img className="my-3 w-5 h-5" src={star} alt="star" />
                  <img className="my-3 w-5 h-5" src={star} alt="star" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-pretty px-5 text-sm">
                We recently moved into this charming 3-bedroom, 2-bathroom house and couldn't be happier. The spacious backyard is perfect for our kids to play in, and the modern kitchen makes meal prep a joy. We love the cozy fireplace, which adds a warm touch to our evenings.
              </p>
            </div>
          </div>

          <div className="w-full shadow-lg h-68 p-5">
            <div className="flex flex-row justify-center gap-10 py-5 items-center">
              <div className="bg-gray-300 rounded-full ">
                <img className="rounded-full h-20 w-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDrcNn023N-say4d3hgPSmNZQc1y-YwL0sVFg06LQR7tAxYQNSBvBLxG7DyX0nuckdeaM&usqp=CAU" alt="image" />
              </div>
              <div className="w-1/2">
                <h1 className="">Your Name</h1>
                <p className="">Address</p>
                <div className="flex gap-2">
                  <img className="my-3 w-5 h-5" src={star} alt="star" />
                  <img className="my-3 w-5 h-5" src={star} alt="star" />
                  <img className="my-3 w-5 h-5" src={star} alt="star" />
                  <img className="my-3 w-5 h-5" src={star} alt="star" />
                  <img className="my-3 w-5 h-5" src={star} alt="star" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-pretty px-5 text-sm">
                We recently moved into this charming 3-bedroom, 2-bathroom house and couldn't be happier. The spacious backyard is perfect for our kids to play in, and the modern kitchen makes meal prep a joy. We love the cozy fireplace, which adds a warm touch to our evenings.
              </p>
            </div>
          </div>

          <div className="w-full shadow-lg h-68 p-5">
            <div className="flex flex-row justify-center gap-10 py-5 items-center">
              <div className="bg-gray-300 rounded-full ">
                <img className=" rounded-full h-20 w-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHUvXcaQnFihBTQocuRF4NtOug1_7tMcNrN_Phxs5CyQ&s" alt="image" />
              </div>
              <div className="w-1/2">
                <h1 className="">Your Name</h1>
                <p className="">Address</p>
                <div className="flex gap-2">
                  <img className="my-3 w-5 h-5" src={star} alt="star" />
                  <img className="my-3 w-5 h-5" src={star} alt="star" />
                  <img className="my-3 w-5 h-5" src={star} alt="star" />
                  <img className="my-3 w-5 h-5" src={star} alt="star" />
                  <img className="my-3 w-5 h-5" src={star} alt="star" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-pretty px-5 text-sm">
                We recently moved into this charming 3-bedroom, 2-bathroom house and couldn't be happier. The spacious backyard is perfect for our kids to play in, and the modern kitchen makes meal prep a joy. We love the cozy fireplace, which adds a warm touch to our evenings.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Reviews;