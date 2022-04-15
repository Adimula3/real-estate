import React from 'react';
import {Col, Row} from "react-bootstrap";


function Messages() {
    return (
        <div>
         <Col  lg={11} xl={10}>
             <Row>
                 <Row>
                     <Col>
                         <div className="dashboard-panel w-100">
                             <h4 className="text-secondary">Messages</h4>
                             <ul className="message-list">
                                 <li className="active">
                                     <div className="d-flex flex-wrap">
                                         <div className="middle-content">
                                             <h5 className="title"><a className="text-secondary hover-text-primary" href="#">Valeria.G.Thomas</a> </h5>
                                             <p>Adipiscing viverra tincidunt gravida torquent vivamus venenatis sit bibendum quisque pharetra elementum maecenas</p>
                                             <div className="message-action mt-2"><a href="#">View | </a> <a href="#">Reply | </a> <a href="#">Delete</a></div>
                                         </div>
                                         <div className="date-time align-self-center ms-md-auto"><span>20 Jan, 2021</span><span>10:10 AM</span></div>
                                     </div>
                                 </li>
                             </ul>
                         </div>
                     </Col>
                 </Row>
             </Row>
         </Col>
        </div>
    );
}

export default Messages;