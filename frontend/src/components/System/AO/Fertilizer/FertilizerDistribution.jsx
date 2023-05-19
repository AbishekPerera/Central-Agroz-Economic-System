import React from 'react';
import '../Farmers/FarmerAddForm.css';
import axios from 'axios';

const FertilizerDistribution = () => {

  const ao = JSON.parse(localStorage.getItem('agriofficer'));
  const aoId = ao['agriculturalOfficer']['id'];

  const [fertilizerData, setFertilizerData] = React.useState({
    farmerUsername: '',
    fertilizerType: '',
    year: '',
    month: '',
    quantity: '',
    aoId: aoId,
  });

  const handleChange = (e) => {
    //spreading previous state data & update it with a new key value pair
    setFertilizerData({ ...fertilizerData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8075/ao/addfertilizer', fertilizerData)
      .then(() => {
        alert('Fertilizer record added successfully');
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
                        id='farmerUsername'
                        type='text'
                        onChange={handleChange}
                        value={fertilizerData.farmerUsername}
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
                        onChange={handleChange}
                        value={fertilizerData.fertilizerType}
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
                        onChange={handleChange}
                        value={fertilizerData.year}
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
                        onChange={handleChange}
                        value={fertilizerData.month}
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
                        onChange={handleChange}
                        value={fertilizerData.quantity}
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
                      onClick={handleSubmit}
                      style={{ display: 'block', margin: '0 auto' }}>
                      Add Fertilizer Record
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
