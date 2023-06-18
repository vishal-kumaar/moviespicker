import axios from "axios";

const getMoviesByFilters = async (
  genres,
  releaseFrom,
  releaseTo,
  ratting,
  runtime,
  sortBy,
  sortingOrder,
  country,
  adult,
  page
) => {
  genres = genres ? `&with_genres=${genres}` : "";
  releaseFrom = releaseFrom ? `&release_date.gte=${releaseFrom}` : "";
  releaseTo = releaseTo ? `&release_date.gte=${releaseTo}` : "";
  ratting = ratting ? `&vote_average=${ratting}` : "";
  runtime = runtime ? `&with_runtime.lte=${runtime}` : "";
  sortBy = `&sort_by=${sortBy}.${sortingOrder}`;
  country = country ? `&with_origin_country=${country.split("-")[1]}&with_text_query=${country.split("-")[0]}` : "";
  adult = `&include_adult=${adult}`;
  page = `&page=${page}`;

  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}${genres}${releaseFrom}${releaseTo}${ratting}${runtime}${sortBy}${country}${adult}${page}`
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
