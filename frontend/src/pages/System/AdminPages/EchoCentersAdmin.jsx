import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/System/Admin/Sidebar/Sidebar";
import DataTable from "react-data-table-component";
import NavBar from "../../../components/System/Admin/NavBar/NavBar";
import SystemFooter from "../../../components/System/Admin/Footer/SystemFooter";
import "./styles/DashboardAdmin.css";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";
import echoCenterImage from "../../../img/other comp/newsbanner.jpg";
import { useNavigate } from "react-router-dom";

const EchoCentersAdmin = () => {
  const [echoCenters, setEchoCenters] = useState([
    {
      id: "EC001",
      echo_name: "Echo Center 1",
      echo_address: "No 1, Colombo Road, Colombo",
      province: "Western",
      district: "Colombo",
      phone: "0112345678",
      officer_name: "Asanka",
      officer_email: "asa@aa.aa",
      officer_contact: "0771234567",
      officer_address: "No 1, Colombo Road, Colombo",
      center_registered_date: "2021-09-01",
    },
    {
      id: "EC002",
      echo_name: "Echo Center 2",
      echo_address: "No 2, Colombo Road, Colombo",
      province: "Western",
      district: "Colombo",
      phone: "0112345678",
      officer_name: "Asanka",
      officer_email: "bbb@bb.aa",
      officer_contact: "0771234567",
      officer_address: "No 2, Colombo Road, Colombo",
      center_registered_date: "2021-09-01",
    },
    {
      id: "EC003",
      echo_name: "Echo Center 3",
      echo_address: "No 3, Colombo Road, Colombo",
      province: "Western",
      district: "Colombo",
      phone: "0112345678",
      officer_name: "Asanka",
      officer_email: "asa@aa.aa",
      officer_contact: "0771234567",
      officer_address: "No 3, Colombo Road, Colombo",
      center_registered_date: "2021-09-01",
    },
    {
      id: "EC004",
      echo_name: "Echo Center 4",
      echo_address: "No 4, Colombo Road, Colombo",
      province: "Western",
      district: "Colombo",
      phone: "0112345678",
      officer_name: "Asanka",
      officer_email: "saa@aa.aa",
      officer_contact: "0771234567",
      officer_address: "No 4, Colombo Road, Colombo",
      center_registered_date: "2021-09-01",
    },
  ]);

  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState(echoCenters);
  const [show, setShow] = useState(false);
  const [selectedEchoCenter, setSelectedEchoCenter] = useState({});

  const history = useNavigate();

  const handleSearch = () => {
    const newData = echoCenters.filter(
      (center) =>
        center.echo_name.toLowerCase().includes(searchInput.toLowerCase()) ||
        center.id.toLowerCase().includes(searchInput.toLowerCase()) ||
        center.province.toLowerCase().includes(searchInput.toLowerCase()) ||
        center.district.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredData(newData);
  };

  useEffect(() => {
    handleSearch();
  }, [searchInput]);

  const selectEchoCenter = (echoCenter) => {
    setSelectedEchoCenter(echoCenter);
    setShow(true);
  };

  const columns = [
    {
      name: "Echo Center ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Details",
      cell: (row) => (
        <div>
          <p>
            <b>Echo Center Name: </b>
            {row.echo_name}
          </p>
          <p>
            <b>Echo Center Address: </b>
            {row.echo_address}
          </p>
          <p>
            <b>Province: </b>
            {row.province}
          </p>
          <p>
            <b>District: </b>
            {row.district}
          </p>
        </div>
      ),
      selector: (row) => row.echo_name,
      sortable: true,
    },
    {
      name: "Contact Number",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Officer Email",
      selector: (row) => row.officer_email,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div>
          <Button
            variant="info"
            className="m-1"
            onClick={() => selectEchoCenter(row)}
          >
            <i class="bi bi-info-circle"></i>
          </Button>
          <Button
            variant="success"
            className="m-1"
            onClick={() => history("/admin/echoCenters/" + row.id)}
          >
            <i class="bi bi-pencil-square"></i>
          </Button>
          <Button variant="danger" className="m-1">
            <i class="bi bi-trash3"></i>
          </Button>
        </div>
      ),
    },
  ];

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
          <div className="admin-pages-header-title">
            <h3>Manage Echonomic Centers</h3>
          </div>
          <div className="manage-echo-center-boday">
            <Row>
              <Col lg={9}></Col>
              <Col lg={3}>
                <Button onClick={() => history("/admin/addchoCenters")}>
                  Add Echonomic Center
                </Button>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search..."
                />
                <DataTable
                  columns={columns}
                  data={filteredData}
                  pagination={true}
                  paginationPerPage={5}
                  paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
                  noDataComponent={
                    <div className="no-data-t-found-outer">
                      <div className="no-data-t-found-inner">
                        <h5>No Data Found</h5>
                      </div>
                    </div>
                  }
                />
              </Col>
            </Row>
          </div>
        </div>
        <Modal
          show={show}
          size="lg"
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="VIEW-SINGLE-ECHONOMIC-CENTER"
        >
          <Modal.Header closeButton style={{ backgroundColor: "#01072b" }}>
            <Modal.Title
              id="VIEW-SINGLE-ECHONOMIC-CENTER"
              style={{ color: "#fff" }}
            >
              {selectedEchoCenter.echo_name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="view-single-echo-center-body">
              <div className="model-image-header">
                <img
                  src={echoCenterImage}
                  alt="echo center"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div className="e-center-model-header-h4 p-3">
                  <h4>Echonomic Center Details</h4>
                </div>
              </div>
              <div className="e-center-model-details p-3">
                <Row>
                  <Col lg={6}>
                    <p>
                      <b>Echo Center ID: </b>
                      {selectedEchoCenter.id}
                    </p>
                    <p>
                      <b>Echo Center Address: </b>
                      {selectedEchoCenter.echo_address}
                    </p>
                    <p>
                      <b>Province: </b>
                      {selectedEchoCenter.province}
                    </p>
                    <p>
                      <b>District: </b>
                      {selectedEchoCenter.district}
                    </p>
                    <p>
                      <b>Contact Number: </b>
                      {selectedEchoCenter.phone}
                    </p>
                  </Col>
                  <Col lg={6}>
                    <p>
                      <b>Officer Name: </b>
                      {selectedEchoCenter.officer_name}
                    </p>
                    <p>
                      <b>Officer Email: </b>
                      {selectedEchoCenter.officer_email}
                    </p>
                    <p>
                      <b>Officer Contact: </b>
                      {selectedEchoCenter.officer_contact}
                    </p>
                    <p>
                      <b>Officer Address: </b>
                      {selectedEchoCenter.officer_address}
                    </p>
                    <p>
                      <b>Registered Date: </b>
                      {selectedEchoCenter.center_registered_date}
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <SystemFooter />
      </div>
    </div>
  );
};

export default EchoCentersAdmin;
