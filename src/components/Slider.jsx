import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
const screenWidth = window.innerWidth;

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((res) => {
      console.log(res.data.results);
      setMovieList(res.data.results);
    });
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };

  return (
    <div>
      <div className="hidden md:block ">
        <HiChevronLeft
          className="text-[40px] absolute mx-4 mt-[172px] cursor-pointer"
          onClick={() => sliderLeft(elementRef.current)}
        />
        <HiChevronRight
          className="text-[40px] absolute mx-4 mt-[172px] cursor-pointer right-0"
          onClick={() => sliderRight(elementRef.current)}
        />
      </div>

      <div
        className="flex overflow-x-auto px-16 py-4 w-full scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            key={index}
            src={GlobalApi.IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
