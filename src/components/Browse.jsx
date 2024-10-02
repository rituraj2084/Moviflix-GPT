import { useSelector } from 'react-redux';
import useNowPlayingVideos from '../hooks/useNowPlayingVideos';
import usePopularVideos from '../hooks/usePopularVideos';
import useTopRatedVideos from '../hooks/useTopRatedVideo';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearchPage from './GptSearchPage';

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingVideos();
  usePopularVideos();
  useTopRatedVideos();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
