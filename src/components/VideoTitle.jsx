/* eslint-disable react/prop-types */
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute text-white bg-gradient-to-r from-black pt-[15%] px-24">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black p-4 px-12 text-xl hover:opacity-80 rounded-lg">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl opacity-90 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
