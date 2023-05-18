import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SystemFooter from "../../../../components/System/ECMO/Footer/SystemFooter";
import Sidebar from "../../../../components/System/ECMO/Sidebar/Sidebar";
import NavBar from "../../../../components/System/ECMO/NavBar/NavBar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function DashboardECMO() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log(selectedDate);
  const [showCalendar, setShowCalendar] = useState(false);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
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

  const [boughtQuantitiesByCategory, setBoughtQuantitiesByCategory] = useState(
    {}
  );

  console.log(boughtQuantitiesByCategory);
  const [soldQuantitiesByCategory, setSoldQuantitiesByCategory] = useState({});

  const [availableQuantitiesByCategory, setAvailableQuantitiesByCategory] =
    useState({});

  console.log(boughtQuantitiesByCategory);
  console.log(soldQuantitiesByCategory);
  console.log(availableQuantitiesByCategory);

  useEffect(() => {
    fetchQuantitiesByCategory();
  }, []);

  const fetchQuantitiesByCategory = async () => {
    try {
      const response = await axios.get("http://localhost:8075/stock/AllStocks");
      const quantities = response.data;
      console.log(quantities);

      quantities.forEach((quantity) => {
        const { Item, Role } = quantity;
        console.log(Item);
        console.log(Role);

        Item.forEach((item) => {
          const { Category, Type, Quantity } = item;

          if (Role === "Seller") {
            if (!boughtQuantitiesByCategory[Category]) {
              boughtQuantitiesByCategory[Category] = {};
            }
            if (!boughtQuantitiesByCategory[Category][Type]) {
              boughtQuantitiesByCategory[Category][Type] = 0;
            }
            boughtQuantitiesByCategory[Category][Type] += Quantity;
          } else if (Role === "Buyer") {
            if (!soldQuantitiesByCategory[Category]) {
              soldQuantitiesByCategory[Category] = {};
            }
            if (!soldQuantitiesByCategory[Category][Type]) {
              soldQuantitiesByCategory[Category][Type] = 0;
            }
            soldQuantitiesByCategory[Category][Type] += Quantity;
          }
        });
      });

      setBoughtQuantitiesByCategory(boughtQuantitiesByCategory);
      setSoldQuantitiesByCategory(soldQuantitiesByCategory);

      // Calculate available quantities
      const availableQuantitiesByCategory = {};

      Object.keys(boughtQuantitiesByCategory).forEach((category) => {
        availableQuantitiesByCategory[category] = {};

        const boughtQuantities = boughtQuantitiesByCategory[category];
        const soldQuantities = soldQuantitiesByCategory[category];

        Object.keys(boughtQuantities).forEach((type) => {
          const boughtQuantity = boughtQuantities[type] || 0;
          const soldQuantity = soldQuantities[type] || 0;

          const availableQuantity = boughtQuantity - soldQuantity;

          availableQuantitiesByCategory[category][type] = availableQuantity;
        });
      });

      setAvailableQuantitiesByCategory(availableQuantitiesByCategory);
    } catch (error) {
      console.error("Error fetching quantities:", error);
    }
  };

  return (
    <div>
      {Object.keys(availableQuantitiesByCategory).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={Object.entries(availableQuantitiesByCategory[category]).map(
                ([type, availableQuantity]) => ({
                  type,
                  boughtQuantity:
                    boughtQuantitiesByCategory[category][type] || 0,
                  soldQuantity: soldQuantitiesByCategory[category][type] || 0,
                  availableQuantity,
                })
              )}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="boughtQuantity"
                stackId="quantity"
                fill="rgba(75, 192, 192, 0.6)"
                name="Bought Quantity"
              />
              <Bar
                dataKey="soldQuantity"
                stackId="quantity"
                fill="rgba(255, 99, 132, 0.6)"
                name="Sold Quantity"
              />
              <Bar
                dataKey="availableQuantity"
                stackId="quantity"
                fill="rgba(54, 162, 235, 0.6)"
                name="Available Quantity"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ))}
    </div>
  );
}

export default DashboardECMO;
