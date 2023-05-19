import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import swal from "sweetalert";

const UpdatePriceModal = ({ show, handleClose, id, setIsPriceUpdated }) => {
  const formattedDate = (date) => {
    const formatted = new Date(date)
      .toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\//g, "-");

    return formatted;
  };

  const [newPrice, setNewPrice] = useState([
    {
      BuyingPrice: "",
      SellingPrice: "",
      Date: formattedDate(new Date()),
    },
  ]);

  const [price, setPrice] = useState({
    Category: "",
    Type: "",
    Image: "",
  });

  function handleChange(e) {
    setPrice((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handlePriceChange(e) {
    const { name, value } = e.target;
    if (name === "Date") {
      const updatedValue = value ? formattedDate(value) : "";
      setNewPrice((prev) => {
        const updatedPrice = { ...prev[0], Date: updatedValue };
        return [updatedPrice];
      });
    } else {
      setNewPrice((prev) => {
        const updatedPrice = { ...prev[0], [name]: value };
        return [updatedPrice];
      });
    }
  }

  const getData = async () => {
    try {
      await axios
        .get("http://localhost:8075/priceList/price/" + id)
        .then((res) => {
          const data = res.data;
          setPrice(data);
          setNewPrice(data.Price);
        });
    } catch (err) {
      swal(err);
    }
  };

  useEffect(() => {
    if (show) {
      getData();
    }
  }, [show]);

  const sendData = async (e) => {
    e.preventDefault();
    await axios
      .put("http://localhost:8075/priceList/update/" + id, {
        Category: price.Category,
        Type: price.Type,
        Image: price.Image,
        Price: newPrice,
      })
      .then(() => {
        swal("You have successfully updated.");
        setIsPriceUpdated(true);
        handleClose();
      })
      .catch((error) => {
        swal(error);
      });
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Prices</Modal.Title>
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
            value={price.Type}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Item Category</label>
          <select
            name="Category"
            className="form-control"
            value={price.Category}
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
            value={newPrice.slice(-1)[0].BuyingPrice}
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
            value={newPrice.slice(-1)[0].SellingPrice}
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
            value={price.Image}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="image">Date</label>
          <input
            type="date"
            class="form-control"
            placeholder="Date"
            name="Date"
            value={new Date(newPrice.slice(-1)[0].Date)
              .toISOString()
              .substr(0, 10)}
            onChange={handlePriceChange}
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
