import axios from "axios";

const getShowById = async (showType, movieId) => {
  if (showType === "series") {
    showType = "tv";
  }

  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/${showType}/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=images,credits,videos`
    );

    return {
      data: res.data,
      success: true,
    };
  } catch (error) {
    return error;
  }
};

export default getShowById;
