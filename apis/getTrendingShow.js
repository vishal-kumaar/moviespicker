import axios from "axios";

const getTrendingShow = async (showType, pageNum) => {
  if (showType === "series") {
    showType = "tv";
  }
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/${showType}/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${pageNum}`
    );

    return {
      data: res.data,
      success: true,
    };
  } catch (error) {
    return error;
  }
};

export default getTrendingShow;
