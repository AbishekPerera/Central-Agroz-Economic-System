import React, { useEffect, useState } from "react";
import SystemFooter from "../../../../components/System/Admin/Footer/SystemFooter";
import NavBar from "../../../../components/System/Admin/NavBar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";

const AddAgriOfficerAdmin = () => {
  // {
  //   "name": "Priyantha Fernando",
  //   "email": "priyanthafernando@example.com",
  //   "contact": "+94 71-234-5678",
  //   "address": "No. 20, Baudhaloka Mawatha, Colombo 7",
  //   "gramaNiladariDivision": "Colombo 7",
  //   "district": "Colombo",
  //   "province": "Western",
  //   "image": "https://example.com/priyanthafernando.jpg",
  //   "password": "secretpass123"
  // }

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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [gramaNiladariDivision, setGramaNiladariDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const history = useNavigate();

  const registerAgriOfficer = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      const data = {
        name,
        email,
        contact,
        address,
        gramaNiladariDivision,
        district,
        province,
        image,
        password,
      };

      axios
        .post("http://localhost:8075/agriofficers/register", data)
        .then((res) => {
          // console.log(res);
          swal({
            title: "Success!",
            text: "New Agricultural Officer Added!",
            icon: "success",
            button: "Ok",
          }).then(() => {
            history("/admin/agriofficers");
          });
        })
        .catch((err) => {
          // console.log(err);
          swal({
            title: "Error!",
            text: err.response.data.message,
            icon: "error",
            button: "Ok",
          });
        });
    } else {
      // alert("Passwords do not match");
      swal({
        title: "Error!",
        text: "Passwords do not match!",
        icon: "error",
        button: "Ok",
      });
    }
  };

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

              <Form onSubmit={registerAgriOfficer}>
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
                        <Form.Control
                          required
                          type="text"
                          placeholder="Name"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
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
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
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
                          onChange={(e) => {
                            setContact(e.target.value);
                          }}
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
                          onChange={(e) => {
                            setAddress(e.target.value);
                          }}
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
                          onChange={(e) => {
                            setGramaNiladariDivision(e.target.value);
                          }}
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
                        <Form.Select
                          onChange={(e) => {
                            setDistrict(e.target.value);
                          }}
                        >
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
                        <Form.Select
                          onChange={(e) => {
                            setProvince(e.target.value);
                          }}
                        >
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
                        src={image}
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
                          onChange={(e) => {
                            setImage(e.target.value);
                          }}
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
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
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
                          onChange={(e) => {
                            setConfirmPassword(e.target.value);
                          }}
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
