import React from "react";
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import './App.css'
import './Css/Style.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import Messages from "./Components/Dashboard/Messages";
import Welcome from "./Components/Dashboard/Welcome";


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
                      <Route path="/Dashboard" element={<Dashboard />}/>
                      <Route path="/Dashboard/Messages" element={<Messages />}/>
                      <Route path="/Dashboard/Welcome" element={<Welcome />} />
                  </Routes>
              </div>
          </Router>
          </>


  );
}

export default App;
