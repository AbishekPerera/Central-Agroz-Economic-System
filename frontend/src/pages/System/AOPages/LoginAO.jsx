import React from 'react';
import './styles/LoginAo.css';
const LoginAO = () => {
  return (
    <div className='aoLoginContainer0'>
      <section class='background-radial-gradient overflow-hidden'>
        <div class='container px-4 py-5 px-md-5 text-center text-lg-start my-5'>
          <div class='row gx-lg-5 align-items-center mb-5'>
            <div class='col-lg-6 mb-5 mb-lg-0' style={{ zIndex: '10' }}>
              <h1
                class='my-5 display-5 fw-bold ls-tight'
                style={{ color: 'hsl(218, 81%, 95%)' }}>
                Central Agroz <br />
                <span style={{ color: 'hsl(218, 81%, 75%)' }}>
                  Economic System
                </span>
              </h1>
              <p
                class='mb-4 opacity-70'
                style={{ color: 'hsl(218, 81%, 85%)' }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>

            <div class='col-lg-6 mb-5 mb-lg-0 position-relative'>
              <div
                id='radius-shape-1'
                class='position-absolute rounded-circle shadow-5-strong'></div>
              <div
                id='radius-shape-2'
                class='position-absolute shadow-5-strong'></div>
              <div class='card bg-glass'>
                
                <div class='card-body px-4 py-5 px-md-5'>
                  <form>
                  <h2 style={{textAlign: "center"}}>Login</h2>
                    {/* <!-- Email input --> */}
                    <div class='form-outline mb-4'>
                      <br />
                      <label class='form-label' for='form3Example3'>
                        Email address
                      </label>
                      <input
                        type='email'
                        id='form3Example3'
                        class='form-control'
                      />
                      
                    </div>
                    <br />

                    {/* <!-- Password input --> */}
                    <div class='form-outline mb-4'>
                    <label class='form-label' for='form3Example4'>
                        Password
                      </label>
                      <input
                        type='password'
                        id='form3Example4'
                        class='form-control'
                      />
                      
                    </div>

                    {/* <!-- Submit button --> */}
                    <br/>
                    <button
                    // style={{display: "flex", justifyContent: "center"}}
                      type='submit'
                      class='btn btn-primary btn-block mb-4'>
                      Sign up
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
