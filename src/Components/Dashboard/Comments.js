import React from 'react';
import {Col, Row} from "react-bootstrap";
import TopBar from "./components/topbar";
import Sidebar from "./components/sidebar";
import "./styles/dashboard.css";

const Comments = () => {

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
                                        <Sidebar pageName={"comments"}/>
                                    </aside>
                                </Col>
                                <Col lg={11} xl={10}>
                                    {/* main content section begins*/}
                                    <section className="main-content">
                                        <Row>
                                            <div className="dashboard-panel w-100">
                                                <h4 className="text-secondary">Comments</h4>
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

export default Comments;