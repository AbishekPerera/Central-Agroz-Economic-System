import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import PriceModal from "../../../components/System/ECMO/PriceList/PriceModal";
import QuantityModal from "../../../components/System/ECMO/Stock/QuantityModal";

const ECMOUI = () => {
  const { centerName } = useParams();
  const [activeComponent, setActiveComponent] = useState("PriceModal");

  const handleSetActiveComponent = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <>
      <Header />

      <div
        className="banner"
        style={{
          width: "100%",
          height: "250px",
          background:
            "URL(https://media.gq-magazine.co.uk/photos/5e2987428f4e9e0008b5fdf0/16:9/pass/20200123-Vegetables.jpg)",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="container">
        <div className="row" style={{ marginLeft: "50px" }}>
          <div className="col-md-12">
            <h1 style={{ textAlign: "center", color: "green", margin: "50px" }}>
              Welcome to {centerName}
            </h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ul
                className="nav nav-pills nav-justified"
                style={{ margin: "50px" }}
              >
                <li
                  className={`${
                    activeComponent === "PriceModal" ? "active" : ""
                  }`}
                  style={{
                    backgroundColor: "#0fd561",
                    padding: "20px",
                    margin: "20px",
                    align: "left",
                  }}
                >
                  <button
                    onClick={() => handleSetActiveComponent("PriceModal")}
                    style={{
                      backgroundColor: "white",
                      color: "green",
                    }}
                  >
                    Daily PriceList
                  </button>
                </li>
                <li
                  className={`${
                    activeComponent === "QuantityModal" ? "active" : ""
                  }`}
                  style={{
                    backgroundColor: "#0fd561",
                    padding: "20px",
                    margin: "20px",
                    align: "right",
                  }}
                >
                  <button
                    onClick={() => handleSetActiveComponent("QuantityModal")}
                    style={{
                      backgroundColor: "white",
                      color: "green",
                    }}
                  >
                    Daily Quantities
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {activeComponent === "PriceModal" && (
          <PriceModal id="Pricelist" centerName={centerName} />
        )}
        {activeComponent === "QuantityModal" && (
          <QuantityModal id="Quantitylist" centerName={centerName} />
        )}
      </div>
    </>
  );
};

export default ECMOUI;
