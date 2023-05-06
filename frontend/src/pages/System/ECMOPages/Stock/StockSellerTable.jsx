import React, { useState, useEffect } from "react";
import "./Styles/StockTable.css";
import AddStockModal from "../../../../components/System/ECMO/Stock/AddStockModal";
import UpdateStockModal from "../../../../components/System/ECMO/Stock/UpdateStockModal";
import Sidebar from "../../../../components/System/ECMO/Sidebar/Sidebar";
import NavBar from "../../../../components/System/ECMO/NavBar/NavBar";
import SystemFooter from "../../../../components/System/ECMO/Footer/SystemFooter";
import axios from "axios";

function StockSellerTable() {
  const [showAddStockModal, setShowAddStockModal] = useState(false);
  const [showUpdateStockModal, setShowUpdateStockModal] = useState(false);

  const handleAddStockModalClose = () => setShowAddStockModal(false);
  const handleAddStockModalShow = () => setShowAddStockModal(true);

  const handleUpdateStockModalClose = () => setShowUpdateStockModal(false);
  const handleUpdateStockModalShow = () => setShowUpdateStockModal(true);

  const [stock, setStock] = useState([]);

  useEffect(() => {
    const getStocks = async () => {
      try {
        const res = await axios
          .get("http://localhost:8075/stock/AllStocks")
          .then((res) => {
            const data = res.data;
            setStock(data);
            console.log(data);
          });
      } catch (err) {
        console.log(err);
      }
    };
    getStocks();
  }, []);

  const groupTypesByCategory = (data) => {
    if (!Array.isArray(data)) {
      console.log("Data is not an array");
      return [];
    }

    const groups = {};
    data.forEach((type) => {
      const category = type?.Category;
      if (category) {
        if (!groups[category]) {
          groups[category] = [];
        }
        groups[category].push(type);
      }
    });

    return Object.entries(groups).map(([category, items]) => ({
      category,
      items,
    }));
  };


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
            onClick={handleAddStockModalShow}
            value="Buy Stock"
          >
            Buy Stock
          </button>

          <AddStockModal
            show={showAddStockModal}
            handleClose={handleAddStockModalClose}
          />
          <UpdateStockModal
            show={showUpdateStockModal}
            handleClose={handleUpdateStockModalClose}
          />

          <div class="container bg-white">
            <div className="table-container">
              <table className="stock-table">
                <thead>
                  <tr>
                    <th>Supplier Name</th>
                    <th>Farmer ID</th>
                    <th>Mobile No</th>
                    <th>Address</th>
                    <th>No. of Items</th>
                    <th>Date</th>
                    <th>Item with Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {stock &&
                    stock
                      .filter((row) => row.Role === "Seller")
                      .map((row, index) => (
                        <tr key={index}>
                          <td>{row.SupplierName}</td>
                          <td>{row.FarmerID}</td>
                          <td>{row.MobileNo}</td>
                          <td>{row.Address}</td>
                          <td>{row.NoOfItems}</td>
                          <td>{new Date(row.Date).toLocaleDateString()}</td>

                          <td>
                            <table>
                              <tbody>
                                {groupTypesByCategory(row.Item).map(
                                  (categoryData, index) => (
                                    <tr key={index}>
                                      <td>{categoryData.category}</td>

                                      <td>
                                        {categoryData.items.map(
                                          (item, index) => (
                                            <div key={index}>{item.Type}</div>
                                          )
                                        )}
                                      </td>
                                      <td>
                                        {categoryData.items.map(
                                          (item, index) => (
                                            <div key={index}>
                                              {item.Quantity}
                                            </div>
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
                              onClick={handleUpdateStockModalShow}
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

export default StockSellerTable;
