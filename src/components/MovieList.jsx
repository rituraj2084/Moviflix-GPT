import MovieCard from './MovieCard';

/* eslint-disable react/prop-types */
const MovieList = ({ title, movies }) => {
  //   console.log('Movies: ', movies);
  //   console.log('title: ', title);
  return (
    <div className="px-6 ">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie.poster_path} />
          ))}
          {/* <MovieCard posterPath={movies[0].poster_path} />x */}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
