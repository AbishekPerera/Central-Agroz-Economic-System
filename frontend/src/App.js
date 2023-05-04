import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import NewsPage from './pages/NewsPage/NewsPage';
import LoginAO from './pages/System/AOPages/LoginAO';
import DashboardAO from './pages/System/AOPages/DashboardAO';
import FarmersPg from './pages/System/AOPages/FarmersPg';
import HarvestAO from './pages/System/AOPages/HarvestAO';
import FertilizersAO from './pages/System/AOPages/FertilizersAO';
import ProfileAO from './pages/System/AOPages/ProfileAO';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/news' element={<NewsPage />} />

        <Route path='/ao/login' element={<LoginAO />} />
        <Route path='/ao/dashboard' element={<DashboardAO />} />
        <Route path='/ao/register-farmer' element={<FarmersPg />} />
        <Route path='/ao/harvests' element={<HarvestAO />} />
        <Route path='/ao/fertilizers' element={<FertilizersAO />} />
        <Route path='/ao/profile' element={<ProfileAO />} />
      </Routes>
    </div>
  );
}

export default App;
