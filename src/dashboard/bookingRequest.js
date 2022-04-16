import React from 'react';
import {Col, Row, Table} from "react-bootstrap";
import TopBar from "./components/topbar";
import Sidebar from "./components/sidebar";
import "./styles/dashboard.css";
import {Link} from "react-router-dom";

const BookingRequest = () => {

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
                                        <Sidebar pageName={"booking-request"}/>
                                    </aside>
                                </Col>
                                <Col lg={11} xl={10}>
                                    {/* main content section begins*/}
                                    <section className="main-content">
                                        <Row>
                                            <div className="dashboard-panel w-100">
                                                <h4 className="text-secondary">Booking Request</h4>
                                                <Table className="w-100 items-list">
                                                    <thead>
                                                    <tr>
                                                        <th>Id</th>
                                                        <th>Name</th>
                                                        <th>Date / Time</th>
                                                        <th>Property</th>
                                                        <th>Start Date</th>
                                                        <th>User Info</th>
                                                        <th>Exception</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>#224</td>
                                                        <td>David A. Williams</td>
                                                        <td className="date-time"><span>5 Jan, 2021</span>
                                                            <span>2:32PM</span></td>
                                                        <td>
                                                            <h6 className="text-secondary">Real Luxury Villa</h6>
                                                            <p>1812 Spruce Drive Belle Vernon, PA 15012</p>
                                                        </td>
                                                        <td>10 Jan, 2021</td>
                                                        <td><span>724-930-6762</span> <span>company@example.com</span>
                                                        </td>
                                                        <td><Link to="#" className="btn btn-primary me-1 mb-1">View</Link>
                                                            <Link to="#" className="btn btn-primary mb-1">Approve</Link>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
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

export default BookingRequest;