import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Toast from "./pages/Toast";
import React from "react";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <React.Fragment>
      <Toast />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
      </Routes>
    </React.Fragment>
  );
}
