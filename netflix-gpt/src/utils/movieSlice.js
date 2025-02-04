import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : 'movie',
    initialState : {
        nowPlayingMovies : null,
        movieTrailer : null,
        mainMovie : null
    },
    reducers : {
        addMovie : (state,action)=>{
            state.nowPlayingMovies =  action.payload;
        },
        removeMovie : (state,action)=>{
            return  null;
        },
        addTrailer : (state,action)=>{
            state.movieTrailer = action.payload;
        },
        removeTrailer : ()=>{
            return null;
        },
        addMainMovie : (state,action)=>{
            state.mainMovie = action.payload;
        }
    }
})

export const {addMovie,removeMovie, addTrailer, removeTrailer, addMainMovie} = movieSlice.actions;
export default movieSlice.reducer;