const getTrailer = (array) => {
    for (let video of array){
        if (video.type === "Trailer"){
            return video.key;
        }
    }
}

export default getTrailer;