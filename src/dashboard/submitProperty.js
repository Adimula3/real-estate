import React from 'react';
import {Button, Col, Form, FormSelect, Row} from "react-bootstrap";
import TopBar from "./components/topbar";
import Sidebar from "./components/sidebar";
import "./styles/dashboard.css";

const SubmitProperty = () => {

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
                                        <Sidebar pageName={"submit-property"}/>
                                    </aside>
                                </Col>
                                <Col lg={11} xl={10}>
                                    {/* main content section begins*/}
                                    <section className="main-content">
                                        <Row>
                                            <div className="dashboard-panel w-100">
                                                <h4 className="text-secondary">Submit Property</h4>
                                                <div className="submitProperty form-border p-5 bg-white">
                                                    <Form className="form-box">
                                                        <div className="description">
                                                            <h5 className="text-secondary">Basic Information</h5>
                                                            <hr/>
                                                            <div className="form-group">
                                                                <Row>
                                                                    <Col md={6}>
                                                                        <label className="name">Agent-Name</label>
                                                                        <input type="name" className="form-control"/>
                                                                    </Col>
                                                                    <Col md={6}>
                                                                        <label className="name">Property-title</label>
                                                                        <input type="text" className="form-control"/>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                            <div className="form-group">
                                                                <Row>
                                                                    <Col md={6}>
                                                                        <FormSelect className="select">
                                                                            <option>Any status</option>
                                                                            <option value="1">Sale</option>
                                                                            <option value="2">Rent</option>
                                                                        </FormSelect>
                                                                    </Col>
                                                                    <Col md={6}>
                                                                        <FormSelect className="select">
                                                                            <option>Any status</option>
                                                                            <option value="1">Sale</option>
                                                                            <option value="2">Rent</option>
                                                                        </FormSelect>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                            <div className="form-group">
                                                                <Row>
                                                                    <Col md={4}>
                                                                        <label className="name">Price</label>
                                                                        <input type="text" className="form-control"/>
                                                                    </Col>
                                                                    <Col md={4}>
                                                                        <label className="name">Area</label>
                                                                        <input type="text" className="form-control"/>
                                                                    </Col>
                                                                    <Col md={4}>
                                                                        <label className="name">Bed Rooms</label>
                                                                        <input type="number" min="1" max="9" step="1" value="1" className="form-control"/>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </div>
                                                        <div className="description">
                                                            <h5 className="text-secondary">Description</h5>
                                                            <hr></hr>
                                                            <div className="form-group">
                                                                <Row>
                                                                    <Col lg={12}>
                                                                        <label className="name">Property-details</label>
                                                                        <textarea name="description" id="description" cols="30" rows="5" className="form-control" placeholder="write details...."></textarea>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </div>
                                                        <div className="property-location">
                                                            <h5 className="text-secondary">Property Location</h5>
                                                            <hr></hr>
                                                            <div className="form-group">
                                                                <Row>
                                                                    <Col md={12}>
                                                                        <label className="name">Address</label>
                                                                        <input type="text" className="form-control"/>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                            <div className="form-group">
                                                                <Row>
                                                                    <Col md={4}>
                                                                        <label className="name">State</label>
                                                                        <input type="text" className="form-control"/>
                                                                    </Col>
                                                                    <Col md={4}>
                                                                        <label className="name">Zip Code</label>
                                                                        <input type="text" className="form-control"/>
                                                                    </Col>
                                                                    <Col md={4}>
                                                                        <label className="name">City</label>
                                                                        <input type="text"  className="form-control"/>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </div>
                                                        <div className="upload-media mt-5">
                                                            <h5 className="text-secondary">Add Photos and Videos</h5>
                                                            <hr></hr>
                                                            <div className="form-group">
                                                                <Row>
                                                                    <Col md={12}>
                                                                        <input type="file" id="fileupload-example-1" className="d-none"/>
                                                                            <label className="fileupload-label text-center w-100" htmlFor="fileupload-example-1">Drag and Drop to Add Photo (770x390)</label>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <Row>
                                                                <Col md={4}>
                                                                    <Button type="submit" className="btn btn-primary">Submit</Button>
                                                                </Col>
                                                            </Row>
                                                        </div>
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

export default SubmitProperty;