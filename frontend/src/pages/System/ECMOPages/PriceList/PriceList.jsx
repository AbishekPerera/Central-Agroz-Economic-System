import React, { useEffect, useState } from "react";
import "./Styles/PriceList.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SystemFooter from "../../../../components/System/ECMO/Footer/SystemFooter";
import Sidebar from "../../../../components/System/ECMO/Sidebar/Sidebar";
import NavBar from "../../../../components/System/ECMO/NavBar/NavBar";

function PriceList() {
  const [prices, setPrices] = useState([]);
  const [price, setPrice] = useState([
    {
      _id: "1",
      Category: "Fruits",
      Type: "Apple",
      SellingPrice: 2.5,
      BuyingPrice: 1.5,
      Date: "2023-05-01T00:00:00.000Z",
    },
    {
      _id: "2",
      Category: "Fruits",
      Type: "Banana",
      SellingPrice: 1.5,
      BuyingPrice: 1,
      Date: "2023-05-01T00:00:00.000Z",
    },
    {
      _id: "3",
      Category: "Vegetables",
      Type: "Carrot",
      SellingPrice: 3,
      BuyingPrice: 2,
      Date: new Date(),
    },
    {
      _id: "4",
      Category: "Vegetables",
      Type: "Broccoli",
      SellingPrice: 4,
      BuyingPrice: 3,
      Date: "2023-05-01T00:00:00.000Z",
    },
    {
      _id: "5",
      Category: "Fruits",
      Type: "Apple",
      SellingPrice: 3,
      BuyingPrice: 2,
      Date: "2023-05-02T00:00:00.000Z",
    },
    {
      _id: "6",
      Category: "Fruits",
      Type: "Banana",
      SellingPrice: 2,
      BuyingPrice: 1.5,
      Date: "2023-05-02T00:00:00.000Z",
    },
    {
      _id: "7",
      Category: "Vegetables",
      Type: "Carrot",
      SellingPrice: 3.5,
      BuyingPrice: 2.5,
      Date: "2023-05-02T00:00:00.000Z",
    },
    {
      _id: "8",
      Category: "Vegetables",
      Type: "Broccoli",
      SellingPrice: 5,
      BuyingPrice: 4,
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
    async function fetchPrices() {
      try {
        const res = await price.find({ Date: { $eq: selectedDate } });
        setPrices(res);
      } catch (err) {
        console.log(err);
      }
    }

    fetchPrices();
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

  const groupByCategory = (data) => {
    return data.reduce((groups, price) => {
      const category = price.Category;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(price);
      return groups;
    }, {});
  };

  const categoryWisePrices = groupByCategory(prices);

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
                  Price Details for {selectedDate.toDateString()}{" "}
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
              {Object.keys(categoryWisePrices).map((category) => (
                <div key={category}>
                  <h2 className="category-title">{category}</h2>
                  <table className="price-table">
                    <thead>
                      <tr>
                        <th className="type-header">Type</th>
                        <th className="selling-price-header">Selling Price</th>
                        <th className="buying-price-header">Buying Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categoryWisePrices[category].map((price) => (
                        <tr key={price._id}>
                          <td className="type-cell">{price.Type}</td>
                          <td className="selling-price-cell">
                            {price.SellingPrice}
                          </td>
                          <td className="buying-price-cell">
                            {price.BuyingPrice}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
              {prices.length === 0 && (
                <div>
                  <p>No prices found for {selectedDate.toDateString()}</p>
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

export default PriceList;
