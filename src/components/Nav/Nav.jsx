import React from 'react';
import logo from '../../assets/logo.png';
import './Nav.css';

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img src={logo} alt="The logo" className="logo" />
                <p className="logo-text">TypeWriter</p>
            </div>
            <div className="nav-right">
                <a
                    href="https://shan-tanu.github.io/portfolio/#/"
                    target="_blank"
                    className="portfolio-link"
                    rel="noreferrer"
                >
                    My Portfolio
                </a>
            </div>
        </div>
    );
};

export default Nav;
