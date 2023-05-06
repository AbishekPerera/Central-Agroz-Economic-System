import React, { useState } from 'react';
import axios from 'axios';
import './FarmerAddForm.css';
import '../../../../pages/System/AOPages/styles/button-18.css';
const FarmerAddForm = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [division, setDivision] = useState('');
  const [district, setDistrict] = useState('');
  const [cropType, setCropType] = useState('');
  const [notes, setNotes] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFarmer = {
      fullName,
      username,
      phone,
      address,
      division,
      district,
      cropType,
      notes,
      password,
    };

    console.log(newFarmer);

    axios
      .post('http://localhost:8075/farmers/register', newFarmer)
      .then(() => {
        alert('Farmer added');
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className='farmerRegForm'>
      <section
      //  style={{backgroundColor: '#2779e2'}}
      >
        <div class='container h-100'>
          <div class='row d-flex justify-content-center align-items-center h-100'>
            <div class='col-xl-9'>
              <h1 class='text-white mb-4'>Apply for a job</h1>

              <div class='cardFarmerReg' style={{ bordeRadius: '15px' }}>
                <div
                  className='formImgContainer'
                  style={{ width: '100%', height: '400px' }}>
                  <img
                    className='formImg'
                    src='https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                    alt='formImg'
                  />
                </div>
                <div class='card-body'>
                  <div class='row align-items-center pt-4 pb-3'>
                    <div class='required col-md-3 ps-5'>
                      <label htmlFor='mb-0'>Full name</label>
                    </div>
                    <div class='col-md-9 pe-5'>
                      <input
                        id='fullName'
                        type='text'
                        required
                        class='form-control form-control-lg'
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class='row align-items-center pt-4 pb-3'>
                    <div class='required col-md-3 ps-5'>
                      <label htmlFor='mb-0'>Username</label>
                    </div>
                    <div class='col-md-9 pe-5'>
                      <input
                        id='username'
                        type='text'
                        required
                        class='form-control form-control-lg'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class='row align-items-center pt-4 pb-3'>
                    <div class='notRequired col-md-3 ps-5'>
                      <label htmlFor='mb-0'>Contact Number</label>
                    </div>
                    <div class='col-md-9 pe-5'>
                      <input
                        id='phone'
                        type='phone'
                        class='form-control form-control-lg'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <hr class='mx-n3' />

                  <div class='row align-items-center py-3'>
                    <div class='required col-md-3 ps-5'>
                      <label htmlFor='mb-0'>Address</label>
                    </div>
                    <div class='col-md-9 pe-5'>
                      <input
                        id='address'
                        type='text'
                        required
                        class='form-control form-control-lg'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class='row align-items-center py-3'>
                    <div class='required col-md-3 ps-5'>
                      <label htmlFor='mb-0'>Division</label>
                    </div>
                    <div class='col-md-9 pe-5'>
                      <input
                        id='division'
                        type='text'
                        required
                        class='form-control form-control-lg'
                        value={division}
                        onChange={(e) => setDivision(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class='row align-items-center py-3'>
                    <div class='required col-md-3 ps-5'>
                      <label htmlFor='mb-0'>District</label>
                    </div>
                    <div class='col-md-9 pe-5'>
                      <input
                        id='district'
                        type='text'
                        required
                        class='form-control form-control-lg'
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                      />
                    </div>
                  </div>

                  <hr class='mx-n3' />

                  <div class='row align-items-center py-3'>
                    <div class='required col-md-3 ps-5'>
                      <label htmlFor='mb-0'>Crop type</label>
                    </div>
                    <div class='col-md-9 pe-5'>
                      <select
                        id='cropType'
                        class='form-control form-control-lg'
                        style={{ fontSize: '16px' }}
                        required
                        aria-label='Default select example'
                        value={cropType}
                        onChange={(e) => setCropType(e.target.value)}>
                        <option selected style={{ fontSize: '16px' }}>
                          Select Type
                        </option>
                        <option value='Rice'>Rice</option>
                        <option value='Vegetable'>Vegetable</option>
                        <option value='Fruits'>Fruits</option>
                      </select>
                    </div>
                  </div>

                  <hr class='mx-n3' />

                  <div class='row align-items-center py-3'>
                    <div class='notRequired col-md-3 ps-5'>
                      <label htmlFor='mb-0'>Additional Notes</label>
                    </div>
                    <div class='col-md-9 pe-5'>
                      <textarea
                        id='notes'
                        class='form-control'
                        rows='3'
                        placeholder='Add additional details on farmer if any'
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}></textarea>
                    </div>
                  </div>

                  <hr class='mx-n3' />

                  <div class='row align-items-center py-3'>
                    <div class='required col-md-3 ps-5'>
                      <label htmlFor='mb-0'>Password</label>
                    </div>
                    <div class='col-md-9 pe-5'>
                      <input
                        id='password'
                        type='text'
                        required
                        class='form-control form-control-lg'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <hr class='mx-n3' />

                  <div class='px-5 py-4'>
                    <button
                      type='submit'
                      class='button-18'
                      style={{ display: 'block', margin: '0 auto' }}
                      onClick={handleSubmit}>
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
