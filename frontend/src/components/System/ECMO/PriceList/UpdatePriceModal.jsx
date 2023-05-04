import React from "react";
import Modal from "react-bootstrap/Modal";

const UpdatePriceModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Product</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="form-group">
          <label htmlFor="ItemName">Item Name</label>
          <input
            id="name"
            type="text"
            className="form-control"
            placeholder="Enter Item Name"
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
            <option value="Rice">Grain</option>
            <option value="Rice">Rice</option>
          </select>
        </div>

        <div class="form-group">
          <label for="price">Buying Price</label>
          <input
            type="number"
            class="form-control"
            placeholder="Buying Price in Rs."
            // name="price"
          />
        </div>
        <div class="form-group">
          <label for="price">Selling Price</label>
          Rs.
          <input
            type="number"
            class="form-control"
            placeholder="Selling Price in Rs"
          />
        </div>

        <div class="form-group">
          <label for="date">Date</label>
          Rs.
          <input type="date" class="form-control" placeholder="Select Date" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button type="submit" class="btn btn-success" variant="secondary">
          Update Price
        </button>
        <button class="btn btn-danger" variant="primary" onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};
export default UpdatePriceModal;
