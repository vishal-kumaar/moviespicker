import axios from "axios";

const getMoviesByFilters = async (
  genres,
  releaseFrom,
  releaseTo,
  ratting,
  runtime,
  sortBy,
  sortingOrder,
  language,
  adult
) => {
  genres = genres ? `&with_genres=${genres}` : "";
  releaseFrom = releaseFrom ? `&release_date.gte=${releaseFrom}` : "";
  releaseTo = releaseTo ? `&release_date.gte=${releaseTo}` : "";
  ratting = ratting ? `&vote_average=${ratting}` : "";
  runtime = runtime ? `&with_runtime.lte=${runtime}` : "";
  sortBy = `&sort_by=${sortBy}.${sortingOrder}`;
  language = language ? `&language=${language}` : "";
  adult = `&include_adult=${adult}`;

  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?${process.env.REACT_APP_API_KEY}${genres}${releaseFrom}${releaseTo}${ratting}${runtime}${sortBy}${language}${adult}`
    );

    return {
      data: res.data,
      success: true,
    };
  } catch (error) {
    return error;
  }
};

export default getMoviesByFilters;
