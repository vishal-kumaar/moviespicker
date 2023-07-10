import axios from "axios";

const getPersonDetailsById = async (personId) => {
  try {
    const res1 = await axios.get(
      `https://api.themoviedb.org/3/person/${personId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const res2 = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_people=${personId}&sort_by=vote_count.desc`
    );

    const res3 = await axios.get(
      `https://api.themoviedb.org/3/person/${personId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=tv_credits`
    );

    return {
      data: {
        person: res1.data,
        movies: res2.data,
        series: res3.data.tv_credits.cast,
      },
      success: true,
    };
  } catch (error) {
    return error;
  }
};

export default getPersonDetailsById;
