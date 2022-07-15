import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/Home/AboutUs/AboutUs";
import CheckOut from "./pages/Home/CheckOut/CheckOut";
import Contact from "./pages/Home/Contact/Contact";
import FAQ from "./pages/Home/FAQ/FAQ";
import Home from "./pages/Home/Home";
import NotFound from "./pages/Home/NotFound/NotFound";
import ShoppingCart from "./pages/Home/ShoppingCart/ShoppingCart";
import UserLogin from "./pages/Home/UserLogin/UserLogin";
import UserRegister from "./pages/Home/UserRegister/UserRegister";
import OrderPlacedSuccessfully from "./pages/OrderPlacedSuccessfully/OrderPlacedSuccessfully";
import ProductsShopping from "./pages/Home/ProductsShopping/ProductsShoppingMain";

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
          <Route path="products-shopping" element={<ProductsShopping />} />
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
