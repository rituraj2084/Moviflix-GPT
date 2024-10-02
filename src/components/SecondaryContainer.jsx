import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        {movies?.nowPlayingMovie && (
          <MovieList title={'Now Playing'} movies={movies?.nowPlayingMovie} />
        )}
        {movies?.popularVideo && (
          <MovieList title={'Popular Movies'} movies={movies?.popularVideo} />
        )}
        {movies?.upcomingMovie && (
          <MovieList title={'Upcoming Movies'} movies={movies?.upcomingMovie} />
        )}
        {movies?.topRatedVideo && (
          <MovieList
            title={'Top Rated Movies'}
            movies={movies?.topRatedVideo}
          />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
