import React from 'react'
import "./Styles/FarmerDashbord.css";
import Sidebar from '../../../components/System/Farmer/Sidebar/Sidebar'
import NavBar from '../../../components/System/Farmer/NavBar/NavBarFarmer'
import SystemFooter from '../../../components/System/Farmer/Footer/SystemFarmerFooter'

const FarmerLogin = () => {
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
        <br/>
        <div>Login</div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        </div>
      <SystemFooter />
    </div>
    </div>
  )
}

export default FarmerLogin