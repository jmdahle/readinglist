import React from 'react';
import './style.css'

class Book extends React.Component {
    render() {
        return(
            <div className='book-card'>
                <div className='row'>
                    <div className='col-md-8'>
                        <h5>{this.props.title}</h5>
                        <p>Written by {this.props.authors}</p>
                    </div>
                    <div className='col-md-4'>
                        <button className='btn btn-style' bookid={this.props.id} onClick={this.props.btn1Click}>{this.props.btn1Text}</button>
                        
                         <button className='btn btn-style' bookid={this.props.id} onClick={this.props.btn2Click}>{this.props.btn2Text}</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <img className='bookImage' alt={this.props.title} src={this.props.image} />
                    </div>
                    <div className='col-md-9'>
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Book;