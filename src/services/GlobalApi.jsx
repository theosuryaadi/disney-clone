import axios from "axios";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "2a1b96a2b6f40e8cdb22fc7156cb9b24";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=2a1b96a2b6f40e8cdb22fc7156cb9b24";

//https://api.themoviedb.org/3/trending/all/day
const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

const getMovieByGenreId = (id) => {
  return axios.get(movieByGenreBaseURL + "&with_genres=" + id);
};

export default {
  IMAGE_BASE_URL,
  getTrendingVideos,
  getMovieByGenreId,
};
