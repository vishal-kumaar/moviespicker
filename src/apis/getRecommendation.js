import axios from "axios";

const getRecommendation = async (movieId) => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`);

        return {
            data: res.data,
            success: true
        };
        
    } catch (error) {
        return error;
    }
}

export default getRecommendation;