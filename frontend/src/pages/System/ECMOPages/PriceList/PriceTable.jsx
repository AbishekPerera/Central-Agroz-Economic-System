import React, { useEffect, useState } from "react";

import "./Styles/Price.css";
import AddPriceModal from "../../../../components/System/ECMO/PriceList/AddPriceModal";
import UpdatePriceModal from "../../../../components/System/ECMO/PriceList/UpdatePriceModal";
import Sidebar from "../../../../components/System/ECMO/Sidebar/Sidebar";
import NavBar from "../../../../components/System/ECMO/NavBar/NavBar";
import SystemFooter from "../../../../components/System/ECMO/Footer/SystemFooter";
import axios from "axios";
import swal from "sweetalert";

const PriceTable = () => {
  const [id, setID] = useState("");
  const [showAddPriceModal, setShowAddPriceModal] = useState(false);
  const [showUpdatePriceModal, setShowUpdatePriceModal] = useState(false);

  const handleAddPriceModalClose = () => setShowAddPriceModal(false);
  const handleAddPriceModalShow = () => setShowAddPriceModal(true);

  const handleUpdatePriceModalClose = () => setShowUpdatePriceModal(false);
  const handleUpdatePriceModalShow = (id) => {
    setShowUpdatePriceModal(true);
    setID(id);
  };

  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const getPrices = async () => {
      try {
        const res = await axios
          .get("http://localhost:8075/priceList/allPrices")
          .then((res) => {
            const data = res.data;
            setPrices(data);
            console.log(data);
          });
      } catch (err) {
        console.log(err);
      }
    };
    getPrices();
  }, []);

  function DeletePrice(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this record!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete("http://localhost:8075/priceList/delete/" + id)
          .then((res) => {
            setPrices((prices) => prices.filter((_, i) => i !== id));
            window.location.reload(false);
          })
          .catch((err) => {
            swal(err);
          });
      } else {
        swal("Delete cancelled success!");
      }
    });
  }

  return (
    <div className="mainContainer">
      <div className="sidebar"></div>
      <Sidebar />

      <div className="contentContainer">
        <div className="systemNavBar"></div>
        <NavBar />

        <div className="content">
          <button
            className="btn btnitem"
            onClick={handleAddPriceModalShow}
            value="Add Price"
          >
            Add Price
          </button>

          <AddPriceModal
            show={showAddPriceModal}
            handleClose={handleAddPriceModalClose}
          />
          <UpdatePriceModal
            show={showUpdatePriceModal}
            handleClose={handleUpdatePriceModalClose}
            id={id}
          />

          <div class="container bg-white">
            <div class="row">
              {prices &&
                prices.map((priceData, index) => (
                  <div
                    class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center item-item my-3"
                    key={index}
                  >
                    <div class="item">
                      {/* <div className="itemImg"> */}
                      <img src={priceData.Image} />
                      {/* </div> */}
                      <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                        <li
                          class="icon "
                          id="edit"
                          onClick={() =>
                            handleUpdatePriceModalShow(priceData._id)
                          }
                        >
                          <span class="bi bi-pen"></span>
                        </li>

                        <li
                          class="icon mx-3"
                          onClick={() => DeletePrice(priceData._id)}
                        >
                          <span class="bi bi-trash"></span>
                        </li>
                      </ul>
                    </div>

                    <div class="tag bg-red">{priceData.Category}</div>

                    <div class="price">{priceData.Type}</div>
                    <div class="price1">
                      Selling Price:Rs.{" "}
                      {priceData.Price.slice(-1)[0].SellingPrice}
                    </div>
                    <div class="price2">
                      Buying Price:Rs.{priceData.Price.slice(-1)[0].BuyingPrice}
                    </div>
                    <div class="price2">
                      Last Updated Date:<br></br>
                      {priceData.Price.slice(-1)[0].Date}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <SystemFooter />
      </div>
    </div>
  );
};

export default PriceTable;
