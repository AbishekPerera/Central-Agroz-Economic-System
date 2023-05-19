import React, { useEffect } from "react";
import "./Styles/FarmerDashbord.css";
import Sidebar from "../../../components/System/Farmer/Sidebar/Sidebar";
import NavBar from "../../../components/System/Farmer/NavBar/NavBarFarmer";
import SystemFooter from "../../../components/System/Farmer/Footer/SystemFarmerFooter";
import { Carousel } from "react-bootstrap";

// import img1 from '../../../img/Farmer/sale (1).png';
// import img2 from '../../../img/Farmer/sale (2).png';
// import img3 from '../../../img/Farmer/sale (3).png';

import img5 from "../../../img/Farmer/dash1.jpg";
import img6 from "../../../img/Farmer/dash2.jpg";
// import img7 from '../../../img/Farmer/dash3.jpg';
import img8 from "../../../img/Farmer/dash4.jpg";
import img9 from "../../../img/Farmer/dash6.jpg";
// import img10 from '../../../img/Farmer/dash7.jpg';
import { alignPropType } from "react-bootstrap/esm/types";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FarmerDashboard = () => {
  const history = useNavigate();
  const userData = JSON.parse(localStorage.getItem("farmerInfo"));

  useEffect(() => {
    const farmerInfo = localStorage.getItem("farmerInfo");
    // console.log(farmerInfo);
    if (farmerInfo === null) {
      history("/system/farmer/login");
    }
  }, []);

  return (
    <div className="mainContainer">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="contentContainer" style={{ backgroundColor: "#F6FBF4" }}>
        <div className="systemNavBar">
          <NavBar />
        </div>
        <div className="content">
          <br />
          <div
            className="corosal-farmer-dashboard"
            style={{
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                  <b>
                    <h1 style={{ color: "white" }}>
                      CAES වෙත සාදරයෙන් පිළිගනිමු
                    </h1>
                  </b>
                </Carousel.Caption>
                <img classname="d-block w-100" src={img8} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img classname="d-block w-100" src={img5} alt="First slide" />
                <Carousel.Caption>
                  <h1>ආර්ථික මධ්‍යස්ථාන සියල්ල එකම තැනකින්</h1>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img classname="d-block w-100" src={img6} alt="Second slide" />

                <Carousel.Caption>
                  <h1>නාස්තිය පිටු දකිමු</h1>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img classname="d-block w-100" src={img9} alt="Third slide" />

                <Carousel.Caption>
                  <h1> තිරසාර ආර්ථිකයකට පිය නගමු</h1>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <br />
          <br />
          <br />
          <br />
          <Alert variant="info" style={{ width: "100%" }}>
            <Alert.Heading>
              View the Nearest Economic Center Details from here
            </Alert.Heading>
            {/* <hr /> */}
          </Alert>
          <Alert variant="primary" style={{ width: "100%" }}>
            <Alert.Heading>
              View Your GramaNiladari Details from here
            </Alert.Heading>
            {/* <hr /> */}
          </Alert>
          <Alert variant="secondary" style={{ width: "100%" }}>
            <Alert.Heading>
              View crops suitable for different climatic zones
            </Alert.Heading>
            {/* <hr /> */}
          </Alert>
          <Alert variant="danger" style={{ width: "100%" }}>
            <Alert.Heading>
              Instructions for common crop diseases, pest infestations and other
              related issues
            </Alert.Heading>
          </Alert>
          <br /> <br />
        </div>
        <SystemFooter />
      </div>
    </div>
  );
};

export default FarmerDashboard;
