import React from 'react';
import DataTable from 'react-data-table-component';
import { tableCustomStyles } from '../Global/TableStyles/tableStyle.jsx';
import FarmersData from './FarmersData.json';

const AllFarmers = () => {
  const columns = [
    {
      name: 'Farmer',

      selector: (row) => (
        <img
          className='cart-product-img'
          src='https://img.freepik.com/free-icon/farmer_318-640406.jpg?w=2000'
          alt={row.fullName}
          style={{ height: '120px', width: '120px' }}
        />
      ),
    },
    {
      name: 'Name',
      selector: (row) => row.fullName,
      sortable: true,
    },
    {
      name: 'Crop Type',
      selector: (row) => row.cropType,
      sortable: true,
    },
    {
      name: 'Address',
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: 'Division',
      selector: (row) => row.division,
      sortable: true,
    },
    {
      name: 'District',
      selector: (row) => row.district,
      sortable: true,
    },
  ];
  return (
    <div>
      <DataTable
        customStyles={tableCustomStyles}
        columns={columns}
        data={FarmersData.farmers}
        pagination={true}
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
        noDataComponent='No Products Found'
      />
    </div>
  );
};

export default AllFarmers;
