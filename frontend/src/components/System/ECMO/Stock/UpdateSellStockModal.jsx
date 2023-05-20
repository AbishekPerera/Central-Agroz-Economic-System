import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import swal from "sweetalert";

const UpdateSellStockModal = ({ show, handleClose, setIsStockUpdated, id }) => {
  const [formErrors, setFormErrors] = useState({});
  const [category, setCategory] = useState("");
  const [submitted, isSubmitted] = useState(false);
  const [numItems, setNumItems] = useState(1);

  const [inputs, setInputs] = useState({
    CenterName: "",
    SupplierName: " ",
    FarmerID: "Not a Farmer",
    MobileNo: "",
    Address: "",
    Item: [],
    Date: "",
  });
  console.log(inputs);

  const [stock, setStock] = useState([]);
  console.log(stock);
  const [reportData, setReportData] = useState([]);
  console.log(stock);

  useEffect(() => {
    const fetchStocks = async () => {
      const response = await axios.get(
        "http://localhost:8075/stock/AllStocks/" +
          inputs.CenterName +
          "/" +
          inputs.Date
      );
      setStock(response.data.result);
    };

    fetchStocks();
  }, [inputs.CenterName, inputs.Date]);

  useEffect(() => {
    const calculateReportData = () => {
      if (!Array.isArray(stock)) {
        console.log("Stock is not an array");
        return;
      }
      const report = stock.reduce((acc, stock) => {
        const { Role, Item } = stock;

        Item.forEach((item) => {
          const { Category, Type, Quantity } = item;
          const key = `${Category}-${Type}`;

          if (!acc[key]) {
            acc[key] = { boughtQuantity: 0, soldQuantity: 0 };
          }

          if (Role === "Seller") {
            acc[key].boughtQuantity += Quantity;
          } else if (Role === "Buyer") {
            acc[key].soldQuantity += Quantity;
          }
        });
        setReportData(acc);
        return acc;
      }, {});
    };

    calculateReportData();
  }, [stock]);

  const groupTypesByCategory = (data) => {
    if (!Array.isArray(data)) {
      console.log("Data is not an array");
      return {};
    }

    return data.reduce((groups, stock) => {
      stock.Item.forEach((item) => {
        const { Category, Type } = item;

        if (Category) {
          groups[Category] = groups[Category] || [];
          if (!groups[Category].includes(Type)) {
            groups[Category].push(Type);
          }
        }
      });

      return groups;
    }, {});
  };

  const categoryWiseTypes = groupTypesByCategory(stock || []);
  console.log(categoryWiseTypes);

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

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
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
          swal("Sold Stock Updated Successfully");
          setIsStockUpdated(true);
          handleClose();
        })
        .catch((error) => {
          swal(error);
        });
    }
  }, [formErrors, submitted]);

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
      } else {
        const boughtQuantity =
          reportData[`${item.Category}-${item.Type}`]?.boughtQuantity || 0;
        const soldQuantity =
          reportData[`${item.Category}-${item.Type}`]?.soldQuantity || 0;
        const availableQuantity = boughtQuantity - soldQuantity;
        const quantity = parseInt(item.Quantity);

        if (quantity > availableQuantity) {
          if (availableQuantity === 0) {
            errors[`ItemQuantity${i}`] = ` ${item.Type} not available`;
          } else if (availableQuantity > 0) {
            errors[
              `ItemQuantity${i}`
            ] = `Quantity for ${item.Type} should be less than or equal to ${availableQuantity} kg.`;
          } else {
            // reportData[`${item.Category}-${item.Type}`].soldQuantity += quantity;
          }
        }
      }
    }

    return errors;
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sell Stock</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="form-group">
          <label htmlFor="stock-name">Buyer Name:</label>
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
                <label htmlFor={"type"}>Type:</label>
                <select
                  name="Type"
                  className="form-control"
                  value={inputs.Item[i]?.Type || ""}
                  onChange={(e) => handleItemsChange(e, i)}
                  required
                >
                  <option value={inputs.Item[i]?.Type || ""} disabled>
                    {inputs.Item[i]?.Type || "--Select Type--"}
                  </option>
                  {categoryWiseTypes[category]?.map((type) => (
                    <option key={type} value={type}>
                      {type}
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
          Update Sold Stock
        </button>
        <button class="btn btn-danger" variant="primary" onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateSellStockModal;
