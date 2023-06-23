import axios from "axios";

const getSeriesById = async (seriesId) => {
    
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/tv/${seriesId}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=images,credits,videos`);

        return {
            data: res.data,
            success: true
        };
        
    } catch (error) {
        return error;
    }
}

export default getSeriesById;