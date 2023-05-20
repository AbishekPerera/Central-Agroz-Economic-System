import React from 'react';
import Sidebar from '../../../components/System/AO/Global/Sidebar/Sidebar';
import NavBar from '../../../components/System/AO/Global/NavBar/NavBar';
import SystemFooter from '../../../components/System/AO/Global/Footer/SystemFooter';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import swal from 'sweetalert';

const UpdateFertilizer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [farmerUsername, setFarmerUsername] = React.useState('');
  const [fertilizerType, setFertilizerType] = React.useState('');
  const [year, setYear] = React.useState('');
  const [month, setMonth] = React.useState('');
  const [quantity, setQuantity] = React.useState('');

  const getOneFertilizerRecord = () => {
    axios
      .get(`http://localhost:8075/ao/getfertilizers/${id}`)
      .then((response) => {
        console.log(response);
        const updatedFertilizer = {
          farmerUsername: response.data.fertilizer.farmerUsername,
          fertilizerType: response.data.fertilizer.fertilizerType,
          year: response.data.fertilizer.year,
          month: response.data.fertilizer.month,
          quantity: response.data.fertilizer.quantity,
        };

        setFarmerUsername(updatedFertilizer.farmerUsername);
        setFertilizerType(updatedFertilizer.fertilizerType);
        setYear(updatedFertilizer.year);
        setMonth(updatedFertilizer.month);
        setQuantity(updatedFertilizer.quantity);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  React.useEffect(() => {
    getOneFertilizerRecord();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFertilizer = {
      farmerUsername,
      fertilizerType,
      year,
      month,
      quantity,
    };

    axios
      .put(`http://localhost:8075/ao/updatefertilizer/${id}`, newFertilizer)
      .then(() => {
        swal('Success', 'Fertilizer Record Updated Successfully', 'success');
        navigate('/ao/fertilizers');
        setTimeout(function () {}, 1000);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className='mainContainer'>
      <div className='sidebar'>
        <Sidebar data-testid='sidebar' />
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
                              onChange={(e) =>
                                setFarmerUsername(e.target.value)
                              }
                              value={farmerUsername}
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
                              onChange={(e) =>
                                setFertilizerType(e.target.value)
                              }
                              value={fertilizerType}
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
                              onChange={(e) => setYear(e.target.value)}
                              value={year}
                              pattern='\d{4}'
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
                          <div class='required col-md-3 ps-5'>
                            <label htmlFor='mb-0'>Quantity</label>
                          </div>
                          <div class='col-md-9 pe-5'>
                            <input
                              id='quantity'
                              type='number'
                              onChange={(e) => setQuantity(e.target.value)}
                              value={quantity}
                              class='form-control form-control-lg'
                            />
                          </div>
                        </div>

                        <div class='px-5 py-4'>
                          <button
                            type='submit'
                            class='button-18'
                            onClick={handleSubmit}
                            style={{ display: 'block', margin: '0 auto' }}
                          >
                            Update Fertilizer Record
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

export default UpdateFertilizer;
