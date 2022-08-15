import loadBooks from './modules/loadBooks.js';
import addBook from './modules/addBook.js';
import display from './modules/display.js';
import displayTime from './modules/displayTime.js';

window.onload = loadBooks();
document.getElementById('add-button').onclick = addBook;

document.getElementById('list').onclick = () => {
  display('list', 'add-new', 'contact');
};
document.getElementById('add-new').onclick = () => {
  display('add-new', 'list', 'contact');
};
document.getElementById('contact').onclick = () => {
  display('contact', 'add-new', 'list');
};

setInterval(displayTime, 1000);
