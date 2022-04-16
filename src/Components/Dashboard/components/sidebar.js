import {Link} from "react-router-dom";
import {Row} from "react-bootstrap";
import React from "react";

const Sidebar = ({pageName}) => {
    return (
        <>
            <Row>
                <div className="dashboard-sidebar flat-small py-4 px-0 w-100">
                    {/*Overview*/}
                    <h6 className="text-primary border-bottom-gray pb-3 my-2 ps-3 d-lg-none d-xl-block">Overview</h6>
                    <ul className="mb-4 text-white">
                        <li className={pageName === "dashboard" ? "active" : "" }><Link to="/dashboard" className="link">
                            <i className="flaticon-dashboard me-3 me-lg-0 me-xl-3"></i>
                            <span className="d-lg-none d-xl-block">Dashboard</span>
                            </Link></li>

                        <li className={pageName === "messages" ? "active" : "" }><Link to="/messages" className="link">
                            <i className="flaticon-email me-3 me-lg-0 me-xl-3"></i>
                            <span className="d-lg-none d-xl-block">Message</span><sup className="text-primary">(05)</sup>
                        </Link></li>

                        <li className={pageName === "comments" ? "active" : "" }><Link to="/comments" className="link">
                            <i className="flaticon-chat-comment-oval-speech-bubble-with-text-lines me-3 me-lg-0 me-xl-3"></i>
                            <span className="d-lg-none d-xl-block">Comments</span><sup className="text-primary">(12)</sup>
                        </Link></li>

                        <li className={pageName === "booking-request" ? "active" : "" }><Link to="/booking-request" className="link">
                            <i className="flaticon-calendar me-3 me-lg-0 me-xl-3"></i>
                            <span className="d-lg-none d-xl-block">Booking Request</span>
                        </Link></li>
                    </ul>

                    {/*Manage*/}
                    <h6 className="text-primary border-bottom-gray pb-3 my-2 ps-3 d-lg-none d-xl-block">Manage</h6>
                    <ul className="mb-4 text-white">
                        <li className={pageName === "listing-properties" ? "active" : "" }><Link to="/listing-properties" className="link">
                            <i className="flaticon-house-1 me-3 me-lg-0 me-xl-3"></i>
                            <span className="d-lg-none d-xl-block">Listing Properties</span>
                        </Link></li>

                        <li className={pageName === "favorite-properties" ? "active" : "" }><Link to="/favorite-properties" className="link">
                            <i className="flaticon-star me-3 me-lg-0 me-xl-3"></i>
                            <span className="d-lg-none d-xl-block">Favorite Properties</span>
                        </Link></li>

                        <li className={pageName === "purchased-property" ? "active" : "" }><Link to="/purchased-property" className="link">
                            <i className="flaticon-rent me-3 me-lg-0 me-xl-3"></i>
                            <span className="d-lg-none d-xl-block">Purchased Property</span>
                        </Link></li>

                        <li className={pageName === "payment-and-invoice" ? "active" : "" }><Link to="/payment-and-invoice" className="link">
                            <i className="flaticon-bill me-3 me-lg-0 me-xl-3"></i>
                            <span className="d-lg-none d-xl-block">Payments and Invoice</span>
                        </Link></li>

                        <li className={pageName === "submit-property" ? "active" : "" }><Link to="/submit-property" className="link">
                            <i className="flaticon-forward me-3 me-lg-0 me-xl-3"></i>
                            <span className="d-lg-none d-xl-block">Submit Property</span>
                        </Link></li>
                    </ul>

                    {/*Your Details*/}
                    <h6 className="text-primary border-bottom-gray pb-3 my-2 ps-3 d-lg-none d-xl-block">Your Details</h6>
                    <ul className="mb-4 text-white">
                        <li className={pageName === "personal-information" ? "active" : "" }><Link to="/personal-information" className="link">
                            <i className="flaticon-seller me-3 me-lg-0 me-xl-3"></i>
                            <span className="d-lg-none d-xl-block">Personal Information</span>
                        </Link></li>

                        <li className={pageName === "profile-settings" ? "active" : "" }><Link to="/profile-settings" className="link">
                            <i className="flaticon-resume me-3 me-lg-0 me-xl-3"></i>
                            <span className="d-lg-none d-xl-block">Profile Settings</span>
                        </Link></li>

                        <li className={pageName === "change-password" ? "active" : "" }><Link to="/change-password" className="link">
                            <i className="flaticon-lock me-3 me-lg-0 me-xl-3"></i>
                            <span className="d-lg-none d-xl-block">Change Password</span>
                        </Link></li>

                        <li className={pageName === "social-media-settings" ? "active" : "" }><Link to="/social-media-settings" className="link">
                            <i className="flaticon-share me-3 me-lg-0 me-xl-3"></i>
                            <span className="d-lg-none d-xl-block">Social Media Settings</span>
                        </Link></li>
                    </ul>

                    {/*Settings*/}
                    <h6 className="text-primary border-bottom-gray pb-3 my-2 ps-3 d-lg-none d-xl-block">Settings</h6>
                    <ul className="mb-4 text-white">
                        <li className={pageName === "system-settings" ? "active" : "" }><Link to="/system-settings" className="link">
                            <i className="flaticon-settings me-3 me-lg-0 me-xl-3"></i>
                            <span className="d-lg-none d-xl-block">System Settings</span>
                        </Link></li>
                    </ul>
                </div>
            </Row>
        </>
    )

}
export default Sidebar