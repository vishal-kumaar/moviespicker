function calculateAge(birthdate) {
  const today = new Date();
  const birthDate = new Date(birthdate);

  const yearsDiff = today.getFullYear() - birthDate.getFullYear();
  const monthsDiff = today.getMonth() - birthDate.getMonth();

  if (yearsDiff > 0) {
    return `(${yearsDiff} years old)`;
  } else if (monthsDiff > 0) {
    return `(${monthsDiff} months old)`;
  } else {
    return ""
  }
}

export default calculateAge;
