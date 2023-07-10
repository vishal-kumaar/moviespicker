const queryString = (paramsObj) => {
  if (typeof window !== "undefined") {
    const urlSearchParams = new URLSearchParams(window.location.search);

    for (const [key, value] of Object.entries(paramsObj)) {
      urlSearchParams.set(key, value);
    } 

    const searchQuery = urlSearchParams.toString();
    return "?" + searchQuery;
  }
};

export default queryString;
