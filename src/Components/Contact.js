import React from 'react';

function Contact() {
    return (
        <div>

            <section className="contact" id="contact" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
                <div className="container">
                    <div className="section-title">
                        <h2 className="con">Contact</h2>
                    </div>

                    <div className="row">

                        <div className="col-lg-6">

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="info-box">
                                        <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/48/000000/external-map-maps-locations-those-icons-lineal-those-icons-1.png" alt=""/>
                                        <h3>Our Address</h3>
                                        <p>19 Oguntona ogundeji street Lagos State</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <img src="https://img.icons8.com/ios/50/000000/mail.png" alt=""/>
                                        <h3>Email Us</h3>
                                        <p>yk@yahoo.com</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/50/000000/external-phone-call-advertising-kiranshastry-lineal-kiranshastry.png" alt=""/>
                                        <h3>Call Us</h3>
                                        <p>+234 9064 8192 90</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">
                            <form action=""  className="email-form" >
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text"

                                               name="name"
                                               className="form-control"
                                               id="name"
                                               placeholder="Your Name"
                                               required/>
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email"

                                               className="form-control"
                                               name="email"
                                               id="email"
                                               placeholder="Your Email" required/>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text"

                                           className="form-control"
                                           name="subject"
                                           id="subject"
                                           placeholder="Subject" required/>
                                </div>
                                <div className="form-group mt-3">
                                        <textarea className="form-control"

                                                  name="message"
                                                  rows="5"
                                                  id="message"
                                                  placeholder="Message"
                                                  required>
                                        </textarea>
                                </div>
                                <div className="text-center">
                                    <button type="submit">Send Message</button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>


        </div>
    );
}

export default Contact;