import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

const AddPriceModal = ({ show, handleClose }) => {
  var [name, setName] = useState("");
  var [category, setCategory] = useState("");
  var [description, setDescription] = useState("");
  var [quantity, setQuantity] = useState("");
  var [price, setPrice] = useState("");
  var [image, setImage] = useState("");
  var [sellerId, setSellerId] = useState("");
  var [sellerUsername, setSellerUsername] = useState("");

  useEffect(() => {
    const sellerInfo = JSON.parse(localStorage.getItem("systemInfo"));
    const getSellerId = sellerInfo["user"]["_id"];
    const getSellerUserame = sellerInfo["user"]["UserName"];
    setSellerId(getSellerId);
    setSellerUsername(getSellerUserame);
  }, []);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Prices</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="form-group">
          <label htmlFor="ItemName">Item Name</label>
          <input
            id="name"
            type="text"
            className="form-control"
            placeholder="Enter Item Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Item Category</label>
          <select
            name="category"
            className="form-control"
            value="category"
            required
          >
            <option value="">--Select Category--</option>
            <option value="Vegetable">Vegetable</option>
            <option value="Fruit">Fruit</option>
            <option value="Grain">Grain</option>
            <option value="Rice">Rice</option>
          </select>
        </div>

        <div class="form-group">
          <label for="price">Buying Price</label>
          <input
            type="number"
            class="form-control"
            placeholder="Buying Price in Rs"
          />
        </div>
        <div class="form-group">
          <label for="price">Selling Price</label>
          <input
            type="number"
            class="form-control"
            placeholder="Selling Price in Rs"
          />
        </div>
        <div class="form-group">
          <label for="image">Image</label>
          <input type="text" class="form-control" placeholder="Image URL" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button type="submit" class="btn btn-success" variant="secondary">
          Add Price
        </button>
        <button class="btn btn-danger" variant="primary" onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddPriceModal;
