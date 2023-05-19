import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import LoginImage from "../../../img/Logo/farmerlogin.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import ErrorMsgLogin from "../../../components/CustomAlert/ErrorMsgLogin";
import Loading from "../../../components/Loading/Loading";

const AdminLogin = () => {
  const [adEmail, setemail] = useState("");
  const [adPassword, setpassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const history = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    // console.log(adEmail, adPassword);
    const newOb = {
      email: adEmail,
      password: adPassword,
    };

    // console.log(newOb);

    axios
      .post("http://localhost:8075/admin/login", newOb)
      .then((res) => {
        // console.log(res.data);
        swal({
          title: "Login Successfull.",
          icon: "success",
          button: "Ok",
        }).then(() => {
          localStorage.setItem("adminInfo", JSON.stringify(res.data));
          setLoading(false);
          setError(false);
        });
      })
      .catch((err) => {
        // console.log(err);
        swal({
          title: "Invalid Email Or Password.",
          icon: "error",
          button: "Ok",
        }).then(() => {
          setLoading(false);
          setError(true);
        });
      });
  };

  useEffect(() => {
    const adminInfo = localStorage.getItem("adminInfo");

    if (adminInfo) {
      history("/admin/dashboard");
    }
  });

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="floating-on-login">
        <Link to="/">
          <i class="bi bi-house"></i>
        </Link>
      </div>
      <Container>
        <Row className="d-flex align-items-stretch">
          <Col md={6} className="mb-5" style={{ backgroundColor: "#eaeee3" }}>
            <div className="d-flex flex-column ms-5">
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
                Welcome to Central Agroz Economy
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
              <Form onSubmit={submitHandler}>
                {error && (
                  <ErrorMsgLogin variant="danger">
                    {"Invalid Email Or Password..."}
                  </ErrorMsgLogin>
                )}
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    onChange={(e) => setemail(e.target.value)}
                    required
                    placeholder="Enter Email"
                    style={{
                      border: "0.5px solid grey",
                      borderRadius: "2px",
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={(e) => setpassword(e.target.value)}
                    required
                    placeholder="Password"
                    style={{
                      border: "0.5px solid grey",
                      borderRadius: "2px",
                    }}
                  />
                </Form.Group>
                <br />
                <div className="text-center pt-1 mb-5 pb-1">
                  {loading && <Loading />}
                  <Button
                    className="mb-4 w-100 gradient-custom-2"
                    variant="success"
                    type="submit"
                  >
                    Login
                  </Button>
                  <a className="text-muted" href="#!">
                    Forgot password?
                  </a>
                </div>
              </Form>
            </div>
          </Col>

          <Col
            md={6}
            className="mb-5"
            style={{
              backgroundImage:
                'url("https://i.pinimg.com/564x/75/c9/a5/75c9a54640642c5a24a7bfd03fa2d1c7.jpg")',
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminLogin;
