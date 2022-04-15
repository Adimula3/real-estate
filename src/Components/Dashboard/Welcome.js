import React from 'react';
import {Col, Row} from "react-bootstrap";
import './dashboard.css'
import Dashboard from "./Dashboard";
function Welcome() {
    return (
        <div>
            <Dashboard />
            <Col lg={11} xl={10}>
                <Row>
                    <div className="dashboard-panel w-100">
                        <h4 className="text-secondary mb-4">Dashboard</h4>
                        <Row>
                            <Col>
                                <div className="success text-secondary bg-white p-3 mb-3"><span className="closebtn float-end ms-2">&times;</span> Hi, You have got a new message from new customer on <span className="text-primary">City Tradecenter</span> for rent request
                                </div>
                            </Col>
                            <Col>
                                <div className="alert success text-secondary bg-white p-3"><span className="closebtn float-end ms-2">&times;</span> Password change notice for security issue and make your password more strong.</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="ball1 p-4 position-relative "><h4 className="m-0">340</h4>
                                    <span className="d-table">Available Property</span></div>
                            </Col>
                            <Col>
                                <div className="ball2 p-4 position-relative " ><h4 className="m-0">227</h4>
                                    <span className="d-table">Property For Rent</span></div>
                            </Col>
                            <Col>
                                <div className="ball3 p-4 position-relative " ><h4 className="m-0">113</h4>
                                    <span className="d-table">Property For Sale</span></div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                        <div className="bg-white">
                                            <a href="#collapseTwo" className="panel-accordian text-secondary h6 p-4 d-block position-relative mb-0" data-bs-toggle="collapse" aria-expanded="true">Recent Activity</a>
                                            <div className="collapse show px-4 pb-4" id="collapseTwo" role="tabpanel">
                                                <ul>
                                                    <li className="font-13 mb-3">Dec 27th, 10:12 am <span className="text-secondary">- Get new message from custome on city tradecenter.</span></li>
                                                    <li className="font-13 mb-3">Dec 21th, 09:12 pm <span className="text-secondary">- New property approve for Rent by homex.</span></li>
                                                    <li className="font-13 mb-3">Dec 18th, 12:12 pm <span className="text-secondary">- Booking request for Nirala Appartment</span></li>
                                                    <li className="font-13 mb-3">Dec 15th, 05:45 pm <span className="text-secondary">- Payment receive from customer invoice no 2319891</span>
                                                    </li>
                                                    <li className="font-13 mb-3">Dec 15th, 03:32 pm <span className="text-secondary">- Comments replay by admin in Apolo Family Appartment</span></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Col>


        </div>
    );
}

export default Welcome;