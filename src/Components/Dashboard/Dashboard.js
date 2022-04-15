import React from 'react';
import {Button, Col, Dropdown, Row} from "react-bootstrap";
import './dashboard.css'
import {Link} from "react-router-dom";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
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
                                               <Dropdown.Toggle>Hi kareem</Dropdown.Toggle>
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
                                                <li className="active"><a href="#"><i className="flaticon-dashboard me-3 me-lg-0 me-xl-3"></i><span className="d-lg-none d-xl-block">Dashboard</span></a></li>
                                                <li><a href="#"><i className="flaticon-email me-3 me-lg-0 me-xl-3"></i><span className="d-lg-none d-xl-block">Message</span><sup className="text-primary">(05)</sup></a></li>
                                                <li><a href="#"><i className="flaticon-chat-comment-oval-speech-bubble-with-text-lines me-3 me-lg-0 me-xl-3"></i><span className="d-lg-none d-xl-block">Comments</span><sup className="text-primary">(12)</sup></a></li>
                                                <li><a href="#"><i className="flaticon-calendar me-3 me-lg-0 me-xl-3"></i><span className="d-lg-none d-xl-block">Booking Request</span></a></li>
                                            </ul>
                                            <h6 className="text25 border-bottom-gray pb-3 my-2 ps-3 d-lg-none d-xl-block">Manage</h6>
                                            <ul className="mb-4 text-white">
                                                <li><a href="#"><i className="flaticon-house-1 me-3 me-lg-0 me-xl-3"></i><span className="d-lg-none d-xl-block">Listing Properties</span></a></li>
                                                <li><a href="#"><i className="flaticon-star me-3 me-lg-0 me-xl-3"></i><span className="d-lg-none d-xl-block">Favorite Properties</span></a>
                                                </li>
                                                <li><a href="#"><i className="flaticon-rent me-3 me-lg-0 me-xl-3"></i><span className="d-lg-none d-xl-block">Purchased Property</span></a></li>
                                                <li><a href="#"><i className="flaticon-bill me-3 me-lg-0 me-xl-3"></i><span className="d-lg-none d-xl-block">Payments and Invoice</span></a>
                                                </li>
                                                <li><a href="dashboard-submit-property.html"><i className="flaticon-forward me-3 me-lg-0 me-xl-3"></i><span className="d-lg-none d-xl-block">Submit Property</span></a></li>
                                            </ul>
                                            <h6 className="text25 border-bottom-gray pb-3 my-2 ps-3 d-lg-none d-xl-block">Your Details</h6>
                                            <ul className="mb-4 text-white">
                                                <li><a href="#"><i className="flaticon-seller me-3 me-lg-0 me-xl-3"></i><span className="d-lg-none d-xl-block">Personal Information</span></a>
                                                </li>
                                                <li><a href="#"><i className="flaticon-resume me-3 me-lg-0 me-xl-3"></i><span className="d-lg-none d-xl-block">Profile Settings</span></a></li>
                                                <li><a href="#"><i className="flaticon-lock me-3 me-lg-0 me-xl-3"></i><span className="d-lg-none d-xl-block">Change Password</span></a></li>
                                                <li><a href="#"><i className="flaticon-share me-3 me-lg-0 me-xl-3"></i><span className="d-lg-none d-xl-block">Social Media Settings</span></a>
                                                </li>
                                            </ul>
                                            <h6 className="text25 border-bottom-gray pb-3 my-2 ps-3 d-lg-none d-xl-block">Settings</h6>
                                            <ul className="mb-4 text-white">
                                                <li><a href="#"><i className="flaticon-settings me-3 me-lg-0 me-xl-3"></i><span className="d-lg-none d-xl-block">System Settings</span></a></li>
                                            </ul>
                                        </div>
                                    </Row>
                                </Col>
                                <Col lg={11} xl={10}>
                                    <Row>
                                        <div className="dashboard-panel w-100">
                                            <h4 className="text-secondary mb-4">Dashboard</h4>
                                            <Row>
                                                <Col>
                                                    <div className="success text-secondary bg-white p-3 mb-3"><span className="closebtn float-end ms-2">&times;</span> Hi, You have got a new message from new customer on <span className="text-primary">City Tradecenter</span> for rent request
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="alert success text-secondary bg-white p-3"><span className="closebtn float-end ms-2">&times;</span> Password change notice for security issue and make your password more strong.</div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <div className="ball1 p-4 position-relative "><h4 className="m-0">340</h4>
                                                        <span className="d-table">Available Property</span></div>
                                                </Col>
                                                <Col>
                                                    <div className="ball2 p-4 position-relative " ><h4 className="m-0">227</h4>
                                                        <span className="d-table">Property For Rent</span></div>
                                                </Col>
                                                <Col>
                                                    <div className="ball3 p-4 position-relative " ><h4 className="m-0">113</h4>
                                                        <span className="d-table">Property For Sale</span></div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Row>
                                                        <Col>
                                                            <div className="bg-white">
                                                                <a href="#collapseTwo" className="panel-accordian text-secondary h6 p-4 d-block position-relative mb-0" data-bs-toggle="collapse" aria-expanded="true">Recent Activity</a>
                                                                <div className="collapse show px-4 pb-4" id="collapseTwo" role="tabpanel">
                                                                    <ul>
                                                                        <li className="font-13 mb-3">Dec 27th, 10:12 am <span className="text-secondary">- Get new message from custome on city tradecenter.</span></li>
                                                                        <li className="font-13 mb-3">Dec 21th, 09:12 pm <span className="text-secondary">- New property approve for Rent by homex.</span></li>
                                                                        <li className="font-13 mb-3">Dec 18th, 12:12 pm <span className="text-secondary">- Booking request for Nirala Appartment</span></li>
                                                                        <li className="font-13 mb-3">Dec 15th, 05:45 pm <span className="text-secondary">- Payment receive from customer invoice no 2319891</span>
                                                                        </li>
                                                                        <li className="font-13 mb-3">Dec 15th, 03:32 pm <span className="text-secondary">- Comments replay by admin in Apolo Family Appartment</span></li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
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