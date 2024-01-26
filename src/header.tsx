import React from 'react';
import './header.css';
import image from './assets/gossipgirl.png';

const Header: React.FC = () => {
    return (
        <header >
            <div className="header-container">
                <div className="logo-container">
                    <img src={image}/>
                </div>
            </div>
        </header>
        
    );
};

export default Header;
