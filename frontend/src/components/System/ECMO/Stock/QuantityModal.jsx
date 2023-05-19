import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const QunatityModal = ({ centerName }) => {
  const [stocks, setStocks] = useState([]);
  const [reportData, setReportData] = useState([]);

  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log(selectedDate);
  const [showCalendar, setShowCalendar] = useState(false);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [search, setSearch] = useState("");

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

  useEffect(() => {
    const formattedDate = formatDate(selectedDate);

    console.log(formattedDate);
    const fetchStocks = async () => {
      const response = await axios.get(
        "http://localhost:8075/stock/AllStocks/" +
          centerName +
          "/" +
          formattedDate
      );

      setStocks(response.data.result);
    };

    fetchStocks();
  }, [selectedDate, centerName]);

  useEffect(() => {
    const calculateReportData = () => {
      const report = {};

      stocks.forEach((stock) => {
        const { Role, Item } = stock;

        Item.forEach((item) => {
          const { Category, Type, Quantity } = item;
          const key = `${Category}-${Type}`;

          if (!report[key]) {
            report[key] = { boughtQuantity: 0, soldQuantity: 0 };
          }

          if (Role === "Seller") {
            report[key].boughtQuantity += Quantity;
          } else if (Role === "Buyer") {
            report[key].soldQuantity += Quantity;
          }
        });
      });

      const groupedReport = {};

      Object.entries(report).forEach(
        ([key, { boughtQuantity, soldQuantity }]) => {
          const [category, type] = key.split("-");

          if (!groupedReport[category]) {
            groupedReport[category] = [];
          }

          groupedReport[category].push({ type, boughtQuantity, soldQuantity });
        }
      );

      setReportData(groupedReport);
    };

    calculateReportData();
  }, [stocks]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="calendar">
          <div className="header">
            <button className="btnPrice btn-primary" onClick={handlePrevDay}>
              Previous Day
            </button>
            <h2 className="text-center mb-4">
              Quantity Details for {selectedDate.toDateString()}{" "}
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

            <button className="btnPrice btn-primary" onClick={handleNextDay}>
              Next Day
            </button>
          </div>
          <div
            className="text-center mb-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <form className="example" style={{ maxWidth: "300px" }}>
              <input
                type="text"
                placeholder="Search.."
                name="search2"
                onChange={handleSearch}
              />
            </form>
          </div>
          {Object.entries(reportData).map(([category, data]) => (
            <div key={category}>
              <h2 className="category-title">{category}</h2>
              <table className="price-table">
                <thead>
                  <tr>
                    <th className="type-header">Type</th>
                    <th className="selling-price-header">Bought Quantity</th>
                    <th className="buying-price-header">Sold Quantity</th>
                    <th className="buying-price-header">Available Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {data
                    .filter(
                      ({ type }) =>
                        type === search ||
                        (type &&
                          type.toLowerCase().includes(search.toLowerCase()))
                    )
                    .map(({ type, boughtQuantity, soldQuantity }) => (
                      <tr key={`${category}-${type}`}>
                        <td className="buying-price-cell">{type}</td>
                        <td className="buying-price-cell">
                          {boughtQuantity} kg
                        </td>
                        <td className="buying-price-cell">{soldQuantity} kg</td>
                        <td className="buying-price-cell">
                          {boughtQuantity - soldQuantity} kg
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          ))}

          {Object.entries(reportData).length === 0 && (
            <div>
              <p>No Quantities found for {selectedDate.toDateString()}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QunatityModal;
