import React from "react";
import './App.css';
import Home from "./pages/home";
import './App.css'
import './styles/style.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./dashboard";
import Messages from "./dashboard/Messages";
import Comments from "./dashboard/Comments";
import BookingRequest from "./dashboard/bookingRequest";
import ListingProperties from "./dashboard/listingProperties";
import FavoriteProperties from "./dashboard/favoriteProperties";
import PurchasedProperty from "./dashboard/purchasedProperty";
import PaymentInvoice from "./dashboard/paymentInvoice";
import SubmitProperty from "./dashboard/submitProperty";
import PersonalInformation from "./dashboard/personalInformation";
import ProfileSettings from "./dashboard/profileSettings";
import ChangePassword from "./dashboard/changePassword";
import SocialMediaSettings from "./dashboard/socialMediaSettings";
import SystemSettings from "./dashboard/systemSettings";


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
