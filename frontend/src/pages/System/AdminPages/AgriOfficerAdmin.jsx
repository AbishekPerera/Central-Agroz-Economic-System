import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/System/Admin/Sidebar/Sidebar";
import NavBar from "../../../components/System/Admin/NavBar/NavBar";
import SystemFooter from "../../../components/System/Admin/Footer/SystemFooter";
import "./styles/DashboardAdmin.css";

import DataTable from "react-data-table-component";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";
import echoCenterImage from "../../../img/other comp/newsbanner.jpg";
import { useNavigate } from "react-router-dom";

const AgriOfficerAdmin = () => {
  useEffect(() => {
    const adminInfo = localStorage.getItem("adminInfo");

    if (adminInfo === null) {
      history("/admin/login");
    }
  }, []);

  const [Agriofficers, setAgriofficers] = useState([
    {
      _id: "64576083201b6a587daef13a",
      name: "Nimal Perera",
      email: "nimalperera@example.com",
      contact: "+94 77-123-4567",
      address: "No. 10, Kandy Road, Kadawatha",
      gramaNiladariDivision: "Makola South",
      district: "Gampaha",
      province: "Western",
      image:
        "https://github.com/AbishekPerera/img/blob/main/avatar.png?raw=true",
      createdAt: "2023-05-07T08:25:39.160Z",
      updatedAt: "2023-05-07T08:25:39.160Z",
      __v: 0,
    },
    {
      _id: "6457608c201b6a587daef13c",
      name: "Priyantha Fernando",
      email: "priyanthafernando@example.com",
      contact: "+94 71-234-5678",
      address: "No. 20, Baudhaloka Mawatha, Colombo 7",
      gramaNiladariDivision: "Colombo 7",
      district: "Colombo",
      province: "Western",
      image:
        "https://github.com/AbishekPerera/img/blob/main/avatar.png?raw=true",
      createdAt: "2023-05-07T08:25:48.401Z",
      updatedAt: "2023-05-07T08:25:48.401Z",
      __v: 0,
    },
    {
      _id: "64576093201b6a587daef13e",
      name: "Renuka Silva",
      email: "renukasilva@example.com",
      contact: "+94 76-345-6789",
      address: "No. 45, Temple Road, Kandy",
      gramaNiladariDivision: "Kandy North",
      district: "Kandy",
      province: "Central",
      image:
        "https://github.com/AbishekPerera/img/blob/main/avatar.png?raw=true",
      createdAt: "2023-05-07T08:25:55.359Z",
      updatedAt: "2023-05-07T08:25:55.359Z",
      __v: 0,
    },
    {
      _id: "6457609b201b6a587daef140",
      name: "Chaminda Rajapaksha",
      email: "chamindarajapaksha@example.com",
      contact: "+94 70-456-7890",
      address: "No. 7, Galle Road, Matara",
      gramaNiladariDivision: "Matara South",
      district: "Matara",
      province: "Southern",
      image:
        "https://github.com/AbishekPerera/img/blob/main/avatar.png?raw=true",
      createdAt: "2023-05-07T08:26:03.014Z",
      updatedAt: "2023-05-07T08:26:03.014Z",
      __v: 0,
    },
    {
      _id: "645760a1201b6a587daef142",
      name: "Tharanga Fernando",
      email: "tharangafernando@example.com",
      contact: "+94 77-567-8901",
      address: "No. 25, Main Street, Negombo",
      gramaNiladariDivision: "Negombo West",
      district: "Gampaha",
      province: "Western",
      image:
        "https://github.com/AbishekPerera/img/blob/main/avatar.png?raw=true",
      createdAt: "2023-05-07T08:26:09.636Z",
      updatedAt: "2023-05-07T08:26:09.636Z",
      __v: 0,
    },
    {
      _id: "645760af201b6a587daef144",
      name: "Mahesh Ranasinghe",
      email: "maheshranasinghe@example.com",
      contact: "+94 72-678-9012",
      address: "No. 30, Anuradhapura Road, Polonnaruwa",
      gramaNiladariDivision: "Polonnaruwa East",
      district: "Polonnaruwa",
      province: "North Central",
      image:
        "https://github.com/AbishekPerera/img/blob/main/avatar.png?raw=true",
      createdAt: "2023-05-07T08:26:23.333Z",
      updatedAt: "2023-05-07T08:26:23.333Z",
      __v: 0,
    },
    {
      _id: "645760b6201b6a587daef146",
      name: "Samantha Fernando",
      email: "samanthafernando@example.com",
      contact: "+94 76-789-0123",
      address: "No. 15, Main Road, Galle",
      gramaNiladariDivision: "Galle South",
      district: "Galle",
      province: "Southern",
      image:
        "https://github.com/AbishekPerera/img/blob/main/avatar.png?raw=true",
      createdAt: "2023-05-07T08:26:30.483Z",
      updatedAt: "2023-05-07T08:26:30.483Z",
      __v: 0,
    },
    {
      _id: "645760bb201b6a587daef148",
      name: "Kamal Perera",
      email: "kamalperera@example.com",
      contact: "+94 71-890-1234",
      address: "No. 5, Old Kandy Road, Kurunegala",
      gramaNiladariDivision: "Kurunegala West",
      district: "Kurunegala",
      province: "North Western",
      image:
        "https://github.com/AbishekPerera/img/blob/main/avatar.png?raw=true",
      createdAt: "2023-05-07T08:26:35.928Z",
      updatedAt: "2023-05-07T08:26:35.928Z",
      __v: 0,
    },
    {
      _id: "645760c1201b6a587daef14a",
      name: "Anjana De Silva",
      email: "anjanadesilva@example.com",
      contact: "+94 70-901-2345",
      address: "No. 12, Main Street, Jaffna",
      gramaNiladariDivision: "Jaffna South",
      district: "Jaffna",
      province: "Northern",
      image:
        "https://github.com/AbishekPerera/img/blob/main/avatar.png?raw=true",
      createdAt: "2023-05-07T08:26:41.390Z",
      updatedAt: "2023-05-07T08:26:41.390Z",
      __v: 0,
    },
    {
      _id: "645760c8201b6a587daef14c",
      name: "Shanika Rajapakse",
      email: "shanikarajapakse@example.com",
      contact: "+94 76-123-4567",
      address: "No. 9, Main Road, Ratnapura",
      gramaNiladariDivision: "Ratnapura South",
      district: "Ratnapura",
      province: "Sabaragamuwa",
      image:
        "https://github.com/AbishekPerera/img/blob/main/avatar.png?raw=true",
      createdAt: "2023-05-07T08:26:48.197Z",
      updatedAt: "2023-05-07T08:26:48.197Z",
      __v: 0,
    },
  ]);

  const history = useNavigate();

  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState(Agriofficers);
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
