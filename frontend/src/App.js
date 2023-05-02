import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import NewsPage from "./pages/NewsPage/NewsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </div>
  );
}

export default App;
