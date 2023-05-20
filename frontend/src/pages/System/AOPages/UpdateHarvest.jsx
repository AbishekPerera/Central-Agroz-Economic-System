import React, { useEffect } from 'react';
import Sidebar from '../../../components/System/AO/Global/Sidebar/Sidebar';
import NavBar from '../../../components/System/AO/Global/NavBar/NavBar';
import SystemFooter from '../../../components/System/AO/Global/Footer/SystemFooter';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import swal from 'sweetalert';

const UpdateHarvest = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [farmerUsername, setFarmerUsername] = React.useState('');
  const [cropType, setCropType] = React.useState('');
  const [season, setSeason] = React.useState('');
  const [year, setYear] = React.useState('');
  const [month, setMonth] = React.useState('');
  const [expectedHarvest, setExpectedHarvest] = React.useState('');
  const [actualHarvest, setActualHarvest] = React.useState('');

  const getOneHarvest = () => {
    // Fetch the existing harvest data for the specified harvestId
    axios
      .get(`http://localhost:8075/ao/getharvests/` + id)
      .then((response) => {
        console.log('Harvest data', response.data.harvest);
        const updateHarvest = {
          farmerUsername: response.data.harvest.farmerUsername,
          cropType: response.data.harvest.cropType,
          season: response.data.harvest.season,
          year: response.data.harvest.year,
          month: response.data.harvest.month,
          expectedHarvest: response.data.harvest.expectedHarvest,
          actualHarvest: response.data.harvest.actualHarvest,
        };

        setFarmerUsername(updateHarvest.farmerUsername);
        setCropType(updateHarvest.cropType);
        setSeason(updateHarvest.season);
        setYear(updateHarvest.year);
        setMonth(updateHarvest.month);
        setExpectedHarvest(updateHarvest.expectedHarvest);
        setActualHarvest(updateHarvest.actualHarvest);

        console.log('Harvest data', farmerUsername);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getOneHarvest();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateHarvest = {
      farmerUsername,
      cropType,
      season,
      year,
      month,
      expectedHarvest,
      actualHarvest,
    };

    axios
      .put(`http://localhost:8075/ao/updateharvest/${id}`, updateHarvest)
      .then(() => {
        swal('Success', 'Harvest record updated successfully', 'success');
        navigate('/ao/harvests');
        setTimeout(function () {}, 1000);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div className='mainContainer'>
      <div className='sidebar'>
        <Sidebar />
      </div>

      <div className='contentContainer'>
        <div className='systemNavBar'>
          <NavBar />
        </div>
        <div className='content'>
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
                        <h2 class='text-right'>Update Harvest Record</h2>
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
                              required
                              value={farmerUsername}
                              onChange={(e) =>
                                setFarmerUsername(e.target.value)
                              }
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
                              onChange={(e) => setCropType(e.target.value)}
                              value={cropType}
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
                              onChange={(e) => setSeason(e.target.value)}
                              value={season}
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
                              onChange={(e) => setYear(e.target.value)}
                              value={year}
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
                              onChange={(e) => setMonth(e.target.value)}
                              value={month}
                              aria-label='Default select example'
                            >
                              <option
                                selected
                                style={{ fontSize: '16px' }}
                                disabled
                              >
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
                              onChange={(e) =>
                                setExpectedHarvest(e.target.value)
                              }
                              value={expectedHarvest}
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
                              onChange={(e) => setActualHarvest(e.target.value)}
                              value={actualHarvest}
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
                            Update Harvest Record
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <SystemFooter />
      </div>
    </div>
  );
};

export default UpdateHarvest;
