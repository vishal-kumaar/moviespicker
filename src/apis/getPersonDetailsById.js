import axios from "axios";

const getPersonById = async (personId) => {
  try {
    const res1 = await axios.get(
      `https://api.themoviedb.org/3/person/${personId}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const res2 = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_people=${personId}&sort_by=vote_count.desc`
    );

    return {
      data: {
        person: res1.data,
        movies: res2.data,
      },
      success: true,
    };
  } catch (error) {
    return error;
  }
};

export default getPersonById;
