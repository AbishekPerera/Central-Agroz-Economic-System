import React from "react";
import Sidebar from "../../../components/System/Admin/Sidebar/Sidebar";
import NavBar from "../../../components/System/Admin/NavBar/NavBar";
import SystemFooter from "../../../components/System/Admin/Footer/SystemFooter";
import "./styles/DashboardAdmin.css";

const ProfileAdmin = () => {
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
          <h1>Admin profil</h1>
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

export default ProfileAdmin;
