import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/System/Admin/Sidebar/Sidebar";
import NavBar from "../../../components/System/Admin/NavBar/NavBar";
import SystemFooter from "../../../components/System/Admin/Footer/SystemFooter";
import "./styles/DashboardAdmin.css";

import DataTable from "react-data-table-component";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";
import echoCenterImage from "../../../img/other comp/newsbanner.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const AgriOfficerAdmin = () => {
  useEffect(() => {
    const adminInfo = localStorage.getItem("adminInfo");

    if (adminInfo === null) {
      history("/admin/login");
    }
  }, []);

  const [Agriofficers, setAgriofficers] = useState([]);

  //get all agri officers
  const getAgriOfficers = async () => {
    axios.get("http://localhost:8075/agriofficers/").then((res) => {
      setAgriofficers(res.data);
      setFilteredData(res.data);
    });
  };

  useEffect(() => {
    getAgriOfficers();
  }, []);

  const history = useNavigate();

  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState();
  const [show, setShow] = useState(false);
  const [selectedAgriOfficer, setSelectedAgriOfficer] = useState({});

  const handleSearch = () => {
    const newData = Agriofficers.filter(
      (value) =>
        value.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.email.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.contact.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.district.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.province.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredData(newData);
  };

  useEffect(() => {
    handleSearch();
  }, [searchInput]);

  const selectAgriOfficer = (row) => {
    setShow(true);
    setSelectedAgriOfficer(row);
  };

  //delete agri officer
  const deleteAgriOfficer = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Agri Officer!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete("http://localhost:8075/agriofficers/delete/" + id)
          .then((res) => {
            swal("Poof! Agri Officer has been deleted!", {
              icon: "success",
            });
            getAgriOfficers();
          })
          .catch((err) => {
            swal("Oops! Something went wrong, try again later!", {
              icon: "error",
            });
          });
      } else {
        swal("Your Agri Officer is safe!");
      }
    });
  };

  const columns = [
    // {
    //   name: "Id",
    //   selector: (row) => row.id,
    //   sortable: true,
    // },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "details",
      selector: (row) => row.contact,
      sortable: true,
      cell: (row) => (
        <div>
          <p>
            <b>Contact : </b>
            {row.contact} <br />
            {row.email}
          </p>
          <p>
            <b>Address : </b>
            {row.address}
          </p>
        </div>
      ),
    },
    {
      name: "Image",
      selector: (row) => row.image,
      sortable: true,
      cell: (row) => (
        <div>
          <img
            src={row.image}
            alt="echo center"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
      ),
    },
    {
      name: "Grama Niladari Division",
      selector: (row) => row.gramaNiladariDivision,
      sortable: true,
    },
    {
      name: "District",
      selector: (row) => row.district,
      sortable: true,
    },
    {
      name: "Province",
      selector: (row) => row.province,
      sortable: true,
    },
    {
      name: "Officer Reg Date",
      selector: (row) => row.createdAt,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div>
          <Button
            variant="info"
            className="m-1"
            onClick={() => selectAgriOfficer(row)}
          >
            <i class="bi bi-info-circle"></i>
          </Button>
          <Button
            variant="success"
            className="m-1"
            onClick={() => history("/admin/agriofficers/" + row._id)}
          >
            <i class="bi bi-pencil-square"></i>
          </Button>
          <Button
            variant="danger"
            className="m-1"
            onClick={() => deleteAgriOfficer(row._id)}
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
            <h3>Manage Agricultural Officers</h3>
          </div>
          <div className="manage-echo-center-boday">
            <Row>
              <Col lg={9}></Col>
              <Col lg={3}>
                <Button onClick={() => history("/admin/addagrioffer")}>
                  Add Agricultural Officer
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
          <Modal
            size="lg"
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="VIEW-SINGLE-AGRI-OFFICER"
          >
            <Modal.Header closeButton style={{ backgroundColor: "#01072b" }}>
              <Modal.Title
                id="VIEW-SINGLE-AGRI-OFFICER"
                style={{ color: "white" }}
              >
                {selectedAgriOfficer.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="view-single-agri-officer-body">
                <Row>
                  <Col lg={4}>
                    <img
                      src={selectedAgriOfficer.image}
                      alt="echo center"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Col>
                  <Col lg={8}>
                    <p>
                      <b>Contact : </b>
                      {selectedAgriOfficer.contact} <br />
                      {selectedAgriOfficer.email}
                    </p>
                    <p>
                      <b>Address : </b>
                      {selectedAgriOfficer.address}
                    </p>
                    <p>
                      <b>Grama Niladari Division : </b>

                      {selectedAgriOfficer.gramaNiladariDivision}
                    </p>
                    <p>
                      <b>District : </b>

                      {selectedAgriOfficer.district}
                    </p>
                    <p>
                      <b>Province : </b>

                      {selectedAgriOfficer.province}
                    </p>
                    <p>
                      <b>Officer Reg Date : </b>

                      {selectedAgriOfficer.createdAt}
                    </p>
                  </Col>
                </Row>
              </div>
            </Modal.Body>
          </Modal>
        </div>
        <SystemFooter />
      </div>
    </div>
  );
};

export default AgriOfficerAdmin;
