import axios from "axios";

const getSeriesByGenre = async (genreId, pageNum) => {
    
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genreId}&page=${pageNum}&sort_by=popularity.desc`);

        return {
            data: res.data,
            success: true
        };
        
    } catch (error) {
        return error;
    }
}

export default getSeriesByGenre;