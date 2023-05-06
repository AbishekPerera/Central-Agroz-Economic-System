import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const AddStockModal = ({ show, handleClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  console.log(categories);

  const formatDate = (date) => {
    const originalDate = date
      .toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\//g, "-");

    const [day, month, year] = originalDate.split("-");
    const newDate = `${month}-${day}-${year}`;

    return newDate;
  };

  const getCategoriesByDate = async (date) => {
    try {
      const formattedDate = formatDate(date);
      setFormattedDate(formattedDate);
      console.log(formattedDate);
      const { data } = await axios.get(
        `http://localhost:8075/priceList/allPrices/${formattedDate}`
      );
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategoriesByDate(selectedDate);
  }, [selectedDate]);

  const groupTypesByCategory = (data) => {
    if (!Array.isArray(data)) {
      console.log("Data is not an array");
      return {};
    }
    return data.reduce((groups, price) => {
      const category = price?.Category;
      if (category) {
        groups[category] = groups[category] || [];
        groups[category].push(price);
      }
      return groups;
    }, {});
  };

  const categoryWiseTypes = groupTypesByCategory(categories.result || []);

  console.log(categoryWiseTypes);

  const [numItems, setNumItems] = useState(1);

  const [inputs, setInputs] = useState({
    CenterName: "Kandy",
    SupplierName: " ",
    FarmerID: "",
    MobileNo: "",
    Address: "",
    NoOfItems: numItems,
    Item: [],
    Role: "Buyer",
    Date: "",
  });

  console.log(inputs);

  function handleNumItemsChange(event) {
    setNumItems(parseInt(event.target.value));
  }

  function handleChange(e) {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleItemsChange(e, index) {
    if (e.target.name === "Date") {
      setInputs((prev) => {
        const updatedItems = [...prev.Item];
        updatedItems[index] = {
          ...updatedItems[index],
          [e.target.name]: formatDate(e.target.value),
        };
        return {
          ...prev,
          Item: updatedItems,
        };
      });
    }

    setInputs((prev) => {
      const updatedItems = [...prev.Item];
      updatedItems[index] = {
        ...updatedItems[index],
        [e.target.name]: e.target.value,
      };
      return {
        ...prev,
        Item: updatedItems,
      };
    });
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8075/stock/addStock", {
        CenterName: inputs.CenterName,
        SupplierName: inputs.SupplierName,
        FarmerID: inputs.FarmerID,
        MobileNo: inputs.MobileNo,
        Address: inputs.Address,
        NoOfItems: inputs.NoOfItems,
        Item: inputs.Item,
        Role: inputs.Role,
        Date: inputs.Date,
      })
      .then((res) => {
        alert("Stock Added Successfully");
        window.location.reload(false);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Buy Stock</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="form-group">
          <label htmlFor="stock-name">Farmer Name:</label>
          <input
            type="text"
            className="form-control"
            name="SupplierName"
            onChange={handleChange}
            required
          />
        </div>
        <p>If Registered Farmer:</p>
        <div className="form-group">
          <label htmlFor="farmer-id">Farmer ID:</label>
          <input
            type="text"
            className="form-control"
            name="FarmerID"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="farmer-id">Address:</label>
          <input
            type="text"
            className="form-control"
            name="Address"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="farmer-id">Mobile Number: </label>
          <input
            type="text"
            className="form-control"
            name="MobileNo"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="num-items">Number of Items:</label>
          <input
            type="number"
            className="form-control"
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
                <label htmlFor="Category">Category:</label>
                <select
                  name="Category"
                  className="form-control"
                  onChange={(e) => {
                    handleItemsChange(e, i);
                    handleCategoryChange(e);
                  }}
                  required
                >
                  <option value="">--Select Category--</option>
                  {Object.keys(categoryWiseTypes).map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor={`type-${i + 1}`}>Type:</label>
                <select
                  name="Type"
                  className="form-control"
                  onChange={(e) => handleItemsChange(e, i)}
                  required
                >
                  <option value="">--Select Type--</option>
                  {Array.isArray(categoryWiseTypes[category]) &&
                    categoryWiseTypes[category].map((type) => (
                      <option key={type.Type} value={type.Type}>
                        {type.Type}
                      </option>
                    ))}
                </select>
              </div>

              <div className="form-group ">
                <label htmlFor="Quantity">Quantity:</label>
                <input
                  type="number"
                  name="Quantity"
                  className="form-control"
                  placeholder="in kg"
                  onChange={(e) => handleItemsChange(e, i)}
                  min="1"
                  max="10000"
                  required
                />
              </div>
            </div>
          ))}
        </fieldset>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="submit"
          class="btn btn-success"
          variant="secondary"
          onClick={handleSubmit}
        >
          Add Stock
        </button>
        <button class="btn btn-danger" variant="primary" onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddStockModal;
