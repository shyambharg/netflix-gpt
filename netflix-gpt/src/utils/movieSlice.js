import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : 'movie',
    initialState : {
        nowPlayingMovies : null,
        movieTrailer : null,
        mainMovie : null,
        popularMovie : null,
        topRatedMovie: null,
        upcomingMovie: null
    },
    reducers : {
        addMovie : (state,action)=>{
            state.nowPlayingMovies =  action.payload;
        },
        addTrailer : (state,action)=>{
            state.movieTrailer = action.payload;
        },
        addMainMovie : (state,action)=>{
            state.mainMovie = action.payload;
        },
        addPopularMovie : (state,action)=>{
            state.popularMovie = action.payload;
        },
        addTopRated : (state,action)=>{
            state.topRatedMovie = action.payload;
        },
        addUpcoming : (state,action)=>{
            state.upcomingMovie = action.payload;
        },
        
    }
})

export const {addMovie, addTrailer, addMainMovie,addPopularMovie,addTopRated,addUpcoming} = movieSlice.actions;
export default movieSlice.reducer;