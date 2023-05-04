import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import FarmerDashboard from "./pages/System/FarmerPages/FarmerDashboard";
import FarmerLogin from "./pages/System/FarmerPages/FarmerLogin";
import FarmerProfile from "./pages/System/FarmerPages/FarmerProfile";
import FarmerPublishProducts from "./pages/System/FarmerPages/FarmerPublishProducts";
import FarmerViewAll from "./pages/System/FarmerPages/FarmerViewAll";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/news" element={<NewsPage />} />

        {/* Farmer Routes */}
        <Route path="/system/farmer/dashboard" element={<FarmerDashboard />} />
        <Route path="/system/farmer/login" element={<FarmerLogin />} />
        <Route path="/system/farmer/profile" element={<FarmerProfile />} />
        <Route path="/system/farmer/publishproducts" element={<FarmerPublishProducts />} />
        <Route path="/system/farmer/viewall" element={<FarmerViewAll/>}/>
      </Routes>
    </div>
  );
}

export default App;
