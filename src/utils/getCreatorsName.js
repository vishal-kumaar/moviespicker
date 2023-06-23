const getCreatorsName = (creatorsObj) => {
    const creators = creatorsObj.map((creator) => creator.name);
    return creators.join(", ");
}

export default getCreatorsName;