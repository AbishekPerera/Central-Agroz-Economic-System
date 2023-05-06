import React, { useState } from 'react';

const FarmerAddForm = () => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [division, setDivision] = useState('');
  const [district, setDistrict] = useState('');
  const [cropType, setCropType] = useState('');
  const [exHarvest, setExHarvest] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFarmer = {
      fullName,
      address,
      division,
      district,
      cropType,
      exHarvest,
      notes,
    };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newFarmer }),
    };

    fetch('http://localhost:8075/farmers/add', requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className='farmerRegForm'>
      <section
        class='vh-100'
        //  style={{backgroundColor: '#2779e2'}}
      >
        <div class='container h-100'>
          <div class='row d-flex justify-content-center align-items-center h-100'>
            <div class='col-xl-9'>
              <h1 class='text-white mb-4'>Apply for a job</h1>

              <div class='card' style={{ bordeRadius: '15px' }}>
                <div class='card-body'>
                  <div class='row align-items-center pt-4 pb-3'>
                    <div class='col-md-3 ps-5'>
                      <h6 class='mb-0'>Full name</h6>
                    </div>
                    <div class='col-md-9 pe-5'>
                      <input
                        type='text'
                        class='form-control form-control-lg'
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                  </div>

                  <hr class='mx-n3' />

                  <div class='row align-items-center py-3'>
                    <div class='col-md-3 ps-5'>
                      <h6 class='mb-0'>Address</h6>
                    </div>
                    <div class='col-md-9 pe-5'>
                      <input
                        type='text'
                        class='form-control form-control-lg'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class='row align-items-center py-3'>
                    <div class='col-md-3 ps-5'>
                      <h6 class='mb-0'>Division</h6>
                    </div>
                    <div class='col-md-9 pe-5'>
                      <input
                        type='text'
                        class='form-control form-control-lg'
                        value={division}
                        onChange={(e) => setDivision(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class='row align-items-center py-3'>
                    <div class='col-md-3 ps-5'>
                      <h6 class='mb-0'>District</h6>
                    </div>
                    <div class='col-md-9 pe-5'>
                      <input
                        type='text'
                        class='form-control form-control-lg'
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                      />
                    </div>
                  </div>

                  <hr class='mx-n3' />

                  <div class='row align-items-center py-3'>
                    <div class='col-md-3 ps-5'>
                      <h6 class='mb-0'>Crop type</h6>
                    </div>
                    <div class='col-md-9 pe-5'>
                      <select
                        class='form-control form-control-lg'
                        style={{ fontSize: '16px' }}
                        aria-label='Default select example'
                        value={cropType}
                        onChange={(e) => setCropType(e.target.value)}>
                        <option selected style={{ fontSize: '16px' }}>
                          Select Type
                        </option>
                        <option value='1'>Rice</option>
                        <option value='2'>Vegetable</option>
                        <option value='3'>Fruits</option>
                      </select>
                    </div>
                  </div>

                  <div class='row align-items-center py-3'>
                    <div class='col-md-3 ps-5'>
                      <h6 class='mb-0'>Expected Harvest</h6>
                    </div>
                    <div class='col-md-9 pe-5'>
                      <input
                        type='text'
                        class='form-control form-control-lg'
                        value={exHarvest}
                        onChange={(e) => setExHarvest(e.target.value)}
                      />
                    </div>
                  </div>

                  <hr class='mx-n3' />

                  <div class='row align-items-center py-3'>
                    <div class='col-md-3 ps-5'>
                      <h6 class='mb-0'>Additional Notes</h6>
                    </div>
                    <div class='col-md-9 pe-5'>
                      <textarea
                        class='form-control'
                        rows='3'
                        placeholder='Add additional details on farmer if any'
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}></textarea>
                    </div>
                  </div>

                  <hr class='mx-n3' />

                  <div class='px-5 py-4'>
                    <button type='submit' class='btn btn-primary btn-lg'>
                      Register Farmer
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

export default FarmerAddForm;
