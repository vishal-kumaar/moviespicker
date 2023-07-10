const getGenderById = (id) => {
    if (id === 1){
        return "Female";
    }
    else if (id === 2){
        return "Male";
    }
    else if (id === 3){
        return "Transgender";
    }
    else{
        return "Unknown";
    }
}

export default getGenderById;