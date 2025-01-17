import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://www.linkedin.com/in/jessi-stratton-906319252/">Jessi Stratton</a>
                <div className="navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/portfolio">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
