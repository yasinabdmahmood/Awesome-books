const display = (id1, id2, id3) => {
  document.getElementById(`${id1}-s`).style.display = 'block';
  document.getElementById(`${id2}-s`).style.display = 'none';
  document.getElementById(`${id3}-s`).style.display = 'none';
  document.getElementById(id1).style.color = 'red';
  document.getElementById(id2).style.color = 'black';
  document.getElementById(id3).style.color = 'black';
};

export default display;