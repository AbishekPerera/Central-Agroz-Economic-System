import React from 'react';
import Sidebar from '../../../components/System/AO/Global/Sidebar/Sidebar';
import NavBar from '../../../components/System/AO/Global/NavBar/NavBar';
import SystemFooter from '../../../components/System/AO/Global/Footer/SystemFooter';
import './styles/DashboardAO.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './styles/FarmersPg.css';
import FarmerAddForm from '../../../components/System/AO/Farmers/FarmerAddForm';
import AllFarmers from '../../../components/System/AO/Farmers/AllFarmers';

const FarmersPg = () => {
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
          <Tabs>
            <TabList>
              <Tab>All Farmers</Tab>
              <Tab>Register Farmers</Tab>
            </TabList>

            <TabPanel>
              <br />
              <AllFarmers />
            </TabPanel>
            <TabPanel>
              <FarmerAddForm />
            </TabPanel>
          </Tabs>
        </div>
        <br /> <br />
        <SystemFooter />
      </div>
    </div>
  );
};

export default FarmersPg;
