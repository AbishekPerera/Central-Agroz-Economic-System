import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../../components/System/ECMO/Sidebar/Sidebar";
import NavBar from "../../../components/System/ECMO/NavBar/NavBar";
import SystemFooter from "../../../components/System/ECMO/Footer/SystemFooter";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DashboardECMO = () => {
  // Get data from local storage as a string
  const ecoInfo = localStorage.getItem("ecmoInfo");
  // Set data to local storage as a JSON object
  const ecoInfo1 = JSON.parse(ecoInfo);

  const centerName = ecoInfo1["ecoCenter"]["ecoCenterName"] || "Kandy";

  const [stocks, setStocks] = useState([]);
  const [reportData, setReportData] = useState([]);

  const [availableQuantitiesByCategory, setAvailableQuantitiesByCategory] =
    useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      const response = await axios.get("http://localhost:8075/stock/AllStocks");
      setStocks(response.data);
    };

    fetchStocks();
  }, []);

  const fetchQuantitiesAndReportData = async () => {
    try {
      // Initialize empty objects to store updated quantities and report data
      const updatedAvailableQuantitiesByCategory = {};
      const updatedReportData = {};

      // Iterate over each stock item
      stocks.forEach(({ Item, Role, Date, CenterName }) => {
        // Check if the CenterName matches the provided centerName
        if (CenterName !== centerName) {
          return;
        }

        // Iterate over each item within the stock
        Item.forEach(({ Category, Type, Quantity }) => {
          // Create a unique key based on Category and Type
          const key = `${Category}-${Type}`;

          // Retrieve or create categoryData object for the Category
          const categoryData = updatedAvailableQuantitiesByCategory[
            Category
          ] || {
            category: Category,
            boughtQuantity: 0,
            soldQuantity: 0,
            availableQuantity: 0,
          };

          // Update the quantities based on the Role
          if (Role === "Seller") {
            categoryData.boughtQuantity += Quantity;
            categoryData.availableQuantity += Quantity;
          } else if (Role === "Buyer") {
            categoryData.soldQuantity += Quantity;
            categoryData.availableQuantity -= Quantity;
          }

          // Update the categoryData in the updatedAvailableQuantitiesByCategory object
          updatedAvailableQuantitiesByCategory[Category] = categoryData;

          // Check if the key exists in the updatedReportData object, if not, create the entry
          if (!updatedReportData[key]) {
            updatedReportData[key] = {
              category: Category,
              date: Date,
              boughtQuantity: 0,
              soldQuantity: 0,
              availableQuantity: 0,
            };
          }

          // Update the report data based on the categoryData quantities
          updatedReportData[key].boughtQuantity += categoryData.boughtQuantity;
          updatedReportData[key].soldQuantity += categoryData.soldQuantity;
          updatedReportData[key].availableQuantity +=
            categoryData.availableQuantity;
        });
      });

      // Convert the updatedAvailableQuantitiesByCategory and updatedReportData objects to arrays
      const resultQuantities = Object.values(
        updatedAvailableQuantitiesByCategory
      );
      const resultReportData = Object.values(updatedReportData);

      // Set the state with the updated quantities and report data
      setAvailableQuantitiesByCategory(resultQuantities);
      setReportData(resultReportData);
    } catch (error) {
      console.error("Error fetching quantities:", error);
    }
  };

  useEffect(() => {
    // Call the fetchQuantitiesAndReportData function when stocks dependency changes
    fetchQuantitiesAndReportData();
  }, [stocks]);

  return (
    <div className="mainContainer">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="contentContainer">
        <div class="banner">
          <div class="container">
            <div
              class="row "
              style={{
                height: "250px",
                background:
                  "URL(https://media.gq-magazine.co.uk/photos/5e2987428f4e9e0008b5fdf0/16:9/pass/20200123-Vegetables.jpg)",
                backgroundSize: "cover",
              }}
            >
              <div className="systemNavBar">
                <NavBar />
              </div>
            </div>

            <div
              className="row"
              style={{ backgroundColor: "black", alignContent: "center" }}
            >
              <h1 style={{ textAlign: "center", color: "green" }}>
                Welcome to {centerName}
              </h1>
            </div>

            <div className="row" style={{ alignContent: "center" }}>
              <h1 style={{ textAlign: "center", color: "green" }}>
                Yearly Stock Statics
              </h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: "0px",
            }}
          >
            <ul
              class="nav nav-pills nav-justified"
              style={{
                padding: "20px",
                marginLeft: "20px",
              }}
            >
              {availableQuantitiesByCategory.map(
                ({
                  category,
                  boughtQuantity,
                  soldQuantity,
                  availableQuantity,
                }) => (
                  <li
                    key={category}
                    style={{
                      backgroundColor: "green",
                      padding: "20px",
                      margin: "20px",
                      align: "left",
                    }}
                  >
                    <h1 style={{ textAlign: "center", color: "black" }}>
                      {category}
                    </h1>
                    <div style={{ color: "black" }}>
                      <strong>Bought Quantity:</strong> {boughtQuantity} kg
                    </div>
                    <div style={{ color: "black" }}>
                      <strong>Sold Quantity:</strong> {soldQuantity} kg
                    </div>
                    <div style={{ color: "black" }}>
                      <strong>Remaining Quantity:</strong> {availableQuantity}kg
                    </div>
                    <hr />
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="row">
            <div className="calendar">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={reportData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="boughtQuantity"
                    stroke="#8884d8"
                    name="Bought Quantity"
                  />
                  <Line
                    type="monotone"
                    dataKey="soldQuantity"
                    stroke="#82ca9d"
                    name="Sold Quantity"
                  />
                  <Line
                    type="monotone"
                    dataKey="availableQuantity"
                    stroke="red"
                    name="Remaining Quantity"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <SystemFooter />
      </div>
    </div>
  );
};

export default DashboardECMO;
