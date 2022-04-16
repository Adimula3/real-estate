import {Col, Dropdown, Row} from "react-bootstrap";
import React from "react";
import Avatar from "../../assets/Img/01.jpg"
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";

const TopBar = () => {
  return (
      <>
              <div className="top-bar">
                  <div className="container-fluid">
                      <Row>
                          <Col lg={8} className="col-6">
                              <div className="dashboard-top-left">
                                  <h4>Agent</h4>
                              </div>
                          </Col>
                          <Col lg={4} className="col-6">
                              <div className="dashboard-top-right">
                                  <div className="dropdown dropdown-select">
                                      <Dropdown>
                                          <DropdownToggle><img src={Avatar} alt=""/> Hi, kareem </DropdownToggle>
                                          <DropdownMenu>
                                              <DropdownItem href="#">profile</DropdownItem>
                                              <DropdownItem href="#">sign out</DropdownItem>
                                          </DropdownMenu>
                                      </Dropdown>
                                  </div>
                              </div>
                          </Col>



                      </Row>
                  </div>
              </div>
      </>
  )
}
export default TopBar