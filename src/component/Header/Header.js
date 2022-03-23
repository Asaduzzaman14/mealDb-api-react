import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='nav'>
            <h2>MEalDB</h2>
            <div className='nav-list'>
                <li>Home</li>
                <li>About</li>
                <li>Food</li>
                <li>Content</li>
            </div>

        </div>
    );
};

export default Header;
