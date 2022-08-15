const removeBookFromLocalStorage = (e) => {
  const title = e.target.previousElementSibling.previousElementSibling.innerHTML;
  const arr = JSON.parse(localStorage.getItem('book list'));
  const index = arr.findIndex((object) => `"${object.title}" by` === title);
  arr.splice(index, 1);
  localStorage.setItem('book list', JSON.stringify(arr));
};

export default removeBookFromLocalStorage;