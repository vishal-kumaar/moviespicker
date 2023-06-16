import axios from "axios";

const getPopularMovies = async (pageNum) => {
    
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${pageNum}`);

        return {
            data: res.data,
            success: true
        };
        
    } catch (error) {
        return error.response.data;
    }
}

export default getPopularMovies;