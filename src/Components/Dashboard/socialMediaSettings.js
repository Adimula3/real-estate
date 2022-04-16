import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import TopBar from "./components/topbar";
import Sidebar from "./components/sidebar";
import "./styles/dashboard.css";

const SocialMediaSettings = () => {

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
                                        <Sidebar pageName={"social-media-settings"}/>
                                    </aside>
                                </Col>
                                <Col lg={11} xl={10}>
                                    {/* main content section begins*/}
                                    <section className="main-content">
                                        <Row>
                                            <div className="dashboard-panel w-100">
                                                <h4 className="text-secondary">Social Media Settings</h4>
                                                <div className="dashboard-social p-5 bg-white">
                                                    <Form className="form-box">
                                                        <Row>
                                                            <Col lg={6}>
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="facebook" className="form-label">Facebook</label>
                                                                    <abbr title="Must used your real username or link to connect your profile">
                                                                        <input id="facebook" type="text" name="title" className="form-control" placeholder="https://"/>
                                                                    </abbr>
                                                                </div>
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="twitter" className="form-label">Twitter</label>
                                                                    <abbr title="Must used your real username or link to connect your profile">
                                                                        <input id="twitter" type="text" name="title" className="form-control" placeholder="https://"/>
                                                                    </abbr>
                                                                </div>
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="linkedin" className="form-label">Linkedin</label>
                                                                    <abbr title="Must used your real username or link to connect your profile">
                                                                        <input id="Linkedin" type="text" name="title" className="form-control" placeholder="https://"/>
                                                                    </abbr>
                                                                </div>
                                                                <div className="form-group mb-3">
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

export default SocialMediaSettings;