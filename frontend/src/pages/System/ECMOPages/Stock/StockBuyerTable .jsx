import React, { useState } from "react";
import "./Styles/StockTable.css";
import AddBuyStockModal from "../../../../components/System/ECMO/Stock/AddBuyStockModal";
import UpdateBuyStockModal from "../../../../components/System/ECMO/Stock/UpdateBuyStockModal";
import Sidebar from "../../../../components/System/ECMO/Sidebar/Sidebar";
import NavBar from "../../../../components/System/ECMO/NavBar/NavBar";
import SystemFooter from "../../../../components/System/ECMO/Footer/SystemFooter";

function StockBuyerTable() {
  const [showAddBuyStockModal, setShowAddBuyStockModal] = useState(false);
  const [showUpdateBuyStockModal, setShowUpdateBuyStockModal] = useState(false);

  const handleAddBuyStockModalClose = () => setShowAddBuyStockModal(false);
  const handleAddBuyStockModalShow = () => setShowAddBuyStockModal(true);

  const handleUpdateBuyStockModalClose = () =>
    setShowUpdateBuyStockModal(false);
  const handleUpdateBuyStockModalShow = () => setShowUpdateBuyStockModal(true);
  const [stock, setstock] = useState([
    {
      SupplierName: "John Doe",
      FarmerId: "1234",
      NoOfItems: 10,
      Item: [
        {
          Category: "Vegetable",
          Type: "Carrot",
          Quantity: 5,
        },
        {
          Category: "Fruit",
          Type: "Apple",
          Quantity: 3,
        },
        {
          Category: "Rice",
          Type: "Basmati",
          Quantity: 2,
        },
      ],
      Date: "2023-05-03T00:00:00.000Z",
    },
    {
      SupplierName: "Jane Smith",
      FarmerId: "5678",
      NoOfItems: 7,
      Item: [
        {
          Category: "Grain",
          Type: "Wheat",
          Quantity: 5,
        },
        {
          Category: "Fruit",
          Type: "Orange",
          Quantity: 2,
        },
      ],
      Date: "2023-05-02T00:00:00.000Z",
    },
  ]);

  // Group items by category
  const itemsByCategory = {};
  stock.forEach((row) => {
    row.Item.forEach((item) => {
      if (!itemsByCategory[item.Category]) {
        itemsByCategory[item.Category] = [];
      }
      itemsByCategory[item.Category].push({
        Type: item.Type,
        Quantity: item.Quantity,
      });
    });
  });

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
          <button
            className="btn  btnitem"
            onClick={handleAddBuyStockModalShow}
            value="Sell Stock"
          >
            Sell Stock
          </button>

          <AddBuyStockModal
            show={showAddBuyStockModal}
            handleClose={handleAddBuyStockModalClose}
          />
          <UpdateBuyStockModal
            show={showUpdateBuyStockModal}
            handleClose={handleUpdateBuyStockModalClose}
          />

          <div class="container bg-white">
            <div className="table-container">
              <table className="stock-table">
                <thead>
                  <tr>
                    <th>Supplier Name</th>
                    <th>Farmer ID</th>
                    <th>No. of Items</th>
                    <th>Date</th>
                    <th>Item with Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {stock.map((row, index) => (
                    <tr key={index}>
                      <td>{row.SupplierName}</td>
                      <td>{row.FarmerId}</td>
                      <td>{row.NoOfItems}</td>
                      <td>{new Date(row.Date).toLocaleDateString()}</td>
                      <td>
                        <table className="stock-table">
                          <thead>
                            <tr>
                              <th>Category</th>
                              <th>Type</th>
                              <th>Quantity</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.keys(itemsByCategory).map(
                              (category, index) => (
                                <tr key={index}>
                                  <td>{category}</td>
                                  <td>
                                    {itemsByCategory[category].map(
                                      (item, i) => (
                                        <div key={i}>{item.Type}</div>
                                      )
                                    )}
                                  </td>
                                  <td>
                                    {itemsByCategory[category].map(
                                      (item, i) => (
                                        <div key={i}>{item.Quantity}</div>
                                      )
                                    )}
                                  </td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </td>
                      <td>
                        <button
                          className="btn btn-success seller-modal-button"
                          style={{ marginRight: "10px" }}
                          onClick={handleUpdateBuyStockModalShow}
                        >
                          <span class="bi bi-pen"></span>
                        </button>
                        <button className="btn btn-danger delete-seller-button">
                          <span class="bi bi-trash"></span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <SystemFooter />
      </div>
    </div>
  );
}

export default StockBuyerTable;
