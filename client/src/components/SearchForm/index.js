import React from 'react';


import './style.css';

class SearchForm extends React.Component {
    render() {
        return(
            <form>
                <div className='form-group'>
                    <label htmlFor='search-text'>Search Text</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        placeholder='Search for a book'
                        value={this.props.value}
                        name='searchText'
                        id='searchText' 
                        onChange={this.props.handleOnChange}
                    />
                </div>
                <button 
                    type='submit' 
                    className='btn btn-style'
                    onClick={this.props.handleFormSubmit}
                >Search!
                </button>
            </form>
        );
    }
}

export default SearchForm;