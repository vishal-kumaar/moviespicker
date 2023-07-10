const getDirectorName = (array) => {
    let directors = [];

    for (let crew of array){
        if (crew.job === "Director"){
            directors.push(crew.name);
        }
    }

    return directors.join(", ");
}

export default getDirectorName;