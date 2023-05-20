import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./FarmerPage.css";
import axios from "axios";
import sampleimg from "../../img/Farmer/sample.jpg";
import sampleimg2 from "../../img/Farmer/farmer.jpg";

const FarmerPage = () => {
  //   {
  //     "_id": "645795ae9a1c75996e15aa10",
  //     "farmerId": "FM5121",
  //     "cropType": "Vegetables",
  //     "cropName": "Banana",
  //     "quantity": "45",
  //     "price": "470.00",
  //     "location": "Weliwa",
  //     "condition": "fresh",
  //     "harvestDate": "2023/05/05",
  //     "status": "Out for sale",
  //     "mobile": "0710418465",
  //     "email": "nimal@mail.com",
  //     "createdAt": "2023-05-07T12:12:30.109Z",
  //     "updatedAt": "2023-05-19T14:39:02.727Z",
  //     "__v": 0
  // },

  const [crops, setCrops] = useState([]);

  // get all crops

  const getCrops = async () => {
    await axios
      .get("http://localhost:8075/farmerL/getallcrops")
      .then((res) => {
        setCrops(res.data);
        // console.log(res.data.crops);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getCrops();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [seletedCrop, setSelectedCrop] = useState({});

  const handleCropClick = (crop) => {
    setSelectedCrop(crop);
    handleShow();
  };

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
                    <h1 class="page-title">Find Crops</h1>
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
                        <li>Crops</li>
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
              {crops
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.cropName
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    val.cropType
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    val.location
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((crop) => (
                  <Col key={crop._id}>
                    <Card style={{ width: "20rem" }}>
                      <Card.Img variant="top" src={sampleimg} />
                      <Card.Body>
                        <Card.Title>{crop.cropType}</Card.Title>
                        <Card.Text>
                          <b>Crop Name: </b>
                          {crop.cropName}
                          <br />
                          <b>Quantity: </b>
                          {crop.quantity}
                          <br />
                          <b>Price: </b>
                          {crop.price}
                          <br />
                          <b>Location: </b>
                          {crop.location}
                          <br />
                          <b>Condition: </b>
                          {crop.condition}
                          <br />
                          <b>Harvest Date: </b>
                          {crop.harvestDate}
                          <br />
                        </Card.Text>
                        <Button
                          onClick={() => {
                            handleCropClick(crop);
                          }}
                          variant="primary"
                        >
                          Read More
                        </Button>
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
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{seletedCrop.cropType}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <img
                src={sampleimg2}
                alt="crop"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Col>
            <Col>
              <p>
                <b>Crop Name: </b>
                {seletedCrop.cropName}
                <br />
                <b>Quantity: </b>
                {seletedCrop.quantity}
                <br />
                <b>Price: </b>
                {seletedCrop.price}
                <br />
                <b>Location: </b>
                {seletedCrop.location}
                <br />
                <b>Condition: </b>
                {seletedCrop.condition}
                <br />
                <b>Harvest Date: </b>
                {seletedCrop.harvestDate}
                <br />
                <b>Mobile: </b>
                {seletedCrop.mobile}
                <br />
                <b>Email: </b>
                {seletedCrop.email}
                <br />
              </p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              window.open(`tel:${seletedCrop.mobile}`);
            }}
          >
            Call now
          </Button>
          <Button
            variant="info"
            onClick={() => {
              window.open(`mailto:${seletedCrop.email}`);
            }}
          >
            Send an email
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FarmerPage;
