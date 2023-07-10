const stringOfGenres = (genres) => {
    let arrGenre = [];

    for (let genre of genres){
        arrGenre.push(genre.name);
    }

    return arrGenre.join(", ");
}

export default stringOfGenres;