import React from "react";
import { featuredMovieList } from "../mockData/mockData";

const FeaturedMovie = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 2000;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 2000;
  };

  return (
    <div className="ml-20 mr-20 my-15 flex items-center ">
      <div
        className="text-5xl text-white hover:text-gray-300 hover:cursor-pointer "
        onClick={slideLeft}
      >
        ◀
      </div>
      <div
        id="slider"
        className="w-full mx-14 h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
      >
        {featuredMovieList.map((movie, index) => {
          return (
            <div className="relative inline-block hover:cursor-pointer hover:scale-105 ease-in-out duration-100">
                 <span className="absolute mt-24 inline-block text-[110px] font-serif z-1 text-white stroke-blue-700 stroke-3
                 ">{index+1}</span>
                <img
              key={index}
              className=" rounded-3xl p-4 h-75 w-55 inline-block"
              src={movie}
            ></img>
           
            </div>


          );
        })}
      </div>
      
      <div
        className="text-5xl text-white hover:text-gray-300 hover:cursor-pointer "
        onClick={slideRight}
      >
        ▶
      </div>
    </div>
  );
};

export default FeaturedMovie;
