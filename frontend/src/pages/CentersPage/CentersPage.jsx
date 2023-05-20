import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./CentersPage.css";
import axios from "axios";

const CentersPage = () => {
  // {
  //       "_id": "64575dff201b6a587daef12b",
  //       "ecoCenterName": "Matara Economic Center",
  //       "ecoCenterAddress": "No. 13, Hakmana Road, Matara",
  //       "province": "Southern",
  //       "district": "Matara",
  //       "phone": "+94 41 223 4400",
  //       "officerName": "Samantha Silva",
  //       "officerEmail": "samanthasilva@company.com",
  //       "officerContact": "+94 76 333 2222",
  //       "officerAddress": "No. 456, Galle Road, Matara",
  //       "createdAt": "2023-05-07T08:14:55.441Z",
  //       "updatedAt": "2023-05-07T08:14:55.441Z",
  //       "__v": 0
  //   },
  const [centers, setCenters] = useState([]);

  const getAllCenters = () => {
    axios.get("http://localhost:8075/ecocenters/").then((res) => {
      // console.log(res.data);
      setCenters(res.data);
    });
  };

  useEffect(() => {
    getAllCenters();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div>
        <Header />
        <div className="find-farmer-page-body">
          {/* <!-- BREADCRUMB AREA START --> */}
          <div class="ltn__breadcrumb-area-farmer text-left bg-overlay-white-30 bg-image">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="ltn__breadcrumb-inner">
                    <h1 class="page-title">Find Economic Centers</h1>
                    <div class="ltn__breadcrumb-list">
                      <ul>
                        <li>
                          <Link to="/">
                            <span class="ltn__secondary-color">
                              <i class="bi bi-house-fill"></i>
                            </span>
                            Home
                          </Link>
                        </li>
                        <li>Economic Centers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- BREADCRUMB AREA END --> */}
          <div className="find-farmer-page-lowerbody">
            <form class="find-farmer-page-lowerbody-search-2">
              <input
                class="form-control me-sm-2"
                type="search"
                placeholder="Search"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
              <button class="btn btn-secondary my-2 my-sm-0">Search</button>
            </form>
          </div>
          <hr />
          <br />
          <div className="find-farmer-page-lowerbody-farmers p-5">
            <br />
            <Row xs={1} md={2} lg={3} xxl={4} className="g-4">
              {/* add grid classes */}
              {centers
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.ecoCenterName
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    val.province
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    val.district
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((center) => (
                  <Col key={center._id}>
                    <Card style={{ width: "20rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://www.dailynews.lk/sites/default/files/news/2019/04/08/z_FIN-piii-Ebilipiti.jpg"
                      />
                      <Card.Body>
                        <Card.Title>{center.ecoCenterName}</Card.Title>
                        <Card.Text>
                          <b>Address: </b>
                          {center.ecoCenterAddress}
                          <br />
                          <b>Province: </b>
                          {center.province}
                          <br />
                          <b>District: </b>
                          {center.district}
                          <br />
                          <b>Phone: </b>
                          {center.phone}
                          <br />
                          <b>Officer Name: </b>
                          {center.officerName}
                          <br />
                        </Card.Text>
                        <Link to={"/ecmo/ecmoUI/" + center.ecoCenterName}>
                          <Button variant="primary">Read More</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
          <br />
          <div className="find-farmer-page-lowerbody-loadmore">
            <Row>
              <Col>
                <Button>Load more..</Button>
              </Col>
            </Row>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CentersPage;
