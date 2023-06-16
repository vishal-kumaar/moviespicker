const progressBarStyle = (vote_average) => {
  let rbga1 = "";
  let rbga2 = "";
  if (vote_average >= 7) {
    rbga1 = "0, 255, 0, 1";
    rbga2 = "0, 255, 0, 0.4";
  } else if (vote_average >= 5 && vote_average < 7) {
    rbga1 = "255, 255, 0, 1";
    rbga2 = "255, 255, 0, 0.5";
  } else {
    rbga1 = "255, 0, 0, 1";
    rbga2 = "255, 0, 0, 0.3";
  }
  const style = `radial-gradient(closest-side, black 79%, transparent 90% 100%), conic-gradient(rgb(${rbga1}) ${Math.round(
    vote_average * 10
  )}%, rgba(${rbga2}) 0)`;

  return style;
};

export default progressBarStyle;
