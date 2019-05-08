import React from 'react';

import './header.scss';

const Header = (props) => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        STARWARS DB
                    </a>
    
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#!">
                                People
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#!">
                                Planets
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#!">
                                Starships
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;