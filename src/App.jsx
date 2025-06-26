import React from "react";
import "./components/Nav.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";
import Offers from "./pages/Offers";
import Cart from "./pages/Cart";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

export default function App() {
  const location = useLocation();
  const path = location.pathname.replace("/", "");

  return (
    <div id="root1">
      <Navbar path={path} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/menu/:dish" element={<Menu dishName={path} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}
