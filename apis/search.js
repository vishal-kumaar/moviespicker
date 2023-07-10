import axios from "axios";

const search = async (query, searchFor, page) => {
  query = query.replace(" ", "-");
  if (searchFor === "Series") {
    searchFor = "tv";
  }
  searchFor = searchFor.toLowerCase();
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/${searchFor}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${query}&page=${page}`
    );

    if (searchFor === "tv"){
      searchFor = "series"
    }

    return {
      [searchFor]: res.data,
      success: true,
    };
  } catch (error) {
    return error;
  }
};

export default search;
