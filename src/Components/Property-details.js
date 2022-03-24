import React from 'react';

function PropertyDetails() {
    return (
        <div>
            <section id="property-details" className="property-details">
                <div className="container">

                    <div className="row">
                        <div className="col-xl-6 col-lg-7">
                            <img src={require("../Img/pexels.jpg")} className="img-fluid" alt=""/>
                        </div>
                        <div className="col-xl-6 col-lg-5">
                            <div className="property-info">
                                <h3>Poperty Information</h3>
                                <ul>
                                    <li><strong>Location</strong>:IKOTUN</li>
                                    <li><strong>Status</strong>:SALE</li>
                                    <li><strong>Agent</strong>:OLANREWAJU</li>
                                </ul>
                            </div>
                            <div className="property-description">
                                <p>3 bedroom Flat / Apartment for rent Banana Island Ikoyi Lagos renting for ₦15,000,000/year. See property details on PropertyPro.ng or browse all our range of properties in Banana Island Ikoyi Lagos

                                    Spacious 3 Bedroom flat with a bq;

                                    Location: Banana Island, Ikoyi.

                                    Rent: N15Million

                                    Features; All rooms ensuite, spacious living and dining area, swimming pool, gym.
                                </p>
                            </div>
                            <div className="contact-agent">
                                <button type="submit">Contact Agent</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

 export default PropertyDetails;