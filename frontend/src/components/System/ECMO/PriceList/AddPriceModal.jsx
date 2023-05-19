import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import swal from "sweetalert";

const AddPriceModal = ({ show, handleClose, setIsPriceUpdated }) => {

      //get data from local storage as a string
      const ecoInfo = localStorage.getItem("ecmoInfo");
      //set data to local storage as a JSON object
      const ecoInfo1 = JSON.parse(ecoInfo);
    
      const centerName = ecoInfo1["ecoCenter"]["ecoCenterName"] || "Kandy";
  const date = new Date();
  const formattedDate = date
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "-");

  const [inputs, setInputs] = useState({
    Category: "",
    Type: "",
    Image: "",
    Price: [
      {
        BuyingPrice: 0,
        SellingPrice: 0,
        Date: formattedDate,
      },
    ],
  });

  console.log(inputs);

  function handleChange(e) {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  function handlePriceChange(e) {
    const { name, value } = e.target;
    setInputs((prev) => {
      const updatedPrice = { ...prev.Price[0], [name]: value };
      return { ...prev, Price: [updatedPrice] };
    });
  }

  const sendData = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8075/priceList/addStockPrice", {
        CenterName: centerName,
        Category: inputs.Category,
        Type: inputs.Type,
        Image: inputs.Image,
        Price: inputs.Price,
      })
      .then((res) => {
        swal("Price Added Successfully");
        setIsPriceUpdated(true);
        handleClose();
      })
      .catch((error) => {
        swal(error);
      });

    handleClose();
  };

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
            name="Type"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Item Category</label>
          <select
            name="Category"
            className="form-control"
            onChange={handleChange}
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
            name="BuyingPrice"
            placeholder="Buying Price in Rs"
            onChange={handlePriceChange}
          />
        </div>
        <div class="form-group">
          <label for="price">Selling Price</label>
          <input
            type="number"
            class="form-control"
            placeholder="Selling Price in Rs"
            name="SellingPrice"
            onChange={handlePriceChange}
          />
        </div>
        <div class="form-group">
          <label for="image">Image</label>
          <input
            type="text"
            class="form-control"
            placeholder="Image URL"
            name="Image"
            onChange={handleChange}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="submit"
          class="btn btn-success"
          variant="secondary"
          onClick={sendData}
        >
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
