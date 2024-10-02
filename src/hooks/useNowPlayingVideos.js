import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';

const useNowPlayingVideos = () => {
  const dispatch = useDispatch();
  const nowPlayingMovie = useSelector((store) => store.movies.nowPlayingMovie);
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?page=1',
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json?.results));
  };

  useEffect(() => {
    !nowPlayingMovie && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingVideos;
