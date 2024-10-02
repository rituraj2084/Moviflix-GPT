import { BG_IMAGE_URL } from '../utils/constants';
import GptMovieSuggestion from './GptMovieSuggestion';
import GptSearchBar from './GptSearchBar';

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10 w-screen">
        <img src={BG_IMAGE_URL} alt="bg-image" className="w-[100%]" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchPage;
