/* eslint-disable react/prop-types */
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 pr-4">
      <img src={IMG_CDN_URL + posterPath} alt="poster" />
    </div>
  );
};

export default MovieCard;
