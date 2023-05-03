import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

const UpdateStockModal = ({ show, handleClose }) => {
  const [numItems, setNumItems] = useState(1);

  function handleNumItemsChange(event) {
    setNumItems(parseInt(event.target.value));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const itemsData = [];
    for (let i = 0; i < numItems; i++) {
      const category = formData.get(`category-${i + 1}`);
      const type = formData.get(`type-${i + 1}`);
      const quantity = parseInt(formData.get(`quantity-${i + 1}`));
      itemsData.push({ category, type, quantity });
    }
    const stockData = {
      name: formData.get("stock-name"),
      id: formData.get("stock-id"),
      items: itemsData,
    };
    console.log(stockData);
    // Submit the data to your server or do something else with it
  }

  const [categories, setCategories] = useState({});

  // object mapping categories to their corresponding types
  const categoryTypes = {
    Vegetable: ["carrot", "beet"],
    Fruit: ["apple", "orange"],
    Rice: ["red rice", "white rice"],
  };

  const handleCategoryChange = (event, index) => {
    const { name, value } = event.target;
    setCategories({ ...categories, [name]: value });
  };


  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Stock</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <div className="form-group">
            <label htmlFor="stock-name">Farmer Name:</label>
            <input
              type="text"
              className="form-control"
              name="farmerName"
              required
            />
          </div>
          <p>If Registered Farmer:</p>
          <div className="form-group">
            <label htmlFor="farmer-id">Farmer ID:</label>
            <input
              type="text"
              className="form-control"
              id="farmerId"
              name="farmer-id"
            />
          </div>

          <div className="form-group">
            <label htmlFor="num-items">Number of Items:</label>
            <input
              type="number"
              className="form-control"
              id="num-items"
              name="num-items"
              min="1"
              max="10"
              value={numItems}
              onChange={handleNumItemsChange}
              required
            />
          </div>

          <fieldset className="items-fieldset">
            <legend>Items</legend>
            {[...Array(numItems)].map((_, i) => (
              <div key={i} className="item form-row">
                <div className="form-group ">
                  <label htmlFor={`category-${i + 1}`}>Category:</label>
                  <select
                    name={`category-${i + 1}`}
                    className="form-control"
                    value={categories[`category-${i + 1}`] || ""}
                    onChange={(e) => handleCategoryChange(e, i)}
                    required
                  >
                    <option value="">--Select Category--</option>
                    <option value="Vegetable">Vegetable</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Rice">Rice</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor={`type-${i + 1}`}>Type:</label>
                  <select
                    name={`type-${i + 1}`}
                    className="form-control"
                    required
                  >
                    <option value="">--Select Type--</option>
                    {categories[`category-${i + 1}`] &&
                      categoryTypes[categories[`category-${i + 1}`]].map(
                        (type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        )
                      )}
                  </select>
                </div>

                <div className="form-group ">
                  <label htmlFor={`quantity-${i + 1}`}>Quantity:</label>
                  <input
                    type="number"
                    name={`quantity-${i + 1}`}
                    className="form-control"
                    placeholder="in kg"
                    required
                  />
                </div>
              </div>
            ))}
          </fieldset>

      </Modal.Body>
      <Modal.Footer>
        <button type="submit" class="btn btn-success" variant="secondary" onSubmit={handleSubmit}>
          Update Stock
        </button>
        <button class="btn btn-danger" variant="primary" onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};
export default UpdateStockModal;
