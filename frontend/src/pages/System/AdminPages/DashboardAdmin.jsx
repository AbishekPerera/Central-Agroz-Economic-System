import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/System/Admin/Sidebar/Sidebar";
import NavBar from "../../../components/System/Admin/NavBar/NavBar";
import SystemFooter from "../../../components/System/Admin/Footer/SystemFooter";
import "./styles/DashboardAdmin.css";
import { Col, Row } from "react-bootstrap";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DashboardAdmin = () => {
  const history = useNavigate();

  useEffect(() => {
    const adminInfo = localStorage.getItem("adminInfo");

    if (adminInfo === null) {
      history("/admin/login");
    }
  }, []);
  const [echoCenters, setEchoCenters] = useState([]);

  const getAllEchoCenters = async () => {
    axios
      .get("http://localhost:8075/ecocenters/")
      .then((res) => {
        const data = res.data;

        // Group data by province and count economic centers in each province
        const groupedData = data.reduce((acc, center) => {
          const province = center.province;
          if (acc[province]) {
            acc[province].economic_center_count++;
          } else {
            acc[province] = {
              name: province,
              economic_center_count: 1,
            };
          }
          return acc;
        }, {});

        // Convert the groupedData object to an array of values
        const restructuredData = Object.values(groupedData);

        // Update the state with the restructured data
        setEchoCenters(restructuredData);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getAllEchoCenters();
  }, []);

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
          <br />
          <h1>Dash Board</h1>
          <br />
          <hr />
          <div className="admin-dashboard-graphes-1">
            <Row>
              <Col lg={6}>
                <h4> Distribution of Economic centers </h4>
                <RadarChart
                  cx={300}
                  cy={250}
                  outerRadius={150}
                  width={500}
                  height={500}
                  data={echoCenters}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="name" />
                  <PolarRadiusAxis />
                  <Radar
                    name="Echo Centers"
                    dataKey="economic_center_count"
                    stroke="#045c01"
                    fill="#64ff5e"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </Col>
              <Col lg={6}>
                <div className="p-1">
                  <h4>Table View</h4>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Province</th>
                        <th scope="col">Eco Centers</th>
                      </tr>
                    </thead>
                    <tbody>
                      {echoCenters.map((echoCenter) => (
                        <tr>
                          <td>{echoCenter.name}</td>
                          <td>{echoCenter.economic_center_count}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <SystemFooter />
      </div>
    </div>
  );
};

export default DashboardAdmin;
