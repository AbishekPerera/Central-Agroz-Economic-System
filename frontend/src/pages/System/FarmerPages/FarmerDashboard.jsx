import React from 'react'
import "./Styles/FarmerDashbord.css";
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import FarmerSidebar from '../../../components/FarmerSidebar/FarmerSidebar'

const FarmerDashboard = () => {
  return (
    <div>
        <Header/>
        <br/>
        <div className="mainContainer">
            <div className="sidebar">
            {/* <FarmerSidebar/> */}
            </div>

            <div className="content">
                FarmerDashboard
            </div>
        </div>    
        <Footer/>    
    </div>
  )
}

export default FarmerDashboard