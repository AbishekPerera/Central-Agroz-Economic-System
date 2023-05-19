import React from 'react';
import Sidebar from '../../../components/System/AO/Global/Sidebar/Sidebar';
import NavBar from '../../../components/System/AO/Global/NavBar/NavBar';
import SystemFooter from '../../../components/System/AO/Global/Footer/SystemFooter';
import './styles/ProfileAO.css';
import ProfileAOUpdate from './ProfileAOUpdate';
import { Link } from 'react-router-dom';

const ProfileAO = () => {

  const ao = JSON.parse(localStorage.getItem('agriofficer'));
  const aoName = ao['agriculturalOfficer']['name'];
  const district = ao['agriculturalOfficer']['district'];
  const province = ao['agriculturalOfficer']['province'];
  const email = ao['agriculturalOfficer']['email'];
  const contact = ao['agriculturalOfficer']['contact'];
  const address = ao['agriculturalOfficer']['address'];
  const gramaNiladariDivision = ao['agriculturalOfficer']['gramaNiladariDivision'];
  const image = ao['agriculturalOfficer']['image'];
  
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
          <div className='AoProfileContainer mt-5'>
            <div
              class='d-flex justify-content-center align-items-center pt-5'
              style={{ fontFamily: 'fantasy' }}>
              <h2 class='text-right'>My Profile</h2>
            </div>
            <div class='container rounded bg-white mb-5'>
              <div class='row'>
                <div class='col-md-4 border-right'>
                  <div class='d-flex flex-column align-items-center text-center p-3 pb-5'>
                    <img
                      class='rounded-circle mt-5'
                      width='150px'
                      alt='ao profile'
                      src='https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'
                    />
                    <span class='font-weight-bold'>{aoName}</span>
                    <span class='text-black-50'>{email}</span>
                    <span> </span>
                  </div>
                </div>

                <div class='col-md-7 border-right'>
                  <div class='p-3 pb-5 pt-2'>
                    <div class='row mt-3'>
                      <div class='col-md-12 pb-3'>
                        <h6>Name : {aoName} </h6>
                      </div>

                      <div class='col-md-12 pb-3'>
                        <h6>District : {district} </h6>
                      </div>

                      <div class='col-md-12 pb-3'>
                        <h6>Province : {province} </h6>
                      </div>

                      <div class='col-md-12 pb-3'>
                        <h6>Email : {email} </h6>
                      </div>

                      <div class='col-md-12 pb-3'>
                        <h6>Contact Number : {contact} </h6>
                      </div>

                      <div class='col-md-12 pb-3'>
                        <h6>Address : {address} </h6>
                      </div>

                      <div class='col-md-12 pb-3'>
                        <h6>Grama Niladhari Division : {gramaNiladariDivision} </h6>
                      </div>
                    </div>
                  </div>
                  <div className='profileEditAO'>
                    <span>
                      <button class='button-18' onClick=''>
                        Edit Profile
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default ProfileAO;
