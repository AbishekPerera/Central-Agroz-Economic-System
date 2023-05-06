import React from 'react';
import '../Farmers/FarmerAddForm.css';

const FertilizerDistribution = () => {
  return (
    <div className='farmerRegForm'>
      <section>
        <div class='container h-100'>
          <div class='row d-flex justify-content-center align-items-center h-100'>
            <div class='col-xl-9'>
              <div class='cardFarmerReg' style={{ bordeRadius: '15px' }}>
                <div
                  class='d-flex justify-content-center align-items-center pb-4 pt-4'
                  style={{ fontFamily: 'fantasy' }}>
                  <h2 class='text-right'>New Fetilizer Record</h2>
                </div>
                <div class='card-body'>
                  <div class='row align-items-center pt-4 pb-3'>
                    <div class='required col-md-3 ps-5'>
                      <label htmlFor='mb-0'>Farmer Username</label>
                    </div>
                    <div class='col-md-9 pe-5'>
                      <input
                        id='fUsername'
                        type='text'
                        placeholder='Enter farmer username'
                        required
                        class='form-control form-control-lg'
                      />
                    </div>
                  </div>

                  <div class='row align-items-center pt-4 pb-3'>
                    <div class='required col-md-3 ps-5'>
                      <label htmlFor='mb-0'>Fetilizer Type</label>
                    </div>
                    <div class='col-md-9 pe-5'>
                      <input
                        id='fertilizerType'
                        type='text'
                        placeholder='Enter fetilizer type'
                        required
                        class='form-control form-control-lg'
                      />
                    </div>
                  </div>

                  <div class='row align-items-center py-3'>
                    <div class='required col-md-3 ps-5'>
                      <label htmlFor='mb-0'>Year</label>
                    </div>
                    <div class='col-md-9 pe-5'>
                      <input
                        id='year'
                        type='text'
                        pattern='\d{4}'
                        placeholder='Enter year'
                        required
                        class='form-control form-control-lg'
                      />
                    </div>
                  </div>

                  <div class='row align-items-center py-3'>
                    <div class='required col-md-3 ps-5'>
                      <label htmlFor='mb-0'>Month</label>
                    </div>
                    <div class='col-md-9 pe-5'>
                      <select
                        id='month'
                        class='form-control form-control-lg'
                        style={{ fontSize: '16px' }}
                        required
                        placeholder='Select month'
                        aria-label='Default select example'>
                        <option selected style={{ fontSize: '16px' }} disabled>
                          Select Month
                        </option>
                        <option value='January'>January</option>
                        <option value='February'>February</option>
                        <option value='March'>March</option>
                        <option value='April'>April</option>
                        <option value='May'>May</option>
                        <option value='June'>June</option>
                        <option value='July'>July</option>
                        <option value='August'>August</option>
                        <option value='September'>September</option>
                        <option value='October'>October</option>
                        <option value='November'>November</option>
                        <option value='December'>December</option>
                      </select>
                    </div>
                  </div>

                  <div class='row align-items-center py-3'>
                    <div class='required col-md-3 ps-5'>
                      <label htmlFor='mb-0'>Quantity</label>
                    </div>
                    <div class='col-md-9 pe-5'>
                      <input
                        id='quantity'
                        type='number'
                        placeholder='Enter quantity'
                        required
                        class='form-control form-control-lg'
                      />
                    </div>
                  </div>

                  <div class='px-5 py-4'>
                    <button
                      type='submit'
                      class='button-18'
                      style={{ display: 'block', margin: '0 auto' }}>
                      Add Harvest Record
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FertilizerDistribution;
