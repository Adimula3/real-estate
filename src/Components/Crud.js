import React from 'react';

function Crud() {
    return (

            <form>
                <div className="form-row">
                    <div className="name">Agent-Name</div>
                    <input className="input-group" type="text"/>
                </div>
                <div className="form-row">
                    <div className="name">Email</div>
                    <input className="input-group" type="email"/>
                </div>
                <div className="form-row">
                    <div className="name">Phone-number</div>
                    <input className="input-group" type="text"/>
                </div>
                <div className="form-row">
                    <div className="property-name">Property-Name:</div>
                    <input className="input-group" type="text"/>
                </div>
                <div className="form-row">

                    <div className="name">Location:</div>
                    <input className="input-group" type="text"/>
                </div>
                <div className="form-row">

                    <div className="name">Rent</div>
                    <input type="checkbox"/>
                    <div className="name">Sale</div>
                    <input type="checkbox"/>
                </div>
                <div className="form-row">
                    <div className="name">Property-details</div>
                    <textarea className="input-group" placeholder="Property-details"></textarea>

                </div>
                <div className="form-row">
                    <div className="name">Upload-Image</div>
                    <input className="input-group" type="file"/>
                </div>

                <div className="button">
                    <button className="btn" type="submit">Upload-property</button>
                </div>


            </form>


    );
}

export default Crud;