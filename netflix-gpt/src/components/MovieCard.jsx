import React from 'react'
import { TMDB_IMG } from '../utils/constant'

const MovieCard = ({path}) => {
  return (
    <div className='w-36 pr-4    '>
         <img  alt='movie' src={TMDB_IMG+path}></img>
    </div>
  )
}

export default MovieCard