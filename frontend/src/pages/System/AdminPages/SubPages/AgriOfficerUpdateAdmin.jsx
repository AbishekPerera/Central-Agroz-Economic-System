import React from "react";
import Sidebar from "../../../../components/System/Admin/Sidebar/Sidebar";
import SystemFooter from "../../../../components/System/Admin/Footer/SystemFooter";
import NavBar from "../../../../components/System/Admin/NavBar/NavBar";
import { Link } from "react-router-dom";
import { Col, Form, Row } from "react-bootstrap";

const AgriOfficerUpdateAdmin = () => {
  const districts = [
    "Ampara",
    "Anuradhapura",
    "Badulla",
    "Batticaloa",
    "Colombo",
    "Galle",
    "Gampaha",
    "Hambantota",
    "Jaffna",
    "Kalutara",
    "Kandy",
    "Kegalle",
    "Kilinochchi",
    "Kurunegala",
    "Mannar",
    "Matale",
    "Matara",
    "Moneragala",
    "Mullaitivu",
    "Nuwara Eliya",
    "Polonnaruwa",
    "Puttalam",
    "Ratnapura",
    "Trincomalee",
    "Vavuniya",
  ];

  const provinces = [
    "Central",
    "Eastern",
    "North Central",
    "Northern",
    "North Western",
    "Sabaragamuwa",
    "Southern",
    "Uva",
    "Western",
  ];

  return (
    <div className="mainContainer update-agri-officer-details-background">
      <div className="contentContainer">
        <div className="systemNavBar">
          <NavBar />
        </div>
        <div className="content ">
          <div className="admin-update-back-btn">
            <Link to={"/admin/agriofficers"}>
              <button className="btn btn-secondary">
                <i class="bi bi-arrow-left-short"></i>Back
              </button>
            </Link>
          </div>
          <br />

          <div className="update-agri-officer-details-body">
            <h1>Update Agricultural Officer Details</h1>
            <br />
            <hr />
            <Form>
              <h5>Agricultural Officer Id : 869869698</h5>
              <hr />
              <Row>
                <Col lg={6}>
                  {/* <Form.Group className="mb-3" controlId="formBasicId">
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="text" placeholder="Enter Id" required />
                  </Form.Group> */}
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicContact">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Contact"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Address"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicGramaNiladariDivision"
                  >
                    <Form.Label>Grama Niladari Division</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Grama Niladari Division"
                      required
                    />
                  </Form.Group>
                  <Row>
                    <Col lg={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicDistrict"
                      >
                        <Form.Label>District</Form.Label>
                        <Form.Select required>
                          <option value="">Choose...</option>
                          {districts.map((district) => (
                            <option value={district}>{district}</option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicProvince"
                      >
                        <Form.Label>Province</Form.Label>
                        <Form.Select required>
                          <option value="">Choose...</option>
                          {provinces.map((province) => (
                            <option value={province}>{province}</option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
                <Col lg={6}>
                  <div className="agri-officer-update-profile-picure text-center">
                    <img
                      src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                      alt="profile-pic"
                      style={{ width: "250px", height: "250px" }}
                    />
                  </div>

                  <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Image URL"
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="formBasicOfficerRegDate"
                  >
                    <Form.Label>Officer Registration Date</Form.Label>
                    <Form.Control type="date" required />
                  </Form.Group>
                </Col>
              </Row>
              <br />
              <div className="update-agri-officer-details-btn text-end">
                <button className="btn btn-success" type="submit">
                  <i class="bi bi-check-circle"></i>. Update
                </button>
              </div>
            </Form>
          </div>
        </div>
        <SystemFooter />
      </div>
    </div>
  );
};

export default AgriOfficerUpdateAdmin;
