import React, { useState } from "react";
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

const DashboardAdmin = () => {
  const [echoCenters, setEchoCenters] = useState([
    {
      name: "Western Province",
      economic_center_count: 15,
    },
    {
      name: "Central Province",
      economic_center_count: 8,
    },
    {
      name: "Southern Province",
      economic_center_count: 6,
    },
    {
      name: "Northern Province",
      economic_center_count: 3,
    },
    {
      name: "Eastern Province",
      economic_center_count: 5,
    },
    {
      name: "North Western Province",
      economic_center_count: 4,
    },
    {
      name: "North Central Province",
      economic_center_count: 2,
    },
    {
      name: "Uva Province",
      economic_center_count: 3,
    },
    {
      name: "Sabaragamuwa Province",
      economic_center_count: 2,
    },
  ]);

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
