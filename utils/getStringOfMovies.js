const getStringOfMovies = (moviesObj) => {
    const arrOfMovies = moviesObj.map((movie) => movie.title ? movie.title : movie.name);

    return arrOfMovies.join(", ");
}

export default getStringOfMovies;