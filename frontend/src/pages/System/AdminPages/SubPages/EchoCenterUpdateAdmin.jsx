import React, { useEffect, useState } from "react";
import Sidebar from "../../../../components/System/Admin/Sidebar/Sidebar";
import SystemFooter from "../../../../components/System/Admin/Footer/SystemFooter";
import NavBar from "../../../../components/System/Admin/NavBar/NavBar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";

const EchoCenterUpdateAdmin = () => {
  const { id } = useParams();

  // {
  //     "_id": "64575ded201b6a587daef127",
  //     "ecoCenterName": "Kurunegala Economic Center",
  //     "ecoCenterAddress": "Dambulla Road, Kurunegala",
  //     "province": "North Western",
  //     "district": "Kurunegala",
  //     "phone": "+94 37 223 2200",
  //     "officerName": "Mala Perera",
  //     "officerEmail": "malaperera@company.com",
  //     "officerContact": "+94 76 555 4444",
  //     "officerAddress": "No. 456, Negombo Road, Kurunegala",
  //     "createdAt": "2023-05-07T08:14:37.152Z",
  //     "updatedAt": "2023-05-07T08:14:37.152Z",
  //     "__v": 0
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

  //get echo center details
  const getEchoCenterDetails = async () => {
    try {
      axios
        .get(`http://localhost:8075/ecocenters/${id}`)
        .then((res) => {
          setEcoCenterName(res.data.ecoCenterName);
          setEcoCenterAddress(res.data.ecoCenterAddress);
          setProvince(res.data.province);
          setDistrict(res.data.district);
          setPhone(res.data.phone);
          setOfficerName(res.data.officerName);
          setOfficerEmail(res.data.officerEmail);
          setOfficerContact(res.data.officerContact);
          setOfficerAddress(res.data.officerAddress);
        })
        .catch((err) => {
          alert(err.message);
        });
    } catch (error) {
      // alert(error.message);
      swal("Error!", error.message, "error");
    }
  };

  //get echo center details
  useEffect(() => {
    getEchoCenterDetails();
  }, []);

  const history = useNavigate();

  //update echo center details
  const updateEchoCenterDetails = async (e) => {
    e.preventDefault();

    try {
      if (password === confirmPassword) {
        const echoCenter = {
          id,
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
          .put(`http://localhost:8075/ecocenters/update`, echoCenter)
          .then((res) => {
            // alert(res.data.message);
            swal("Success!", "Informations updated", "success").then(() => {
              history("/admin/echoCenters");
            });
          })
          .catch((err) => {
            // alert(err.message);
            swal("Error!", err.message, "error");
          });
      } else {
        // alert("Password and Confirm Password does not match");
        swal("Error!", "Password and Confirm Password does not match", "error");
      }
    } catch (error) {
      // alert(error.message);
      swal("Error!", error.message, "error");
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
            <h1>Update Economic Center Details</h1>
            <br />
            <hr />
            <Form onSubmit={updateEchoCenterDetails}>
              <Row>
                <Col>
                  <h3>Economic center informations</h3>

                  <Form.Group className="mb-3" controlId="formBasicCenterName">
                    <Form.Label>Eco Center Name</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={ecoCenterName}
                      onChange={(e) => {
                        setEcoCenterName(e.target.value);
                      }}
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
                      defaultValue={ecoCenterAddress}
                      onChange={(e) => {
                        setEcoCenterAddress(e.target.value);
                      }}
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
                          value={province}
                          required
                          onChange={(e) => {
                            setProvince(e.target.value);
                          }}
                        >
                          <option value="Central">Central Province</option>
                          <option value="Eastern">Eastern Province</option>
                          <option value="Northern" selected>
                            Northern Province
                          </option>
                          <option value="Southern">Southern Province</option>
                          <option value="Western">Western Province</option>
                          <option value="North Western">
                            North Western Province
                          </option>
                          <option value="North Central">
                            North Central Province
                          </option>
                          <option value="Uva ">Uva Province</option>
                          <option value="Sabaragamuwa">
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
                          value={district}
                          required
                          onChange={(e) => {
                            setDistrict(e.target.value);
                          }}
                        >
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
                    <Form.Control
                      type="text"
                      defaultValue={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <h3>Officer informations</h3>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Officer Name</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={officerName}
                      onChange={(e) => {
                        setOfficerName(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Officer Email</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={officerEmail}
                      onChange={(e) => {
                        setOfficerEmail(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Officer Contact</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={officerContact}
                      onChange={(e) => {
                        setOfficerContact(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Officer Address</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={officerAddress}
                      onChange={(e) => {
                        setOfficerAddress(e.target.value);
                      }}
                    />
                  </Form.Group>

                  {/* password */}
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Officer Password</Form.Label>
                    <Form.Control
                      type="password"
                      defaultValue={password}
                      required
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      defaultValue={confirmPassword}
                      required
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
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
