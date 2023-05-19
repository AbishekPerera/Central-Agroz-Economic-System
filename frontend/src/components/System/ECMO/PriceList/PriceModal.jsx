import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Styles/PriceList.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PriceModal = ({ centerName }) => {
  const [prices, setPrices] = useState([]);
  console.log(prices);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");
  const [search, setSearch] = useState("");

  //format date into yyyy-mm-dd format
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

  //get prices by date
  const getPricesByDate = async (date) => {
    try {
      const formattedDate = formatDate(date);
      setFormattedDate(formattedDate);
      console.log(formattedDate);
      const { data } = await axios
        .get(`http://localhost:8075/priceList/allPrices`)
        .then((res) => {
          const data = res.data;
          console.log(data);

          setPrices(data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  //handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  //Set Prevous Day
  const handlePrevDay = () => {
    const prevDay = new Date(selectedDate);
    //current date - 1
    prevDay.setDate(prevDay.getDate() - 1);
    setSelectedDate(prevDay);
  };

  //Set Next Day
  const handleNextDay = () => {
    const nextDay = new Date(selectedDate);
    //current date + 1
    nextDay.setDate(nextDay.getDate() + 1);
    setSelectedDate(nextDay);
  };

  useEffect(() => {
    getPricesByDate(selectedDate);
  }, [selectedDate]);

  //Get Prices according to category & type
  const groupPricesByCategory = (data) => {
    //check data is an array
    if (!Array.isArray(data)) {
      console.log("Data is not an array");
      return {};
    }

    // Reduce the data array to group prices by category
    return data.reduce((groups, price) => {
      const category = price?.Category;
      if (category) {
        // Create an array for the category if it doesn't exist in the groups object
        groups[category] = groups[category] || [];
        // Add the price to the corresponding category array
        groups[category].push(price);
      }
      console.log(groups);
      return groups;
    }, {});
  };

  const categoryWisePrices = groupPricesByCategory(prices);

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

          {Object.keys(categoryWisePrices).length > 0 ? (
            Object.keys(categoryWisePrices).map((category) => (
              <div key={category}>
                <h2 className="category-title">{category}</h2>
                <table className="price-table">
                  <thead>
                    <tr>
                      <th className="type-header">Type</th>
                      <th className="type-header">Image</th>
                      <th className="type-header">Buying Price</th>
                      <th className="type-header">Selling Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categoryWisePrices[category]
                      .filter(
                        (price) =>
                          price.CenterName === centerName &&
                          (price.Type === search ||
                            (price.Type &&
                              price.Type.toLowerCase().includes(
                                search.toLowerCase()
                              )))
                      )
                      .map((price) => (
                        <tr key={price._id}>
                          <td className="selling-price-cell">{price.Type}</td>
                          <td className="selling-price-cell">
                            <img
                              src={price.Image}
                              style={{ width: "50px", height: "50px" }}
                            />
                          </td>
                          {price &&
                            price.Price.filter((newPrice) => {
                              return newPrice.Date === formattedDate;
                            }).map((newPrice) => (
                              <>
                                <td className="buying-price-cell">
                                  Rs.{newPrice.BuyingPrice}
                                </td>
                                <td
                                  className="selling-price-cell"
                                  key={newPrice._id}
                                >
                                  Rs. {newPrice.SellingPrice}
                                </td>
                              </>
                            ))}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            ))
          ) : (
            <div>
              <p>No prices found for {selectedDate.toDateString()}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PriceModal;
