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

    clickBook = event => {
        event.preventDefault();
        console.log('clicked a book');
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
                            authors={book.volumeInfo.authors.join(',')}
                            description={book.volumeInfo.description}
                            image={book.volumeInfo.imageLinks.smallThumbnail}
                            clickBook={this.clickBook}
                        /> 
                    ))}
                </Card>
            </Container>
        );
    }
}

export default Search;