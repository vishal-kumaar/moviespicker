import axios from "axios";

const search = async (query, searchFor, page) => {
  query = query.replace(" ", "-");
  searchFor = searchFor.toLowerCase();
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/${searchFor}?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=${page}`
    );
    
    return {
      [searchFor]: res.data,
      success: true,
    };
  } catch (error) {
    return error;
  }
};

export default search;
