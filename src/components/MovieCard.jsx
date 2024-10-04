import React from "react";
import GlobalApi from "../services/GlobalApi";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <img
        src={GlobalApi.IMAGE_BASE_URL + movie.poster_path}
        className="max-w-none w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
        alt=""
      />
    </div>
  );
};

export default MovieCard;
