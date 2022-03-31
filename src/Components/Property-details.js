import React ,{useState} from 'react';

function PropertyDetails({data}) {
    const [display, setDisplay] = useState(false);
    return (
        <div>
            <section id="property-details" className="property-details">

                    <div className="row">
                        <div className="col-xl-6 col-lg-7 property-image">
                            <img src={data.url} className="img-fluid" alt=""/>
                        </div>
                        <div className="col-xl-6 col-lg-5">
                            <div className="property-info">
                                <h3>Property Information</h3>
                                <ul>
                                    <li><span className="title">Location:</span>{data.location}</li>
                                    <li><span className="title">Status:</span>{data.status.toUpperCase()}</li>
                                    <li><span className="title">Agent:</span>{data.AgentName}</li>
                                    <li><span className="title">Price:</span> &#8358; 567,000</li>
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
                                <button type="submit"  onClick={() => {
                                    setDisplay((prevState) => !prevState)
                                }}>Contact Agent</button>
                            </div>

                            {display ? (
                                <div className="contact-buttons">
                                    <ul>
                                        <li>
                                            <a href="https://" className="btn btn-md btn-whatsapp"> WhatsApp <i className="fab fa-whatsapp"></i> </a>
                                        </li>

                                        <li>
                                            <a href="https://" className="btn btn-md btn-instagram"> Instagram <i className="fab fa-instagram"></i> </a>
                                        </li>

                                        <li>
                                            <a href="https://" className="btn btn-md btn-twitter"> Twitter <i className="fab fa-twitter"></i> </a>
                                        </li>

                                        <li>
                                            <a href="https://" className="btn btn-md btn-facebook"> Facebook <i className="fab fa-facebook"></i> </a>
                                        </li>
                                    </ul>
                                </div>
                            ) : (<p className="margin-break"></p> )}
                        </div>
                    </div>

            </section>

        </div>
    );
}

 export default PropertyDetails;
