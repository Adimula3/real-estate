import React from 'react';
import {Col, Row} from "react-bootstrap";
import TopBar from "./components/topbar";
import Sidebar from "./components/sidebar";
import "./styles/dashboard.css";
import {Link} from "react-router-dom";

function Messages() {
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
                                        <Sidebar pageName={"messages"}/>
                                    </aside>
                                </Col>
                                <Col lg={11} xl={10}>
                                    {/* main content section begins*/}
                                    <section className="main-content">
                                        <Row>
                                            <div className="dashboard-panel w-100">
                                                <h4 className="text-secondary">Messages</h4>
                                                <ul className="message-list">
                                                    <li className="active">
                                                        <div className="d-flex flex-wrap">
                                                            <div className="middle-content">
                                                                <h5 className="title"><Link to="#" className="link" href="#">Valeria.G.Thomas</Link> </h5>
                                                                <p>Adipiscing viverra tincidunt gravida torquent vivamus venenatis sit bibendum quisque pharetra elementum maecenas</p>
                                                                <div className="message-action mt-2"><Link to="#" className="link">View | </Link> <Link to="#" className="link">Reply | </Link> <Link to="#" className="link">Delete</Link></div>
                                                            </div>
                                                            <div className="date-time align-self-center ms-md-auto"><span>20 Jan, 2021</span><span>10:10 AM</span></div>
                                                        </div>
                                                    </li>
                                                </ul>
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

export default Messages;