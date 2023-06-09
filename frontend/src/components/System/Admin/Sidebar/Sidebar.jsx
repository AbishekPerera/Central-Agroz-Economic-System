import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import $ from "jquery";
import Logo from "../../../../img/Logo/logo.png";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    // set the active item based on the current URL path
    const path = location.pathname;
    setActiveItem(path);

    // add click event handler to sidebar items
    $(".sidebar ul li").on("click", function () {
      setActiveItem($(this).find("a").attr("href"));
    });
  }, [location]);

  return (
    <div className="main-container">
      <div className="sidebar" id="side-nav-admin">
        <div className="header-box px-3 pt-3 pb-4 d-flex">
          <h1 className="fs-3 px-4">
            <span className="text-white">Admin Panel</span>
          </h1>
          <button className="btn d-md-none d-block close-btn px-2 py-0 text-white">
            <i class="bi bi-list"></i>
          </button>
        </div>

        <div className="logoSideBar-admin">
          <img className="imgLogoSideBar-admin" src={Logo} alt="" />
        </div>

        <div>
          <ul className="list-untyled px-2">
            <li className={activeItem === "/admin/dashboard" ? "active" : ""}>
              <Link
                to="/admin/dashboard"
                className="text-decoration-none px-3 py-2 d-block"
              >
                <i class="bi bi-house-door"></i>
                <span style={{ paddingLeft: "0.7rem" }}>Dashboard</span>
              </Link>
            </li>
            <li className={activeItem === "/admin/echoCenters" ? "active" : ""}>
              <Link
                to="/admin/echoCenters"
                className="text-decoration-none px-3 py-2 d-block"
              >
                <i class="bi bi-bag-plus"></i>
                <span style={{ paddingLeft: "0.7rem" }}>Economic Centers</span>
              </Link>
            </li>
            <li
              className={activeItem === "/admin/agriofficers" ? "active" : ""}
            >
              <Link
                to="/admin/agriofficers"
                className="text-decoration-none px-3 py-2 d-block"
              >
                <i class="bi bi-card-list"></i>
                <span style={{ paddingLeft: "0.7rem" }}>Agri Officers</span>
              </Link>
            </li>

            <li className={activeItem === "/admin/profile" ? "active" : ""}>
              <Link
                to="/admin/profile"
                className="text-decoration-none px-3 py-2 d-block"
              >
                <i class="bi bi-people"></i>
                <span style={{ paddingLeft: "0.7rem" }}>Profile</span>
              </Link>
            </li>
          </ul>
        </div>
        <hr className="h-color mx-2" />
      </div>
    </div>
  );
};

export default Sidebar;
