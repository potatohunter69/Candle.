import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./style.css";
import Navbar from "./components/Navbar";
import WelcomeSection from "./components/WelcomeSection";
import FeatureSection from "./components/FeatureSection";
import ProductShowcase from "./components/ProductShowcase";
import Footer from "./components/Footer";
import Shop from "./components/shop/shop";
import Preloader from "./components/Loading"; // Import the Loading component
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import LikedItemsPage from "./components/liked.js";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div>
        {/* Render the loading component */}

        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/liked" element={<LikedItemsPage />} />
          <Route
            path="/"
            element={
              <div style={{ display: "block" ,maxWidth: "100%"}}>
                <WelcomeSection />
                <FeatureSection />
                <ProductShowcase />
              </div>
            }
          />
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
