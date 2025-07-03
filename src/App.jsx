import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import FlashSale from './Pages/FlashSale'
import TopSelling from "./Pages/TopSelling";
import NewArrivals from "./Pages/NewArrivals";
import Audio from "./Pages/Audio";
import SmartPhones from "./Pages/SmartPhones";
import ProductDetails from "./Pages/ProductDetails";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flash-sale" element={<FlashSale />} />
        <Route path="/top-selling" element={<TopSelling />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/products" element={<ProductDetails />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/smart-phones" element={<SmartPhones />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
