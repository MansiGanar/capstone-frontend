import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/Home/AboutUs/AboutUs";
import Contact from "./pages/Home/Contact/Contact";
import Home from "./pages/Home/Home";
import UserLogin from "./pages/Home/UserLogin/UserLogin";
import OrderPlacedSuccessfully from "./pages/OrderPlacedSuccessfully/OrderPlacedSuccessfully";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/order-placed-successfully"
            element={<OrderPlacedSuccessfully />}
          />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
