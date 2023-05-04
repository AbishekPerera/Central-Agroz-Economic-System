import React from "react";
import Sidebar from "../../../components/System/ECMO/Sidebar/Sidebar";
import NavBar from "../../../components/System/ECMO/NavBar/NavBar";
import SystemFooter from "../../../components/System/ECMO/Footer/SystemFooter";
import "./Styles/DashboardECMO.css";

const DashboardECMO = () => {
  return (
    <div className="mainContainer">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="contentContainer">
        <div className="systemNavBar">
          <NavBar />
        </div>
        <div className="content">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <SystemFooter />
      </div>
    </div>
  );
};

export default DashboardECMO;
