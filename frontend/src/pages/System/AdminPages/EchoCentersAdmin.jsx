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
      _id: "64575de3201b6a587daef125",
      ecoCenterName: "Jaffna Economic Center",
      ecoCenterAddress: "Kankesanthurai Road, Kokuvil, Jaffna",
      province: "Northern",
      district: "Jaffna",
      phone: "+94 21 221 2212",
      officerName: "Raj Kumar",
      officerEmail: "rajkumar@company.com",
      officerContact: "+94 77 111 2222",
      officerAddress: "No. 123, Main Street, Jaffna",
      createdAt: "2023-05-07T08:14:27.808Z",
      updatedAt: "2023-05-07T08:14:27.808Z",
      __v: 0,
    },
    {
      _id: "64575ded201b6a587daef127",
      ecoCenterName: "Kurunegala Economic Center",
      ecoCenterAddress: "Dambulla Road, Kurunegala",
      province: "North Western",
      district: "Kurunegala",
      phone: "+94 37 223 2200",
      officerName: "Mala Perera",
      officerEmail: "malaperera@company.com",
      officerContact: "+94 76 555 4444",
      officerAddress: "No. 456, Negombo Road, Kurunegala",
      createdAt: "2023-05-07T08:14:37.152Z",
      updatedAt: "2023-05-07T08:14:37.152Z",
      __v: 0,
    },
    {
      _id: "64575df4201b6a587daef129",
      ecoCenterName: "Anuradhapura Economic Center",
      ecoCenterAddress: "Stage 2, Anuradhapura",
      province: "North Central",
      district: "Anuradhapura",
      phone: "+94 25 223 3355",
      officerName: "Sanath Fernando",
      officerEmail: "sanathfernando@company.com",
      officerContact: "+94 77 777 7777",
      officerAddress: "No. 789, Mihintale Road, Anuradhapura",
      createdAt: "2023-05-07T08:14:44.481Z",
      updatedAt: "2023-05-07T08:14:44.481Z",
      __v: 0,
    },
    {
      _id: "64575dff201b6a587daef12b",
      ecoCenterName: "Matara Economic Center",
      ecoCenterAddress: "No. 13, Hakmana Road, Matara",
      province: "Southern",
      district: "Matara",
      phone: "+94 41 223 4400",
      officerName: "Samantha Silva",
      officerEmail: "samanthasilva@company.com",
      officerContact: "+94 76 333 2222",
      officerAddress: "No. 456, Galle Road, Matara",
      createdAt: "2023-05-07T08:14:55.441Z",
      updatedAt: "2023-05-07T08:14:55.441Z",
      __v: 0,
    },
    {
      _id: "64575e11201b6a587daef12d",
      ecoCenterName: "Badulla Economic Center",
      ecoCenterAddress: "Bandarawela Road, Badulla",
      province: "Uva",
      district: "Badulla",
      phone: "+94 55 223 1100",
      officerName: "Chathura Fernando",
      officerEmail: "chathurafernando@company.com",
      officerContact: "+94 77 333 4444",
      officerAddress: "No. 789, Kandy Road, Badulla",
      createdAt: "2023-05-07T08:15:13.778Z",
      updatedAt: "2023-05-07T08:15:13.778Z",
      __v: 0,
    },
    {
      _id: "64575e1a201b6a587daef12f",
      ecoCenterName: "Batticaloa Economic Center",
      ecoCenterAddress: "Trincomalee Road, Batticaloa",
      province: "Eastern",
      district: "Batticaloa",
      phone: "+94 65 223 7700",
      officerName: "Kamal Perera",
      officerEmail: "kamalperera@company.com",
      officerContact: "+94 76 888 9999",
      officerAddress: "No. 456, Kallady Road, Batticaloa",
      createdAt: "2023-05-07T08:15:22.049Z",
      updatedAt: "2023-05-07T08:15:22.049Z",
      __v: 0,
    },
    {
      _id: "64575e22201b6a587daef131",
      ecoCenterName: "Kandy Economic Center",
      ecoCenterAddress: "Gannoruwa, Kundasale, Kandy",
      province: "Central",
      district: "Kandy",
      phone: "+94 81 223 5500",
      officerName: "Nishantha Rajapaksa",
      officerEmail: "nishantharajapaksa@company.com",
      officerContact: "+94 77 444 5555",
      officerAddress: "No. 789, William Gopallawa Mawatha, Kandy",
      createdAt: "2023-05-07T08:15:30.138Z",
      updatedAt: "2023-05-07T08:15:30.138Z",
      __v: 0,
    },
    {
      _id: "64575e29201b6a587daef133",
      ecoCenterName: "Galle Economic Center",
      ecoCenterAddress: "Hapugala, Galle",
      province: "Southern",
      district: "Galle",
      phone: "+94 91 223 9900",
      officerName: "Lakshitha Perera",
      officerEmail: "lakshithaperera@company.com",
      officerContact: "+94 76 999 8888",
      officerAddress: "No. 456, Matara Road, Galle",
      createdAt: "2023-05-07T08:15:37.822Z",
      updatedAt: "2023-05-07T08:15:37.822Z",
      __v: 0,
    },
    {
      _id: "64575e32201b6a587daef135",
      ecoCenterName: "Ratnapura Economic Center",
      ecoCenterAddress: "Kiriella Road, Ratnapura",
      province: "Sabaragamuwa",
      district: "Ratnapura",
      phone: "+94 45 223 8800",
      officerName: "Thilanka Silva",
      officerEmail: "thilankasilva@company.com",
      officerContact: "+94 77 222 1111",
      officerAddress: "No. 789, Colombo Road, Ratnapura",
      createdAt: "2023-05-07T08:15:46.085Z",
      updatedAt: "2023-05-07T08:15:46.085Z",
      __v: 0,
    },
    {
      _id: "64575f60201b6a587daef137",
      ecoCenterName: "Colombo Economic Center",
      ecoCenterAddress: "No. 19, D.R. Wijewardena Mawatha, Colombo 10",
      province: "Western",
      district: "Colombo",
      phone: "+94 11 268 5544",
      officerName: "John Doe",
      officerEmail: "johndoe@company.com",
      officerContact: "+94 77 123 4567",
      officerAddress: "No. 123, Galle Road, Colombo 03",
      createdAt: "2023-05-07T08:20:48.491Z",
      updatedAt: "2023-05-07T08:20:48.491Z",
      __v: 0,
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
