import React from 'react';
import {Button, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";


function Services() {
    return (
        <div>
            <section className="properties">
                <div className="container">
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
                                        <div className="col-md d-flex">
                                            <div className="form-group">
                                                <label for="">Enter Keyword</label>
                                                <div className="form-field">
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                    <input type="text" className="form-control" placeholder="Enter keyword"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md">
                                            <div className="form-group">
                                                <label htmlFor="">Property Type</label>
                                                <div className="form-field">
                                                    <i className="fa-solid fa-angle-down"></i>
                                                    <input type="text" className="form-control"
                                                           placeholder="Residential"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md">
                                            <div className="form-group">
                                                <label htmlFor="">Location</label>
                                                <div className="form-field">
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <input type="text" className="form-control"
                                                           placeholder="Search Location"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md">
                                            <div className="form-group border-none">
                                                <label htmlFor="">Price Range</label>
                                                <div className="form-field">
                                                    <i className="fa-solid fa-angle-down"></i>
                                                    <input type="text" className="form-control"
                                                           placeholder="$100"></input>
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

            <section className="display">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card">
                            <img src={require("../Img/pexels.jpg")} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <div className="list-team d-flex">
                                        <h6 className="ml-2">Joseph doe</h6>
                                        <span className="text-right">2 weeks ago</span>
                                    </div>
                                    <h3 className="card-title"><a href="#" className="stretched-link">Lagbalu Property</a></h3>
                                    <span className="location"><i className="fa-solid fa-location-dot"></i>Ikotun<span className="sale">Sale</span> </span>

                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={require("../Img/pexels.jpg")} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <div className="list-team d-flex">
                                        <h6 className="ml-2">Joseph doe</h6>
                                        <span className="text-right">2 weeks ago</span>
                                    </div>
                                    <h3 className="card-title"><a href="#" className="stretched-link">Lagbalu Property</a></h3>
                                    <span className="location"><i className="fa-solid fa-location-dot"></i>Ikotun<span className="rent">Rent</span> </span>

                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={require("../Img/pexels.jpg")} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <div className="list-team d-flex">
                                        <h6 className="ml-2">Joseph doe</h6>
                                        <span className="text-right">2 weeks ago</span>
                                    </div>
                                    <h3 className="card-title"><a href="#" className="stretched-link">Lagbalu Property</a></h3>
                                    <span className="location"><i className="fa-solid fa-location-dot"></i>Ikotun<span className="sale">Sale</span> </span>

                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={require("../Img/pexels.jpg")} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <div className="list-team d-flex">
                                        <h6 className="ml-2">Joseph doe</h6>
                                        <span className="text-right">2 weeks ago</span>
                                    </div>
                                    <h3 className="card-title"><a href="#" className="stretched-link">Lagbalu Property</a></h3>
                                    <span className="location"><i className="fa-solid fa-location-dot"></i>Ikotun<span className="rent">Rent</span> </span>

                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={require("../Img/pexels.jpg")} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="list-team d-flex">
                                    <h6 className="ml-2">Joseph doe</h6>
                                    <span className="text-right">2 weeks ago</span>
                                </div>
                                <h3 className="card-title"><a href="#" className="stretched-link">Lagbalu Property</a></h3>
                                <span className="location"><i className="fa-solid fa-location-dot"></i>Ikotun<span className="sale">Sale</span> </span>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={require("../Img/pexels.jpg")} className="card-img-top" alt="..."/>

                            <div className="card-body">
                                <div className="list-team d-flex">
                                    <h6 className="ml-2">Joseph doe</h6>
                                    <span className="text-right">2 weeks ago</span>
                                </div>
                                <h3 className="card-title"><a href="#" className="stretched-link">Lagbalu Property</a></h3>
                                <span className="location"><i className="fa-solid fa-location-dot"></i>Ikotun<span className="rent">Rent</span> </span>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={require("../Img/pexels.jpg")} className="card-img-top" alt="..."/>

                            <div className="card-body">
                                <div className="list-team d-flex">
                                    <h6 className="ml-2">Joseph doe</h6>
                                    <span className="text-right">2 weeks ago</span>
                                </div>
                                <h3 className="card-title"><a href="#" className="stretched-link">Lagbalu Property</a></h3>
                                <span className="location"><i className="fa-solid fa-location-dot"></i>Ikotun<span className="sale">Sale</span> </span>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={require("../Img/pexels.jpg")} className="card-img-top" alt="..."/>

                            <div className="card-body">
                                <div className="list-team d-flex">
                                    <h6 className="ml-2">Joseph doe</h6>
                                    <span className="text-right">2 weeks ago</span>
                                </div>
                                <h3 className="card-title"><a href="#" className="stretched-link">Lagbalu Property</a></h3>
                                <span className="location"><i className="fa-solid fa-location-dot"></i>Ikotun<span className="rent">Rent</span> </span>

                            </div>
                        </div>
                    </div>
                </div>
                    <div className="row text-center">
                        <div className="col">
                            <div className="block-27">
                                <ul>
                                    <li><Link className="next" to="#">&lt;</Link></li>
                                    <li><Link className="next active" to="">1</Link></li>
                                    <li><Link className="next" to="#" >2</Link></li>
                                    <li><Link className="next" to="#">3</Link></li>
                                    <li><Link className="next" to="#">&gt;</Link></li>

                                </ul>
                            </div>
                        </div>
                    </div>

            </section>

        </div>
    );
}

export default Services;
