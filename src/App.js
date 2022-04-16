import React from "react";
import './App.css';
import Home from "./Components/Home";
import './App.css'
import './Css/Style.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import Messages from "./Components/Dashboard/Messages";
import Comments from "./Components/Dashboard/Comments";
import BookingRequest from "./Components/Dashboard/bookingRequest";
import ListingProperties from "./Components/Dashboard/listingProperties";
import FavoriteProperties from "./Components/Dashboard/favoriteProperties";
import PurchasedProperty from "./Components/Dashboard/purchasedProperty";
import PaymentInvoice from "./Components/Dashboard/paymentInvoice";
import SubmitProperty from "./Components/Dashboard/submitProperty";
import PersonalInformation from "./Components/Dashboard/personalInformation";
import ProfileSettings from "./Components/Dashboard/profileSettings";
import ChangePassword from "./Components/Dashboard/changePassword";
import SocialMediaSettings from "./Components/Dashboard/socialMediaSettings";
import SystemSettings from "./Components/Dashboard/systemSettings";


function App() {
  return (

      <>
          <Router>
              <div className="App">
              </div>
              <div className='content'>
                  <Routes>
                      <Route exact path="/" element={<Home />} />
                      <Route  path="/Login" element={<Login />} />
                      <Route  path="/Register" element={<Register />} />
                      <Route path="/dashboard" element={<Dashboard />}/>
                      <Route path="/messages" element={<Messages />}/>
                      <Route path="/comments" element={<Comments /> }/>
                      <Route path="/booking-request" element={<BookingRequest /> }/>
                      <Route path="/listing-properties" element={<ListingProperties /> }/>
                      <Route path="/favorite-properties" element={<FavoriteProperties /> }/>
                      <Route path="/purchased-property" element={<PurchasedProperty /> }/>
                      <Route path="/payment-and-invoice" element={<PaymentInvoice /> }/>
                      <Route path="/submit-property" element={<SubmitProperty /> }/>
                      <Route path="/personal-information" element={<PersonalInformation />}/>
                      <Route path="/profile-settings" element={<ProfileSettings /> }/>
                      <Route path="/change-password" element={<ChangePassword />}/>
                      <Route path="/social-media-settings" element={<SocialMediaSettings /> }/>
                      <Route path="/system-settings" element={<SystemSettings />}/>
                  </Routes>
              </div>
          </Router>
          </>


  );
}

export default App;
