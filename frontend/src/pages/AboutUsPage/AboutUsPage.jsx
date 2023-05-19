import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./AboutUsPage.css";
import AboutUsImg from "../../img/other comp/AboutUs2.jpeg";
import {Alert} from "react-bootstrap";

const AboutUsPage = () => {
  return (
    <div>
      <Header />
      <div className="aboutus-page-body">
        {/* <!-- BREADCRUMB AREA START --> */}
        <div class="ltn__breadcrumb-area-aboutuspage text-left bg-overlay-white-30 bg-image">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="ltn__breadcrumb-inner">
                  <h1 class="page-title">About Us</h1>
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
                      <li>About Us</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- BREADCRUMB AREA END --> */}
      </div>

      {/* AboutUs Content      */}
      <div className="BackgroundAboutUs">
        <div style={{ width: "90%", margin: "0 auto" }}>
          <br />
          <br />
          <Alert variant="light" style={{ width: "95%" }}>
            <Alert.Heading>
              <b>What is Central Agroz Economic System ? </b>
            </Alert.Heading>
            <hr />
            <p>
              <br />
              Central Agroz Economic System is a web-based platform designed to
              address the problems prevailing in the agriculture sector in Sri
              Lanka. The platform aims to provide a comprehensive solution by
              increasing productivity and efficiency in the sector through
              better coordination and communication between farmers,
              agricultural officers, economic centers, and customers.
              <hr />
            </p>
          </Alert>
          <Alert variant="light" style={{ width: "95%" }}>
            <Alert.Heading>
              <b>Our Motive</b>
            </Alert.Heading>
            <hr />
            <p>
              <br />
              Our platform is designed to serve the needs of all registered
              farmers, agricultural officers, and economic centers in Sri Lanka.
              The platform's main objective is to establish an accurate database
              of all the farmers in the country, which will help the government
              and related authorities to identify the difficulties faced by
              farmers and ensure that they are addressed through monitoring.
              Additionally, the platform will provide a medium for farmers to
              sell their crops directly to customers without interference from
              intermediaries, thereby earning a fair and reasonable price for
              their produce.
            </p>
            <hr />
          </Alert>
          <Alert variant="light  " style={{ width: "95%" }}>
            <Alert.Heading>
              <b>Our Team</b>
            </Alert.Heading>
            <hr />
            <p>
              <br />
              At Central Agroz, we have a dedicated team of professionals who
              are passionate about improving Sri Lanka's agriculture industry.
              Our team includes experts in the fields of agriculture,
              technology, data analysis, and marketing, who work together to
              develop and maintain our platform. We are committed to providing
              the best possible service to our clients and are always looking
              for ways to improve our system.{" "}
            </p>
            <hr />
          </Alert>

          <Alert variant="light" style={{ width: "95%" }}>
            <Alert.Heading>
              <b>Our Vision </b>
            </Alert.Heading>
            <hr />
            <p>
              <br />
              Our vision is to create a sustainable and profitable agriculture
              industry in Sri Lanka, where farmers can earn a fair price for
              their crops, and consumers can enjoy high-quality local produce.
              We believe that by connecting farmers directly with customers and
              improving coordination and communication within the industry, we
              can help reduce food waste, improve food security, and contribute
              to the country's economic growth. Our ultimate goal is to be the
              leading platform for agricultural trade in Sri Lanka and beyond,
              promoting transparency, efficiency, and sustainability.
            </p>
            <hr />
          </Alert>
        </div>
      </div>

      {/* Element */}
      <div
        style={{
          backgroundColor: "#003c1f",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <div style={{ width: "55%", margin: "0 auto", textAlign: "center" }}>
          <div className="container">
            <div className="contact-us d-blue-bg">
              <h4 className="green">
                <Link
                  href="/about"
                  style={{
                    color: "#CDBE78",
                    width: "100%",
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                >
                  CONTACT US
                </Link>
              </h4>
              <p style={{ color: "#F2F2F2" }}>
                123, Main Street, Colombo 1, Sri Lanka.
              </p>
              <p style={{ color: "#F2F2F2" }}>
                (+94) 031 223 7006 / (+94) 031 492 8922
              </p>
              <p style={{ color: "#F2F2F2" }}>centralagroz@gmail.com</p>
            </div>
            <div className="appointment-intro-btn">
              <Link
                className="appointment-btn"
                style={{ color: "#CDBE78" }}
                href="/"
              >
                " Pioneering a new era of agricultural developmeht in Sri Lanka
                "
              </Link>
            </div>
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUsPage;
