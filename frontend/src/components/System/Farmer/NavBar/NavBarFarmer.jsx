import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Img from "../../../../img/Admin/admin3.png";

import "./NavBar.css";

const NavBarFarmer = () => {
  function logout() {
    localStorage.removeItem("farmerInfo");
  }

  return (
    <div className="mainNavContainer d-flex justify-content-end">
      <Navbar className="subNavContainer" expand="lg" style={{ width: "20%" }}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Img}
              alt="AO-Avatar"
              style={{ height: "50px", width: "50px" }}
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link> */}

              <NavDropdown
                active
                title="Farmer Profile"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  {" "}
                  <Link
                    to="/system/farmer/profile"
                    class="nav-link"
                    aria-current="page"
                  >
                    <i
                      style={{
                        color: "#359733",
                      }}
                      class="bi bi-person-circle bi-2x"
                    ></i>{" "}
                    <span style={{ fontSize: "10x", color: "black" }}>
                      Visit Profile
                    </span>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <Link
                    to="/system/farmer/login"
                    style={{ color: "#359733" }}
                    class="nav-link"
                    onClick={logout}
                  >
                    <i class="bi bi-box-arrow-right"></i>{" "}
                    <span style={{ fontSize: "12px", color: "black" }}>
                      Log Out
                    </span>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarFarmer;
