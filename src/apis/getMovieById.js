import axios from "axios";

const getMovieById = async (movieId) => {
    
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=images,credits,videos`);

        return {
            data: res.data,
            success: true
        };
        
    } catch (error) {
        return error;
    }
}

export default getMovieById;