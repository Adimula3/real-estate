import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import TopBar from "./components/topbar";
import Sidebar from "./components/sidebar";
import "./styles/dashboard.css";

const ChangePassword = () => {

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
                                        <Sidebar pageName={"change-password"}/>
                                    </aside>
                                </Col>
                                <Col lg={11} xl={10}>
                                    {/* main content section begins*/}
                                    <section className="main-content">
                                        <Row>
                                            <div className="dashboard-panel w-100">
                                                <h4 className="text-secondary">Change Password</h4>
                                                <div className="dashboard-change-password p-5 bg-white">
                                                    <Form className="form-box">
                                                        <Row>
                                                            <Col lg={6}>
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="current-password"
                                                                           className="form-label">Current Password</label>
                                                                    <abbr title="Put your current password here">
                                                                        <input id="current-password" type="text" name="password" className="form-control"/>
                                                                    </abbr>
                                                                </div>
                                                                <div className="form-group mb-3  position-relative" >
                                                                    <label htmlFor="new-password" className="form-label">New Password</label>
                                                                    <abbr
                                                                        title="Password must 8 charactor and contain latter and number">
                                                                        <input id="new-password" type="text" name="password" className="form-control"/>
                                                                    </abbr>
                                                                </div>
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="renew-password"
                                                                           className="form-label">Re-Type New Password</label>
                                                                    <abbr title="Re-Type New Password">
                                                                        <input id="renew-password" type="text" name="password" className="form-control"/>
                                                                    </abbr>
                                                                </div>
                                                                <div className="form-group">
                                                                    <Button className="btn btn-primary mt-3" type="submit">Save Change</Button>
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

export default ChangePassword;