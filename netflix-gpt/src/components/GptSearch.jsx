import React, { useRef } from "react";
import GptContainer from "./GptContainer";
import client from "../utils/openai";
import { useDispatch } from "react-redux";
import {
  addGptMovies,
  addMovieSuggestions,
  clearGptMovies,
} from "../utils/gptSlice";

import { TMDB_OPTIONS } from "../utils/constant";

const GptSearch = () => {
  const search = useRef();
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      TMDB_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearch = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      search.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await client.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
    }

    const movieSuggestions =
      gptResults.choices?.[0]?.message?.content.split(",");

    dispatch(addMovieSuggestions(movieSuggestions));

    const promiseArray = movieSuggestions.map((movie) =>
      searchMovieTMDB(movie)
    );

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGptMovies(tmdbResults));
  };

  return (
    <div>
      <div>
        <div className="absolute max-h-full">
          <img
            className=""
            src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/US-en-20250127-TRIFECTA-perspective_286fc4cf-bd17-4ad2-b6e7-6a962bacb568_large.jpg"
          ></img>
        </div>
        <div className="bg-black h-203 w-full absolute opacity-70"></div>
        <div className="absolute w-screen">
          <div className="bg-black border-2 rounded-3xl border-white mx-90 my-40 p-6 w-[50%] flex">
            <input
              ref={search}
              className=" rounded-l-lg bg-white w-[80%] h-12 text-4xl px-4"
              placeholder="What would you like to watch?"
            />
            <button
              className=" hover:cursor-pointer hover:bg-orange-600 rounded-r-lg text-white w-[20%] bg-orange-500"
              onClick={handleGptSearch}
            >
              Search
            </button>
          </div>
          <GptContainer />
        </div>
      </div>
    </div>
  );
};

export default GptSearch;
