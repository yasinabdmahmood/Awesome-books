const displayTime = () => {
  const today = new Date();

  document.getElementById('date').innerHTML = today;
};

export default displayTime;