import React from "react";
import SystemFooter from "../../../../components/System/Admin/Footer/SystemFooter";
import NavBar from "../../../../components/System/Admin/NavBar/NavBar";
import { Link } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";

const AddAgriOfficerAdmin = () => {
  //     {
  //   id: 3,
  //   name: "Agri Officer 3",
  //   email: "officer3@mail.com",
  //   contact: "0771234567",
  //   address: "No 3, Colombo",
  //   image:
  //     "https://github.com/AbishekPerera/img/blob/main/avatar.png?raw=true",
  //   gramaniladariDivision: "div 1",
  //   district: "gampaha",
  //   province: "western",
  //   officerRegDate: "2021-09-01",
  // },

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
    <div>
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
              <h1>Create New Agricultural Officer</h1>
              <br />
              <hr />

              <Form>
                <Row>
                  <Col>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextName"
                    >
                      <Form.Label column sm="2">
                        Name
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control required type="text" placeholder="Name" />
                      </Col>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label column sm="2">
                        Email
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          required
                          type="email"
                          placeholder="Email"
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextContact"
                    >
                      <Form.Label column sm="2">
                        Contact
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          required
                          type="text"
                          placeholder="Contact"
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextAddress"
                    >
                      <Form.Label column sm="2">
                        Address
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          required
                          as="textarea"
                          rows={3}
                          placeholder="Address"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextGramaNiladariDivision"
                    >
                      <Form.Label column sm="2">
                        Grama Niladari Division
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          required
                          type="text"
                          placeholder="Grama Niladari Division"
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextDistrict"
                    >
                      <Form.Label column sm="2">
                        District
                      </Form.Label>
                      <Col sm="10">
                        <Form.Select defaultValue="Choose...">
                          {districts.map((district) => (
                            <option>{district}</option>
                          ))}
                        </Form.Select>
                      </Col>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextProvince"
                    >
                      <Form.Label column sm="2">
                        Province
                      </Form.Label>
                      <Col sm="10">
                        <Form.Select defaultValue="Choose...">
                          {provinces.map((province) => (
                            <option>{province}</option>
                          ))}
                        </Form.Select>
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col>
                    <div className="agri-officer-update-profile-picure text-center">
                      <img
                        src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                        alt="profile-pic"
                        style={{ width: "250px", height: "250px" }}
                      />
                    </div>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextImage"
                    >
                      <Form.Label column sm="2">
                        Image
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          required
                          type="text"
                          placeholder="Image URL"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextPassword"
                    >
                      <Form.Label column sm="2">
                        Password
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          required
                          type="password"
                          placeholder="Password"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextConfirmPassword"
                    >
                      <Form.Label column sm="2">
                        Confirm Password
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          required
                          type="password"
                          placeholder="Confirm Password"
                        />
                      </Col>
                    </Form.Group>
                  </Col>
                </Row>

                <br />
                <div className="update-agri-officer-details-btn text-end">
                  <Button variant="primary" type="submit">
                    Create New Agricultural Officer
                  </Button>
                </div>
              </Form>
            </div>
          </div>
          <SystemFooter />
        </div>
      </div>
    </div>
  );
};

export default AddAgriOfficerAdmin;
