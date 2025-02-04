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
const Browser = () => {

useNowPlayingMovies();


  return (
    <div>
      <div className="">
        <Header />
        <Primary/>
        <Secondary/>
      </div>
      <h1 className="text-center font-bold font-serif text-5xl">Welcome </h1>
    </div>
  );
};

export default Browser;
