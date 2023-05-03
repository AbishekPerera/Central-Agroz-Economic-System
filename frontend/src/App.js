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

function App() {
  return (
    <div className="App">
      <Routes>
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
        <Route path="/admin/profile" element={<ProfileAdmin />} />
      </Routes>
    </div>
  );
}

export default App;
