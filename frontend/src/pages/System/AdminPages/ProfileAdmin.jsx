import React from "react";
import Sidebar from "../../../components/System/Admin/Sidebar/Sidebar";
import NavBar from "../../../components/System/Admin/NavBar/NavBar";
import SystemFooter from "../../../components/System/Admin/Footer/SystemFooter";
import "./styles/DashboardAdmin.css";
import { Link } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";

const ProfileAdmin = () => {
  // {
  //   id: "1";
  //   name: "Supper Admin";
  //   email: "abc@aa.aa";
  //   phone: "0712345678";
  //   address: "No 1, Colombo";
  //   role: "Supper Admin";
  //   image: "https://picsum.photos/200";
  // }
  return (
    <div className="mainContainer">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="contentContainer">
        <div className="systemNavBar">
          <NavBar />
        </div>
        <div className="content">
          <div className="update-agri-officer-details-body">
            <h1>Supper Admin Profile</h1>
            <br />
            <hr />
            <br />
            <Form>
              <div className="agri-officer-update-profile-picure text-center">
                <img
                  src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                  alt="profile-pic"
                  style={{ width: "250px", height: "250px" }}
                />
              </div>
              <br />
              <Row>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      placeholder="Enter Name"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      disabled
                      type="email"
                      placeholder="Enter Email"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      placeholder="Enter Phone"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      placeholder="Enter Address"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Role</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      placeholder="Enter Role"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      placeholder="Enter Image"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <br />
            </Form>
          </div>
        </div>
        <SystemFooter />
      </div>
    </div>
  );
};

export default ProfileAdmin;
