import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import img1 from "../../img/carousel/1_2.jpg";
import img2 from "../../img/carousel/18.jpg";
import img3 from "../../img/carousel/12.jpg";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="homepage-body">
        <div className="home-page-body-carousel">
          <Carousel>
            <Carousel.Item>
              <img src={img1} alt="First slide" />
              <Carousel.Caption>
                <h1>ආර්ථික මධ් මධ්‍යස්ථාන සියල්ල එකම තැනකින්</h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img2} alt="Second slide" />

              <Carousel.Caption>
                <h1>නාස්තිය පිටු දකිමු</h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img3} alt="Third slide" />

              <Carousel.Caption>
                <h1> තිරසාර ආර්ථිකයකට පිය නගමු</h1>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="news-page-lowerbody">
          <h1>News</h1>
          <Row xs={1} md={2} lg={4} className="g-4">
            {/* add grid classes */}
            <Col key={1}>
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src="https://store.spaceylon.com/wp-content/uploads/2022/06/bath-and-shower-gels.jpg"
                />
                <Card.Body>
                  <Card.Title>New Product Launches</Card.Title>
                  <Card.Text>
                    Discover our latest additions to our natural skincare line!
                    Say goodbye to harsh chemicals and try our new herbal
                    shampoos or our anti-aging cream with all-natural
                    ingredients. Shop now and get the best of Ayurvedic
                    skincare.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col key={2}>
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src="https://www.lankahospitals.com/wp-content/uploads/2022/03/Lanka-Hospitals-Academy-partners-with-National-Youth-Corp1-1024x1024-1.jpg"
                />
                <Card.Body>
                  <Card.Title>Community Outreach and Charity</Card.Title>
                  <Card.Text>
                    Join us in giving back to our community! Partnered with a
                    local charity, we are offering free Ayurvedic consultations
                    to low-income individuals. Attend our community yoga event
                    in the park this weekend and all proceeds will be donated to
                    a local nonprofit organization.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col key={3}>
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src="https://lk.spaceylon.com/wp-content/uploads/2023/03/14-days-of-spring-wellness-beauty-calendar.jpg"
                />
                <Card.Body>
                  <Card.Title>Promotions and Discounts</Card.Title>
                  <Card.Text>
                    Take advantage of our amazing deals this month! Enjoy 20%
                    off on all cosmetic products or grab three skincare products
                    for the price of two. Shop now and save big!
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col key={4}>
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src="https://media.istockphoto.com/id/1156263061/photo/attractive-young-woman-exercising-and-sitting-in-yoga-lotus-position-while-resting-at-home.jpg?s=612x612&w=0&k=20&c=Sr5y1ByF1cLJXjkxYLyir-g0MSgHJMw-pumWtsT0sfc="
                />
                <Card.Body>
                  <Card.Title>Ayurvedic Lifestyle and Practices</Card.Title>
                  <Card.Text>
                    Dive into the world of Ayurveda with our Ayurvedic lifestyle
                    and practices section. Learn how to understand the doshas
                    and how to balance them or the importance of meditation in
                    Ayurveda.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col key={5}>
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src="https://lk.spaceylon.com/wp-content/uploads/2021/03/Best-Moisturiser-For-Your-Skin-Type-570x400-1.jpg"
                />
                <Card.Body>
                  <Card.Title>Health and Wellness Tips</Card.Title>
                  <Card.Text>
                    Get expert tips on how to take care of your skin and overall
                    well-being with our health and wellness tips. Learn how to
                    maintain healthy skin during winter or the benefits of
                    drinking herbal tea for digestion.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col key={6}>
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src="https://lk.spaceylon.com/wp-content/uploads/2017/08/Neem-amp-Tea-Tree-Overnight-Treatment-Masque-100g-OG.jpg"
                />
                <Card.Body>
                  <Card.Title>New Product Launches</Card.Title>
                  <Card.Text>
                    Discover our latest additions to our natural skincare line!
                    Say goodbye to harsh chemicals and try our new herbal
                    shampoos or our anti-aging cream with all-natural
                    ingredients. Shop now and get the best of Ayurvedic
                    skincare.
                  </Card.Text>
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

export default HomePage;
