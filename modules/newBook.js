 const newBook = (title, author)=> {
    return `
            <h4 class="title">"${title}" by</h2>
            <h4 class="author">${author}</h2>
            <button type="submit" class="remove-book" id="remove-book">Remove</button>
             `;
  }
  export default newBook