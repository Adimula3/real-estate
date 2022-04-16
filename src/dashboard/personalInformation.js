import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import TopBar from "./components/topbar";
import Sidebar from "./components/sidebar";
import "./styles/dashboard.css";

const PersonalInformation = () => {

    return (
        <>
            <div className="page-wrapper">
                <Row>
                    {/* top bar section*/}
                    <TopBar />
                    <div className="full-row dashboard py-0 bg-gray">
                        <div className="container-fluid">
                            <Row>
                                <Col lg={1} xl={2}>
                                    {/* sidebar section*/}
                                    <aside className="side-content">
                                        <Sidebar pageName={"personal-information"}/>
                                    </aside>
                                </Col>
                                <Col lg={11} xl={10}>
                                    {/* main content section begins*/}
                                    <section className="main-content">
                                        <Row>
                                            <div className="dashboard-panel w-100">
                                                <h4 className="text-secondary">Personal Information</h4>
                                                <div className="dashboard-personal-info form-border p-5 bg-white">
                                                    <Form className="form-box">
                                                        <h5 className="text-secondary border-bottom-on-white pb-3 mb-4">Account Info</h5>
                                                        <Row>
                                                            <Col lg={6}>
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="user-id" className="form-label">Agent User ID</label>
                                                                    <input type="text" name="user-id" id="user-id" className="form-control"/>
                                                                </div>
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="name" className="form-label">Your Name</label>
                                                                    <input type="text" name="name" id="name" className="form-control"/>
                                                                </div>
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="title" className="form-label">Your Title</label>
                                                                    <input type="text" name="title" id="title" className="form-control"/>
                                                                </div>
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="email" className="form-label">Email Address</label>
                                                                    <input type="text" name="email" id="email" className="form-control"/>
                                                                </div>
                                                                <div className="form-group mb-3 phone-code position-relative">
                                                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                                                    <select className="bg-gray form-control form-select">
                                                                        <option>+01</option>
                                                                        <option>+02</option>
                                                                        <option>+03</option>
                                                                        <option>+04</option>
                                                                    </select>
                                                                    <input type="text" name="phone" id="phone" className="form-control"/>
                                                                </div>
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="about-me" className="form-label">About Me</label>
                                                                    <textarea className="form-control" id="about-me" rows="7"></textarea>
                                                                </div>
                                                                <div className="more-info">
                                                                    <h5 className="text-secondary border-bottom-on-white pb-3 mb-4">More Info</h5>
                                                                    <div className="form-group mb-3">
                                                                        <label htmlFor="address" className="form-label">Address</label>
                                                                        <input type="text" name="email" id="address" className="form-control" placeholder="First LIne (Optional)" />
                                                                    </div>
                                                                    <div className="form-group mb-3">
                                                                        <input type="text" name="email" className="form-control" placeholder="Second Line (Optional)" />
                                                                    </div>
                                                                    <Row>
                                                                        <Col lg={6}>
                                                                            <div className="form-group mb-3">
                                                                                <label htmlFor="state" className="form-label">City / State</label>
                                                                                <input type="text" name="email" id="state" className="form-control"/>
                                                                            </div>
                                                                        </Col>
                                                                        <Col lg={6}>
                                                                            <div className="form-group mb-3">
                                                                                <label htmlFor="zip-code" className="form-label">Zip Code</label>
                                                                                <input type="text" name="email" id="zip-code" className="form-control"/>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                    <div className="form-group mb-3">
                                                                        <label htmlFor="dob" className="form-label">DOB</label>
                                                                        <input type="text" name="email" id="dob" className="form-control" placeholder="DD-MM-YY (Optional)"/>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group mb-3">
                                                                    <Button type="submit" className="btn btn-primary mb-4" value="Save Change">Submit</Button>
                                                                    <p>** Habitant per quisque scelerisque hac tempus ad
                                                                        volutpat non. Eleifend amet Vel mollis proin
                                                                        donec fermentum auctor ullamcorper. Turpis
                                                                        mattis facilisis. Pede ac aenean. Massa arcu
                                                                        dolor nullam habitasse
                                                                        tortor eros blandit lacus.</p>
                                                                </div>
                                                            </Col>
                                                            <Col lg={5}>
                                                                <div className="user-info mt-md-50"><img src="" alt=""/>
                                                                    <div className="mb-4 mt-3">
                                                                        <label className="btn btn-primary mb-sm-0 mr-2" htmlFor="file-upload">Upload File</label>
                                                                        <input id="file-upload" className="d-none" type="file" name="file-upload"/>
                                                                            <Button className="btn btn-primary">Delete Photo</Button>
                                                                    </div>
                                                                    <div className="font-18">
                                                                        <div className="mb-1"><b>Name:</b> Harry E. Ewalt</div>
                                                                        <div className="mb-1"><b>Email:</b> ewalt32@info.com</div>
                                                                        <div className="mb-1"><b>Role:</b> Agent</div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                </div>
                                            </div>
                                        </Row>
                                    </section>
                                    {/* main content section ends*/}
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Row>
            </div>
        </>

    );
}

export default PersonalInformation;