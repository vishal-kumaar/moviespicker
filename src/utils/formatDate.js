const formatDate = (date) => {
  let dateObj = new Date(date);
  return `${dateObj.toLocaleString("default", {
    month: "short",
  })} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
};

export default formatDate;