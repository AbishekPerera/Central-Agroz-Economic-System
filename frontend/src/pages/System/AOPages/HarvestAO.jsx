import React from 'react';
import Sidebar from '../../../components/System/AO/Global/Sidebar/Sidebar';
import NavBar from '../../../components/System/AO/Global/NavBar/NavBar';
import SystemFooter from '../../../components/System/AO/Global/Footer/SystemFooter';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AddHarvest from '../../../components/System/AO/Harvest/AddHarvest';
import HarvestReports from '../../../components/System/AO/Harvest/HarvestReports';
import HarvestRecords from '../../../components/System/AO/Harvest/HarvestRecords';

const HarvestAO = () => {
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
              <Tab>Harvest Records</Tab>
              <Tab>Add Harvest</Tab>
              <Tab>Harvest Reports</Tab>
            </TabList>

            <TabPanel>
              <HarvestRecords />
            </TabPanel>
            <TabPanel style={{ marginTop: '5rem' }}>
              <AddHarvest />
            </TabPanel>
            <TabPanel>
              <h2 style={{ margin: '2rem', fontFamily: 'math' }}>
                Crop wise Total Harvest
              </h2>
              <HarvestReports />
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

export default HarvestAO;
