import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constant";
import VideoTitle from "./VideoTitle";

const VideoBackground = () => {
  const trailer = useSelector((store) => store.movie.movieTrailer);
 //hXzcyx9V0xw
 //trailer[0]?.key
  if(trailer == null)
  {return;
  }
  return (
    <div className="   w-screen bg-gradient-to-b from-black">
      <iframe 
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+"hXzcyx9V0xw"+"?&autoplay=1&mute=1&loop=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
       
    </div>
  );
};

export default VideoBackground;
