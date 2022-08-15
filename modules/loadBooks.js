import newBook from './newBook.js';
import removeBook from './removeBook.js';

const loadBooks = () => {
  if (localStorage.getItem('book list') === null) {
    localStorage.setItem('book list', JSON.stringify([]));
  } else {
    const bookLists = JSON.parse(localStorage.getItem('book list'));
    for (let i = 0; i < bookLists.length; i += 1) {
      const div = document.createElement('div');
      div.setAttribute('class', 'book-wrapper');
      div.innerHTML = newBook(bookLists[i].title, bookLists[i].author);
      document.getElementById('book-list').appendChild(div);
      removeBook();
    }
  }
};

export default loadBooks;