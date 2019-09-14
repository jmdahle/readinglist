import React from 'react';

// import API call to Google Books
import API from '../utils/API';

//import React components
import Container from '../components/Container';
import SearchForm from '../components/SearchForm';
import Card from '../components/Card';
import Book from '../components/Book';

class Search extends React.Component {
    state = {
        searchText: '',
        searchResults: []
    }

    handleOnChange = event => {
        this.setState( {
            [event.target.name]: event.target.value
        } );  
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.searchText);
    }

    searchBooks = query => {
        console.log(`searching... ${query}`);
        API.search(query)
            .then( jsonData => { 
                console.log(jsonData);
                this.setState({
                    searchResults: jsonData.data.items,
                    searchText: ''
                }) 
            } )
            .catch( error => {
                console.log (error);
            });
    }

    openBookPreview = previewLink => {
        console.log(`open preview at ${previewLink}`);
        window.open(previewLink, 'bookpreview');
    }

    saveBook = bookid => {
        console.log(`save book with id ${bookid}`);
        let selectedBook = this.state.searchResults.filter( arrayitem => arrayitem.id === bookid );
        let bookToSave = {
            foreignid: selectedBook[0].id,
            title: selectedBook[0].volumeInfo.title,
            authors: selectedBook[0].volumeInfo.hasOwnProperty('authors') ? selectedBook[0].volumeInfo.authors.join(', ') : 'empty',
            description: selectedBook[0].volumeInfo.description || 'no description available',
            image: selectedBook[0].volumeInfo.hasOwnProperty('imageLinks') ? selectedBook[0].volumeInfo.imageLinks.smallThumbnail : 'images/image-not-available.png',
            previewLink: selectedBook[0].volumeInfo.previewLink
        }
        // post request to api/books/
        API.saveBook(bookToSave);
    }

    render() {
        return (
            <Container>
                <h1>Search Google Books</h1>
                <Card heading='Book Search'>
                    <SearchForm 
                        value={this.state.searchText}
                        handleOnChange={this.handleOnChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                </Card>
                <Card heading='Search Results'>
                    {this.state.searchResults.map( book => (
                        <Book 
                            key={book.id}
                            id={book.id}
                            title={book.volumeInfo.title}
                            authors={ book.volumeInfo.hasOwnProperty('authors') ? book.volumeInfo.authors.join(', ') : 'empty'}
                            description={book.volumeInfo.description || 'no description available'}
                            image={ book.volumeInfo.hasOwnProperty('imageLinks') ? book.volumeInfo.imageLinks.smallThumbnail : 'images/image-not-available.png'}
                            btn1Click={ () => this.openBookPreview(book.volumeInfo.previewLink) }
                            btn1Text='PREVIEW BOOK'
                            btn2Click={ () => this.saveBook(book.id) }
                            btn2Text='SAVE TO READING LIST'
                        /> 
                    ))}
                </Card>
            </Container>
        );
    }
}

export default Search;