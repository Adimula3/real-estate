import React from 'react';
import {Link} from 'react-router-dom';
function Header() {
    return (

            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-item-center">

                    <h1 className="logo me-auto"><Link to="">Real Estate</Link></h1>

                    <nav className="navbar">
                        <ul>
                            <li><Link to="">Home</Link></li>
                            <li><Link to="">About</Link></li>
                            <li><Link to="">Services</Link></li>
                            <li><Link to="">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
    );
}

export default Header;