import React, { useEffect, useState } from "react";
import Sidebar from "../../../../components/System/Admin/Sidebar/Sidebar";
import SystemFooter from "../../../../components/System/Admin/Footer/SystemFooter";
import NavBar from "../../../../components/System/Admin/NavBar/NavBar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";

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

  //   {
  //     "_id": "64576083201b6a587daef13a",
  //     "name": "Nimal Sunil Perera",
  //     "email": "nimalperera@example.com",
  //     "contact": "+94 77-123-4567",
  //     "address": "No. 10, Kandy Road, Kadawatha",
  //     "gramaNiladariDivision": "Makola South",
  //     "district": "Gampaha",
  //     "province": "Western",
  //     "image": "https://github.com/AbishekPerera/img/blob/main/avatar.png?raw=true",
  //     "createdAt": "2023-05-07T08:25:39.160Z",
  //     "updatedAt": "2023-05-19T04:06:33.917Z",
  //     "__v": 0
  // }

  const { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [gramaNiladariDivision, setGramaNiladariDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [image, setImage] = useState("");
  const [regDate, setRegDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //get agri officer details
  const getAgriOfficerDetails = async () => {
    axios
      .get(`http://localhost:8075/agriofficers/${id}`)
      .then((res) => {
        // console.log(res.data);
        setName(res.data.name);
        setEmail(res.data.email);
        setContact(res.data.contact);
        setAddress(res.data.address);
        setGramaNiladariDivision(res.data.gramaNiladariDivision);
        setDistrict(res.data.district);
        setProvince(res.data.province);
        setImage(res.data.image);
        setRegDate(res.data.createdAt);
      })
      .catch((err) => {
        swal(err.response.data.desc, "", "error");
      });
  };

  useEffect(() => {
    getAgriOfficerDetails();
  }, []);

  const histroy = useNavigate();
  //update agri officer details

  const updateAgriOfficerDetails = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      swal("Password and Confirm Password does not match", "", "error");
    } else {
      const updatedAgriOfficer = {
        id,
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
        .put(`http://localhost:8075/agriofficers/update`, updatedAgriOfficer)
        .then(() => {
          swal("Agri Officer Details Updated Successfully", "", "success");
          histroy("/admin/agriofficers");
        })
        .catch((err) => {
          swal(err.response.data.desc, "", "error");
        });
    }
  };

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
            <Form onSubmit={updateAgriOfficerDetails}>
              <h5>Agricultural Officer Id : {id}</h5>
              <hr />
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="nimalperera@example.com"
                      required
                      defaultValue={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicContact">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      defaultValue={contact}
                      onChange={(e) => {
                        setContact(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="No. 10, Kandy Road, Kadawatha"
                      required
                      defaultValue={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicGramaNiladariDivision"
                  >
                    <Form.Label>Grama Niladari Division</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Makola South"
                      required
                      defaultValue={gramaNiladariDivision}
                      onChange={(e) => {
                        setGramaNiladariDivision(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Row>
                    <Col lg={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicDistrict"
                      >
                        <Form.Label>District</Form.Label>
                        <Form.Select
                          required
                          value={district}
                          onChange={(e) => {
                            setDistrict(e.target.value);
                          }}
                        >
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
                        <Form.Select
                          required
                          value={province}
                          onChange={(e) => {
                            setProvince(e.target.value);
                          }}
                        >
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
                      src={image}
                      alt="profile-pic"
                      style={{ width: "250px", height: "250px" }}
                    />
                  </div>

                  <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                      required
                      defaultValue={image}
                      onChange={(e) => {
                        setImage(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="formBasicOfficerRegDate"
                  >
                    <Form.Label>Officer Registration Date</Form.Label>
                    <Form.Control type="text" required value={regDate} />
                  </Form.Group>

                  {/* update password  */}

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="********"
                      required
                      defaultValue={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </Form.Group>

                  {/* update password  */}

                  <Form.Group
                    className="mb-3"
                    controlId="formBasicConfirmPassword"
                  >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="********"
                      required
                      defaultValue={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                    />
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
