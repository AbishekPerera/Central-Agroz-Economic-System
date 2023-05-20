import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import swal from "sweetalert";

const SellStockModal = ({ show, handleClose, setIsStockUpdated }) => {
      //get data from local storage as a string
      const ecoInfo = localStorage.getItem("ecmoInfo");
      //set data to local storage as a JSON object
      const ecoInfo1 = JSON.parse(ecoInfo);
    
      const centerName = ecoInfo1["ecoCenter"]["ecoCenterName"] || "Kandy";
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formErrors, setFormErrors] = useState({});
  const [category, setCategory] = useState("");
  const [submitted, isSubmitted] = useState(false);

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

  const [stock, setStock] = useState([]);
  const [reportData, setReportData] = useState([]);
  console.log(stock);

  //get stock by date according to center
  useEffect(() => {
    const formattedDate = formatDate(selectedDate);

    console.log(formattedDate);
    const fetchStocks = async () => {
      const response = await axios.get(
        "http://localhost:8075/stock/AllStocks/"+centerName + '/' + formattedDate
      );
      setStock(response.data.result);
    };

    fetchStocks();
  }, [selectedDate]);



  useEffect(() => {
    const calculateReportData = () => {

      // Check if stock is an array
      if (!Array.isArray(stock)) {
        console.log("Stock is not an array");
        return;
      }

      //Calculate the qunatities by iterating over each stock item and its Item array.
      const report = stock.reduce((acc, stock) => {

       // Extract the necessary properties from each stock.
        const { Role, Item } = stock;

       
        Item.forEach((item) => {

          // Extract the necessary properties from each Item.
          const { Category, Type, Quantity } = item;
           //Create a unique key based on the Category and Type.
          const key = `${Category}-${Type}`;

         // Create a unique key based on the Category and Type.
          if (!acc[key]) {
            acc[key] = { boughtQuantity: 0, soldQuantity: 0 };
          }

          // Update the quantities based on the Role.
          if (Role === "Seller") {
            acc[key].boughtQuantity += Quantity;
          } else if (Role === "Buyer") {
            acc[key].soldQuantity += Quantity;
          }
        });

        // Return the accumulator.
        setReportData(acc);
        return acc;
      }, {});
    };

    //call the above function
    calculateReportData();
  }, [stock]);


  //group types by category
  const groupTypesByCategory = (data) => {

    //check is array
    if (!Array.isArray(data)) {
      console.log("Data is not an array");
      return {};
    }

    return data.reduce((groups, stock) => {
      stock.Item.forEach((item) => {
        const { Category, Type } = item;

        if (Category) {

          /// Initialize the category array if it doesn't exist
          groups[Category] = groups[Category] || [];
          if (!groups[Category].includes(Type)) {

            // Add the type to the category array if it's not already included
            groups[Category].push(Type);
          }
        }
      });

      return groups;
    }, {});
  };

  const categoryWiseTypes = groupTypesByCategory(stock || []);
  console.log(categoryWiseTypes);

  const [numItems, setNumItems] = useState(1);

  const [inputs, setInputs] = useState({
    CenterName: centerName,
    SupplierName: "",
    MobileNo: "",
    Address: "",
    Item: [],
    Role: "Buyer",
    Date: formatDate(new Date()),
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

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate(inputs);
    setFormErrors(errors);
    isSubmitted(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && submitted) {
      axios
        .post("http://localhost:8075/stock/addStock", {
          CenterName: inputs.CenterName,
          SupplierName: inputs.SupplierName,
          MobileNo: inputs.MobileNo,
          Address: inputs.Address,
          NoOfItems: numItems,
          Item: inputs.Item,
          Role: inputs.Role,
          Date: inputs.Date,
        })
        .then((res) => {
          swal("Stock Bought Successfully");
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
    } else if (values.MobileNo.length !== 10) {
      errors.MobileNo = "Invalid MobileNo";
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
                  <option value="">--Select Category--</option>
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
                  <option value={inputs.Item[i]?.Type || ""}>
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
          Sell Stock
        </button>
        <button class="btn btn-danger" variant="primary" onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default SellStockModal;
