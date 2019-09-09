import React from 'react';
import './style.css'

class Book extends React.Component {
    render() {
        return(
            <div className='book-card'>
                <h5>{this.props.title}</h5>
                <p>{this.props.authors}</p>
                <p>{this.props.description}</p>
                <img alt={this.props.title} src={this.props.image} />
                <button onClick={this.clickBook}>VIEW</button>
            </div>
        );
    }
}

export default Book;