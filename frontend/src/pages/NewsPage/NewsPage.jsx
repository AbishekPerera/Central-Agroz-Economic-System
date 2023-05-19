import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./NewsPage.css";
import { Button, Card, Col, Row } from "react-bootstrap";

const NewsPage = () => {
  return (
    <div>
      <Header />
      <div className="news-page-body">
        {/* <!-- BREADCRUMB AREA START --> */}
        <div class="ltn__breadcrumb-area-newspage text-left bg-overlay-white-30 bg-image">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="ltn__breadcrumb-inner">
                  <h1 class="page-title">News</h1>
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
                      <li>News</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- BREADCRUMB AREA END --> */}
        <div className="news-page-lowerbody">
          <Row xs={1} md={2} lg={3} className="g-4">
            {/* add grid classes */}
            <Col key={5}>
              <Card style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src="https://i.pinimg.com/564x/ba/35/f9/ba35f94cf7e7d3ba6d202579341ade48.jpg"
                />
                <Card.Body>
                  <Card.Title>Central Agroz announces new line of organic fertilizers</Card.Title>
                  <Card.Text>
                     Central Agroz has announced the launch of a new line of organic fertilizers, made from all-natural ingredients. These fertilizers are designed to provide the essential nutrients that plants need to thrive, while also promoting soil health and reducing the environmental impact of agriculture. We believe that these fertilizers will be an important tool for farmers who are looking to adopt more sustainable practices.                  
                     <Button variant="primary">Read More</Button>
                  </Card.Text>   
                </Card.Body>
              </Card>
            </Col>
            <Col key={3}>
              <Card style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src="https://i.pinimg.com/564x/12/2f/23/122f2357785413aa1c15c34c180c254c.jpg"
                />
                <Card.Body>
                  <Card.Title>Central Agroz introduces new system to reduce food waste</Card.Title>
                  <Card.Text>
                  Central Agroz is committed to reducing food waste in Sri Lanka, and we are pleased to announce the introduction of a new system to track the sales and inventory at economic centers. By monitoring the demand for each crop, we can help farmers produce only what is needed, reducing excess inventory and preventing unsold food from being discarded.                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
           
            <Col key={2}>
              <Card style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src="https://i.pinimg.com/564x/05/d2/bb/05d2bb98ade867c6564c9b011c589e6a.jpg"
                />
                <Card.Body>
                  <Card.Title>Sri Lanka experiences record-breaking rice harvest</Card.Title>
                  <Card.Text>
                  According to the Department of Agriculture, Sri Lanka has achieved its highest-ever rice harvest this year, with a production of over 4.5 million metric tons. This is great news for Sri Lanka's farmers and the country's food security, and Central Agroz is proud to support the growth of the agriculture industry.                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col key={1}>
              <Card style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src="https://i.pinimg.com/564x/ec/e6/b6/ece6b65458dc339c5642fa4f9fadbe81.jpg"
                />
                <Card.Body>
                  <Card.Title>Central Agroz announces new partnership with major export company</Card.Title>
                  <Card.Text>
                  Central Agroz is excited to announce our recent partnership with XYZ Export Company, which will allow our farmers to sell their crops directly to international markets. This partnership will provide new business opportunities for our farmers and contribute to the growth of Sri Lanka's economy.                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col key={4}>
              <Card style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src="https://i.pinimg.com/236x/91/ac/57/91ac5704e2eda1ab1f504c7b03a9e455.jpg"
                />
                <Card.Body>
                  <Card.Title>Meet Nimal, a dedicated farmer from Hambantota</Card.Title>
                  <Card.Text>
                  Nimal has been farming for over 20 years, and his hard work and dedication have paid off with a successful harvest this season. With the help of Central Agroz, he was able to sell his crops directly to customers and earn a fair price for his hard work. We are proud to support farmers like Nimal and help them succeed in the agriculture industry.                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col key={6}>
              <Card style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src="https://s3.amazonaws.com/bizenglish/wp-content/uploads/2019/10/15170839/COEXIST-Foundation-together-with-Sarvodaya-Development-Finance-successfully-carry-out-Value-Creation-Workshop.png"
                />
                <Card.Body>
                  <Card.Title>Central Agroz hosts seminar on the benefits of regenerative agriculture</Card.Title>
                  <Card.Text>
                    Central Agroz recently hosted a seminar on the benefits of regenerative agriculture, a practice that focuses on rebuilding soil health and increasing biodiversity. The seminar featured expert speakers who discussed the latest research on regenerative agriculture, as well as practical tips for farmers who are looking to adopt these practices. We believe that regenerative agriculture has the potential to transform the industry and create a more sustainable future for farming.                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col> 
            
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsPage;
