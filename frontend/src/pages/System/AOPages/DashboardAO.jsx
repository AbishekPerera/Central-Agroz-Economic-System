import React from 'react';
import Sidebar from '../../../components/System/AO/Sidebar/Sidebar';
import NavBar from '../../../components/System/AO/NavBar/NavBar';
import SystemFooter from '../../../components/System/AO/Footer/SystemFooter';
import './styles/DashboardAO.css';
import DashInfoCard from '../../../components/System/AO/DashInfoCard/DashInfoCard';

const DashboardAO = () => {
  return (
    <div className='mainContainer'>
      <div className='sidebar'>
        <Sidebar />
      </div>

      <div className='contentContainer'>
        <div className='systemNavBar'>
          <NavBar />
        </div>
        <div className='content'>
          <DashInfoCard />
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

export default DashboardAO;
