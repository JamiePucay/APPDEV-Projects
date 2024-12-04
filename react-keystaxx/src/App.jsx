import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MissionVision from './components/MissionVision';
import Showcase from './components/Showcase';
import ProductListing from './components/ProductListing';
import CompanyProfile from './components/CompanyProfile';
import DeveloperPage from './components/DeveloperPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/developer" element={<DeveloperPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

