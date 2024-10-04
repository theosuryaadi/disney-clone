import React from "react";
import GenresList from "../constant/GenresList";
import MovieList from "./MovieList";

const GenreMovieList = () => {
  return (
    <div>
      {GenresList.genere.map(
        (item, index) =>
          index <= 4 && (
            <div
              key={index}
              className={`px-8 md:px-16 ${index % 3 == 0 ? "p-0 mt-4" : "p-8"}`}
            >
              <h2 className="text-[20px] text-white font-bold">{item.name}</h2>
              <MovieList genreId={item.id} index_={index} />
            </div>
          )
      )}
    </div>
  );
};

export default GenreMovieList;
