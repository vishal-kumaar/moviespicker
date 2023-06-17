const getTrailer = (array) => {
    for (let video of array){
        if (video.type === "Trailer"){
            return video.key;
        }
    }

    return null;
}

export default getTrailer;