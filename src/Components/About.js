import React from 'react';

function About(props) {
    return (
        <div>
            <section className="about">
                <div className="container">

                    <div className="row">
                        <div className="col-xl-5 col-lg-5">
                            <img src={require('../Img/michael-oxendine-GHCVUtBECuY-unsplash.jpg')} alt="" />
                        </div>

                        <div className="col-xl-7 col-lg-7 d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                            <div className="box-heading">
                                <h4>About us</h4>
                                <h3>A REAL-ESTATE COMPANY</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                            </div>
                                 <div className="counts">
                                     <div className="row counters">
                                         <div className="col-lg-2 col-md-4 col-6">
                                             <span className="count">5</span>
                                             <p>Years of experience</p>
                                         </div>
                                         <div className="col-lg-2 col-md-4 col-6">
                                             <span className="count">500+</span>
                                             <p>Total properties</p>
                                         </div>
                                         <div className="col-lg-2 col-md-4 col-6">
                                             <span className="count">40+</span>
                                             <p>Qualified agents</p>
                                         </div>
                                         <div className="col-lg-2 col-md-4 col-6">
                                             <span  className="count">3</span>
                                             <p>Branches</p>
                                         </div>
                                     </div>
                                 </div>
                            <div className="new-img">
                                <img src={require('../Img/sidekix-media-lrk0l9w8rI0-unsplash.jpg')} alt="" height={50}/>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
