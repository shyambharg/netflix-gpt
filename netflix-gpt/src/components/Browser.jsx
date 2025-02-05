import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Primary from "./Primary";
import Secondary from "./Secondary";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import FeaturedMovie from "./FeaturedMovie";

const Browser = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();

  const showGpt = useSelector((store) => store.gpt.toggleGptSearch);

  return (
    <div>
      <div>
        <Header />
        {showGpt ? (
          <GptSearch />
        ) : (
          <>
            <Primary />
            <Secondary />
          </>
        )}
       
      </div>
    </div>
  );
};

export default Browser;
