import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMainMovie, addMovie, addTrailer } from "../utils/movieSlice";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { TMDB_OPTIONS } from "../utils/constant";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((store) => store.user);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      TMDB_OPTIONS
    );

    const json = await data.json();

    const movies = json.results;

    dispatch(addMovie(movies));

    const trailer = movies[19];
    dispatch(addMainMovie(trailer));

    const data2 = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        trailer?.id +
        "/videos?language=en-US",
      TMDB_OPTIONS
    );

    const videos = await data2.json();

    const video = videos?.results?.filter((v) => {
      if (v.type == "Trailer") {
        return v;
      }
    });

    dispatch(addTrailer(video));
  };

  useEffect(() => {
    getUpcomingMovies();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
};

export default useNowPlayingMovies;
