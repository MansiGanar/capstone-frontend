import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products/:sectionName" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
