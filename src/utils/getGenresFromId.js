const getGenresFromId = (genreId) => {
  const genreObj = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentry",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    53: "Thriller",
    10752: "War",
  };

  let genreArr = genreId.map((genre) => genreObj[genre]);
  return genreArr.join(", ")
};

export default getGenresFromId;
