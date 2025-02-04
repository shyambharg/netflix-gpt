import { useDispatch } from "react-redux";
import { addTrailer } from "./movieSlice";
import { useEffect } from "react";

const useTrailer  = (movieId)=> {

     const dispatch = useDispatch();

    const getVideoFromTrailer = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
          TMDB_OPTIONS
        );
    
        const videos = await data.json();
    
        const video = videos?.results?.filter((v) => {
          if (v.type == "Trailer") {
            return v;
          }
        });
        const trail = video[0];
        dispatch(addTrailer(trail));
      };
    
    
      useEffect(() => {
        getVideoFromTrailer();
      }, []);
    

}

export default useTrailer;