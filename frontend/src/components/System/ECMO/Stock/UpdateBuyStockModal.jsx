import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import swal from "sweetalert";

const UpdateBuyStockModal = ({ show, handleClose, setIsStockUpdated, id }) => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [submitted, isSubmitted] = useState(false);
  console.log(formErrors);

  const formatDate = (date) => {
    const originalDate = date
      .toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\//g, "-");

    return originalDate;
  };

  const date = formatDate(new Date());

  const getCategories = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8075/priceList/allPrices"
      );
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const groupTypesByCategory = (data) => {
    if (!Array.isArray(data)) {
      console.log("Data is not an array");
      return {};
    }
    return data.reduce((groups, type) => {
      const category = type?.Category;
      if (category) {
        groups[category] = groups[category] || [];
        groups[category].push(type);
      }
      return groups;
    }, {});
  };

  const categoryWiseTypes = groupTypesByCategory(categories || []);

  console.log(categoryWiseTypes);

  const [numItems, setNumItems] = useState(1);

  const [inputs, setInputs] = useState({
    SupplierName: "",
    FarmerID: "",
    MobileNo: "",
    Address: "",
    Item: [
      {
        Category: "",
        Type: "",
        Quantity: 0,
      },
    ],
  });

  console.log(inputs);

  useEffect(() => {
    const getStocks = async (id) => {
      try {
        const res = await axios
          .get("http://localhost:8075/stock/stock/" + id)
          .then((res) => {
            const data = res.data;
            setInputs(data);
            setNumItems(data.NoOfItems);
            console.log(data);
          });
      } catch (err) {
        console.log(err);
      }
    };
    getStocks(id);
  }, [id]);

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

  const validate = (values) => {
    const errors = {};

    if (!values.SupplierName) {
      errors.SupplierName = "Name is required";
      console.log(errors.SupplierName);
    }

    if (!values.Address) {
      errors.Address = "Address is required";
    }

    if (!values.MobileNo) {
      errors.MobileNo = "Mobile Number is required";
    }
    if (!numItems) {
      errors.numItems = "Number of Items is required";
    }

    for (let i = 0; i < numItems; i++) {
      const item = values.Item[i];

      if (!item || !item.Category) {
        errors[`ItemCategory${i}`] = "Category is required";
      }

      if (!item || !item.Type) {
        errors[`ItemType${i}`] = "Type is required";
      }

      if (!item || !item.Quantity) {
        errors[`ItemQuantity${i}`] = "Quantity is required";
      }
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formErrors.length > 0) {
      setFormErrors({});
    }
    const errors = validate(inputs);
    setFormErrors(errors);
    isSubmitted(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && submitted) {
      axios
        .put("http://localhost:8075/stock/update/" + id, {
          SupplierName: inputs.SupplierName,
          FarmerID: inputs.FarmerID,
          MobileNo: inputs.MobileNo,
          Address: inputs.Address,
          NoOfItems: numItems,
          Item: inputs.Item,
        })
        .then((res) => {
          swal("Bought Stock Updated Successfully");
          setIsStockUpdated(true);
          handleClose();
        })
        .catch((error) => {
          swal(error);
        });
    }
  }, [formErrors, submitted]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Buy Stock</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="form-group">
          <label htmlFor="stock-name">Seller Name:</label>
          <input
            type="text"
            className="form-control"
            name="SupplierName"
            value={inputs.SupplierName}
            onChange={handleChange}
            required
          />
          <p class="error" name="SupplierName" Value={formErrors.SupplierName}>
            {formErrors.SupplierName}
          </p>
        </div>
        <p>If Registered Farmer:</p>
        <div className="form-group">
          <label htmlFor="farmer-id">Farmer ID:</label>
          <input
            type="text"
            className="form-control"
            name="FarmerID"
            value={inputs.FarmerID}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="farmer-id">Address:</label>
          <input
            type="text"
            className="form-control"
            name="Address"
            value={inputs.Address}
            onChange={handleChange}
          />
          <p class="error" name="Address" Value={formErrors.Address}>
            {formErrors.Address}
          </p>
        </div>
        <div className="form-group">
          <label htmlFor="farmer-id">Mobile Number: </label>
          <input
            type="text"
            className="form-control"
            name="MobileNo"
            value={inputs.MobileNo}
            onChange={handleChange}
          />
          <p class="error" name="MobileNo" Value={formErrors.MobileNo}>
            {formErrors.MobileNo}
          </p>
        </div>

        <div className="form-group">
          <label htmlFor="numItems">Number of Items:</label>
          <input
            type="number"
            className="form-control"
            name="numItems"
            min="1"
            max="10"
            value={numItems}
            onChange={handleNumItemsChange}
            required
          />
          <p class="error" name="numItems" Value={formErrors.numItems}>
            {formErrors.numItems}
          </p>
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
                  value={inputs.Item[i]?.Category || ""}
                  onChange={(e) => {
                    handleItemsChange(e, i);
                    handleCategoryChange(e);
                  }}
                  required
                >
                  <option value={inputs.Item[i]?.Category || ""} disabled>
                    {inputs.Item[i]?.Category || "--Select Category--"}
                  </option>
                  {Object.keys(categoryWiseTypes).map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <p className="error">{formErrors[`ItemCategory${i}`]}</p>
              </div>

              <div className="form-group">
                <label htmlFor={`type-${i + 1}`}>Type:</label>
                <select
                  name="Type"
                  className="form-control"
                  value={inputs.Item[i]?.Type || ""}
                  onChange={(e) => handleItemsChange(e, i)}
                  required
                >
                  <option value={inputs.Item[i]?.Type || ""}>
                    {inputs.Item[i]?.Type || "--Select Type--"}
                  </option>
                  {Array.isArray(categoryWiseTypes[category]) &&
                    categoryWiseTypes[category].map((type) => (
                      <option key={type.Type} value={type.Type}>
                        {type.Type}
                      </option>
                    ))}
                </select>

                <p className="error">{formErrors[`ItemType${i}`]}</p>
              </div>

              <div className="form-group ">
                <label htmlFor="Quantity">Quantity:</label>
                <input
                  type="number"
                  name="Quantity"
                  className="form-control"
                  placeholder="in kg"
                  value={inputs.Item[i]?.Quantity || ""}
                  onChange={(e) => handleItemsChange(e, i)}
                  min="1"
                  max="10000"
                  required
                />
                <p className="error">{formErrors[`ItemQuantity${i}`]}</p>
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
          Update Bought Stock
        </button>
        <button class="btn btn-danger" variant="primary" onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};
export default UpdateBuyStockModal;
