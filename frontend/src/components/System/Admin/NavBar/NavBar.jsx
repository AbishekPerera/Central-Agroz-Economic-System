import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import AdminImg from "../../../../img/Admin/admin2.png";
import "./NavBar.css";

const NavBar = () => {
  function logout() {
    localStorage.removeItem("adminInfo");
  }

  return (
    <div className="mainNavContainer d-flex justify-content-end">
      <Navbar className="subNavContainer" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={AdminImg}
              alt="AO-Avatar"
              style={{ height: "40px", width: "40px" }}
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link> */}

              <NavDropdown active title="Super Admin" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <Link
                    to="/admin/profile"
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
                    style={{ color: "#359733" }}
                    class="nav-link"
                    onClick={logout}
                    to={"/admin/login"}
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

export default NavBar;
