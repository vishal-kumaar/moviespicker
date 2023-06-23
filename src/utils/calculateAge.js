function calculateAge(birthdate, deathdate) {
  const today = new Date();
  const birthDate = new Date(birthdate);

  const deathDate = new Date(deathdate);

  const yearsDiff = today.getFullYear() - birthDate.getFullYear();
  const monthsDiff = today.getMonth() - birthDate.getMonth();

  if (yearsDiff > 0) {
    if (deathDate && deathDate < today) {
      const deathYearsDiff = deathDate.getFullYear() - birthDate.getFullYear();
      return `(${deathYearsDiff} years old)`;
    } else {
      return `(${yearsDiff} years old)`;
    }
  } else if (monthsDiff > 0) {
    return `(${monthsDiff} months old)`;
  } else {
    return "";
  }
}

export default calculateAge;
