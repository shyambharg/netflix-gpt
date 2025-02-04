import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMainMovie, addMovie, addPopularMovie, addTopRated, addTrailer } from "../utils/movieSlice";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { TMDB_OPTIONS } from "../utils/constant";

const useTopRated = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      TMDB_OPTIONS
    );

    const json = await data.json();

    const movies = json.results;

    dispatch(addTopRated(movies));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRated;
