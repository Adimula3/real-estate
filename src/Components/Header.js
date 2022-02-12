import React from 'react';
import {Nav, Navbar} from "react-bootstrap";


function Header() {
    return (

         <header id="header" className="fixed-top d-flex align-items-center">
             <div className="container d-flex align-items-center">
                 <Navbar.Brand className="logo" href="#">Estate</Navbar.Brand>

                 <Nav className="me-auto">
                     <Nav.Link className="link active" href="#">Home</Nav.Link>
                     <Nav.Link className="link" href="#">About</Nav.Link>
                     <Nav.Link className="link" href="#">Services</Nav.Link>
                     <Nav.Link className="link"  href="#">Contact</Nav.Link>
                 </Nav>
             </div>
         </header>
    );
}

export default Header;