const getCreators = (creatorsObj) => {
  const creators = creatorsObj.map((creator) => {
    return { id: creator.id, name: creator.name };
  });
  return creators;
};

export default getCreators;
