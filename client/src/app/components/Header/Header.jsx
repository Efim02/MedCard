import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
    return(
        <div className="app-header">
            <Link className='link link__home' to='/' >
                <h2>NST Medicine Card</h2>
            </Link>
        </div>
    )
}

export default Header;