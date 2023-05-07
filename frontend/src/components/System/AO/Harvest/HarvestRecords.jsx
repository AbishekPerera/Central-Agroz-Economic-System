import React from 'react';
import { tableCustomStyles } from '../Global/TableStyles/tableStyle.jsx';
import DataTable from 'react-data-table-component';
import HarvestData from './HarvestData.json';

const HarvestRecords = () => {
  const HarvestDatas = HarvestData.map((row, index) => ({
    ...row,
    id: index + 1,
  }));

  const columns = [
    {
      name: '#',
      selector: (row) => row.id,
      sortable: true,
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
    },
    {
      name: 'Season',
      selector: (row) => row.season,
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
      name: 'Expected Harvest',
      selector: (row) => row.expectedHarvest,
      sortable: true,
    },
    {
      name: 'Actual Harvest',
      selector: (row) => row.actualHarvest,
      sortable: true,
    },
  ];

  return (
    <div>
      <DataTable
        customStyles={tableCustomStyles}
        columns={columns}
        data={HarvestDatas}
        pagination={true}
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
        noDataComponent='No Products Found'
      />
    </div>
  );
};

export default HarvestRecords;
