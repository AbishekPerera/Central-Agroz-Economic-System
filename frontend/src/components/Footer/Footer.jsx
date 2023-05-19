import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div class="footer-clean">
        <hr />
        <footer>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-sm-4 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <Link to="/system/farmer/login">Farmer Login</Link>
                  </li>
                  <li>
                    <Link>Wish List</Link>
                  </li>
                  <li>
                    <Link to="/admin/login">System Login</Link>
                  </li>
                </ul>
              </div>
              <div class="col-sm-4 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <Link>Company</Link>
                  </li>
                  <li>
                    <Link>Team</Link>
                  </li>
                  <li>
                    <Link>Legacy</Link>
                  </li>
                </ul>
              </div>
              <div class="col-sm-4 col-md-3 item">
                <h3>Careers</h3>
                <ul>
                  <li>
                    <Link>Job openings</Link>
                  </li>
                  <li>
                    <Link>Employee success</Link>
                  </li>
                  <li>
                    <Link>Benefits</Link>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 item social">
                <Link>
                  <i class="bi bi-facebook"></i>
                </Link>

                <Link>
                  <i class="bi bi-twitter"></i>
                </Link>

                <Link>
                  <i class="bi bi-whatsapp"></i>
                </Link>

                <Link>
                  <i class="bi bi-heart-pulse"></i>
                </Link>

                <p class="copyright">CAES 2023</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
