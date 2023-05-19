import React, { useState } from "react";

import LoginImage from "../../../img/Logo/farmerlogin.png";
import Header from "../../../components/Header/Header";
import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ECMOLoginPage = () => {
  const [inputs, setInputs] = useState({
    officerEmail: "",
    password: "",
  });
  function handleChange(e) {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  const sendData = (e) => {
    e.preventDefault();
    //setFormErrors(validate(inputs));
    //setIsSubmit(true);
    sendRequest();
  };

  const history = useNavigate();
  const sendRequest = async () => {
    await axios
      .post("http://localhost:8075/ecocenters/login", {
        officerEmail: inputs.officerEmail,
        password: inputs.password,
      })
      .then((res) => {
        swal("You have successfully Logged.");

        //set response data to local storage
        localStorage.setItem("ecmoInfo", JSON.stringify(res.data));

        history("/ecmo/dashboard");

        // get data from local storage as a string
        // const systemInfo = localStorage.getItem("systemInfo");
        // set data to local storage as a JSON object
        // const systemInfo1 = JSON.parse(systemInfo);

        // then you can get any data from local storage. in this case i get user id adn log it on console
        // console.log("local store", systemInfo1["user"]["_id"]);
      })
      .catch((error) => {
        swal("Login error", "Please check your email and password");
      });
  };
  return (
    <>
      <Header />
      <div className="mainContainer">
        <div className="contentContainer">
          <div className="container">
            <div
              className="row d-flex align-items-stretch"
              style={{ marginTop: "100px" }}
            >
              <div
                className="col-md-6 mb-5"
                style={{ backgroundColor: "black" }}
              >
                <div className="d-flex flex-column col-md-12">
                  <div className="text-center">
                    <br />
                    <br />
                  </div>
                  <p
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "30px",
                      color: "green",
                    }}
                  >
                    Welcome to Central Agroz Economic
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "17px",
                      color: "green",
                    }}
                  >
                    Please login to your account
                  </p>
                  <br />

                  <div className="form-group">
                    <label
                      htmlFor="username"
                      style={{
                        color: "white",
                      }}
                    >
                      Enter Username
                    </label>
                    <br></br>
                    <input
                      type="text"
                      className="form-control"
                      name="officerEmail"
                      placeholder="Enter user Email"
                      value={inputs.officerEmail}
                      onChange={handleChange}
                      style={{
                        border: "0.5px solid grey",
                        borderRadius: "2px",
                      }}
                    />
                  </div>
                  <br />

                  <div className="form-group">
                    <label
                      htmlFor="password"
                      style={{
                        color: "white",
                      }}
                    >
                      Password
                    </label>
                    <br></br>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      value={inputs.password}
                      onChange={handleChange}
                      style={{
                        border: "0.5px solid grey",
                        borderRadius: "2px",
                      }}
                    />
                  </div>
                  <br />
                  <div className="text-center pt-1 mb-5 pb-1">
                    <button
                      className="btn primery"
                      style={{
                        border: "1px solid green",
                        color: "green",
                      }}
                      variant="success"
                      onClick={sendData}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 mb-5"
                style={{
                  backgroundImage:
                    'url("https://res.cloudinary.com/sunleisure-world/image/upload/v1607148473/sunleisureworld/thingstodo/2021-09-29things05-39-23")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src={LoginImage}
                      style={{ width: "350px", height: "350px" }}
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ECMOLoginPage;
