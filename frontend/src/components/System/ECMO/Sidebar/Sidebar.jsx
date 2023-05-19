import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import $ from "jquery";
// import Logo from '../../../img/Logo/logo.png';
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../../img/Logo/logo.png";

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
      <div className="sidebar" id="side-nav">
        <div className="header-box px-3 pt-3 pb-4 d-flex">
          <h1 className="fs-3 px-4">
            <span className="text-white">CAES Economic Center Management</span>
          </h1>
          <button className="btn d-md-none d-block close-btn px-2 py-0 text-white">
            <i class="bi bi-list"></i>
          </button>
        </div>

        <div className="logoSideBar">
          <img
            className="imgLogoSideBar"
            src={Logo}
            style={{ width: "120px", height: "120px" }}
            alt="img"
          />
        </div>

        <div style={{ marginTop: "30px" }}>
          <ul className="list-untyled px-2">
            <li className={activeItem === "/ecmo/dashboard" ? "active" : ""}>
              <Link
                to="/ecmo/dashboard"
                className="text-decoration-none px-3 py-2 d-block"
              >
                <i class="bi bi-house-door"></i>
                <span style={{ paddingLeft: "0.7rem" }}>Dashboard</span>
              </Link>
            </li>
            <li className={activeItem === "/ecmo/quantityList" ? "active" : ""}>
              <Link
                to="/ecmo/quantityList"
                className="text-decoration-none px-3 py-2 d-block"
              >
                <i class="bi bi-bag-plus"></i>
                <span style={{ paddingLeft: "0.7rem" }}>Daily Quantities</span>
              </Link>
            </li>
            <li className={activeItem === "/ecmo/priceList" ? "active" : ""}>
              <Link
                to="/ecmo/priceList"
                className="text-decoration-none px-3 py-2 d-block"
              >
                <i class="bi bi-card-list"></i>
                <span style={{ paddingLeft: "0.7rem" }}>Daily PriceList</span>
              </Link>
            </li>

            <li
              className={
                activeItem === "/ecmo/stockSellersTable" ? "active" : ""
              }
            >
              <Link
                to="/ecmo/stockSellersTable"
                className="text-decoration-none px-3 py-2 d-block"
              >
                <i class="bi bi-bag"></i>
                <span style={{ paddingLeft: "0.7rem" }}>Buy Stock</span>
              </Link>
            </li>

            <li
              className={
                activeItem === "/ecmo/stockBuyersTable" ? "active" : ""
              }
            >
              <Link
                to="/ecmo/stockBuyersTable"
                className="text-decoration-none px-3 py-2 d-block"
              >
                <i class="bi bi-truck"></i>
                <span style={{ paddingLeft: "0.7rem" }}>Sell Stock</span>
              </Link>
            </li>

            <li className={activeItem === "/ecmo/priceTable" ? "active" : ""}>
              <Link
                to="/ecmo/priceTable"
                className="text-decoration-none px-3 py-2 d-block"
              >
                <i class="bi bi-tags"></i>
                <span style={{ paddingLeft: "0.7rem" }}>Prices</span>
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
