import axios from "axios";

const getRecommendation = async (id, type) => {
  if (type === "series") {
    type = "tv";
  }
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );

    return {
      data: res.data,
      success: true,
    };
  } catch (error) {
    return error;
  }
};

export default getRecommendation;
