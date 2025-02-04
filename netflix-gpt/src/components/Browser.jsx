import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constant";
import { addMovie } from "../utils/movieSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Primary from "./Primary";
import Secondary from "./Secondary";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";

const Browser = () => {

useNowPlayingMovies();
usePopularMovies();
useTopRated();
useUpcoming();


  return (
    <div>
        <div>
        <Header />
        <Primary/>
       
        <Secondary/>
        </div>
        
    </div>
  );
};

export default Browser;
