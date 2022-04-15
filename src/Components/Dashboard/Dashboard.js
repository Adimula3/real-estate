import React from 'react';
import {Button, Col, Dropdown, Row} from "react-bootstrap";
import './dashboard.css'
import {Link} from "react-router-dom";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import './Messages.js'
function Dashboard() {
    return (
        <div>
            <div className="page-wrapper">
                <Row>
                    <div className="top-bar py-2 ">
                        <div className="container-fluid">
                            <Row>
                                <Col lg={8} md={6}>
                                    <div className="dashboard-top-left d-flex flex-wrap">
                                        <h4>Agent</h4>
                                    </div>
                                    <div className="d-flex">

                                    </div>
                                </Col>
                                <Col lg={4} md={6}>
                                    <div className="dashboard-top-right d-flex flex-wrap justify-content-md-end mt-2 mt-lg-0">
                                        <div className="dropdown dropdown-select">
                                           <Dropdown>
                                               <DropdownToggle>Hi kareem</DropdownToggle>
                                               <DropdownMenu>
                                                   <DropdownItem href="#">profile</DropdownItem>
                                                   <DropdownItem href="#">sign out</DropdownItem>
                                               </DropdownMenu>
                                           </Dropdown>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="collapse-dashboard text-white py-3">

                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="full-row dashboard py-0 bg-gray">
                        <div className="container-fluid">
                            <Row>
                                <Col lg={1} xl={2}>
                                    <Row>
                                        <div className="dashboard-sidebar flat-small py-4 px-0 w-100">
                                            <h6 className="text25 border-bottom-gray pb-3 my-2 ps-3 d-lg-none d-xl-block">Overview</h6>
                                            <ul className="mb-4 text-white">
                                                <li className="active"><Link to="/Dashboard/Welcome"><span className="d-lg-none d-xl-block">Dashboard</span></Link></li>
                                                <li><Link to="/Dashboard/Messages"><span className="d-lg-none d-xl-block">Message</span><sup className="text-primary">(05)</sup></Link></li>
                                                <li><a href="#"><span className="d-lg-none d-xl-block">Comments</span><sup className="text-primary">(12)</sup></a></li>
                                                <li><a href="#"><span className="d-lg-none d-xl-block">Booking Request</span></a></li>
                                            </ul>
                                            <h6 className="text25 border-bottom-gray pb-3 my-2 ps-3 d-lg-none d-xl-block">Manage</h6>
                                            <ul className="mb-4 text-white">
                                                <li><a href="#"><span className="d-lg-none d-xl-block">Listing Properties</span></a></li>
                                                <li><a href="#"><span className="d-lg-none d-xl-block">Favorite Properties</span></a>
                                                </li>
                                                <li><a href="#"><span className="d-lg-none d-xl-block">Purchased Property</span></a></li>
                                                <li><a href="#"><span className="d-lg-none d-xl-block">Payments and Invoice</span></a>
                                                </li>
                                                <li><a href="dashboard-submit-property.html"><span className="d-lg-none d-xl-block">Submit Property</span></a></li>
                                            </ul>
                                            <h6 className="text25 border-bottom-gray pb-3 my-2 ps-3 d-lg-none d-xl-block">Your Details</h6>
                                            <ul className="mb-4 text-white">
                                                <li><a href="#"><span className="d-lg-none d-xl-block">Personal Information</span></a>
                                                </li>
                                                <li><a href="#"><span className="d-lg-none d-xl-block">Profile Settings</span></a></li>
                                                <li><a href="#"><span className="d-lg-none d-xl-block">Change Password</span></a></li>
                                                <li><a href="#"><span className="d-lg-none d-xl-block">Social Media Settings</span></a>
                                                </li>
                                            </ul>
                                            <h6 className="text25 border-bottom-gray pb-3 my-2 ps-3 d-lg-none d-xl-block">Settings</h6>
                                            <ul className="mb-4 text-white">
                                                <li><a href="#"><span className="d-lg-none d-xl-block">System Settings</span></a></li>
                                            </ul>
                                        </div>
                                    </Row>
                                </Col>

                            </Row>
                        </div>
                    </div>
                </Row>
            </div>

        </div>
    );
}

export default Dashboard;