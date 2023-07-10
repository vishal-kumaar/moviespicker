import axios from "axios";

const getFullSeriesCredits = async (seriesId) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/${seriesId}/aggregate_credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );

    return {
      data: res.data,
      success: true,
    };
  } catch (error) {
    return error;
  }
};

export default getFullSeriesCredits;