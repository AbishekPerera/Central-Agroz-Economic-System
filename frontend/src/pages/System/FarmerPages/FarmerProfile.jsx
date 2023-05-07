import React, { useEffect, useState } from "react";
import "./Styles/FarmerDashbord.css";
import "./Styles/Farmerprofile.css";
import { Link } from "react-router-dom";
import { Col, Form, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Sidebar from '../../../components/System/Farmer/Sidebar/Sidebar'
import NavBar from '../../../components/System/Farmer/NavBar/NavBarFarmer'
import SystemFooter from '../../../components/System/Farmer/Footer/SystemFarmerFooter'


const FarmerProfile = () => {
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
              <h1 style={{ textAlign: 'left' }}>My Profile</h1>   

             
            <div class="container rounded bg-white mt-5 mb-5">
              <div class="row farmerbody">
                    <div class="col-md-3 border-right ">
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold">Nimal Bandara</span><span class="text-black-50">nimal@gmail.com</span><span> </span></div>
                    </div>
                    <div class="col-md-5 border-right " >
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h5 class="text-right">Personal Info</h5>
                            </div>
                        
                            <div class="row mt-3">
                                <div class="col-md-12"><label class="labelsfarmer">Full Name</label><input type="text" class="form-control" placeholder="Nimal Bandara" value=""/></div>
                                <div class="col-md-12"><label class="labelsfarmer">Address</label><input type="text" class="form-control" placeholder="No 784/B,Weliwa,Matara" value=""/></div>
                                <div class="col-md-12"><label class="labelsfarmer">Phone Number</label><input type="phone" class="form-control" placeholder="0710418465" value=""/></div>
                                <div class="row mt-2">
                                <div class="col-md-6"><label class="labelsfarmer">Division</label><input type="text" class="form-control" placeholder="Weliwa" value=""/></div>
                                <div class="col-md-6"><label class="labelsfarmer">District</label><input type="text" class="form-control" value="" placeholder="Matara"/></div>
                            </div>
                                <div class="col-md-12"><label class="labelsfarmer">Crop Type</label><input type="text" class="form-control" placeholder="Fruits" value=""/></div>
                                <div class="col-md-12"><label class="labelsfarmer">Additional Notes</label><input type="text" style={{ height:"200px" }} class="form-control" placeholder="Owns 3 aces of land from Matara" value=""/></div>
                            </div>
                           
                            <div class="mt-5 text-center"><button class="btn btn-success" type="button">Edit Profile</button></div>
                        </div>
                    </div>
                    
                    <div class="col-md-4">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h5 class="text-right">Login Credentials</h5>
                            </div>
                            <div class="col-md-12"><label class="labelsfarmer">Username</label><input type="text" class="form-control" placeholder="nimal_bandara" value=""/></div>
                            <div class="col-md-12"><label class="labelsfarmer">Password</label><input type="text" class="form-control" placeholder="Nimal123*" value=""/></div>
                        </div>
                    </div>
              </div>
            </div>
            </div>
            <SystemFooter />
          </div>
      </div>
  )
}

export default FarmerProfile