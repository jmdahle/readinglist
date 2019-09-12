import axios from 'axios';




export default {
  // search GOOGLE books
  search: function(query) {
    return axios.get('/api/search', { params: { q: query } } );
  },
  // API SERVER requests
  // Gets all books from DB
  getBooks: function() {
    return axios.get('/api/books');
  },
  // Gets the book with the given id from DB
  getBook: function(id) {
    return axios.get('/api/books/' + id);
  },
  // Deletes the book with the given id from DB
  deleteBook: function(id) {
    return axios.delete('/api/books/' + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log('save book',bookData);
    return axios.post('/api/books', bookData);
  }
};
