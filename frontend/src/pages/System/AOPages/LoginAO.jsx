import React, { useEffect, useState } from 'react';
import './styles/LoginAo.css';
import axios from 'axios';
const LoginAO = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };

    axios
      .post('http://localhost:8075/agriofficers/login', loginData)
      .then((response) => {
        alert('Login Successful');
        localStorage.setItem('agriofficer', JSON.stringify(response.data));
        window.location.href = '/ao/dashboard';
      })
      .catch((err) => {
        alert('Login Failed');
      });
  };

  // useEffect(() => {
  //   const agriofficer = localStorage.getItem('agriofficer');
  //   if (agriofficer) {
  //     window.location.href = '/ao/dashboard';
  //   }
  // }, []);

  return (
    <div className='aoLoginContainer0'>
      <section class='background-radial-gradient overflow-hidden'>
        <div class='container px-4 py-5 px-md-5 text-center text-lg-start my-5'>
          <div class='row gx-lg-5 align-items-center mb-5'>
            <div class='col-lg-6 mb-5 mb-lg-0' style={{ zIndex: '10' }}>
              <h1
                class='my-5 display-5 fw-bold ls-tight'
                style={{ color: 'hsl(218, 81%, 95%)' }}
              >
                Central Agroz <br />
                <span style={{ color: 'hsl(218, 81%, 75%)' }}>
                  Economic System
                </span>
              </h1>
              <p
                className='loginQuote mb-4 opacity-70'
                style={{ color: 'hsl(218, 81%, 85%)' }}
              >
                "Step into the world of Central Agroz, where innovation meets
                sustainability!"
              </p>
            </div>

            <div class='col-lg-6 mb-5 mb-lg-0 position-relative'>
              <div
                id='radius-shape-1'
                class='position-absolute rounded-circle shadow-5-strong'
              ></div>
              <div
                id='radius-shape-2'
                class='position-absolute shadow-5-strong'
              ></div>
              <div class='card bg-glassAo'>
                <div class='card-body px-4 py-5 px-md-5'>
                  <form onSubmit={submitHandler}>
                    <h2 className='aoLoginFormTitle'>Login</h2>
                    {/* <!-- Email input --> */}
                    <div class='form-outline mb-4'>
                      <br />
                      <label class='aoLoginFormLabel' for='form3Example3'>
                        Email address
                      </label>
                      <input
                        type='email'
                        id='email'
                        class='custom-input'
                        placeholder='Enter your email address'
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <br />

                    {/* <!-- Password input --> */}
                    <div class='form-outline mb-4'>
                      <label class='aoLoginFormLabel' for='form3Example4'>
                        Password
                      </label>
                      <input
                        type='password'
                        id='form3Example4'
                        class='custom-input'
                        placeholder='Enter your password'
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    {/* <!-- Submit button --> */}
                    <br />
                    <button
                      type='submit'
                      className='aoLoginBtn btn btn-primary btn-block mb-4'
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginAO;
