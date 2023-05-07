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
            <h1>Super Admin Profile</h1>
            <br />
            <hr />
            <br />
            <Form>
              <div className="agri-officer-update-profile-picure text-center">
                <img
                  src="https://avatars.githubusercontent.com/u/84265431?v=4"
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
                      placeholder="Sunera Abishek"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      disabled
                      type="email"
                      placeholder="abhishekperera77@gmail.com"
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
                      placeholder="0701273992"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      placeholder="123,Peralanda,Ragama"
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
                      placeholder="Super Admin"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      placeholder="https://github.com/AbishekPerera/img/blob/main/avatar.png?raw=true"
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
