import React from 'react';
import {Button ,Col ,Form ,Row} from "react-bootstrap";

function Crud() {

    const onSubmit = (e) => {
        e.preventDefault()
    }
    return (
            <div className="crud">
                <div className="container">

                    <Form className="Form-box" onSubmit={onSubmit}>
                        <h3>Agent Form</h3>
                        <div className="form-group">
                            <Row>
                                <Col md={6}>
                                        <label className="name">Agent-Name</label>
                                        <input type="name" className="form-control"/>
                                </Col>
                                <Col md={6}>
                                        <label className="name">Email</label>
                                        <input type="email" className="form-control"/>
                                </Col>
                            </Row>
                        </div>

                        <div className="form-group">
                            <Row>
                                <Col md={4}>
                                    <label className="name">Phone-number</label>
                                    <input type="text" className="form-control"/>
                                </Col>
                                <Col md={4}>
                                    <label className="name">Property-name</label>
                                    <input type="name" className="form-control"/>
                                </Col>
                                <Col md={4}>
                                    <label className="name">Status</label>
                                    <select className="form-select">
                                        <option selected>choose..</option>
                                        <option>Rent</option>
                                        <option>Sale</option>
                                    </select>
                                </Col>
                            </Row>
                        </div>
                        <div className="form-group">
                            <Row>
                                <Col md={6}>
                                    <label className="name">Location</label>
                                    <input type="text" className="form-control"/>
                                </Col>
                                <Col md={2}></Col>
                                <Col md={4}>
                                    <label className="Upload image">
                                        upload image
                                    </label>
                                    <input className="form-control" type="file"/>
                                </Col>
                            </Row>
                        </div>

                        <div className="form-group">
                            <Row>
                                <Col md={12}>
                                    <label className="name">Property-details</label>
                                    <textarea name="description" id="description" cols="30" rows="5" className="form-control"></textarea>
                                </Col>
                            </Row>
                        </div>

                        <div className="form-group">
                            <Row>

                            </Row>

                        </div>
                        <div className="form-group">
                            <Row>
                                <Col md={4}>
                                    <Button type="submit" className="btn btn-primary">Submit</Button>
                                </Col>
                            </Row>

                        </div>
                    </Form>

                </div>
            </div>


    );
}

export default Crud;
