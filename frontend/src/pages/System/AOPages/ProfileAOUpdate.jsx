import React from 'react';
import Sidebar from '../../../components/System/AO/Global/Sidebar/Sidebar';
import NavBar from '../../../components/System/AO/Global/NavBar/NavBar';
import SystemFooter from '../../../components/System/AO/Global/Footer/SystemFooter';
import UpdateAOProfile from '../../../components/System/AO/Profile/UpdateAOProfile';

const ProfileAOUpdate = () => {
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
          <br />
          <UpdateAOProfile />
        </div>
        <SystemFooter />
      </div>
    </div>
  );
};

export default ProfileAOUpdate;
