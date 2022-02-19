import React from 'react';
import {Button, Nav} from "react-bootstrap";


function Services() {
    return (
        <div>
            <section className="properties">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <Nav className="justify-content-center">
                                    <Nav.Link className="nav-tab" href="">Buy Properties</Nav.Link>
                                        <Nav.Link className="nav-tab" href="">Rent Properties</Nav.Link>
                            </Nav>
                        </div>

                        <div className="col-md-12">
                            <div className="tab-content">
                                <form action="" className="search-property">
                                    <div className="row">
                                        <div className="col-md d-flex">
                                            <div className="form-group">
                                                <label for="">Enter Keyword</label>
                                                <div className="form-field">
                                                    <div className="icon"><span className="fa fa search"></span> </div>
                                                    <input type="text" className="form-control" placeholder="Enter keyword"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md">
                                            <div className="form-group">
                                                <label htmlFor="">Property Type</label>
                                                <div className="form-field">
                                                    <div className="icon"><span className="fa fa search"></span></div>
                                                    <input type="text" className="form-control"
                                                           placeholder="Enter keyword"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md">
                                            <div className="form-group">
                                                <label htmlFor="">Location</label>
                                                <div className="form-field">
                                                    <div className="icon"><span className="fa fa search"></span></div>
                                                    <input type="text" className="form-control"
                                                           placeholder="Enter keyword"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md">
                                            <div className="form-group">
                                                <label htmlFor="">Price Range</label>
                                                <div className="form-field">
                                                    <div className="icon"><span className="fa fa search"></span></div>
                                                    <input type="text" className="form-control"
                                                           placeholder="Enter keyword"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md">
                                            <div className="form-group">
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

        </div>
    );
}

export default Services;