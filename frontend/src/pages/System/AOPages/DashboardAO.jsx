import React from 'react';
import Sidebar from '../../../components/System/AO/Global/Sidebar/Sidebar';
import NavBar from '../../../components/System/AO/Global/NavBar/NavBar';
import SystemFooter from '../../../components/System/AO/Global/Footer/SystemFooter';
import './styles/DashboardAO.css';
import DashInfoCard from '../../../components/System/AO/DashInfoCard/DashInfoCard';
import ChartTotalHarvest from '../../../components/System/AO/DashInfoCard/ChartTotalHarvest';

const DashboardAO = () => {
  return (
    <div className='mainContainer'>
      <div className='sidebar'>
        <Sidebar data-testid="sidebar" />
      </div>

      <div className='contentContainer'>
        <div className='systemNavBar'>
          <NavBar />
        </div>
        <div className='content'>
          <div className='row'>
            <DashInfoCard />
          </div>
          <div className='row d-flex '>
            <h2 className='dashChartTitle'>Total Harvest for the year 2023</h2>
            <ChartTotalHarvest />
          </div>
        </div>
        <SystemFooter />
      </div>
    </div>
  );
};

export default DashboardAO;
