import { useRef } from 'react';
import { API_OPTIONS, GEMINI_API_KEY } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addGptMovieResult } from '../utils/gptSlice';
import { GoogleGenerativeAI } from '@google/generative-ai';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query=' +
        movieName +
        '&language=en-US&page=1',
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptButtonSearch = async () => {
    const prompt =
      'Act like a movie recommendation system and suggest some movies for the query: ' +
      searchText.current.value +
      '. Only give me names of 5 movies, comma separated like the example given ahead. Example: 3 Idiots, Gadar, Sholay, Don, Koi Mil Gya';

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    console.log('Gemini result text: ', text);

    // if (!gptResult?.candidates?.content) {
    //   // TODO: Error Handling
    // }
    const gptMovies = text.split(',');
    console.log('Movie Results: ', gptMovies);
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    console.log('Promise array: ', promiseArray);
    const tmdbResult = await Promise.all(promiseArray);
    console.log('TMDB results: ', tmdbResult);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResult })
    );
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder="What woul you like to watch today?"
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 rounded-lg text-white"
          onClick={handleGptButtonSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
