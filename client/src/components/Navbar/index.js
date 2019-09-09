import React from 'react';
import './style.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-expand' role='navigation'>
                <div className='navbar-brand'>ReadingList | </div>
                <div className='navbar-nav mr-auto'>
                    <a className='nav-item nav-link' href='/search'>Search</a>
                    <a className='nav-item nav-link' href='/saved'>Saved</a>
                </div>
            </nav>
        );
    }
}

export default Navbar;