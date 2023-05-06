import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/StockTable.css";
import SellStockModal from "../../../../components/System/ECMO/Stock/SellStockModal";
import UpdateBuyStockModal from "../../../../components/System/ECMO/Stock/UpdateBuyStockModal";
import Sidebar from "../../../../components/System/ECMO/Sidebar/Sidebar";
import NavBar from "../../../../components/System/ECMO/NavBar/NavBar";
import SystemFooter from "../../../../components/System/ECMO/Footer/SystemFooter";

function StockBuyerTable() {
  const [showSellStockModal, setShowSellStockModal] = useState(false);
  const [showUpdateBuyStockModal, setShowUpdateBuyStockModal] = useState(false);

  const handleSellStockModalClose = () => setShowSellStockModal(false);
  const handleSellStockModalShow = () => setShowSellStockModal(true);

  const handleUpdateBuyStockModalClose = () =>
    setShowUpdateBuyStockModal(false);
  const handleUpdateBuyStockModalShow = () => setShowUpdateBuyStockModal(true);

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
            onClick={handleSellStockModalShow}
            value="Sell Stock"
          >
            Sell Stock
          </button>

          <SellStockModal
            show={showSellStockModal}
            handleClose={handleSellStockModalClose}
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
                    <th>Mobile No</th>
                    <th>Address</th>
                    <th>No. of Items</th>
                    <th>Date</th>
                    <th>Item with Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {stock
                    .filter((row) => row.Role === "Buyer")
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
                                      {categoryData.items.map((item, index) => (
                                        <div key={index}>{item.Type}</div>
                                      ))}
                                    </td>
                                    <td>
                                      {categoryData.items.map((item, index) => (
                                        <div key={index}>{item.Quantity}</div>
                                      ))}
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
