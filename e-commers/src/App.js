import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './style.css';
import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import FeatureSection from './components/FeatureSection';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';
import Shop from './components/shop/shop';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/" element={
            <>
              <WelcomeSection />
              <FeatureSection />
              <ProductShowcase />
            </>
          } />
          {/* Redirect or navigate example, if needed:
            <Route path="/old-path" element={<Navigate replace to="/new-path" />} />
          */}
          {/* Add more routes here if you have other pages */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
