import React from 'react';
import {Col, Row} from "react-bootstrap";

function About() {
    return (
        <div>
            <section className="about" id="about">
                <div className="container">


                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-6">
                            <img src={require('../Img/michael-oxendine-GHCVUtBECuY-unsplash.jpg')} alt="" />
                        </div>

                        <div className="col-xl-7 col-lg-7 col-md-6 d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
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
            <section className="why">

                    <div className="section-title">
                        <h2>What we do</h2>
                    </div>

                    <Row>
                        <Col md={3}>
                            <div className="box">
                                <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFVklEQVR4nO2ae4gVVRjAf5v2siy1bG0zoV00U3rQsriSFj3dsiiIUMqKKJYKekJFabGYYaU9kaCNCGIxjaQkone2ZZlrL8is7CGYstprQVvbbdvd/vi+Yc49O3P3zNy5O3u984NhzpzXfOfMOd/5zncGMjIyMjLKlwqHPA3ABcBhRZYlaTqBt/WKxSHA60B/iV9rtS2B5BsBzwA3afhfYEeevMORicBBGl4B3BKl8Bik0f3Ax8DoREUbGo4APkHa0A0cGaVwPf4QWmClLUU6ZVrhMibGNGA9IpvJ1fjtmBGlwpOMgg9YaT0avyiOpEViESJTjxXfhN+OE4MKjgyp8HvgBy10LzAK+MUqMwNojC1ysnhfdyS+TDXArRr+DmlPJM4Cukhfixd6dQGzozbeox5RJH3DoCFRrz5EL+Sd+y6GEIhGPVrDP+v9aeApx/LF5jb84V6j9z+APYMVDNMBNnsCKuvA1wtp02GEI8l0QMKClBxZB6QtQNqUfQeEKcEzgMvJvwW+GDg2cYniUWuEnw1I7wReAT51qewhSnPdd7ELltiNte2ABuBNDXcDOwM6qFrvHeQuP2kyVi8IXgaPAw7WcAN5nCSrkN76UwsF4fVoUxxJi4S56QliIvCXpq80E2wlWKn3zQR//VJlB/CNhnP0Vtgq0BcSP9kInwCMKEyuRBiBPy0hV0aTwDZFWQavRUaGxzXABuDwCHUkzWhgI+L48NhsPUdiHTJP1lnxlcA/mtaDKD9vzi2P+7IEeMKQowP4T8P7gPFW3sC2uY6Ac/E9q+dr5R/q80VRpU6QuXr/ANmtztHnQ4GzXSpw7QAz33akpz0lmaYe8OTaCfQisnk47XRdt8MfIcOnAngP2IL/5Vsd6ygGrcj+/yrEDpiu8X2IzJEJ0wEAjzLQuvodWWPTYhLi+LDlsr3DENI21xEAcA/iXLwSOAZoAxaT7oHJduB0xHNdB/wGtAAvxq0w3wgodQpaBfZbokwBgHnAOcZzG/A8MAW4AdlwtACbEEfqMs3XixhNLfj2+iRgoYZ7gHeRg8w6rctjHzLVHtb6fkKO7h4BmoHrgAMtOR8Dtro0KOoImImvccci/oIzgS+BWYgbfT2yPo9CDilOAaqAF4DrjbrGa/pkxJR9DbgQ0eqNwAR9xxh9TyPwKmJ5enVXa55KfT5Nn+0OcWYwHfAkvlvc41tgtYYrgDVI70/QuuZp2ibgZaNcrabP0ud24HFgvsbXIQ0ch6w0noZfjXRoP3CFlh2nz/lM4MR0QLUhTB1yMPm+pnkvqMGfXrcj3phTCfbILEaGfqWV3oZ09t1G3EtIo++KIXcgUXUAiNV1qYa3IF9uNjIfQY7UvkKsRRB31HTEZlgRUN9eZCn7Gumo+Ro/BVnju4CjNG4NsA24L4bcgcTpgG7gC+P5TkS5VSFzrxY4z0h/DvmSG4EbGdgJy5AhvBa4zIhfru+C3C9+PzKa5pIAUTtgA/JFTVYBvyLzrxPR4FuRVaAZafznwB3IXK7AtyKbgV2I4mwCpiLTqZlc/ta4bYiZuwDx73nur25N/zFiewaQGULlRtgUqGfgcueKt1QtzJNnKuKcjPTfToFUuWTyhkmhV/sg77k5offEuZx2g+3IP4JxeWOQ9JWIPTGUf59dgsNJljcC0nRyFItWHJTgbr2fTLqOjqQ5HtmTgDU97aOxOcBbGi7Fv0PD8P4a7UeOxt7Jl3kJ++fhaC/woN3YsJ+kZiLH46X4i2wQe5F9xmdpC5Ix3DCnwFJkr+3672CpkmOpmo3djbi7y4FdqFFkWoKNpHvON5QMZqlmZGRkZJQF/wPRfFZhLJuZ1QAAAABJRU5ErkJggg=="/></span>
                                <h5>Selling service</h5>
                                <p>Lacinia tempor tortor nibh. Et mattis cubilia suspendisse cras justo potenti.</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="box">
                                <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADHklEQVRoge2YXYhOQRjHf7uEkpU2ojY3Fosl5aNsrkTJutZyJW62xC5FUcINixCR5Ea52OKO2OXKx1oJbSLrYyVpcUPZdSFiXcwz7ey855x3zpzzfnn3X0/vOzPPM/P/n/PMc84ZGEX5YBxwFPgE9ANHpK/k0AYMWXa4oIw80Y8ivwJokP/9BWXkCX0XwtqpojKg7zaZKeFjGmHtJHbfJl0RICRnVy1ljOA+1tWxiBB4oYNSqyRRtkJqgIXAxBxwSR1BZbIe6DHGfgLHCN5Hd8XnUcBYq4y1hqx9nuAq1ZSFX+RmN3EVqAUOAm+BrcBu4L0srlEDrAR+A8uAWcA7xzVMdAAfjbbPHBmKq6X9zOprAzZZsbvE95D87rPGXe/I2hj8nB3HAF8YfhC1AotDYh8DH4AJwADw3Bp3FbIXWG2Y+bLpLQRUurxiZN6+AOYbPrXSf0ra7dKu9xBi2/RsQlyrVhdQJ8SbgSfAAuCE4aM3ZD1wAZhp9cfBdmCpYV+zBbhs9jnAFuABcB3oBa4A34AZht9GVDWbAiyRPl1x9hPv1acPeBrDPxD2rZsKDIodADYD18TnuPgskna7NddD6V8ubZ1aPaiLoW2NjOvUumeNN0TwcxYCsAp4aYz9Ai6iNjWoD6YhYIMVt0f6T1pCbGu2hMR+jrgK0ZiGSrXxLhPlCKkIKQYkqlpFj/9GSFT5Leb0ykDQHenKO4v4yPhmzyUKfopSkhgVUmwoGyGVQDd+J4zZEGfOOw5cI7E+5oJRVSqs7WqNSYTcIvqLLgppld+dEtfpEQuot9y/qO+QyR7xaQmZBHwXLvPCnKLyrgV1bnVJJioUBoHLwmVb3GDzKtR5EkjzyT4b+INHdui87PBcGNJ/Rekk5n6tAF5L0LoEC6ctpFHi+3AsxTrgjWtACDTxaoZPK5MIqRROzqVYl9wdCRaF5A/MILTgWIrrUBt8AKhKuGgT6jjoh1g3fod1JqpQ3LIWoXMoxacTLphLnEFxPBvmYJbcuXki5YOspViX3Bt5JOWLm0SUYvu0vRSsV5M3y+vn+Bem4ChFzmWCf0q7jLTZ7ftUAAAAAElFTkSuQmCC"/></span>
                                <h5>Rental Service</h5>
                                <p>Lacinia tempor tortor nibh. Et mattis cubilia suspendisse cras justo potenti.</p>
                            </div>

                        </Col>
                        <Col md={3}>
                            <div className="box">
                                <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADmklEQVR4nO2by0sXURTHP0WaUppF/SjKVpWG9iKRqNykrbOo/6TWtZDSdpFCmyBo1a5aBNlT0jYKgRYSheEzKnqYYEGpLe6Z7vj7zeOOzvibn94PDPc6c2Y859zHfO91BIvFYrGsbIqBNmACmFsmxzjQKrGF0poCh5M6rpgkYFyMj5oYFwjH0T0hFCdbyw2juFYvgSOpZsUnYI2rvhyHQSi2B7jqq/LmRTIY9egV3wNsAvLtQL5ZaAIyQB/wIkZf8kZUJZgBBuSe3kQ8igfjuMIMu1GBZpgf/ID87NBD7mKkO+R61MP9vMXGBcx/DfpRAhwGnsjPtcBroBH4nPULvZwIuh6VRMRaWKa2AP0uu0FgaxKOxExsQwBUV+9FD4VCINYEFCJ2OWyC1QFYHZCoDoj7KDgdEDdWB0TA6gCsDrA6IBSTSdCLDPAA+AU0xOdOJKqAZuAksB2oRMXzHXgT5UGFpgPqUG8k01fnM9SfynxJkw4Ies8XAe3ArNh+BW4Cp1C9YR1QiuoJzXJtSmxngetyPXIC+lwB+wWPOL/YBPhJ643AU7GZBlqA8gCfHcqAi3KP8/wN2UZhCXC3ul/wSVKEDn4MJcqicgD4IM/oIeu7gbTrgHZ08Dt8bE4A74D3UveiEp2EDveFNOuAOtT4nSa45d1KtT/A7iDwW555xDmZ5gQ4s31LiN0QOo6hENtLYvfcOZHWBFShZ/uciSuLLnQcXSG2ZSitMAfsTbMSbJbyLjAZYjviU/diCrgj9XNpTkCTlPcNbEd96n48lPJYmhOwU8pBA9uoCXglZbVfAnrIVWVLfW6blB99fHQTZQgAfJJyM3hPgmk491Pqa3Pcz2W/6959BvblYjuZ5iHgtLyJ8HK3uskQ+N+7/JbDzsImn+dGgD0oGRsW1A/UxDYn9TBqpByG9OqAC3jI1pi4Jc8+D/pT2cA1cx5whNA31FI3iCZUa06g9YMfFWghtBvUB8WLXcYmfVwOCeqty/YLwV+8tYldp3OiWJLg9IQ0Hn8IXgyZJqAetY03AxwKeF6q6EAFNgzs8rFpRC11x1E7RF5Uohv5Wsw+Jkop+u0whlrSRqUeHfxjFr4ZnDcqgJfo4XAVWG94XxtqD8AJviIhHxOnBLiB3hSdAm4DZ1Dv9XJUUqqB06hXnTPbz6C6fcG1vBcNqM0M0wm0k4AJr5A/kK4FzqL+1acG2AT8RanGUeARcA+1V2ixWCye/AMW3maQI685KgAAAABJRU5ErkJggg=="/></span>
                                <h5>Property Listing</h5>
                                <p>Lacinia tempor tortor nibh. Et mattis cubilia suspendisse cras justo potenti.</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="box">
                                <span><img src="data:image/png;base64,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"/></span>
                                <h5>Legal Investment</h5>
                                <p>Lacinia tempor tortor nibh. Et mattis cubilia suspendisse cras justo potenti.</p>
                            </div>
                        </Col>
                    </Row>
            </section>
        </div>
    );
}

export default About;
