import React from 'react'
import PropTypes from 'prop-types'
import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <nav>
                <ol>
                    <li><a className="link" href="#Home">Home</a></li>
                    <li><a className="link" href="#About">About</a></li>
                    <li><a className="link" href="#Contact">Contact</a></li>
                </ol>
            </nav>
        </header>
    )
}

export default Header;