import React from 'react';
import Sidebar from '../../../components/System/AO/Global/Sidebar/Sidebar';
import NavBar from '../../../components/System/AO/Global/NavBar/NavBar';
import SystemFooter from '../../../components/System/AO/Global/Footer/SystemFooter';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FertilizerDistribution from '../../../components/System/AO/Fertilizer/FertilizerDistribution';
import FertilizerRecords from '../../../components/System/AO/Fertilizer/FertilizerRecords';

const FertilizersAO = () => {
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
              <Tab>Distribution</Tab>
              <Tab>Records</Tab>
            </TabList>

            <TabPanel style={{ marginTop: '5rem' }}>
              <FertilizerDistribution />
            </TabPanel>
            <TabPanel>
              <FertilizerRecords />
            </TabPanel>
          </Tabs>
        </div>
        <br />
        <br />
        <div
          className='AOHarvestFooter'
          style={{ position: 'absolute', bottom: '0', width: '100%' }}>
          <SystemFooter />
        </div>
      </div>
    </div>
  );
};

export default FertilizersAO;
