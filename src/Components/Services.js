import React, {useState} from 'react';
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import HousingModal from "./HousingModal";
import PropertyDetails from "./Property-details";
import Pagination from "./Pagination";


function Services() {

    return (
        <div>
            <section className="properties" id="service">
                <div className="container-fluid">
                    <div className="section-title">
                        <h2>Services</h2>
                    </div>

                    <div className="row">
                        <div className="col-md-12 ">
                            <Nav className="justify-content-center">
                                    <Nav.Link className="nav-tab ash" href="">Buy Properties</Nav.Link>
                                        <Nav.Link className="nav-tab" href="">Rent Properties</Nav.Link>
                            </Nav>
                        </div>

                        <div className="col-md-12">
                            <div className="tab-content">
                                <form action="" className="search-property">
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <div className="form-group">
                                                <label for="">Enter Keyword</label>
                                                <div className="form-field">
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                    <input type="text" className="form-control" placeholder="Enter keyword"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 ">
                                            <div className="form-group">
                                                <label htmlFor="">Property Type</label>
                                                <div className="form-field">
                                                    <i className="fa-solid fa-angle-down"></i>
                                                    <input type="text" className="form-control"
                                                           placeholder="Residential"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="form-group">
                                                <label htmlFor="">Location</label>
                                                <div className="form-field">
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <input type="text" className="form-control"
                                                           placeholder="Search Location"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 border-none">
                                            <div className="form-group">
                                                <label htmlFor="">Price Range</label>
                                                <div className="form-field">
                                                    <i className="fa-solid fa-angle-down"></i>
                                                    <input type="text" className="form-control"
                                                           placeholder="$100"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 ">
                                            <div className="form-group button">
                                                <div className="form-field">
                                                    <input type="submit" value="search" className="form-control btn btn-primary"
                                                    ></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-fluid display">
                <Pagination />
            </section>

        </div>
    );
}

export default Services;
