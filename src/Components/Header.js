import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";


function Header() {
    return (

        <header id="header" className="fixed-top d-flex align-items-center header-transparent">
            <div className="container d-flex justify-content-between align-items-center">

                <div className="logo">
                    <h1 className="text-light"><a href="/"><span>Real-estate</span></a></h1>
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><Link className="active" to="/">Home</Link></li>
                        <li><Link className="change" to="/About">About</Link></li>
                        <li><Link className="change" to="/Services">Services</Link></li>
                        <li><Link className="change" to="/Contact">Contact Us</Link></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    );
}

export default Header;