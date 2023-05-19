import React from "react";
import Header from "../../components/Header/Header";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./CentersPage.css";

const CentersPage = () => {
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
                    <h1 class="page-title">Find Farmers</h1>
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
                        <li>Farmers</li>
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
              />
              <button class="btn btn-secondary my-2 my-sm-0">Search</button>
            </form>
          </div>
          <hr />
          <br />
          <div className="find-farmer-page-lowerbody-farmers p-5">
            <br />
            <Row xs={1} md={2} lg={3} className="g-4">
              {/* add grid classes */}
              <Col key={1}>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://grain.org/system/articles/logos/000/006/774/larger/IMG_3520.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Diwya Sundaram</Card.Title>
                    <Card.Text>
                      <b>Location:</b> Colombo
                      <br />
                      <b>Crop Type:</b> Rice, Vegetables
                      <br />
                      <b>Joined :</b> 2021
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col key={2}>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://lectura.press/media-storage/press_releases/rice_farmer_in_his_paddy_field_in_monaragala_sri_lanka(6ae).jpg"
                  />
                  <Card.Body>
                    <Card.Title>Ranil Wikkamasinghe</Card.Title>
                    <Card.Text>
                      <b>Location:</b> Colombo
                      <br />
                      <b>Crop Type:</b> Rice, Vegetables
                      <br />
                      <b>Joined :</b> 2021
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col key={3}>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://agroinsurance.com/photos/shares/Agroinsurance%20New%202021/430a62d8309752a40214f528c2d03400.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Babu Rakeshwaram</Card.Title>
                    <Card.Text>
                      <b>Location:</b> Colombo
                      <br />
                      <b>Crop Type:</b> Rice, Vegetables
                      <br />
                      <b>Joined :</b> 2021
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col key={4}>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://island.lk/wp-content/uploads/2020/07/farm.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Jayasumana Weerarathne</Card.Title>
                    <Card.Text>
                      <b>Location:</b> Colombo
                      <br />
                      <b>Crop Type:</b> Rice, Vegetables
                      <br />
                      <b>Joined :</b> 2021
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col key={5}>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://www.dailynews.lk/sites/default/files/news/2019/06/06/z_p02-Monsoon.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Nandasena Rajapase</Card.Title>
                    <Card.Text>
                      <b>Location:</b> Colombo
                      <br />
                      <b>Crop Type:</b> Rice, Vegetables
                      <br />
                      <b>Joined :</b> 2021
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col key={5}>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://gpjs3bucket.s3.amazonaws.com/wp-content/uploads/2021/01/26121749/GPJNews_Jaffna_VC_turmeric-31_web2048.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Diwya Sundaram</Card.Title>
                    <Card.Text>
                      <b>Location:</b> Colombo
                      <br />
                      <b>Crop Type:</b> Rice, Vegetables
                      <br />
                      <b>Joined :</b> 2021
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </Col>
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
