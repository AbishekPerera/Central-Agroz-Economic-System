import React, { useState } from "react";
import Sidebar from "../../../../components/System/Admin/Sidebar/Sidebar";
import SystemFooter from "../../../../components/System/Admin/Footer/SystemFooter";
import NavBar from "../../../../components/System/Admin/NavBar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";

const AddEchoCenterAdmin = () => {
  //   {
  //   "ecoCenterName": "Green Oasis",
  //   "ecoCenterAddress": "456 Oak Street",
  //   "province": "Ontario",
  //   "district": "Toronto",
  //   "phone": "555-1234",
  //   "officerName": "Jane Smith",
  //   "officerEmail": "jane.smith@greenoasis.com",
  //   "officerContact": "416-555-4321",
  //   "officerAddress": "789 Maple Avenue",
  //   "password": "mypassword123"
  // }

  const [ecoCenterName, setEcoCenterName] = useState("");
  const [ecoCenterAddress, setEcoCenterAddress] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [phone, setPhone] = useState("");
  const [officerName, setOfficerName] = useState("");
  const [officerEmail, setOfficerEmail] = useState("");
  const [officerContact, setOfficerContact] = useState("");
  const [officerAddress, setOfficerAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const history = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    // ?log all the values
    // console.log(
    //   ecoCenterName,
    //   ecoCenterAddress,
    //   province,
    //   district,
    //   phone,
    //   officerName,
    //   officerEmail,
    //   officerContact,
    //   officerAddress,
    //   password,
    //   confirmPassword
    // );

    if (password !== confirmPassword) {
      // alert("Passwords do not match");
      swal("Passwords do not match", "", "error");
    } else {
      const echoCenterAdmin = {
        ecoCenterName,
        ecoCenterAddress,
        province,
        district,
        phone,
        officerName,
        officerEmail,
        officerContact,
        officerAddress,
        password,
      };

      axios
        .post("http://localhost:8075/ecocenters/register", echoCenterAdmin)
        .then((res) => {
          // alert("Eco Center Admin Added");
          swal("Eco Center Admin Added", "", "success");
          history("/admin/echoCenters");
        })
        .catch((err) => {
          // alert(err);
          swal(err, "", "error");
        });
    }
  };

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
            <h1>Create New Economic Center</h1>
            <br />
            <hr />
            <Form onSubmit={submitHandler}>
              <Row>
                <Col>
                  <h3>Economic center informations</h3>

                  <Form.Group className="mb-3" controlId="formBasicCenterName">
                    <Form.Label>Eco Center Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Echo Center Name"
                      required
                      onChange={(e) => setEcoCenterName(e.target.value)}
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
                      placeholder="Enter Echo Center Address"
                      onChange={(e) => setEcoCenterAddress(e.target.value)}
                    />
                  </Form.Group>

                  <Row>
                    <Col>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicProvince"
                      >
                        <Form.Label>Province</Form.Label>
                        <Form.Select
                          onChange={(e) => setProvince(e.target.value)}
                        >
                          <option value="">Select a province</option>
                          <option value="Central Province">
                            Central Province
                          </option>
                          <option value="Eastern Province">
                            Eastern Province
                          </option>
                          <option value="Northern Province">
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
                        <Form.Select
                          onChange={(e) => setDistrict(e.target.value)}
                        >
                          <option value="">Select a district</option>
                          <option value="Ampara">Ampara</option>
                          <option value="Anuradhapura">Anuradhapura</option>
                          <option value="Badulla">Badulla</option>
                          <option value="Batticaloa">Batticaloa</option>
                          <option value="Colombo">Colombo</option>
                          <option value="Galle">Galle</option>
                          <option value="Gampaha">Gampaha</option>
                          <option value="Hambantota">Hambantota</option>
                          <option value="Jaffna">Jaffna</option>
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

                  <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Phone"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <h3>Officer informations</h3>
                  <Form.Group className="mb-3" controlId="formBasicOname">
                    <Form.Label>Officer Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Officer Name"
                      onChange={(e) => setOfficerName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicOemail">
                    <Form.Label>Officer Email</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Officer Email"
                      onChange={(e) => setOfficerEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicoContact">
                    <Form.Label>Officer Contact</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Officer Contact"
                      onChange={(e) => setOfficerContact(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicOfaddress">
                    <Form.Label>Officer Address</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Officer Address"
                      onChange={(e) => setOfficerAddress(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Enter Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Enter Confirm Password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col className="text-end">
                  <button className="btn btn-success" type="submit">
                    Create
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

export default AddEchoCenterAdmin;
