import newBook from "./newBook.js";
import removeBook from "./removeBook.js";
import addNewBookToLocalStorage from "./addNewBookToLocalStorage.js";

const addBook=()=> {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    // check if title or author filed is empty
    if (title === '' || author === '') return;
    const div = document.createElement('div');
    div.innerHTML = newBook(title, author);
    div.setAttribute('class', 'book-wrapper');
    document.getElementById('book-list').appendChild(div);
    /// //remove  text from the form fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    // Add remove functionality to new added book
    removeBook();
    // important-->make sure to remove the text from both input fields
   addNewBookToLocalStorage(title, author);
  }

export default addBook;