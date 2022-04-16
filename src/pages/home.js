import React from 'react';
import '../styles/style.css'
import Message from "./message";
import About from "./about";
import Services from "./services";
import Contact from "./contact";
import '../styles/crud.css';
import Header from "../component/Header";



function Home() {
    return (
        <>
        <div id="home" >
            <div className="row justify-content-center">
                <div className="col-xl-6">
                    <h1>My name is mr kolawole olayinka</h1>
                    <h2>blah bla blah blah</h2>
                </div>
            </div>
        </div>
            <Header />
            <Message />
            <About />
            <Services />
            <Contact />

        </>

    );
}

export default Home;
