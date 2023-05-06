import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import NewsPage from "./pages/NewsPage/NewsPage";

import PriceList from "./pages/System/ECMOPages/PriceList/PriceList";
import PriceTable from "./pages/System/ECMOPages/PriceList/PriceTable";
import StockTable from "./pages/System/ECMOPages/Stock/StockTable";
import QuantityList from "./pages/System/ECMOPages/Stock/QuantityList";
import DashboardECMO from "./pages/System/ECMOPages/DashboardECMO";
import StockBuyerTable from "./pages/System/ECMOPages/Stock/StockBuyerTable ";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/ecmo/priceList" element={<PriceList />} />
        <Route path="/ecmo/priceTable" element={<PriceTable />} />
        <Route path="/ecmo/stockTable" element={<StockTable />} />
        <Route path="/ecmo/quantityList" element={<QuantityList />} />
        <Route path="/ecmo/dashboard" element={<DashboardECMO />} />
        <Route path="/ecmo/stockBuyerTable" element={<StockBuyerTable />} />
      </Routes>
    </div>
  );
}

export default App;
