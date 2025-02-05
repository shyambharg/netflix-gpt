import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : 'gpt',
    initialState : {
        toggleGptSearch : false,
        movieSuggestions : null,
        gptMovies : null
    },
    reducers : {
        toggleGptSearch : (state)=>{
            state.toggleGptSearch = !state.toggleGptSearch;
        },
        addMovieSuggestions : (state, action) =>{
            state.movieSuggestions = action.payload;
        },
        addGptMovies : (state,action)=>{
            state.gptMovies= action.payload;
        },
        clearGptMovies : (state)=>{
            state.gptMovies = null;
        }
    }
})

export const {toggleGptSearch, addMovieSuggestions, addGptMovies,clearGptMovies} = gptSlice.actions;
export default gptSlice.reducer;