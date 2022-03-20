import React from 'react';
import {Carousel} from "react-bootstrap";


function PropertyDetails() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../Img/pexels.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../Img/michael-oxendine-GHCVUtBECuY-unsplash.jpg"
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../Img/hero-bg.jpg"
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    );
}

 export default PropertyDetails;