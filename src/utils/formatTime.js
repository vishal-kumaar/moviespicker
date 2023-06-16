const formatTime = (time) => {
  let strTime;
  if (time >= 60) {
    let hour = Math.floor(time / 60);
    strTime = `${hour}h ${time - hour * 60}m`;
  } else {
    strTime = `0h ${time}m`;
  }

  return strTime;
};

export default formatTime;
