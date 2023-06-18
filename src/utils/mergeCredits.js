const mergeCredits = (creditsArray, creditsName) => {
  const personObj = {};

  creditsArray.forEach((person) => {
    if (creditsName === "crew") {
      const { id, job } = person;

      if (!personObj[id]) {
        personObj[id] = {
          id,
          ...person,
          job: job,
        };
      } else {
        personObj[id].job += `, ${job}`;
      }
    } else if (creditsName === "cast") {
      const { id, character } = person;

      if (!personObj[id]) {
        personObj[id] = {
          id,
          ...person,
          character: character,
        };
      } else {
        personObj[id].character += `, ${character}`;
      }
    }
  });

  const result = Object.values(personObj).sort((a, b) => a.order - b.order);

  return result;
};

export default mergeCredits;
