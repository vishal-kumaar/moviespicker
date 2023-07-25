const getDirectors = (array) => {
  const directors = []

  for (let crew of array) {
    if (crew.job === "Director") {
      directors.push({id: crew.id, name: crew.name});
    }
  }

  return directors;
};

export default getDirectors;
