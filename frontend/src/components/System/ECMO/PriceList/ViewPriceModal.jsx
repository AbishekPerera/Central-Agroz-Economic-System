import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import swal from "sweetalert";

const ViewPriceModal = ({ show, handleClose, id }) => {
  const [price, setPrice] = useState({
    Category: "",
    Type: "",
    Image: "",
    Price: [],
  });

  const getData = async () => {
    try {
      const res = await axios
        .get("http://localhost:8075/priceList/price/" + id)
        .then((res) => {
          const data = res.data;
          setPrice(data);
        });
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    if (show) {
      getData();
    }
  }, [show, id]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{price.Type}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={price.Image} alt="Price" width="200px" height="150px" />
          </div>

          <table class="table table-striped table-hover">
            <thead className="">
              <tr>
                <th>Buying Price </th>
                <th>Selling Price </th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {price.Price.map((price) => (
                <tr>
                  <td>{price.BuyingPrice}</td>
                  <td>{price.SellingPrice}</td>
                  <td>{price.Date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-danger" onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};
export default ViewPriceModal;
