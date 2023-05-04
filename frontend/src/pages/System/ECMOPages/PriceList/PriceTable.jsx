import React, { useEffect, useState } from "react";

import "./Styles/Price.css";
import AddPriceModal from "../../../../components/System/ECMO/PriceList/AddPriceModal";
import UpdatePriceModal from "../../../../components/System/ECMO/PriceList/UpdatePriceModal";
import Sidebar from "../../../../components/System/ECMO/Sidebar/Sidebar";
import NavBar from "../../../../components/System/ECMO/NavBar/NavBar";
import SystemFooter from "../../../../components/System/ECMO/Footer/SystemFooter";

const PriceTable = () => {
  const [showAddPriceModal, setShowAddPriceModal] = useState(false);
  const [showUpdatePriceModal, setShowUpdatePriceModal] = useState(false);

  const handleAddPriceModalClose = () => setShowAddPriceModal(false);
  const handleAddPriceModalShow = () => setShowAddPriceModal(true);

  const handleUpdatePriceModalClose = () => setShowUpdatePriceModal(false);
  const handleUpdatePriceModalShow = () => setShowUpdatePriceModal(true);

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
            />

            <div class="container bg-white">
              <div class="row">
                <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center item-item my-3">
                  <div class="item">
                    {/* <div className="itemImg"> */}
                    <img src="https://thumbs.dreamstime.com/b/fresh-carrot-pack-together-isolated-white-background-as-package-design-element-72604163.jpg" />
                    {/* </div> */}
                    <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                      <li
                        class="icon "
                        id="edit"
                        onClick={handleUpdatePriceModalShow}
                      >
                        <span class="bi bi-pen"></span>
                      </li>

                      <li class="icon mx-3">
                        <span class="bi bi-trash"></span>
                      </li>
                    </ul>
                  </div>
                  <div class="tag bg-red">Vegitable</div>

                  <div class="price">Carrot</div>
                  <div class="price1">Selling Price:Rs. 10</div>
                  <div class="price2">Buying Price:Rs. 10</div>
                </div>
                <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center item-item my-3">
                  <div class="item">
                    {/* <div className="itemImg"> */}
                    <img src="https://thumbs.dreamstime.com/b/fresh-carrot-pack-together-isolated-white-background-as-package-design-element-72604163.jpg" />
                    {/* </div> */}
                    <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                      <li
                        class="icon "
                        id="edit"
                        onClick={handleUpdatePriceModalShow}
                      >
                        <span class="bi bi-pen"></span>
                      </li>

                      <li class="icon mx-3">
                        <span class="bi bi-trash"></span>
                      </li>
                    </ul>
                  </div>
                  <div class="tag bg-red">Vegitable</div>

                  <div class="price">Carrot</div>
                  <div class="price1">Selling Price:Rs. 10</div>
                  <div class="price2">Buying Price:Rs. 10</div>
                </div>
                <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center item-item my-3">
                  <div class="item">
                    {/* <div className="itemImg"> */}
                    <img src="https://thumbs.dreamstime.com/b/fresh-carrot-pack-together-isolated-white-background-as-package-design-element-72604163.jpg" />
                    {/* </div> */}
                    <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                      <li
                        class="icon "
                        id="edit"
                        onClick={handleUpdatePriceModalShow}
                      >
                        <span class="bi bi-pen"></span>
                      </li>

                      <li class="icon mx-3">
                        <span class="bi bi-trash"></span>
                      </li>
                    </ul>
                  </div>
                  <div class="tag bg-red">Vegitable</div>

                  <div class="price">Carrot</div>
                  <div class="price1">Selling Price:Rs. 10</div>
                  <div class="price2">Buying Price:Rs. 10</div>
                </div>
                <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center item-item my-3">
                  <div class="item">
                    {/* <div className="itemImg"> */}
                    <img src="https://thumbs.dreamstime.com/b/fresh-carrot-pack-together-isolated-white-background-as-package-design-element-72604163.jpg" />
                    {/* </div> */}
                    <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                      <li
                        class="icon "
                        id="edit"
                        onClick={handleUpdatePriceModalShow}
                      >
                        <span class="bi bi-pen"></span>
                      </li>

                      <li class="icon mx-3">
                        <span class="bi bi-trash"></span>
                      </li>
                    </ul>
                  </div>
                  <div class="tag bg-red">Vegitable</div>

                  <div class="price">Carrot</div>
                  <div class="price1">Selling Price:Rs. 10</div>
                  <div class="price2">Buying Price:Rs. 10</div>
                </div>
                <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center item-item my-3">
                  <div class="item">
                    {/* <div className="itemImg"> */}
                    <img src="https://thumbs.dreamstime.com/b/fresh-carrot-pack-together-isolated-white-background-as-package-design-element-72604163.jpg" />
                    {/* </div> */}
                    <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                      <li
                        class="icon "
                        id="edit"
                        onClick={handleUpdatePriceModalShow}
                      >
                        <span class="bi bi-pen"></span>
                      </li>

                      <li class="icon mx-3">
                        <span class="bi bi-trash"></span>
                      </li>
                    </ul>
                  </div>
                  <div class="tag bg-red">Vegitable</div>

                  <div class="price">Carrot</div>
                  <div class="price1">Selling Price:Rs. 10</div>
                  <div class="price2">Buying Price:Rs. 10</div>
                </div>
                <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center item-item my-3">
                  <div class="item">
                    {/* <div className="itemImg"> */}
                    <img src="https://thumbs.dreamstime.com/b/fresh-carrot-pack-together-isolated-white-background-as-package-design-element-72604163.jpg" />
                    {/* </div> */}
                    <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                      <li
                        class="icon "
                        id="edit"
                        onClick={handleUpdatePriceModalShow}
                      >
                        <span class="bi bi-pen"></span>
                      </li>

                      <li class="icon mx-3">
                        <span class="bi bi-trash"></span>
                      </li>
                    </ul>
                  </div>
                  <div class="tag bg-red">Vegitable</div>

                  <div class="price">Carrot</div>
                  <div class="price1">Selling Price:Rs. 10</div>
                  <div class="price2">Buying Price:Rs. 10</div>
                </div>
                <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center item-item my-3">
                  <div class="item">
                    {/* <div className="itemImg"> */}
                    <img src="https://thumbs.dreamstime.com/b/fresh-carrot-pack-together-isolated-white-background-as-package-design-element-72604163.jpg" />
                    {/* </div> */}
                    <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                      <li
                        class="icon "
                        id="edit"
                        onClick={handleUpdatePriceModalShow}
                      >
                        <span class="bi bi-pen"></span>
                      </li>

                      <li class="icon mx-3">
                        <span class="bi bi-trash"></span>
                      </li>
                    </ul>
                  </div>
                  <div class="tag bg-red">Vegitable</div>

                  <div class="price">Carrot</div>
                  <div class="price1">Selling Price:Rs. 10</div>
                  <div class="price2">Buying Price:Rs. 10</div>
                </div>
                <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center item-item my-3">
                  <div class="item">
                    {/* <div className="itemImg"> */}
                    <img src="https://thumbs.dreamstime.com/b/fresh-carrot-pack-together-isolated-white-background-as-package-design-element-72604163.jpg" />
                    {/* </div> */}
                    <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                      <li
                        class="icon "
                        id="edit"
                        onClick={handleUpdatePriceModalShow}
                      >
                        <span class="bi bi-pen"></span>
                      </li>

                      <li class="icon mx-3">
                        <span class="bi bi-trash"></span>
                      </li>
                    </ul>
                  </div>
                  <div class="tag bg-red">Vegitable</div>

                  <div class="price">Carrot</div>
                  <div class="price1">Selling Price:Rs. 10</div>
                  <div class="price2">Buying Price:Rs. 10</div>
                </div>
              </div>
            </div>
          </div>
          <SystemFooter/>
        </div>
      </div>
    
  );
};

export default PriceTable;
