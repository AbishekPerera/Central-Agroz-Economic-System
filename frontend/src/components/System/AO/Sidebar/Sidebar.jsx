import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import $ from 'jquery';
// import Logo from '../../../img/Logo/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    // set the active item based on the current URL path
    const path = location.pathname;
    setActiveItem(path);

    // add click event handler to sidebar items
    $('.sidebar ul li').on('click', function () {
      setActiveItem($(this).find('a').attr('href'));
    });
  }, [location]);

  return (
    <div className="main-container">
      <div className="sidebar" id="side-nav">
        <div className="header-box px-3 pt-3 pb-4 d-flex">
          <h1 className="fs-3 px-4">
            <span className="text-white">CAES</span>
          </h1>
          <button className="btn d-md-none d-block close-btn px-2 py-0 text-white">
            <i class="bi bi-list"></i>
          </button>
        </div>

        <div className="logoSideBar">
          <img className="imgLogoSideBar" src={""} alt="" />
        </div>

        <div>
          <ul className="list-untyled px-2">
            <li
              className={
                activeItem === '/ao/dashboard' ? 'active' : ''
              }
            >
              <Link
                to="/ao/dashboard"
                className="text-decoration-none px-3 py-2 d-block"
              >
                <i class="bi bi-house-door"></i>
                <span style={{ paddingLeft: '0.7rem' }}>Dashboard</span>
              </Link>
            </li>
            <li
              className={
                activeItem === '/ao/register-farmer' ? 'active' : ''
              }
            >
              <Link
                to="/ao/register-farmer"
                className="text-decoration-none px-3 py-2 d-block"
              >
                <i class="bi bi-bag-plus"></i>
                <span style={{ paddingLeft: '0.7rem' }}>Farmers</span>
              </Link>
            </li>
            <li
              className={
                activeItem === '/ao/harvests' ? 'active' : ''
              }
            >
              <Link
                to="/ao/harvests"
                className="text-decoration-none px-3 py-2 d-block"
              >
                <i class="bi bi-card-list"></i>
                <span style={{ paddingLeft: '0.7rem' }}>Harvest</span>
              </Link>
            </li>

            <li
              className={
                activeItem === '/ao/fertilizers' ? 'active' : ''
              }
            >
              <Link
                to="/ao/fertilizers"
                className="text-decoration-none px-3 py-2 d-block"
              >
                <i class="bi bi-truck"></i>
                <span style={{ paddingLeft: '0.7rem' }}>Fertilizers</span>
              </Link>
            </li>

            <li
              className={
                activeItem === '/ao/profile' ? 'active' : ''
              }
            >
              <Link
                to="/ao/profile"
                className="text-decoration-none px-3 py-2 d-block"
              >
                <i class="bi bi-people"></i>
                <span style={{ paddingLeft: '0.7rem' }}>Profile</span>
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
