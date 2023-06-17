const getVideoByType = (videos, type) => {
    let filterVideo = videos.filter((video) => {
        return video.type === type;
    })

    return filterVideo
}

export default getVideoByType;