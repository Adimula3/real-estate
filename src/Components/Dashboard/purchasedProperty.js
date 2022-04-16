import React from 'react';
import {Col, Row, Table} from "react-bootstrap";
import TopBar from "./components/topbar";
import Sidebar from "./components/sidebar";
import "./styles/dashboard.css";
import {Link} from "react-router-dom";

const PurchasedProperty = () => {

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
                                        <Sidebar pageName={"purchased-property"}/>
                                    </aside>
                                </Col>
                                <Col lg={11} xl={10}>
                                    {/* main content section begins*/}
                                    <section className="main-content">
                                        <Row>
                                            <div className="dashboard-panel w-100">
                                                <h4 className="text-secondary">Purchased Property</h4>
                                                <Table className="w-100 items-list bg-transparent">
                                                    <thead>
                                                    <tr className="bg-whit">
                                                        <th>Properties</th>
                                                        <th>Purchase Date</th>
                                                        <th>Payment By</th>
                                                        <th>Payment</th>
                                                        <th>Next Instalment</th>
                                                        <th>Action</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td><img src="" alt=""/>
                                                            <div className="property-info d-table">
                                                                <h5 className="text-secondary">Apolo Family Appartment</h5><span className="font-14"><i className="fas fa-map-marker-alt text-primary font-13"></i> Avenue South Burlington, Los Angles</span>
                                                                <div className="price mt-3"><span className="text-primary">$212,000</span> <span>/ Fixed Amount</span></div>
                                                            </div>
                                                        </td>
                                                        <td className="prop">10 Jan, 2021</td>
                                                        <td className="prop">Instalment</td>
                                                        <td className="prop">Complete</td>
                                                        <td className="prop">12th Feb, 2021</td>
                                                        <td className="prop"><Link to="#" className="btn btn-primary">Details</Link></td>
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

export default PurchasedProperty;