import React, { useState, useEffect } from "react";
import "./Styles/StockTable.css";
import AddStockModal from "../../../../components/System/ECMO/Stock/AddStockModal";
import UpdateBuyStockModal from "../../../../components/System/ECMO/Stock/UpdateBuyStockModal";
import Sidebar from "../../../../components/System/ECMO/Sidebar/Sidebar";
import NavBar from "../../../../components/System/ECMO/NavBar/NavBar";
import SystemFooter from "../../../../components/System/ECMO/Footer/SystemFooter";
import axios from "axios";
import swal from "sweetalert";

function StockSellerTable() {
  const [showAddStockModal, setShowAddStockModal] = useState(false);
  const [showUpdateBuyStockModal, setShowUpdateBuyStockModal] = useState(false);
  const [id, setID] = useState("");
  const [stock, setStock] = useState([]);
  const [isStockUpdated, setIsStockUpdated] = useState(false);

  //get data from local storage as a string
  const ecoInfo = localStorage.getItem("ecmoInfo");
  //set data to local storage as a JSON object
  const ecoInfo1 = JSON.parse(ecoInfo);

  const centerName = ecoInfo1["ecoCenter"]["ecoCenterName"] || "Kandy";

  const handleAddStockModalClose = () => setShowAddStockModal(false);
  const handleAddStockModalShow = () => setShowAddStockModal(true);

  const handleUpdateBuyStockModalClose = () =>
    setShowUpdateBuyStockModal(false);
  const handleUpdateBuyStockModalShow = (id) => {
    setShowUpdateBuyStockModal(true);
    setID(id);
  };

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

  //Groups stocks according to its Type and Category
  const groupTypesByCategory = (data) => {
    //check is array
    if (!Array.isArray(data)) {
      console.log("Data is not an array");
      return [];
    }

    //create empty groups object
    const groups = {};

    // Iterate over each type in the data
    data.forEach((type) => {
      // Get the category of the type
      const category = type?.Category;

      //check category exist
      if (category) {
        // Iterate over each type in the data
        if (!groups[category]) {
          groups[category] = [];
        }

        // Push the type into the corresponding category array
        groups[category].push(type);
      }
    });

    // Return an array of category-items pairs
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
            onClick={handleAddStockModalShow}
            value="Buy Stock"
          >
            Buy Stock
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

          <AddStockModal
            show={showAddStockModal}
            handleClose={handleAddStockModalClose}
            setIsStockUpdated={setIsStockUpdated}
          />
          <UpdateBuyStockModal
            show={showUpdateBuyStockModal}
            handleClose={handleUpdateBuyStockModalClose}
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
                    <th>Supplier Name</th>
                    {/*<th>Farmer ID</th>*/}
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
                      .filter(
                        (row) =>
                          row.Role === "Seller" &&
                          row.CenterName === centerName &&
                          (row.SupplierName === search ||
                            row.SupplierName.toLowerCase().includes(
                              search.toLowerCase()
                            ))
                      )
                      .map((row, index) => (
                        <tr key={index}>
                          <td>{row.SupplierName}</td>
                          {/*<td>{row.FarmerID}</td>*/}
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
                                              {item.Quantity} kg
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
                              onClick={() =>
                                handleUpdateBuyStockModalShow(row._id)
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

export default StockSellerTable;
