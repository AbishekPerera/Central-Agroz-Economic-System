import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/System/Admin/Sidebar/Sidebar";
import DataTable from "react-data-table-component";
import NavBar from "../../../components/System/Admin/NavBar/NavBar";
import SystemFooter from "../../../components/System/Admin/Footer/SystemFooter";
import "./styles/DashboardAdmin.css";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";
import echoCenterImage from "../../../img/other comp/newsbanner.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const EchoCentersAdmin = () => {
  useEffect(() => {
    const adminInfo = localStorage.getItem("adminInfo");

    if (adminInfo === null) {
      history("/admin/login");
    }
  }, []);

  const [echoCenters, setEchoCenters] = useState([]);

  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedEchoCenter, setSelectedEchoCenter] = useState({});

  const history = useNavigate();

  const getEchoCenters = async () => {
    try {
      axios
        .get("http://localhost:8075/ecocenters/")
        .then((res) => {
          setEchoCenters(res.data);
          setFilteredData(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getEchoCenters();
  }, []);

  const handleSearch = () => {
    const newData = echoCenters.filter(
      (center) =>
        center.ecoCenterName
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        center._id.toLowerCase().includes(searchInput.toLowerCase()) ||
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

  // ::::::::::::::::::::: delete echo center ::::::::::::::::::::::::::::

  const deleteEchoCenter = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this echo center!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete("http://localhost:8075/ecocenters/delete/" + id)
          .then((res) => {
            swal("Poof! Your echo center has been deleted!", {
              icon: "success",
            });
            getEchoCenters();
          })
          .catch((err) => {
            alert(err.message);
          });
      } else {
        swal("Your echo center is safe!");
      }
    });
  };

  const columns = [
    {
      name: "Eco Center ID",
      selector: (row) => row._id,
      sortable: true,
    },
    {
      name: "Details",
      cell: (row) => (
        <div>
          <p>
            <b>Eco Center Name: </b>
            {row.ecoCenterName}
          </p>
          <p>
            <b>Eco Center Address: </b>
            {row.ecoCenterAddress}
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
      selector: (row) => row.ecoCenterName,
      sortable: true,
    },
    {
      name: "Contact Number",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Officer Email",
      selector: (row) => row.officerEmail,
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
            onClick={() => history("/admin/echoCenters/" + row._id)}
          >
            <i class="bi bi-pencil-square"></i>
          </Button>
          <Button
            variant="danger"
            className="m-1"
            onClick={() => deleteEchoCenter(row._id)}
          >
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
            <h3>Manage Economic Centers</h3>
          </div>
          <div className="manage-echo-center-boday">
            <Row>
              <Col lg={9}></Col>
              <Col lg={3}>
                <Button onClick={() => history("/admin/addchoCenters")}>
                  Add Economic Center
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
              {selectedEchoCenter.ecoCenterName}
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
                  <h4>Economic Center Details</h4>
                </div>
              </div>
              <div className="e-center-model-details p-3">
                <Row>
                  <Col lg={6}>
                    <p>
                      <b>Eco Center ID: </b>
                      {selectedEchoCenter._id}
                    </p>
                    <p>
                      <b>Eco Center Address: </b>
                      {selectedEchoCenter.ecoCenterAddress}
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
                      {selectedEchoCenter.officerName}
                    </p>
                    <p>
                      <b>Officer Email: </b>
                      {selectedEchoCenter.officerEmail}
                    </p>
                    <p>
                      <b>Officer Contact: </b>
                      {selectedEchoCenter.officerContact}
                    </p>
                    <p>
                      <b>Officer Address: </b>
                      {selectedEchoCenter.officerAddress}
                    </p>
                    <p>
                      <b>Registered Date: </b>
                      {selectedEchoCenter.createdAt}
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
