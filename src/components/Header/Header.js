import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <h3>Knowledge Cafe</h3>
           <div >
                <a className='nav-btn' href="">Home</a>
                <a className='nav-btn' href="">Blog</a>
           </div>
        </div>
    );
};

export default Header;