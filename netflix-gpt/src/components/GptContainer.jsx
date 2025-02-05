import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptContainer = () => {

    const { gptMovies, movieSuggestions } = useSelector((store) => store.gpt);
    if (!movieSuggestions) return null;
    if(!gptMovies) return null;
  
    return (
      <div className="p-4 m-4 bg-black text-white bg-opacity-90">
        <div>
          {movieSuggestions.map((movieName, index) => (
            <MovieList
              key={movieName}
              title={movieName}
              movies={gptMovies[index]}
            />
          ))}
        </div>
        
      </div>
    );
}

export default GptContainer;