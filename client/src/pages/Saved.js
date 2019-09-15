import React from 'react';
// import API call to Google Books
import API from '../utils/API';

//import React components
import Container from '../components/Container';
import Card from '../components/Card';
import Book from '../components/Book';



class Saved extends React.Component {
    state = {
        savedBooks: []
    }
    
    openBookPreview = previewLink => {
        console.log(`open preview at ${previewLink}`);
        window.open(previewLink, 'bookpreview');
    }

    getBooks = () => {
        console.log('getting saved books...');
        API.getBooks()
            .then( jsonData => {
                console.log(jsonData.data);
                this.setState( {
                    savedBooks: jsonData.data                  
                })
            })
            .catch( error => {
                console.log (error);
            });
    }

    deleteBook = dbId => {
        console.log('deleting book with _id of ', dbId);
        API.deleteBook(dbId)
            .then(response => this.getBooks())
            .catch(error => console.log(error));
    }

    componentDidMount = () => {
        this.getBooks();
    }

    render() {
        return (
            <Container>
                <h1>My Reading List</h1>
                <Card heading='Saved Books'>
                    {this.state.savedBooks.map( book => (
                        <Book 
                            key={book._id}
                            id={book.foreignid}
                            title={book.title}
                            authors={book.authors}
                            description={book.description}
                            image={book.image}
                            btn1Click={ () => this.openBookPreview(book.previewLink) }
                            btn1Text='PREVIEW BOOK'
                            btn2Click={ () => this.deleteBook(book._id) }
                            btn2Text='REMOVE BOOK'
                        /> 
                    ))}
                </Card>
            </Container>
        );
    }
}

export default Saved;