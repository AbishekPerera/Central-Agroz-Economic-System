import React from 'react';
import Sidebar from '../../../components/System/AO/Sidebar/Sidebar';
import NavBar from '../../../components/System/AO/NavBar/NavBar';
import SystemFooter from '../../../components/System/AO/Footer/SystemFooter';

const Harvest = () => {
  return (
    <div className='mainContainer'>
      <div className='sidebar'>
        <Sidebar />
      </div>

      <div className='contentContainer'>
        <div className='systemNavBar'>
          <NavBar />
        </div>
        <div className='content'></div>
        <SystemFooter />
      </div>
    </div>
  );
};

export default Harvest;
