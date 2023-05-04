// import React, { useState, useEffect } from 'react';
import './DashInfoCard.css';

const DashInfoCard = () => {
 
  return (
    <div>
      <div class='grey-bg container-fluid'>
        <section id='stats-subtitle'>
          <div class='row'>
            <div class='col-12 mt-3 mb-1'>
              <h2 class='cardTopic text-uppercase'>Overall Statistics</h2>
              <br />
              <br />
            </div>
          </div>

          <div class='row'>
            <div class='col-xl-5 col-md-12'>
              <div class='cardDash overflow-hidden'>
                <div class='card-content'>
                  <div class='card-body cleartfix'>
                    <div className='row'>
                      <div className='col-8'>
                        <div class='media-body px-4'>
                          <h4>Total Farmers</h4>
                        </div>
                        <div
                          class='align-self-center px-4'
                          style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                          <h1>2645</h1>
                        </div>
                      </div>
                      <div className='cardIcon col-4'>
                        <i
                          class='bi bi-currency-dollar'
                          style={{ fontSize: '4rem', color: '#84dcc6' }}></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class='col-xl-1 col-md-12'></div>

            <div class='col-xl-5 col-md-12'>
              <div class='cardDash overflow-hidden'>
                <div class='card-content'>
                  <div class='card-body cleartfix'>
                    <div className='row'>
                      <div className='col-8'>
                        <div class='media-body px-4'>
                          <h4>Total Harvest</h4>
                        </div>
                        <div
                          class='align-self-center px-4'
                          style={{ marginTop: '1rem', marginLeft: '3rem' }}>
                          <h1>9800 kg</h1>
                        </div>
                      </div>
                      <div className='cardIcon col-4'>
                        <i
                          class='bi bi-box-seam'
                          style={{ fontSize: '4rem', color: '#ffac81' }}></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div class='row'>
            <div class='col-xl-5 col-md-12'>
              <div class='cardDash overflow-hidden'>
                <div class='card-content'>
                  <div class='card-body cleartfix'>
                    <div className='row'>
                      <div className='col-8'>
                        <div class='media-body px-4'>
                          <h4>Total Fertilizers received</h4>
                        </div>
                        <div
                          class='align-self-center px-5'
                          style={{
                            marginTop: '1rem',
                            marginLeft: '3rem',
                            marginBottom: '1rem',
                          }}>
                          <h1>250 kg</h1>
                        </div>
                      </div>
                      <div className='cardIcon col-4'>
                        <i
                          class='bi bi-people-fill'
                          style={{ fontSize: '4rem', color: '#ffafcc' }}></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class='col-xl-1 col-md-12'></div>

            <div class='col-xl-5 col-md-12'>
              <div class='cardDash overflow-hidden'>
                <div class='card-content'>
                  <div class='card-body cleartfix'>
                    <div className='row'>
                      <div className='col-8'>
                        <div class='media-body px-4'>
                          <h4>Total Fertilizers distributed</h4>
                        </div>
                        <div
                          class='align-self-center px-5'
                          style={{
                            marginTop: '1rem',
                            marginLeft: '3rem',
                            marginBottom: '1rem',
                          }}>
                          <h1>250kg</h1>
                        </div>
                      </div>
                      <div className='cardIcon col-4'>
                        <i
                          class='bi bi-person-fill-add'
                          style={{ fontSize: '4rem', color: '#809bce' }}></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashInfoCard;
