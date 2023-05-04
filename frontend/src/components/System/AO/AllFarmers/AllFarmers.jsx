import React from 'react'
import DataTable from 'react-data-table-component';
import { tableCustomStyles } from '../TableStyles/tableStyle.jsx';


const AllFarmers = () => {
    const columns = [
        {
          name: 'Farmer',
    
          selector: (row) => (
            <img
              className='cart-product-img'
              src={row.image}
              alt={row.name}
              style={{ height: '120px', width: '120px' }}
            />
          ),
        },
        {
          name: 'Name',
          selector: (row) => row.name,
          sortable: true,
        },
        {
          name: 'Crop Type',
          selector: (row) => row.cropType,
          sortable: true,
        },
        {
          name: 'Expected Harvest',
          selector: (row) => row.exHarvest,
          sortable: true,
        },
        {
          name: 'Actual Harvest',
          selector: (row) => row.acHarvest,
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
        {
          name: 'Province',
          selector: (row) => row.province,
          sortable: true,
        },
      ];
  return (
    <div>
        <DataTable
                customStyles={tableCustomStyles}
                columns={columns}
                // data={product}
                pagination={true}
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
                noDataComponent='No Products Found'
              />
    </div>
  )
}

export default AllFarmers