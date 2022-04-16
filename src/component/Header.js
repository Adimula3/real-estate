import React from 'react';
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
                        <li><a className="active" href="/">Home</a></li>
                        <li><a className="change" href="/#about">About</a></li>
                        <li><a className="change" href="/#service">Services</a></li>
                        <li><a className="change" href="/#contact">Contact Us</a></li>
                    </ul>
                    <Link className="change" to="/Login">Log in</Link>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    );
}

export default Header;