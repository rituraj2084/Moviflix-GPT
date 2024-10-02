import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedVideo } from '../utils/movieSlice';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';

const useTopRatedVideos = () => {
  const dispatch = useDispatch();
  const topRatedVideo = useSelector((store) => store.movies.topRatedVideo);
  const getTopRatedMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?page=1',
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedVideo(json?.results));
  };

  useEffect(() => {
    !topRatedVideo && getTopRatedMovies();
  }, []);
};

export default useTopRatedVideos;
