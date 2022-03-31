import React from 'react';
import '../Css/Style.css'
import '../Components/Message'
import Message from "./Message";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";


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
            <Message />
            <About />
            <Services />
            <Contact />

        </>

    );
}

export default Home;
