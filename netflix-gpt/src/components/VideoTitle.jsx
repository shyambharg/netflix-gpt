import React from "react";
import { useSelector } from "react-redux";

const VideoTitle = () => {
  const movie = useSelector((store) => store.movie.mainMovie);

  return (
    <div className="absolute z-40 text-white  bg-gradient-to-r from-black w-screen aspect-video ">
      <h1 className="pt-60 mx-20 text-3xl font-bold">
        {movie?.original_title}
      </h1>
      <p className="mx-20 mt-4 w-96 text-sm">{movie?.overview}</p>
      <div className="flex justify-between">
        <div>
          <button className="ml-20 mt-4 bg-white text-black p-2 text-lg w-28 rounded-lg hover:bg-gray-200">
           
            ▶ Play
          </button>
          <button className="ml-4 mt-4 bg-gray-500 opacity-85 text-white p-2 text-lg w-32 rounded-lg hover:bg-gray-400">
           
            More Info
          </button>
        </div>
        <div>
        <div className="ml-4 mt-6 bg-black opacity-50 text-white p-2 text-lg w-32 h-10  ">
          <div className="  text-white  text-lg w-32 h-10  ">
           TV-MA
          </div>
        </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
