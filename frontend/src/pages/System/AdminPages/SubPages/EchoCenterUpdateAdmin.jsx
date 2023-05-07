import React from "react";
import Sidebar from "../../../../components/System/Admin/Sidebar/Sidebar";
import SystemFooter from "../../../../components/System/Admin/Footer/SystemFooter";
import NavBar from "../../../../components/System/Admin/NavBar/NavBar";
import { Link } from "react-router-dom";
import { Col, Form, Row } from "react-bootstrap";

const EchoCenterUpdateAdmin = () => {
  //       id: "EC004",
  //   echo_name: "Echo Center 4",
  //   echo_address: "No 4, Colombo Road, Colombo",
  //   province: "Western",
  //   district: "Colombo",
  //   phone: "0112345678",
  //   officer_name: "Asanka",
  //   officer_email: "saa@aa.aa",
  //   officer_contact: "0771234567",
  //   officer_address: "No 4, Colombo Road, Colombo",
  //   center_registered_date: "2021-09-01",
  return (
    <div className="mainContainer update-echo-center-details-background">
      <div className="contentContainer">
        <div className="systemNavBar">
          <NavBar />
        </div>
        <div className="content ">
          <div className="admin-update-back-btn">
            <Link to={"/admin/echoCenters"}>
              <button className="btn btn-secondary">
                <i class="bi bi-arrow-left-short"></i>Back
              </button>
            </Link>
          </div>
          <br />

          <div className="update-echo-center-details-body">
            <h1>Update Economic Center Details</h1>
            <br />
            <hr />
            <Form>
              <Row>
                <Col>
                  <h3>Economic center informations</h3>

                  <Form.Group className="mb-3" controlId="formBasicCenterName">
                    <Form.Label>Eco Center Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Jaffna Economic Center"
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="formBasicCenterAddress"
                  >
                    <Form.Label>Eco Center Address</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      required
                      placeholder="Kankesanthurai Road, Kokuvil, Jaffna"
                    />
                  </Form.Group>

                  <Row>
                    <Col>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicProvince"
                      >
                        <Form.Label>Province</Form.Label>
                        <Form.Select>
                          <option value="">Select a province</option>
                          <option value="Central Province">
                            Central Province
                          </option>
                          <option value="Eastern Province">
                            Eastern Province
                          </option>
                          <option value="Northern Province" selected>
                            Northern Province
                          </option>
                          <option value="Southern Province">
                            Southern Province
                          </option>
                          <option value="Western Province">
                            Western Province
                          </option>
                          <option value="North Western Province">
                            North Western Province
                          </option>
                          <option value="North Central Province">
                            North Central Province
                          </option>
                          <option value="Uva Province">Uva Province</option>
                          <option value="Sabaragamuwa Province">
                            Sabaragamuwa Province
                          </option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicDistrict"
                      >
                        <Form.Label>District</Form.Label>
                        <Form.Select>
                          <option value="">Select a district</option>
                          <option value="Ampara">Ampara</option>
                          <option value="Anuradhapura">Anuradhapura</option>
                          <option value="Badulla">Badulla</option>
                          <option value="Batticaloa">Batticaloa</option>
                          <option value="Colombo">Colombo</option>
                          <option value="Galle">Galle</option>
                          <option value="Gampaha">Gampaha</option>
                          <option value="Hambantota">Hambantota</option>
                          <option value="Jaffna" selected>
                            Jaffna
                          </option>
                          <option value="Kalutara">Kalutara</option>
                          <option value="Kandy">Kandy</option>
                          <option value="Kegalle">Kegalle</option>
                          <option value="Kilinochchi">Kilinochchi</option>
                          <option value="Kurunegala">Kurunegala</option>
                          <option value="Mannar">Mannar</option>
                          <option value="Matale">Matale</option>
                          <option value="Matara">Matara</option>
                          <option value="Monaragala">Monaragala</option>
                          <option value="Mullaitivu">Mullaitivu</option>
                          <option value="Nuwara Eliya">Nuwara Eliya</option>
                          <option value="Polonnaruwa">Polonnaruwa</option>
                          <option value="Puttalam">Puttalam</option>
                          <option value="Ratnapura">Ratnapura</option>
                          <option value="Trincomalee">Trincomalee</option>
                          <option value="Vavuniya">Vavuniya</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="0701273992" />
                  </Form.Group>
                </Col>
                <Col>
                  <h3>Officer informations</h3>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Officer Name</Form.Label>
                    <Form.Control type="text" placeholder="Raj Kumar" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Officer Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="rajkumar@company.com"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Officer Contact</Form.Label>
                    <Form.Control type="text" placeholder="0701234556" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Officer Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="No. 123, Main Street, Jaffna"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col className="text-end">
                  <button className="btn btn-primary" type="submit">
                    Update
                  </button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
        <SystemFooter />
      </div>
    </div>
  );
};

export default EchoCenterUpdateAdmin;
