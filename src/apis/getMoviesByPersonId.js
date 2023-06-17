import axios from "axios";

const getMoviesByPersonId = async (personId) => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_people=${personId}&sort_by=vote_count.desc`);

        return {
            data: res.data,
            success: true
        };
        
    } catch (error) {
        return error;
    }
}

export default getMoviesByPersonId;