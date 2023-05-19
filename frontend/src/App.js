import LoginAO from "./pages/System/AOPages/LoginAO";
import DashboardAO from "./pages/System/AOPages/DashboardAO";
import FarmersPg from "./pages/System/AOPages/FarmersPg";
import HarvestAO from "./pages/System/AOPages/HarvestAO";
import FertilizersAO from "./pages/System/AOPages/FertilizersAO";
import ProfileAO from "./pages/System/AOPages/ProfileAO";

import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import DashboardAdmin from "./pages/System/AdminPages/DashboardAdmin";
import EchoCentersAdmin from "./pages/System/AdminPages/EchoCentersAdmin";
import AgriOfficerAdmin from "./pages/System/AdminPages/AgriOfficerAdmin";
import ProfileAdmin from "./pages/System/AdminPages/ProfileAdmin";
import EchoCenterUpdateAdmin from "./pages/System/AdminPages/SubPages/EchoCenterUpdateAdmin";
import AddEchoCenterAdmin from "./pages/System/AdminPages/SubPages/AddEchoCenterAdmin";
import AgriOfficerUpdateAdmin from "./pages/System/AdminPages/SubPages/AgriOfficerUpdateAdmin";
import AddAgriOfficerAdmin from "./pages/System/AdminPages/SubPages/AddAgriOfficerAdmin";
import FarmerDashboard from "./pages/System/FarmerPages/FarmerDashboard";
import FarmerLogin from "./pages/System/FarmerPages/FarmerLogin";
import FarmerProfile from "./pages/System/FarmerPages/FarmerProfile";
import FarmerPublishProducts from "./pages/System/FarmerPages/FarmerPublishProducts";
import FarmerViewAll from "./pages/System/FarmerPages/FarmerViewAll";
import ProfileAOUpdate from "./pages/System/AOPages/ProfileAOUpdate";
import FarmerStatistics from "./pages/System/FarmerPages/FarmerStatistics";
import FarmerPage from "./pages/FarmerPage/FarmerPage";
import AdminLogin from "./pages/System/AdminPages/AdminLogin";
import FarmerUpdateProduct from "./pages/System/FarmerPages/FarmerUpdateProduct";
import CentersPage from "./pages/CentersPage/CentersPage";

import PriceList from "./pages/System/ECMOPages/PriceList/PriceList";
import PriceTable from "./pages/System/ECMOPages/PriceList/PriceTable";
import QuantityList from "./pages/System/ECMOPages/Stock/QuantityList";
import StockBuyerTable from "./pages/System/ECMOPages/Stock/StockBuyerTable ";
import StockSellerTable from "./pages/System/ECMOPages/Stock/StockSellerTable";
import DashboardECMO from "./pages/System/ECMOPages/DashboardECMO";
import ECMOLoginPage from "./pages/System/ECMOPages/ECMOLoginPage";
import ECMOUI from "./pages/System/ECMOPages/ECMOUI";



function App() {
  return (
    <div className="App">
      <Routes>
        {/* Agricultual Officer */}
        <Route path="/ao/login" element={<LoginAO />} />
        <Route path="/ao/dashboard" element={<DashboardAO />} />
        <Route path="/ao/register-farmer" element={<FarmersPg />} />
        <Route path="/ao/harvests" element={<HarvestAO />} />
        <Route path="/ao/fertilizers" element={<FertilizersAO />} />
        <Route path="/ao/profile" element={<ProfileAO />} />
        <Route path="/ao/update-profile" element={<ProfileAOUpdate />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/findfarmers" element={<FarmerPage />} />
        <Route path="/findcenter" element={<CentersPage />} />

        {/* Admin pages  */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<DashboardAdmin />} />
        <Route path="/admin/echoCenters" element={<EchoCentersAdmin />} />
        <Route path="/admin/addchoCenters" element={<AddEchoCenterAdmin />} />
        <Route
          path="/admin/echoCenters/:id"
          element={<EchoCenterUpdateAdmin />}
        />
        <Route path="/admin/agriofficers" element={<AgriOfficerAdmin />} />
        <Route path="/admin/addagrioffer" element={<AddAgriOfficerAdmin />} />
        <Route
          path="/admin/agriofficers/:id"
          element={<AgriOfficerUpdateAdmin />}
        />
        <Route path="/admin/profile" element={<ProfileAdmin />} />

        {/* Economic Center Routes */}
        <Route path="/ecmo/priceList" element={<PriceList />} />
        <Route path="/ecmo/priceTable" element={<PriceTable />} />
        <Route path="/ecmo/quantityList" element={<QuantityList />} />
        <Route path="/ecmo/stockSellersTable" element={<StockSellerTable />} />
        <Route path="/ecmo/stockBuyersTable" element={<StockBuyerTable />} />
        <Route path="/ecmo/dashboard" element={<DashboardECMO />} />
        <Route path="/ecmo/loginPage" element={<ECMOLoginPage />} />
        <Route path="/ecmo/ecmoUI/:centerName" element={<ECMOUI />} />

        {/* Farmer Routes */}
        <Route path="/system/farmer/dashboard" element={<FarmerDashboard />} />
        <Route path="/system/farmer/login" element={<FarmerLogin />} />
        <Route path="/system/farmer/profile" element={<FarmerProfile />} />
        <Route
          path="/system/farmer/publishproducts"
          element={<FarmerPublishProducts />}
        />
        <Route path="/system/farmer/viewall" element={<FarmerViewAll />} />
        <Route
          path="/system/farmer/statistics"
          element={<FarmerStatistics />}
        />
        <Route
          path="/system/farmer/publishproducts"
          element={<FarmerPublishProducts />}
        />
        <Route
          path="/system/farmer/viewall/:cropId"
          element={<FarmerUpdateProduct />}
        />
      </Routes>
    </div>
  );
}

export default App;
