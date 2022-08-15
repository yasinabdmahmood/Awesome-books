const addNewBookToLocalStorage = (t, a) => {
  const book = {
    title: t,
    author: a,
  };
  const arr = JSON.parse(localStorage.getItem('book list'));
  arr.push(book);
  localStorage.setItem('book list', JSON.stringify(arr));
};

export default addNewBookToLocalStorage;