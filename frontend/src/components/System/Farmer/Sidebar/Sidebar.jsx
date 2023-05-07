// import React from 'react'
import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import $ from 'jquery';
import Logoside from '../../../../img/Logo/farmerlogin.png'
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
      <div className="sidebar" id="side-nav-farmer">
        <div className="header-box px-3 pt-3 pb-4 d-flex">
          <h1 className="fs-3 px-4" ><br/>
            <span className="text-white" style={{ marginLeft: "38px" }} >CAES</span>
          </h1><br/>
          <button className="btn d-md-none d-block close-btn px-2 py-0 text-white">
            <i class="bi bi-list"></i>
          </button>
        </div>

        <div className="logoSideBarFarmer">
          <img className="imgLogoSideBar" src={Logoside} alt="" style={{ width: '120px',height:'120px' }}/>
        </div>

        <div>
          <ul className="list-untyled px-2">
            <li
              className={
                activeItem === '/system/farmer/dashboard' ? 'active' : ''
              }
            >
              <Link
                to="/system/farmer/dashboard"
                className="text-decoration-none px-3 py-2 d-block"
              >
                <i class="bi bi-house-door"></i>
                <span style={{ paddingLeft: '0.7rem' }}>Dashboard</span>
              </Link>
            </li>

            <li
              className={
                activeItem === '/system/farmer/publishproducts' ? 'active' : ''
              }
            >
              <Link
                to="/system/farmer/publishproducts"
                className="text-decoration-none px-3 py-2 d-block"
              >
                <i class="bi bi-plus-square-fill"></i>
                <span style={{ paddingLeft: '0.7rem' }}>Publish Crop Details</span>
              </Link>
            </li>

            <li
              className={
                activeItem === '/system/farmer/viewall' ? 'active' : ''
              }
            >
              <Link
                to="/system/farmer/viewall"
                className="text-decoration-none px-3 py-2 d-block"
              >
                <i class="bi bi-clock-history"></i>
                <span style={{ paddingLeft: '0.7rem' }}>Publish History</span>
              </Link>
            </li>

            <li
              className={
                activeItem === '/system/farmer/profile' ? 'active' : ''
              }
            >
              <Link
                to="/system/farmer/profile"
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
  )
}

export default Sidebar