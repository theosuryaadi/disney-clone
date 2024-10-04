import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";

const MovieList = ({ genreId, index_ }) => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((res) =>
      //   console.log(res.data.results)
      setMovieList(res.data.results)
    );
  };

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute ${
              index_ % 3 == 0 ? "mt-[50px]" : "mt-[150px]"
            }`}
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-6 scrollbar-hide p-4 scroll-smooth"
      >
        {movieList.map((item, index) => (
          <div key={index}>
            {index_ % 3 == 0 ? (
              <HrMovieCard movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </div>
        ))}
      </div>

      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 ${index_ % 3 == 0 ? "mt-[50px]" : "mt-[150px]"}`}
      />
    </div>
  );
};

export default MovieList;
