import React from 'react';

const UpdateAOProfile = () => {
  return (
    <div className='AoProfileContainer'>
      <div class='container rounded bg-white mb-5'>
        <div class='row'>
          <div class='col-md-3 border-right'>
            <div class='d-flex flex-column align-items-center text-center p-3 py-5'>
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
            <div class='p-3 py-5'>
              <div class='d-flex justify-content-between align-items-center mb-3'>
                <h4 class='text-right'>Profile Settings</h4>
              </div>

              <div class='row mt-3'>
                <div class='col-md-12 pb-3'>
                  <label class='labels'>Name</label>
                  <input
                    type='text'
                    class='form-control'
                    value='Hashen Hewawasam'
                    placeholder=''
                  />
                </div>

                <div class='row mt-2 pb-3'>
                  <div class='col-md-6'>
                    <label class='labels'>District</label>
                    <input
                      type='text'
                      class='form-control'
                      value='Malabe'
                      placeholder=''
                    />
                  </div>
                  <div class='col-md-6'>
                    <label class='labels'>Province</label>
                    <input
                      type='text'
                      class='form-control'
                      value='Western'
                      placeholder=''
                    />
                  </div>
                </div>

                <div class='col-md-12 pb-3'>
                  <label class='labels'>Email</label>
                  <input
                    type='text'
                    class='form-control'
                    value='hashen@govtagri.com'
                    placeholder=''
                  />
                </div>

                <div class='col-md-12 pb-3'>
                  <label class='labels'>Contact Number</label>
                  <input
                    type='text'
                    class='form-control'
                    value='0710418245'
                    placeholder=''
                  />
                </div>

                <div class='col-md-12 pb-3'>
                  <label class='labels'>Address</label>
                  <input
                    type='text'
                    class='form-control'
                    value='No. 164, New kandy road, Malabe'
                    placeholder=''
                  />
                </div>

                <div class='col-md-12 pb-3'>
                  <label class='labels'>Grama Niladhari Division</label>
                  <input
                    type='text'
                    class='form-control'
                    value='Malabe North'
                  />
                </div>
              </div>

              <div class='mt-5 text-center'>
                <button class='btn btn-primary profile-button' type='button'>
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateAOProfile;
