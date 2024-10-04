import React from "react";
import GlobalApi from "../services/GlobalApi";

const HrMovieCard = ({ movie }) => {
  return (
    <div className="hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
      <img
        src={GlobalApi.IMAGE_BASE_URL + movie.backdrop_path}
        className="max-w-none w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 "
        alt=""
      />
      <h2 className="mt-2">{movie.title}</h2>
    </div>
  );
};

export default HrMovieCard;
