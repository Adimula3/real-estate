import React from 'react';

function Crud() {
    return (
            <div className="crud">

                <div className="container">
                    <form className="row g3">
                        <div className="col-md-6 form-group">
                            <div className="name">Agent-Name</div>
                            <input type="name" className="form-control"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <div className="name">Email</div>
                            <input type="email" className="form-control"/>
                        </div>
                        <div className="col-md-4 form-group">
                            <div className="name">Phone-number</div>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col-md-4 form-group">
                            <div className="name">Property-name</div>
                            <input type="name" className="form-control"/>
                        </div>
                        <div className="col-md-4 form-group">
                            <div className="name">Status</div>
                            <select className="form-select">
                                <option selected>choose..</option>
                                <option>Rent</option>
                                <option>Sale</option>
                            </select>
                        </div>
                        <div className="col-12 form-group">
                            <div className="name">Location</div>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col-12 form-group">
                            <div className="name">Property-details</div>
                            <textarea className="form-control" placeholder="property-details"></textarea>
                        </div>
                        <div className="col-md-2 form-group">
                            <div className="Upload image">
                                <input className="form-control" type="file"/>
                            </div>
                        </div>
                        <div className="col-12 form-group">
                            <button type="submit" className="btn btn-primary">submit</button>
                        </div>
                    </form>

                </div>
            </div>





    );
}

export default Crud;