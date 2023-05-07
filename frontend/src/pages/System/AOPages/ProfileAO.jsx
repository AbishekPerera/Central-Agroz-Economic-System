import React from 'react';
import Sidebar from '../../../components/System/AO/Global/Sidebar/Sidebar';
import NavBar from '../../../components/System/AO/Global/NavBar/NavBar';
import SystemFooter from '../../../components/System/AO/Global/Footer/SystemFooter';
import './styles/ProfileAO.css';

const ProfileAO = () => {
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
                    <span class='font-weight-bold'>Hashen Hewawasam</span>
                    <span class='text-black-50'>hashen@govtagri.com</span>
                    <span> </span>
                  </div>
                </div>

                <div class='col-md-7 border-right'>
                  <div class='p-3 pb-5 pt-2'>
                    <div class='row mt-3'>
                      <div class='col-md-12 pb-3'>
                        <h6>Name : Hashen Hewawasam </h6>
                      </div>

                      <div class='col-md-12 pb-3'>
                        <h6>District : Malabe </h6>
                      </div>

                      <div class='col-md-12 pb-3'>
                        <h6>Province : Western </h6>
                      </div>

                      <div class='col-md-12 pb-3'>
                        <h6>Email : hashen@govtagri.com </h6>
                      </div>

                      <div class='col-md-12 pb-3'>
                        <h6>PContact Number : 0710418245 </h6>
                      </div>

                      <div class='col-md-12 pb-3'>
                        <h6>Address : No. 164, New kandy road, Malabe </h6>
                      </div>

                      <div class='col-md-12 pb-3'>
                        <h6>Grama Niladhari Division : Malabe North </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <SystemFooter />
      </div>
    </div>
  );
};

export default ProfileAO;
