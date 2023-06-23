import axios from "axios";

const getRecommendation = async (id, type) => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`);

        return {
            data: res.data,
            success: true
        };
        
    } catch (error) {
        return error;
    }
}

export default getRecommendation;