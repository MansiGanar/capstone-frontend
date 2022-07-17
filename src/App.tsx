import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUs/AboutUs";
import CheckOut from "./pages/CheckOut/CheckOut";
import Contact from "./pages/Contact/Contact";
import FAQ from "./pages/FAQ/FAQ";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import UserLogin from "./pages/UserLogin/UserLogin";
import UserRegister from "./pages/UserRegister/UserRegister";
import OrderPlacedSuccessfully from "./pages/OrderPlacedSuccessfully/OrderPlacedSuccessfully";
import Products from "./pages/Products/Products";

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
          <Route path="/register" element={<UserRegister />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
