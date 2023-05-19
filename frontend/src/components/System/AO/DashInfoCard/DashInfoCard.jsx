// import React, { useState, useEffect } from 'react';
import { useEffect, useState } from 'react';
import './DashInfoCard.css';
import axios from 'axios';

const DashInfoCard = () => {
  const ao = JSON.parse(localStorage.getItem('agriofficer'));
  // const aoId = ao['agriculturalOfficer']['id'];
  const gramaNiladariDivision =
    ao['agriculturalOfficer']['gramaNiladariDivision'];

  const [farmers, setFarmers] = useState([]);
  const [farmerCount, setFarmerCount] = useState([]);
  // const [harvestCount, setHarvestCount] = useState([]);

  const countDivisionFarmers = () => {
    axios
      .get('http://localhost:8075/ao/getfarmers')
      .then((res) => {
        const filteredFarmers = res.data.filter((farmer) => {
          return farmer.division === gramaNiladariDivision;
        });
        setFarmers(filteredFarmers);

        let totalFarmers = 0;
        filteredFarmers.forEach((farmer) => {
          totalFarmers++;
        });
        setFarmerCount(totalFarmers);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // const countDivisionHarvests = () => {
  //   axios
  //     .get('http://localhost:8075/ao/getharvests')
  //     .then((res) => {
  //       const filteredHarvests = res.data.filter((harvest) => {
  //         return harvest.aoId === aoId;
  //       });
  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //     });
  // };

  useEffect(() => {
    countDivisionFarmers();
  }, []);

  return (
    <div>
      <div class='grey-bg container-fluid'>
        <section id='stats-subtitle'>
          <div class='row'>
            <div class='col-12 mt-3 mb-1'>
              <h2 class='cardTopicAO text-uppercase'>Overall Statistics</h2>
              <br />
              <br />
            </div>
          </div>

          <div class='row display-flex justify-content-center'>
            <div class='cardDashAO col-xl-5 col-md-12'>
              <div class='overflow-hidden'>
                <div class='card-content'>
                  <div class='card-body cleartfix'>
                    <div className='row'>
                      <div className='col-8'>
                        <div class='media-body px-4'>
                          <h4>Total Farmers</h4>
                        </div>
                        <div
                          class='align-self-center px-4'
                          style={{
                            marginTop: '1rem',
                            marginBottom: '1rem',
                            marginLeft: '2rem',
                          }}
                        >
                          <h1>{farmerCount}</h1>
                        </div>
                      </div>
                      <div className='cardIcon col-4'>
                        <i
                          class='bi bi-people-fill'
                          style={{ fontSize: '4rem', color: '#809bce' }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class='col-xl-1 col-md-12'></div>

            <div class='col-xl-5 col-md-12'>
              <div class='cardDashAO overflow-hidden'>
                <div class='card-content'>
                  <div class='card-body cleartfix'>
                    <div className='row'>
                      <div className='col-8'>
                        <div class='media-body px-4'>
                          <h4>Total Harvest</h4>
                        </div>
                        <div
                          class='align-self-center px-4'
                          style={{ marginTop: '1rem', marginLeft: '3rem' }}
                        >
                          <h1>1358 kg</h1>
                        </div>
                      </div>
                      <div className='cardIcon col-4'>
                        <i
                          class='bi bi-box-seam'
                          style={{ fontSize: '4rem', color: '#ffac81' }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </section>
      </div>
    </div>
  );
};

export default DashInfoCard;
