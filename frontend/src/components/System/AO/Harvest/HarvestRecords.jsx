import React from 'react';
import { tableCustomStyles } from '../Global/TableStyles/tableRecordStyles.jsx';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../../../pages/System/AOPages/styles/DashboardAO.css';
import swal from 'sweetalert';

const HarvestRecords = () => {
  const ao = JSON.parse(localStorage.getItem('agriofficer'));
  const aoId = ao['agriculturalOfficer']['id'];

  const [harvest, setHarvest] = React.useState([]);

  const getAllHarvest = () => {
    axios
      .get('http://localhost:8075/ao/getharvests')
      .then((res) => {
        const filteredHarvest = res.data.filter((harvest) => {
          return harvest.aoId === aoId;
        });
        setHarvest(filteredHarvest);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8075/ao/deleteharvest/${id}`)
      .then((res) => {
        swal('Success', 'Harvest Record Deleted Successfully!', 'success');
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  React.useEffect(() => {
    getAllHarvest();
  }, []);

  const harvests = harvest.map((row, index) => ({
    ...row,
    id: index + 1,
  }));

  const columns = [
    {
      name: '#',
      selector: (row) => row.id,
      sortable: true,
      width: '50px',
    },
    {
      name: 'Name',
      selector: (row) => row.farmerUsername,
      sortable: true,
    },
    {
      name: 'Crop Type',
      selector: (row) => row.cropType,
      sortable: true,
      width: '150px',
    },
    {
      name: 'Season',
      selector: (row) => row.season,
      sortable: true,
      width: '100px',
    },
    {
      name: 'Year',
      selector: (row) => row.year,
      sortable: true,
      width: '120px',
    },
    {
      name: 'Month',
      selector: (row) => row.month,
      sortable: true,
      width: '120px',
    },
    {
      name: 'Expected Harvest(kg)',
      selector: (row) => row.expectedHarvest,
      sortable: true,
    },
    {
      name: 'Actual Harvest(kg)',
      selector: (row) => row.actualHarvest,
      sortable: true,
    },
    {
      name: 'Action',
      selector: (row) => (
        <>
          <Link to={`/ao/updateharvest/${row._id}`}>
            <button className='editBtnAo'>
              <i class='bi bi-pencil'></i>
            </button>
          </Link>
          <button
            onClick={(e) => deleteHandler(row._id)}
            className='deleteBtnAo'
          >
            <i class='bi bi-trash3-fill'></i>
          </button>
        </>
      ),
    },
  ];

  return (
    <div>
      <DataTable
        customStyles={tableCustomStyles}
        columns={columns}
        data={harvests}
        pagination={true}
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
        noDataComponent='No Products Found'
      />
    </div>
  );
};

export default HarvestRecords;
