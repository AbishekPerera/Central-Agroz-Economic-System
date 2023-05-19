import React from 'react';
import '../Farmers/FarmerAddForm.css';
import axios from 'axios';

const AddHarvest = () => {
  const ao = JSON.parse(localStorage.getItem('agriofficer'));
  const aoId = ao['agriculturalOfficer']['id'];

  const [harvestData, setHarvestData] = React.useState({
    farmerUsername: '',
    cropType: '',
    season: '',
    year: '',
    month: '',
    expectedHarvest: '',
    actualHarvest: '',
    aoId: aoId,
  });

  const handleChange = (e) => {
    //spreading previous state data & update it with a new key value pair
    setHarvestData({ ...harvestData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8075/ao/addharvest', harvestData)
      .then(() => {
        alert('Harvest record added successfully');
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div className='farmerRegForm'>
      <section>
        <div class='container h-100'>
          <div class='row d-flex justify-content-center align-items-center h-100'>
            <div class='col-xl-9'>
              <div class='cardFarmerReg' style={{ bordeRadius: '15px' }}>
                <div
                  class='d-flex justify-content-center align-items-center pb-4 pt-4'
                  style={{ fontFamily: 'fantasy' }}
                >
                  <h2 class='text-right'>New Harvest Record</h2>
                </div>
                <div class='card-body'>
                  <div class='row align-items-center pt-4 pb-3'>
                    <div class='required col-md-3 ps-5'>
                      <label htmlFor='mb-0'>Farmer Username</label>
                    </div>
                    <div class='col-md-9 pe-5'>
                      <input
                        id='farmerUsername'
                        type='text'
                        placeholder='Enter farmer username'
                        required
                        onChange={handleChange}
                        value={harvestData.farmerUsername}
                        class='form-control form-control-lg'
                      />
                    </div>
                  </div>

                  <div class='row align-items-center pt-4 pb-3'>
                    <div class='required col-md-3 ps-5'>
                      <label htmlFor='mb-0'>Crop Type</label>
                    </div>
                    <div class='col-md-9 pe-5'>
                      <input
                        id='cropType'
                        type='text'
                        placeholder='Enter crop type'
                        required
                        onChange={handleChange}
                        value={harvestData.cropType}
                        class='form-control form-control-lg'
                      />
                    </div>
                  </div>

                  <div class='row align-items-center py-3'>
                    <div class='notRequired col-md-3 ps-5'>
                      <label htmlFor='mb-0'>Season</label>
                    </div>
                    <div class='col-md-9 pe-5'>
                      <input
                        id='season'
                        type='text'
                        placeholder='Enter season'
                        onChange={handleChange}
                        value={harvestData.season}
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
                        onChange={handleChange}
                        value={harvestData.year}
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
                        placeholder='Select Month'
                        onChange={handleChange}
                        value={harvestData.month}
                        aria-label='Default select example'
                      >
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
                    <div class='notRequired col-md-3 ps-5'>
                      <label htmlFor='mb-0'>Expected Harvest</label>
                    </div>
                    <div class='col-md-9 pe-5'>
                      <input
                        id='expectedHarvest'
                        type='number'
                        placeholder='Enter expected harvest'
                        onChange={handleChange}
                        value={harvestData.expectedHarvest}
                        class='form-control form-control-lg'
                      />
                    </div>
                  </div>

                  <div class='row align-items-center py-3'>
                    <div class='required col-md-3 ps-5'>
                      <label htmlFor='mb-0'>Actual Harvest</label>
                    </div>
                    <div class='col-md-9 pe-5'>
                      <input
                        id='actualHarvest'
                        type='number'
                        placeholder='Enter actual harvest'
                        required
                        onChange={handleChange}
                        value={harvestData.actualHarvest}
                        class='form-control form-control-lg'
                      />
                    </div>
                  </div>

                  <hr class='mx-n3' />

                  <div class='px-5 py-4'>
                    <button
                      type='submit'
                      onClick={handleSubmit}
                      class='button-18'
                      style={{ display: 'block', margin: '0 auto' }}
                    >
                      Enter Harvest Record
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

export default AddHarvest;
