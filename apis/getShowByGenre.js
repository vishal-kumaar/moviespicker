import axios from "axios";

const getShowByGenre = async (showType, genreId, pageNum) => {
  if (showType === "series") {
    showType = "tv";
  }
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/${showType}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=${genreId}&page=${pageNum}&sort_by=popularity.desc`
    );

    return {
      data: res.data,
      success: true,
    };
  } catch (error) {
    return error;
  }
};

export default getShowByGenre;
