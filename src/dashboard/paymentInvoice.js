import React from 'react';
import {Col, Row, Table} from "react-bootstrap";
import TopBar from "./components/topbar";
import Sidebar from "./components/sidebar";
import "./styles/dashboard.css";

const PaymentInvoice = () => {

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
                                        <Sidebar pageName={"payment-and-invoice"}/>
                                    </aside>
                                </Col>
                                <Col lg={11} xl={10}>
                                    {/* main content section begins*/}
                                    <section className="main-content">
                                        <Row>
                                            <div className="dashboard-panel w-100">
                                                <h4 className="text-secondary">Payment AND Invoice</h4>
                                                <Table className="w-100 items-list bg-transparent">
                                                    <thead>
                                                    <tr className="bg-white">
                                                        <th>Date</th>
                                                        <th>Invoice ID</th>
                                                        <th>Type</th>
                                                        <th>Details</th>
                                                        <th>Receivable</th>
                                                        <th>Paid</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>1st Apr, 2021</td>
                                                        <td>UKJ81712</td>
                                                        <td>Rent</td>
                                                        <td>Paid Office Rent from Unicoder at City Trade Center</td>
                                                        <td>$5000</td>
                                                        <td>- $5000</td>
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

export default PaymentInvoice;