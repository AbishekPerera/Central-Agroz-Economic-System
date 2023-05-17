import React from 'react';
import { tableCustomStyles } from '../Global/TableStyles/tableRecordStyles.jsx';
import DataTable from 'react-data-table-component';
import FertilizerData from './FertilizerData.json';

const FertilizerRecords = () => {
  const FertilizerDatas = FertilizerData.map((row, index) => ({
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
        data={FertilizerDatas}
        pagination={true}
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
        noDataComponent='No Products Found'
      />
    </div>
  );
};

export default FertilizerRecords;
