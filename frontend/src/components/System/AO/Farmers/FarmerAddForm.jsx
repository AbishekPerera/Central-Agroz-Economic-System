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
        <div className='container h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-xl-9'>
              <h1 className='text-white mb-4'>Apply for a job</h1>

              <div className='cardFarmerReg' style={{ bordeRadius: '15px' }}>
                <div
                  className='formImgContainer'
                  style={{ width: '100%', height: '400px' }}
                >
                  <img
                    className='formImg'
                    src='https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                    alt='formImg'
                  />
                </div>
                <div className='card-body'>
                  <div className='row align-items-center pt-4 pb-3'>
                    <div className='required col-md-3 ps-5'>
                      <label htmlFor='mb-0'>Full name</label>
                    </div>
                    <div className='col-md-9 pe-5'>
                      <input
                        id='fullName'
                        type='text'
                        required
                        className='form-control form-control-lg'
                        value={fullName}
                        placeholder='Enter farmer full name'
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className='row align-items-center pt-4 pb-3'>
                    <div className='required col-md-3 ps-5'>
                      <label htmlFor='mb-0'>Username</label>
                    </div>
                    <div className='col-md-9 pe-5'>
                      <input
                        id='username'
                        type='text'
                        required
                        className='form-control form-control-lg'
                        placeholder='Enter unique username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className='row align-items-center pt-4 pb-3'>
                    <div className='notRequired col-md-3 ps-5'>
                      <label htmlFor='mb-0'>Contact Number</label>
                    </div>
                    <div className='col-md-9 pe-5'>
                      <input
                        id='phone'
                        type='phone'
                        className='form-control form-control-lg'
                        placeholder='Enter contact number'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <hr className='mx-n3' />

                  <div className='row align-items-center py-3'>
                    <div className='required col-md-3 ps-5'>
                      <label htmlFor='mb-0'>Address</label>
                    </div>
                    <div className='col-md-9 pe-5'>
                      <input
                        id='address'
                        type='text'
                        required
                        className='form-control form-control-lg'
                        placeholder='Enter address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className='row align-items-center py-3'>
                    <div className='required col-md-3 ps-5'>
                      <label htmlFor='mb-0'>Division</label>
                    </div>
                    <div className='col-md-9 pe-5'>
                      <input
                        id='division'
                        type='text'
                        required
                        className='form-control form-control-lg'
                        placeholder='Enter division'
                        value={division}
                        onChange={(e) => setDivision(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className='row align-items-center py-3'>
                    <div className='required col-md-3 ps-5'>
                      <label htmlFor='mb-0'>District</label>
                    </div>
                    <div className='col-md-9 pe-5'>
                      <input
                        id='district'
                        type='text'
                        required
                        className='form-control form-control-lg'
                        placeholder='Enter district'
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                      />
                    </div>
                  </div>

                  <hr className='mx-n3' />

                  <div className='row align-items-center py-3'>
                    <div className='required col-md-3 ps-5'>
                      <label htmlFor='mb-0'>Crop type</label>
                    </div>
                    <div className='col-md-9 pe-5'>
                      <select
                        id='cropType'
                        className='form-control form-control-lg'
                        style={{ fontSize: '16px' }}
                        required
                        aria-label='Default select example'
                        value={cropType}
                        onChange={(e) => setCropType(e.target.value)}
                      >
                        <option selected style={{ fontSize: '16px' }}>
                          Select Type
                        </option>
                        <option value='Rice'>Rice</option>
                        <option value='Vegetable'>Vegetable</option>
                        <option value='Fruits'>Fruits</option>
                      </select>
                    </div>
                  </div>

                  <hr className='mx-n3' />

                  <div className='row align-items-center py-3'>
                    <div className='notRequired col-md-3 ps-5'>
                      <label htmlFor='mb-0'>Additional Notes</label>
                    </div>
                    <div className='col-md-9 pe-5'>
                      <textarea
                        id='notes'
                        className='form-control'
                        rows='3'
                        placeholder='Add additional details on farmer if any'
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                      ></textarea>
                    </div>
                  </div>

                  <hr className='mx-n3' />

                  {/* Password Must contain at least one number and one uppercase and
              lowercase letter, and at least 8 or more characters 
              
                  1. At least one digit (?=.*\d)
                  2. At least one lowercase letter (?=.*[a-z])
                  3. At least one uppercase letter (?=.*[A-Z])
                  4. The string must be 8 characters or longer {8,}

                  . - any character
                  * - preceding pattern can match 0 or more times
              */}

                  <div className='row align-items-center py-3'>
                    <div className='required col-md-3 ps-5'>
                      <label htmlFor='mb-0'>Password</label>
                    </div>
                    <div className='col-md-9 pe-5'>
                      <input
                        id='password'
                        type='password'
                        required
                        pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                        className='form-control form-control-lg'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className='addFarmerInfoDiv'>
                    <p>
                      You are obliged to register the farmer and share the
                      username and password with the farmer in case farmer wants
                      to use the system by themselves.
                    </p>
                  </div>

                  <div className='px-5 py-4'>
                    <button
                      type='submit'
                      className='button-18'
                      style={{ display: 'block', margin: '0 auto' }}
                      onClick={handleSubmit}
                    >
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
