import axios from "axios";

const getTrendingSeries = async (pageNum) => {
    
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_API_KEY}&page=${pageNum}`);

        return {
            data: res.data,
            success: true
        };
        
    } catch (error) {
        return error;
    }
}

export default getTrendingSeries;