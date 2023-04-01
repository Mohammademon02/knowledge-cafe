import React from 'react';
import './Header.css'
import image from '../../images/person2.png'

const Header = () => {
    return (
        <div className='header-container'>
            <h3>Knowledge Cafe</h3>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Header;