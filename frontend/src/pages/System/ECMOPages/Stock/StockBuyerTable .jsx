import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/StockTable.css";
import SellStockModal from "../../../../components/System/ECMO/Stock/SellStockModal";
import UpdateSellStockModal from "../../../../components/System/ECMO/Stock/UpdateSellStockModal";
import Sidebar from "../../../../components/System/ECMO/Sidebar/Sidebar";
import NavBar from "../../../../components/System/ECMO/NavBar/NavBar";
import SystemFooter from "../../../../components/System/ECMO/Footer/SystemFooter";
import swal from "sweetalert";

function StockBuyerTable() {
  const [showSellStockModal, setShowSellStockModal] = useState(false);
  const [showUpdateSellStockModal, setShowUpdateSellStockModal] =
    useState(false);
  const [id, setID] = useState("");
  const [centerName, setCenterName] = useState("Kandy");

  const handleSellStockModalClose = () => setShowSellStockModal(false);
  const handleSellStockModalShow = () => setShowSellStockModal(true);

  const handleUpdateSellStockModalClose = () =>
    setShowUpdateSellStockModal(false);
  const handleUpdateSellStockModalShow = (id) => {
    setShowUpdateSellStockModal(true);
    setID(id);
  };

  const [stock, setStock] = useState([]);

  const [isStockUpdated, setIsStockUpdated] = useState(false);

  useEffect(() => {
    const getStocks = async () => {
      try {
        const res = await axios
          .get("http://localhost:8075/stock/AllStocks")
          .then((res) => {
            const data = res.data;
            setStock(data);
            setIsStockUpdated(false);
            console.log(data);
          });
      } catch (err) {
        console.log(err);
      }
    };
    getStocks();
  }, [isStockUpdated]);

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

  function DeleteStock(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this record!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete("http://localhost:8075/stock/delete/" + id)
          .then((res) => {
            setStock((stock) => stock.filter((_, i) => i !== id));
            setIsStockUpdated(true);
          })
          .catch((err) => {
            swal(err);
          });
      } else {
        swal("Delete cancelled success!");
      }
    });
  }

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
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

          <div
            className="text-center mb-4"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <form className="example" style={{ maxWidth: "300px" }}>
              <input
                type="text"
                placeholder="Search.."
                name="search2"
                onChange={handleSearch}
              />
            </form>
          </div>

          <SellStockModal
            show={showSellStockModal}
            setIsStockUpdated={setIsStockUpdated}
            handleClose={handleSellStockModalClose}
          />
          <UpdateSellStockModal
            show={showUpdateSellStockModal}
            handleClose={handleUpdateSellStockModalClose}
            id={id}
            setIsStockUpdated={setIsStockUpdated}
          />

          <div class="container bg-white">
            <div
              style={{ width: "98%", maxHeight: "500px", overflowY: "auto" }}
            >
              <table className="stock-table">
                <thead>
                  <tr>
                    <th>Buyer Name</th>
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
                    .filter(
                      (row) =>
                        row.Role === "Buyer" &&
                        row.CenterName === centerName &&
                        (row.SupplierName === search ||
                          row.SupplierName.toLowerCase().includes(
                            search.toLowerCase()
                          ))
                    )
                    .map((row, index) => (
                      <tr key={index}>
                        <td>{row.SupplierName}</td>

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
                                        <div key={index}>
                                          {item.Quantity} kg
                                        </div>
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
                            onClick={() =>
                              handleUpdateSellStockModalShow(row._id)
                            }
                          >
                            <span class="bi bi-pen"></span>
                          </button>
                          <button
                            className="btn btn-danger delete-seller-button"
                            onClick={() => DeleteStock(row._id)}
                          >
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
