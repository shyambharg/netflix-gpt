import React from "react";
import { TMDB_IMG } from "../utils/constant";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className=" text-2xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex ">
          {movies?.map((movie) => (
            movie.poster_path &&  <MovieCard key={movie.id} path={movie.poster_path} /> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
