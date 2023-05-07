import "./Styles/FarmerDashbord.css";
import "./Styles/FarmerViewAll.css";
import Sidebar from '../../../components/System/Farmer/Sidebar/Sidebar'
import NavBar from '../../../components/System/Farmer/NavBar/NavBarFarmer'
import SystemFooter from '../../../components/System/Farmer/Footer/SystemFarmerFooter'
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
// import { Form, FormControl, Button } from 'react-bootstrap';
import { Button,Col, Modal, Row} from "react-bootstrap";
import { useNavigate } from "react-router-dom";



const FarmerViewAll = () => {
 
  const [data, setData] = useState([
     {
      id: 1,
      name: 'Banana',
      harvestdate: '2023-05-05',
      date: '2022-05-07',
      quantity: 45,
      price: 470.00,
      location: 'Weliwa',
      status: 'Out for sale',
    },
    {
      id: 2,
      name: 'Papaya',
      harvestdate: '2023-05-04',
      date: '2023-05-07',
      quantity: 30,
      price: 350.00,
      location: 'Weliwa',
      status: 'Out for sale',
    },
    {
      id: 3,
      name: 'Watermelon',
      harvestdate: '2022-05-03',
      date: '2023-05-07',
      quantity: 25,
      price: 250.00,
      location: 'Weliwa',
      status: 'Out for sale',
    },
    {
      id: 4,
      name: 'Mango',
      harvestdate: '2022-05-03',
      date: '2022-05-03',
      quantity: 55,
      price: 450.00,
      location: 'Weliwa',
      status: 'Out for sale',
    },
    
  ]);

  const history = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});

  const handleSearch = () => {
    const newnewData = data.filter(
      (value) =>
        value.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.harvestdate.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.date.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.location.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.status.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredData(newnewData);
  };

  useEffect(() => {
    handleSearch();
  }, [searchInput]);

  const selectData = (row) => {
    setShow(true);
    setSelectedData(row);
  };

  
  const columns = [
    {
      name: "Crop Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Harvested Date",
      selector: (row) => row.harvestdate,
      sortable: true,
    },
    {
      name: "Published Date",
      selector: (row) => row.date,
      sortable: true,
    },
   
    {
        name: "Stock",
        selector: (row) => row.quantity,
        sortable: true,
        cell: (row) => (
          <div>
            <p>
              <br/>
              Quantity (kgs) : 
              {row.quantity} <br />
             
            </p>
            <p>
              Price (Per kg) :
              {row.price}
            </p>
          </div>
        ),
      },
    {
      name: "Location",
      selector: (row) => row.location,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Update Status",
      cell: (row) => (
        <div>
         <Button
            variant="success"
            className="m-1"
            onClick={() => history("/farmer/viewall/" + row.id)}
          >
            <i class="bi bi-pencil-square"></i>
          </Button>
          </div>)},
    {
      name: "Action",
      cell: (row) => (
        <div>
          <Button
            variant="info"
            className="m-1"
            onClick={() => selectData(row)}
          >
            <i class="bi bi-info-circle"></i>
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
        <h1 style={{ textAlign: 'left' }}>Publish History</h1> <br /> <br />   

        {/* Search bar before the table */}
      
        <Row>
          <div>
          <input style={{ width: '20%' }} 
                 type="text" placeholder="Search.." 
                 name="search"
                 value={searchInput}
                 onChange={(e)=> setSearchInput(e.target.value)}/>
          {/* <Button type="submit"><i class="bi-search"></i></Button> */}
          </div>
        </Row><br/>


        <DataTable
                  className="my-data-table" 
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
          
          <Modal
            size="lg"
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            style={{ backgroundImage: "url('https://i.pinimg.com/564x/a1/c4/e7/a1c4e7590349d2c0814e6a8406a5b3b0.jpg')" }} 
            // aria-labelledby="VIEW-SINGLE-AGRI-OFFICER"
          >
            <Modal.Header closeButton style={{ backgroundColor: "#052514" }}>
              <Modal.Title
                // id="VIEW-SINGLE-AGRI-OFFICER"
                Title
                style={{ color: "white" }}
              >
                {selectedData.name}   
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <Row>
                  <Col lg={4}>
                  </Col>
                  <Col lg={8}>
                    <p>
                      <b>Crop Name : </b>
                      {selectedData.name} <br />
                    </p>
                    <p>
                      <b>Crop ID : </b>
                      {selectedData.id} <br />
                    </p>
                    <p>
                      <b>Harvested Date : </b>
                      {selectedData.harvestdate} <br />
                    </p>
                    <p>
                      <b>Published Date : </b>
                      {selectedData.date} <br />
                    </p>
                    <p>
                      <b>Available quantity(in kgs) : </b>
                      {selectedData.quantity}
                    </p>
                    <p>
                      <b>Crop Price per 1kg : </b>
                      {selectedData.price}
                    </p>
                    <p>
                      <b>Available location of the crop : </b>
                      {selectedData.location}
                    </p>
                    <p style={{ fontSize: "20px",color: "red" }}>
                      <b>Product Status : </b>
                      <b >{selectedData.status}</b>
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
  )
}

export default FarmerViewAll