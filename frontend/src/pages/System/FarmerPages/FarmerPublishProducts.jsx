import React from 'react'
import "./Styles/FarmerDashbord.css";
import "./Styles/FarmerPublishProducts.css";
import Sidebar from '../../../components/System/Farmer/Sidebar/Sidebar'
import NavBar from '../../../components/System/Farmer/NavBar/NavBarFarmer'
import SystemFooter from '../../../components/System/Farmer/Footer/SystemFarmerFooter'
import PublishImg from "../../../img/Farmer/vege2.jpg"
import { Button,Col, Modal, Row} from "react-bootstrap";


const FarmerPublishProducts = () => {
  return (
      <div className="mainContainer">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="contentContainer">
        <div className="systemNavBar">
          <NavBar />
        </div>

        <div className="content">
              <h1 style={{ textAlign: 'left' }}>Publish Crop Details</h1> <br /> <br />
            <div class="container registerbackground">
            <div className="row ">
              <div className="col-lg-12 col-md-3 col-sm-12 text-start registrationsidejpg"  
              style={{ backgroundImage: "url('https://img.freepik.com/free-photo/vegetables-arrangement-with-copy-space_23-2148949685.jpg?w=1380&t=st=1683237880~exp=1683238480~hmac=05a58bbf8d84cab41b6a501db6a3974fc023a5b5a85c7113c957db5e999c6b20')" ,
              
              backgroundsize: "cover",
              backgroundrepeat: "no-repeat"}}>
                <br />
                <form class="registrationform" 
                // onSubmit={submitHandler}
                >
                  <div class="mb-3">
                    <label for="name" class="form-label" >
                      Crop Type
                    </label>
                    {/* <input
                      required
                      // onChange={(e) => setName(e.target.value)}
                      type="text"
                      class="form-control"
                      id="name"
                      aria-describedby="cropNameHelp"
                      placeholder="Enter Crop Name"
                    /> */}
                     <select required class="form-select" id="type" style={{ width: '50%' }} >

                      <option value="" disabled selected>Select Type</option>
                      <option value="Fruits">Fruits</option>
                      <option value="Vegetables">Vegetables</option>
                      <option value="Rice">Dried</option>
                      <option value="Grain">Grains</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="name" class="form-label">
                      Crop Name
                    </label>
                    <input
                      required
                      // onChange={(e) => setName(e.target.value)}
                      type="text"
                      class="form-control"
                      id="name"
                      aria-describedby="cropNameHelp"
                      placeholder="Enter Crop Name"
                      style={{ width: '50%' }}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="quantity" class="form-label">
                      Available Quantity (kgs)
                    </label>
                    <input
                      required
                      // onChange={(e) => setEmail(e.target.value)}
                      type="number"
                      class="form-control"
                      id="quantity"
                      aria-describedby="quantityHelp"
                      placeholder="Enter the available quantity"
                      style={{ width: '50%' }}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="price" class="form-label">
                      Price (per 1kg)
                    </label>
                    <input
                      required
                      // onChange={(e) => setAddress(e.target.value)}
                      type="number"
                      class="form-control"
                      id="price"
                      aria-describedby="priceHelp"
                      placeholder="Enter the price per 1kg"
                      style={{ width: '50%' }}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="location" class="form-label">
                      Available Location
                    </label>
                    <input
                      required
                      // onChange={(e) => setPhone(e.target.value)}
                      type="text"
                      class="form-control"
                      id="location"
                      aria-describedby="locationHelp"
                      placeholder="Enter the location of the available crop"
                      style={{ width: '50%' }}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="condition" class="form-label">
                      Crop Condition
                    </label>
                    {/* <input
                      required
                      // onChange={(e) => setPassword(e.target.value)}
                      type="text"
                      class="form-control"
                      id="password"
                      aria-describedby="conditionHelp"
                      placeholder="Enter the condition of the crop"
                    /> */}
                     <select required class="form-select" id="condition" style={{ width: '50%' }}>
                      <option value="" disabled selected>Select condition</option>
                      <option value="fresh">Fresh</option>
                      <option value="frozen">Frozen</option>
                      <option value="dried">Dried</option>
                      <option value="canned">Canned</option>
                      <option value="preserved">Preserved</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="date" class="form-label">
                      Harvested Date
                    </label>
                    <input
                      required
                      // onChange={(e) => setConfirmPassword(e.target.value)}
                      type="date"
                      class="form-control"
                      id="date"
                      aria-describedby="dateHelp"
                      placeholder="Enter the harvested date"
                      style={{ width: '50%' }}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="phone" class="form-label">Contact Info</label>
                    <div class="row">
                     
                        <input required type="tel" class="form-control" id="phone" aria-describedby="phoneHelp" placeholder="Enter mobile" maxlength="10" style={{ width: '23%',marginLeft: '15px'  }}/>
                    
                        <input required type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" style={{ width: '35%',marginLeft: '20px'  }}/>
                     
                    </div>
                  </div>

                  <div class="mb-3 form-check">
                    <input
                      required
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      I agree that the provided details are true and accurate
                    </label>
                  </div>
                  <div className="somethingwentwrong p-2">
                    {/* {error && (
                      <span style={{ color: "red" }}>
                        Something went wrong! Please try again.
                      </span>
                    )} */}
                  </div>

              <button type="submit" class="registerbtn btn btn-info">
                Publish Product
              </button>
                </form>
              
              </div>
              {/* <div className="col-lg-2 col-md-3 col-sm-12 text-start registrationsidejpg2">
                <Row><img src={PublishImg} alt="register" className="registerimg" /></Row>

              </div> */}
            </div>
            </div>
        </div>
        <SystemFooter />
      </div>
      </div>
  )
}

export default FarmerPublishProducts