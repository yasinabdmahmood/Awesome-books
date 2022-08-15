import removeBookFromLocalStorage from './removeBookFromLocalStorage.js';

const removeBook = () => {
  const removeButton = document.getElementsByClassName('remove-book');
  removeButton[removeButton.length - 1].onclick = (e) => {
    removeBookFromLocalStorage(e);
    e.target.parentNode.remove();
  };
};

export default removeBook;