import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import { featuredMovieList } from "../mockData/mockData";
const Secondary = () => {
  const nowPlayingMovies = useSelector(store => store.movie.nowPlayingMovies)
  const popularMovies = useSelector(store => store.movie.popularMovie)
  const topRatedMovies = useSelector(store=> store.movie.topRatedMovie)
  const upcomingMovies = useSelector(store=> store.movie.upcomingMovie)
  
  return (
    <div className=' bg-black '>
     
      <div className=" -mt-64 pl-4  relative z-50">
        <MovieList title = "Now Playing" movies = {nowPlayingMovies}/>
        <MovieList title = "Top Rated" movies = {topRatedMovies}/>
        <MovieList title = "Popular" movies = {popularMovies}/>
        <MovieList title = "Coming Soon" movies = {upcomingMovies}/>
      </div>
        
    </div>
  )
}

export default Secondary;