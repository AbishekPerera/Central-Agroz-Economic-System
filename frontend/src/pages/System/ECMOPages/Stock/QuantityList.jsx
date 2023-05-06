import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SystemFooter from "../../../../components/System/ECMO/Footer/SystemFooter";
import Sidebar from "../../../../components/System/ECMO/Sidebar/Sidebar";
import NavBar from "../../../../components/System/ECMO/NavBar/NavBar";

function QuantityList() {
  const [quantities, setQuantities] = useState([]);
  const [quantity, setQuantity] = useState([
    {
      _id: "1",
      Category: "Fruits",
      Type: "Apple",
      BaughtQuantity: 2.5,
      SoldQuantity: 1.5,
      Date: "2023-05-01T00:00:00.000Z",
    },
    {
      _id: "2",
      Category: "Fruits",
      Type: "Banana",
      BaughtQuantity: 2.5,
      SoldQuantity: 1.5,
      Date: "2023-05-01T00:00:00.000Z",
    },
    {
      _id: "3",
      Category: "Vegetables",
      Type: "Carrot",
      BaughtQuantity: 2.5,
      SoldQuantity: 1.5,
      Date: new Date(),
    },
    {
      _id: "4",
      Category: "Vegetables",
      Type: "Broccoli",
      BaughtQuantity: 2.5,
      SoldQuantity: 1.5,
      Date: "2023-05-01T00:00:00.000Z",
    },
    {
      _id: "5",
      Category: "Fruits",
      Type: "Apple",
      BaughtQuantity: 2.5,
      SoldQuantity: 1.5,
      Date: "2023-05-02T00:00:00.000Z",
    },
    {
      _id: "6",
      Category: "Fruits",
      Type: "Banana",
      BaughtQuantity: 2.5,
      SoldQuantity: 1.5,
      Date: "2023-05-02T00:00:00.000Z",
    },
    {
      _id: "7",
      Category: "Vegetables",
      Type: "Carrot",
      BaughtQuantity: 2.5,
      SoldQuantity: 1.5,
      Date: "2023-05-02T00:00:00.000Z",
    },
    {
      _id: "8",
      Category: "Vegetables",
      Type: "Broccoli",
      BaughtQuantity: 2.5,
      SoldQuantity: 1.5,
      Date: "2023-05-02T00:00:00.000Z",
    },
  ]);

  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log(selectedDate);
  const [showCalendar, setShowCalendar] = useState(false);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  useEffect(() => {
    async function fetchquantitys() {
      try {
        const res = await quantity.find({ Date: { $eq: selectedDate } });
        setQuantities(res);
      } catch (err) {
        console.log(err);
      }
    }

    fetchquantitys();
  }, [selectedDate]);

  const handlePrevDay = () => {
    const prevDay = new Date(selectedDate);
    prevDay.setDate(prevDay.getDate() - 1);
    setSelectedDate(prevDay);
  };

  const handleNextDay = () => {
    const nextDay = new Date(selectedDate);
    nextDay.setDate(nextDay.getDate() + 1);
    setSelectedDate(nextDay);
  };

  const [stock, setStock] = useState([]);

  useEffect(() => {
    const getStocks = async () => {
      try {
        const res = await axios
          .get("http://localhost:8075/stock/AllStocks")
          .then((res) => {
            const data = res.data;
            setStock(data);
            console.log(data);
          });
      } catch (err) {
        console.log(err);
      }
    };
    getStocks();
  }, []);

  const boughtItemsByCategory = {};
  const soldItemsByCategory = {};

  stock.forEach((row) => {
    const items = row.Item;
    const role = row.role;

    items.forEach((item) => {
      const category = item.Category;
      const type = item.Type;
      const quantity = item.Quantity;

      const itemsByCategory =
        role === "Seller" ? boughtItemsByCategory : soldItemsByCategory;

      if (!itemsByCategory[category]) {
        itemsByCategory[category] = [];
      }

      itemsByCategory[category].push({
        Type: type,
        Quantity: quantity,
      });
    });
  });

  return (
    <div className="mainContainer">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="contentContainer">
        <div className="systemNavBar">
          <NavBar />
        </div>
        <div className="container">
          <div className="row">
            <div className="calendar">
              <div className="header">
                <button
                  className="btnPrice btn-primary"
                  onClick={handlePrevDay}
                >
                  Previous Day
                </button>
                <h2 className="text-center mb-4">
                  quantity Details for {selectedDate.toDateString()}{" "}
                  <span
                    className="calendar-icon"
                    onClick={() => setShowCalendar(!showCalendar)}
                  >
                    &#x1F4C5;
                  </span>
                  {showCalendar && (
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                    />
                  )}
                </h2>

                <button
                  className="btnPrice btn-primary"
                  onClick={handleNextDay}
                >
                  Next Day
                </button>
              </div>
              {Object.keys(boughtItemsByCategory, soldItemsByCategory).map(
                (category) => (
                  <div key={category}>
                    <h2 className="category-title">{category}</h2>
                    <table className="price-table">
                      <thead>
                        <tr>
                          <th className="type-header">Type</th>
                          <th className="selling-price-header">
                            Baught Quantity
                          </th>
                          <th className="buying-price-header">Sold Quantity</th>
                          <th className="buying-price-header">
                            Available Quantity
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {boughtItemsByCategory[category].map((quantity) => (
                          <tr key={quantity._id}>
                            <td className="type-cell">{quantity.Type}</td>
                            <td className="selling-quantity-cell">
                              {quantity.SoldQuantity}
                            </td>
                            <td className="buying-quantity-cell">
                              {quantity.BaughtQuantity}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )
              )}
              {quantities.length === 0 && (
                <div>
                  <p>No quantities found for {selectedDate.toDateString()}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <SystemFooter />
      </div>
    </div>
  );
}

export default QuantityList;
