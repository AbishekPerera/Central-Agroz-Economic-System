import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/System/Admin/Sidebar/Sidebar";
import NavBar from "../../../components/System/Admin/NavBar/NavBar";
import SystemFooter from "../../../components/System/Admin/Footer/SystemFooter";
import "./styles/DashboardAdmin.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";

const ProfileAdmin = () => {
  const [adminData, setAdminData] = useState();
  const history = useNavigate();

  useEffect(() => {
    const adminInfo = localStorage.getItem("adminInfo");

    setAdminData(JSON.parse(adminInfo));

    if (adminInfo === null) {
      history("/admin/login");
    }
  }, [adminData]);

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
                  src={adminData?.admin.image}
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
                      placeholder={adminData?.admin.name}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      disabled
                      type="email"
                      placeholder={adminData?.admin.email}
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
                      placeholder={adminData?.admin.phone}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      placeholder={adminData?.admin.address}
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
                      placeholder={adminData?.admin.role}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      placeholder={adminData?.admin.image}
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
