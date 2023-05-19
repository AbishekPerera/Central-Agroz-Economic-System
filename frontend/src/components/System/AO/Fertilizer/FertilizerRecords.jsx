import React from 'react';
import { tableCustomStyles } from '../Global/TableStyles/tableRecordStyles.jsx';
import DataTable from 'react-data-table-component';
import FertilizerData from './FertilizerData.json';
import axios from 'axios';

const FertilizerRecords = () => {
  const ao = JSON.parse(localStorage.getItem('agriofficer'));
  const aoId = ao['agriculturalOfficer']['id'];

  const [fertilizerData, setFertilizerData] = React.useState([]);

  const getAllFertilizer = () => {
    axios
      .get('http://localhost:8075/ao/getfertilizers')
      .then((res) => {
        const filteredFertilizer = res.data.filter((fertilizer) => {
          return fertilizer.aoId === aoId;
        });
        setFertilizerData(filteredFertilizer);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  React.useEffect(() => {
    getAllFertilizer();
  }, []);

  const fertilizerDatas = fertilizerData.map((row, index) => ({
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
      name: 'Fertilizer Type',
      selector: (row) => row.fertilizerType,
      sortable: true,
    },
    {
      name: 'Year',
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: 'Month',
      selector: (row) => row.month,
      sortable: true,
    },
    {
      name: 'Quantity(kg)',
      selector: (row) => row.quantity,
      sortable: true,
    },
  ];

  return (
    <div>
      <DataTable
        customStyles={tableCustomStyles}
        columns={columns}
        data={fertilizerDatas}
        pagination={true}
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
        noDataComponent='No Products Found'
      />
    </div>
  );
};

export default FertilizerRecords;
