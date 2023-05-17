import LoginAO from './pages/System/AOPages/LoginAO';
import DashboardAO from './pages/System/AOPages/DashboardAO';
import FarmersPg from './pages/System/AOPages/FarmersPg';
import HarvestAO from './pages/System/AOPages/HarvestAO';
import FertilizersAO from './pages/System/AOPages/FertilizersAO';
import ProfileAO from './pages/System/AOPages/ProfileAO';

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
import PriceList from "./pages/System/ECMOPages/PriceList/PriceList";
import PriceTable from "./pages/System/ECMOPages/PriceList/PriceTable";
import StockTable from "./pages/System/ECMOPages/Stock/StockTable";
import QuantityList from "./pages/System/ECMOPages/Stock/QuantityList";
import DashboardECMO from "./pages/System/ECMOPages/DashboardECMO";
import StockBuyerTable from "./pages/System/ECMOPages/Stock/StockBuyerTable ";
import ProfileAOUpdate from './pages/System/AOPages/ProfileAOUpdate';

function App() {
  return (
    <div className='App'>
      <Routes>
        {/* Agricultual Officer */}
        <Route path='/ao/login' element={<LoginAO />} />
        <Route path='/ao/dashboard' element={<DashboardAO />} />
        <Route path='/ao/register-farmer' element={<FarmersPg />} />
        <Route path='/ao/harvests' element={<HarvestAO />} />
        <Route path='/ao/fertilizers' element={<FertilizersAO />} />
        <Route path='/ao/profile' element={<ProfileAO />} />
        <Route path='/ao/update-profile' element={<ProfileAOUpdate />} />


        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/news" element={<NewsPage />} />

        {/* Admin pages  */}
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

        <Route path="/ecmo/priceList" element={<PriceList />} />
        <Route path="/ecmo/priceTable" element={<PriceTable />} />
        <Route path="/ecmo/stockTable" element={<StockTable />} />
        <Route path="/ecmo/quantityList" element={<QuantityList />} />
        <Route path="/ecmo/dashboard" element={<DashboardECMO />} />
        <Route path="/ecmo/stockBuyerTable" element={<StockBuyerTable />} />

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
